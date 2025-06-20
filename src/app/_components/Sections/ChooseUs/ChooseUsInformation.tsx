import React from "react";
import choose from '../../../../../public/axtra/coose-02.webp'
import Image from "next/image";

export default function ChooseUsInformation() {
  return (
    <section className="container w-full h-screen bg-[#f6f6f5] flex items-center justify-center py-10">
      <div className="lg:flex w-full">
        <div className="lg:w-1/2 px-10">
          <p className="uppercase text-xl font-medium">
            Why <br /> Choose Us
          </p>

          <div className="flex justify-center flex-wrap mt-20">
            <div className="basis-1/2 text-center mb-28">
              <h2 className="text-7xl font-medium text-gray-800">25K</h2>
              <p className="text-lg text-gray-600">
                Project <br /> Completed
              </p>
            </div>
            <div className="basis-1/2 text-center mb-28">
              <h2 className="text-7xl font-medium text-gray-800">8K</h2>
              <p className="text-lg text-gray-600">
                Happy <br /> Customer
              </p>
            </div>
            <div className="basis-1/2 text-center mb-10">
              <h2 className="text-7xl font-medium text-gray-800">15K</h2>
              <p className="text-lg text-gray-600">
                Project <br /> Completed
              </p>
            </div>
            <div className="basis-1/2 text-center mb-10">
              <h2 className="text-7xl font-medium text-gray-800">98K</h2>
              <p className="text-lg text-gray-600">
                Project <br /> Completed
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image src={choose} width={500} height={500} alt="Choose Us Image"/>
        </div>
      </div>
    </section>
  );
}
