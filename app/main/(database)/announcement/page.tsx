import Wrapper from '@/components/Wrapper'
import { Button } from '@nextui-org/button';
import React from 'react'

export default function Announcement() {
  return (
    <Wrapper className="bg-white">
      <div className="flex w-full h-[500px] justify-center font-bebas">
        <div className="flex flex-col place-items-center gap-4">
          {[
            {
              label: "Slide",
              placeholder: "Key/UID",
            },
            {
              label: "Title",
              placeholder: "Slider1",
            },
            {
              label: "Url",
              placeholder: "https://example.com/",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-[150px_auto] lg:flex-row items-center justify-center gap-0 lg:gap-4"
            >
              <div className="flex">
                <label className="text-blue-400 text-2xl lg:text-4xl">
                  {item.label}:
                </label>
              </div>
              <div className="flex">
                <input
                  className="w-[240px] sm:w-[400px] lg:w-[540px] placeholder:text-xl text-xl px-3 py-2 border-2 border-gray shadow-md outline-none rounded-lg font-montserrat"
                  type="password"
                  placeholder={item.placeholder}
                />
              </div>
            </div>
          ))}
          <Button
            className="bg-blue-400 text-white text-3xl w-[250px] md:w-[300px] lg:w-[320px] mt-14"
            size="lg"
          >
            Save
          </Button>
        </div>
      </div>
    </Wrapper>
  );
}
