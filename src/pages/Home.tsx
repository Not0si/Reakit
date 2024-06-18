import useLocale from '@hooks/useLocale/useLocale'

const Home = () => {
  const { translator, toggler } = useLocale()

  return (
    <div>
      <button
        onClick={() => {
          toggler('en')
        }}
      >
        {/* EN */}
        {translator('4')}
      </button>
      <button
        onClick={() => {
          toggler('fr')
        }}
      >
        {/* FR */}
        {translator('5')}
      </button>
      <button
        onClick={() => {
          toggler('ar')
        }}
      >
        {/* AR */}
        {translator('6')}
      </button>
    </div>
  )
}

export default Home
