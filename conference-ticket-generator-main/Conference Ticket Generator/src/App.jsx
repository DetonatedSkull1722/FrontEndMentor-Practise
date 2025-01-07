import { Header,
  Description,
  Form} from "./Sections"
import patternCircle from './assets/images/pattern-circle.svg'
import patternLines from './assets/images/pattern-lines.svg'
import patternSquigglyTop from './assets/images/pattern-squiggly-line-top.svg'
import patternSquigglyBottom from './assets/images/pattern-squiggly-line-bottom.svg'

export default function App() {
  return (
    <main className="relative flex flex-col items-center h-full">
      <img className="absolute -z-10 top-1/2 w-24 left-2/3 md:w-36" src={patternCircle} alt="" />
      <img className="absolute -z-10 h-1/2 w-full object-cover" src={patternLines} alt="" />
      <img className="absolute -z-10 w-3/4 md:w-7/12 bottom-0 left-0" src={patternSquigglyBottom} alt="" />
      <img className="absolute -z-10 w-5/12 top-10 right-0" src={patternSquigglyTop} alt="" />

      <section className="w-full flex item-center justify-center mt-5">
        <Header />
      </section>
      <section classame="w-full flex flex-col justify-center item-center">
        <Description />
      </section>
      <section>
        <Form />
      </section>
    </main>
  )
}