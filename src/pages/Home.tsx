// import useLocale from '@hooks/useLocale/useLocale'
// import { Tab, Tabs } from '@ui/tabs/Tabs'
// import LogBox from '@ui/logBox/LogBox'
import type { ReactElement } from 'react'

const Home = (): ReactElement => {
  // const { translator, setLocale } = useLocale()

  return (
    <section style={{ padding: '10px 20px' }}>
      <p>
        {' '}
        Here you can find activities to practise your reading skills. Reading
        will help you to improve your understanding of the language and build
        your vocabulary. The self-study lessons in this section are written and
        organised by English level based on the Common European Framework of
        Reference for languages (CEFR). There are different types of texts and
        interactive exercises that practise the reading skills you need to do
        well in your studies, to get ahead at work and to communicate in English
        in your free time.
      </p>
      <p dir="rtl">
        اربك تكست هو اول موقع يسمح لزواره الكرام بتحويل الكتابة العربي الى كتابة
        مفهومة من قبل اغلب برامج التصميم مثل الفوتوشوب و الافترايفكتس و البريمير
        و الافد ميدا كومبوزر و السموك و برامج اخرى كثيرة
      </p>
    </section>
  )
}

export default Home
