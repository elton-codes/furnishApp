import { aboutBg } from "../../../assets"
import React from "react"
import { Play } from "lucide-react";

const About = () => {
  return (
    // <div className="flex">
    //   <div className="h-screen object-cover">
    //     <img src={aboutBg} alt="About background" className="" />
    //   </div>
    //   <div className="flex">
    //     <span>ABOUT FURNISH</span>
    //     <h3>Quality Makes the Belief for Customers</h3>
    //     <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    //   </div>

    //   <div>
    //     <button>Watch Video</button>
    //   </div>
    // </div>

    <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white">
      {/* Left Section for the Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img src="/path/to/your/image.jpg" alt="Quality Makes the Belief for Customers" className="max-w-full h-auto rounded-md" />
      </div>

      {/* Right Section for the Text Content */}
      <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
        <h4 className="text-sm font-medium text-gray-500 uppercase mb-2">About Furnish</h4>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Makes the Belief for Customers</h2>
        <p className="text-lg text-gray-600 mb-6">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
        </p>
        <div className="flex items-center justify-center md:justify-start">
          <button className="flex items-center text-lg font-medium text-orange-600">
            <Play className="w-8 h-8 mr-2" />
            Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default About