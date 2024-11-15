import BackButton from "@/components/buttons/BackButton";
import Wrapper from "@/components/Wrapper";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import verifyEmailImg from "@/public/verifyemail.jpg"

const AdminVerifyEmail = () => {
  return (
    <Wrapper>
      <div className="flex flex-col justify-center h-[700px] sm:h-[750px] lg:h-[700px] w-full sm:w-[400px] md:w-[500px] lg:w-[1100px] bg-white rounded-md p-4 mx-4 relative">
        <BackButton />
        <div className="flex flex-col w-full items-center font-bebas h-full">
          <h1 className="text-4xl lg:text-6xl text-blue-400 mt-12 text-center">
            Create Admin Account
          </h1>
          <h1 className="text-xl lg:text-3xl text-blue-400 my-6 text-center font-semibold font-montserrat">
            Verify your Email Address
          </h1>

          <div className="flex flex-col lg:flex-row w-full h-full">
            <div className="flex w-full h-2/5 lg:w-2/5 lg:h-full items-center justify-center">
              <div className="w-64 h-40 md:w-80 md:h-44 lg:w-96 lg:h-80 relative">
                <Image src={verifyEmailImg} alt="Verify Email Logo" fill />
              </div>
            </div>

            <div className="flex w-full h-3/5 lg:w-3/5 lg:h-full justify-center items-center">
              <div className="w-full h-full sm:w-[600px] lg:h-[420px] relative p-4 flex flex-col justify-center lg:justify-start">
                <p className="text-sm sm:text-base lg:text-xl text-center xl:text-justify text-blue-400 font-montserrat">
                  An email has been sent to your provided email address. If you
                  have not received an email after a few minutes, click the
                  resend the verification email button.
                </p>
                <div className="flex flex-col mt-6 lg:mt-16 gap-4 items-center">
                  {[
                    {
                      label: "Resend Verification Email",
                    },
                    {
                      label: "Next",
                    },
                  ].map((item, index) => (
                    <div key={index}>
                      <Button
                        className="bg-blue-400 text-white text-xl lg:text-3xl w-56 lg:w-[320px]"
                        size="lg"
                      >
                        {item.label}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AdminVerifyEmail;
