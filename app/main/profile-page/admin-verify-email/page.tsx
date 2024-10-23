import BackButton from "@/components/buttons/BackButton";
import { Button } from "@nextui-org/button";
import React from "react";

const AdminVerifyEmail = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-blue-100">
      <div className="flex relative justify-center bg-white w-[75vw] lg:w-[60vw] h-[80vh] xl:h-[70vh] rounded-md">
        <BackButton />

        <div className="flex flex-col w-full xl:w-[55vw] items-center gap-2 font-bebas">
          <h1 className="text-4xl xl:text-6xl text-blue-400 mt-12 text-center">
            Create Admin Account
          </h1>
          <h1 className="text-xl xl:text-3xl text-blue-400 my-6 text-center font-semibold font-montserrat">
            Verify your Email Address
          </h1>

          <div className="flex flex-col xl:flex-row w-full h-full">
            <div className="flex w-full h-1/3 xl:h-full justify-center xl:mt-12">
              <img
                src="/verifyemail.jpg"
                alt="Verify Email Logo"
                className="w-72 h-56 sm:w-96 xl:w-full xl:h-96"
              />
            </div>

            <div className="flex flex-col w-full h-full items-center justify-center xl:justify-normal">
              <p className="text-xl my-6 sm:mx-10 text-center xl:text-justify 2xl:mt-12 text-blue-400 font-montserrat">
                An email has been sent to your provided email address. If you
                have not received an email after a few minutes, click the resend
                the verification email button.
              </p>

              <div className="flex flex-col xl:mt-12 gap-4 items-center">
                <input
                  type="text"
                  className="rounded-md border-2 border-gray shadow-md outline-none p-3 w-[320px] xl:w-[380px] font-montserrat"
                  placeholder="Input Verification Code Here"
                />
                <Button
                  className="bg-blue-400 text-white text-3xl w-[320px]"
                  size="lg"
                >
                  Resend Verification Email
                </Button>
                <Button
                  className="bg-blue-400 text-white text-3xl w-[320px]"
                  size="lg"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminVerifyEmail;
