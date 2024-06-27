import useTheme from '@hooks/useTheme/useTheme'
import Button from '@ui/button/Button'

const PlayGround = () => {
  const { setTheme } = useTheme()
  return (
    <div className="prototype blurBg">
      <Button
        onClick={() => {
          setTheme('light')
        }}
      >
        Light
      </Button>
      <Button
        onClick={() => {
          setTheme('dark')
        }}
      >
        Dark
      </Button>
      <Button
        onClick={() => {
          setTheme('auto')
        }}
      >
        System
      </Button>
    </div>
  )
}

export default PlayGround
