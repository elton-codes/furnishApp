import { HeartHandshake } from "lucide-react"
import K from "../../../constants"
import React from "react"

const Services = () => {
  return (
    <div className="grid grid-cols-4">
      {
        K.SERVICES.map(
          (service, index) => {
            const { Icon, bgColor, iconBg, title, description } = service;

            return (
              <div key={index} className="p-[40px] m-[8px]" style={{ backgroundColor: service.bgColor }}>
                <div className="h-16 w-16 p-4 mb-3 inline-flex justify-center items-center rounded-full" style={{ backgroundColor: service.iconBg }}>
                  {React.cloneElement(Icon,{className: "w-10 h-10 mb-2"})}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-lg text-gray-500 pr-6">{service.description}</p>
              </div>
            )
          }
        )
      }
    </div>
  )
}

export default Services