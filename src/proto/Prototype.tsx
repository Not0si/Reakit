import useTheme from '@hooks/useTheme/useTheme'
import RawCheckBox from '@ui/rawCheckBox/RawCheckBox'

const Prototype = () => {
  const { toggler } = useTheme()
  return (
    <div className="prototype">
      <RawCheckBox />
      <button
        onClick={() => {
          toggler('light')
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          toggler('dark')
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          toggler('auto')
        }}
      >
        System
      </button>
    </div>
  )
}

export default Prototype
