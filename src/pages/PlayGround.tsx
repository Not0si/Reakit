import useTheme from '@hooks/useTheme/useTheme'
import GrainyGradient from '@pattern/grainyGradient/GrainyGradient'

const PlayGround = () => {
  const { setTheme } = useTheme()
  return (
    <div className="prototype">
      <GrainyGradient />
      <button
        onClick={() => {
          setTheme('light')
        }}
      >
        Light
      </button>
      <button
        onClick={() => {
          setTheme('dark')
        }}
      >
        Dark
      </button>
      <button
        onClick={() => {
          setTheme('auto')
        }}
      >
        System
      </button>
    </div>
  )
}

export default PlayGround
