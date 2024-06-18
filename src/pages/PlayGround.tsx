import useTheme from '@hooks/useTheme/useTheme'
import GrainyGradient from '@pattern/grainyGradient/GrainyGradient'

const PlayGround = () => {
  const { toggler } = useTheme()
  return (
    <div className="prototype">
      <GrainyGradient />
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

export default PlayGround
