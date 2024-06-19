import useLocale from '@hooks/useLocale/useLocale'
import { Tab, Tabs } from '@ui/tabs/Tabs'
import Textarea from '@ui/textarea/Textarea'

const Home = () => {
  const { translator, setLocale } = useLocale()

  return (
    <section>
      <div>
        <button
          onClick={() => {
            setLocale('en')
          }}
        >
          {translator('4')}
        </button>
        <button
          onClick={() => {
            setLocale('fr')
          }}
        >
          {translator('5')}
        </button>
        <button
          onClick={() => {
            setLocale('ar')
          }}
        >
          {translator('6')}
        </button>
      </div>
      <Tabs defaultActiveTab={1}>
        <Tab label="Tab 1">Hello Page</Tab>
        <Tab label="Tab 2">Hello 2 Page</Tab>
        <Tab label="Tab 3">Hello 3 Page</Tab>
      </Tabs>
      <Textarea />
    </section>
  )
}

export default Home
