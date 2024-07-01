
import { heroBg } from "../../../assets"
const Hero = () => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-lightBlue place-content-center " >
        <div className="mx-auto w-fit flex flex-col items-start gap-y-4 p-20">
        <div className="flex flex-col text-5xl">
          <span className="font-light">Best Design Of </span>
          <span className="font-bold">Furniture Collections</span>
        </div>

        <p className="w-80">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg text-deepBlue uppercase font-semibold">Discover</button>

        </div>
      </div>
      <div className="w-1/2 h-screen ">
        <img src={heroBg} alt="Hero background" className="object-cover w-full h-full "/>
      </div>
    </div>
  )
}

export default Hero