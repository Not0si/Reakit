import type { FC, ReactElement, ReactNode } from 'react'
import { Children, Fragment, useState } from 'react'

interface ITabsProps {
  children: ReactElement
  defaultActiveTab: number
}

const Tabs = ({ defaultActiveTab, children }: ITabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || 0)

  return (
    <main>
      <nav>
        {Children.map(children, (child, index) => {
          if (child.props.type === 'link') {
            return (
              <a key={index} href={child.props.href}>
                {child.props.label}
              </a>
            )
          }

          return (
            <button
              key={index}
              data-is-active={index === activeTab}
              onClick={() => setActiveTab(index)}
            >
              {child.props.label}
            </button>
          )
        })}
      </nav>
      <section>
        {Children.map(children, (child, index) => (
          <Fragment key={index}>{child}</Fragment>
        ))}
      </section>
    </main>
  )
}

type ITabProps =
  | {
      label: string
      type: 'tab'
      children: ReactNode
    }
  | {
      label: string
      type: 'link'
      href: string
      children: ReactNode
    }

const Tab: FC<ITabProps> = ({ children }) => {
  return <>{children}</>
}

export { Tabs, Tab }
