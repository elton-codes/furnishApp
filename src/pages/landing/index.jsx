import About from "./components/about"
import Blog from "./components/blog"
import Collection from "./components/collection"
import Hero from "./components/hero"
import Production from "./components/production"
import Services from "./components/services"
import Statistics from "./components/statistics"
import Testimonial from "./components/testimonial"

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Collection />
      <Statistics />
      <Testimonial />
      <Production />
      <Blog />
    </div>
  )
}

export default LandingPage