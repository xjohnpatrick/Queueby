import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

import { Button } from "@nextui-org/button";

import { dashboardRows } from "@/data/users/rows";

import { bebasNeue, montserrat } from "@/app/fonts/fonts";

import { RadioGroup, Radio } from "@nextui-org/radio";

import { useEffect, useState } from "react";

import { DatePicker } from "@nextui-org/date-picker";

import { Input } from "@nextui-org/input";

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
}

export default function DashboardModal({
  isOpen,
  onClose,
  userId,
}: DashboardModalProps) {
  const selectedUser = dashboardRows.find((user) => user.userId === userId);

  const [userStatus, setUserStatus] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setUserStatus(selectedUser.status);
    }
  }, [selectedUser]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserStatus(e.target.value);
    if (selectedUser) {
      selectedUser.status = e.target.value;
    }
  };

  const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState("lg");

    useEffect(() => {
      const updateSize = () => {
        if (window.innerWidth <= 768) {
          setBreakpoint("sm");
        } else if (window.innerWidth <= 1024) {
          setBreakpoint("md");
        } else {
          setBreakpoint("lg");
        }
      };

      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }, []);

    return breakpoint;
  };

  const breakpoint = useBreakpoint();

  // Determine the size of the RadioGroup based on the screen size
  const getSize = () => {
    if (breakpoint === "sm") return "sm"; // Small screens
    if (breakpoint === "md") return "md"; // Medium screens
    return "lg"; // Large screens
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onClose}
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        size="2xl"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader
                className={`flex flex-col gap-1 bg-blue-100 text-white text-3xl ${bebasNeue.className}`}
              >
                Edit Information
              </ModalHeader>
              <ModalBody className={`text-xl p-8 ${bebasNeue.className} `}>
                {selectedUser ? (
                  <>
                    <div className="grid grid-cols-[80px_auto] sm:grid-cols-[120px_auto] w-full h-full">
                      <div className="flex flex-col text-sm sm:text-base md:text-lg">
                        <span className="text-blue-100">User ID:</span>
                        <span className="text-blue-100">Full Name:</span>
                        <span className="text-blue-100">Address:</span>
                        <span className="text-blue-100">Contact No:</span>
                        <span className="text-blue-100">Gender:</span>
                        <span className="text-blue-100">Age:</span>
                        <span className="text-blue-100">Purpose:</span>
                        <span className="text-blue-100">Status:</span>
                        <div className="flex flex-col mt-8 sm:mt-7 md:mt-6 lg:mt-7 gap-5 sm:gap-3">
                          <span className="text-blue-100">Date:</span>
                          <span className="text-blue-100">
                            Official Receipt:
                          </span>
                        </div>
                      </div>

                      <div
                        className={`flex flex-col font-normal text-sm sm:text-base md:text-lg ${montserrat.className}`}
                      >
                        <span>{selectedUser.userId}</span>
                        <span>{selectedUser.fullName}</span>
                        <span>{selectedUser.address}</span>
                        <span>{selectedUser.contactNo}</span>
                        <span>{selectedUser.gender}</span>
                        <span>{selectedUser.age}</span>
                        <span>{selectedUser.purpose}</span>
                        <div className="flex">
                          {[
                            {
                              label: "Pending",
                              value: "PENDING",
                            },
                            {
                              label: "To Receive",
                              value: "TO RECEIVE",
                            },
                            {
                              label: "Completed",
                              value: "COMPLETED",
                            },
                            {
                              label: "Declined",
                              value: "DECLINED",
                            },
                          ].map((item, index) => (
                            <RadioGroup
                              key={index}
                              orientation="horizontal"
                              value={userStatus}
                              size={getSize()}
                              onChange={handleStatusChange}
                              className="flex justify-center mr-2"
                            >
                              <Radio value={item.value}>
                                <span className="text-xs sm:text-sm md:text-base text-nowrap">
                                  {item.label}
                                </span>
                              </Radio>
                            </RadioGroup>
                          ))}
                        </div>
                        <div className="flex flex-col mt-6 gap-2">
                          <span>
                            <DatePicker
                              isReadOnly
                              size="sm"
                              className="flex w-44 text-md px-1"
                              variant="bordered"
                            />
                          </span>
                          <span>
                            <Input
                              isReadOnly
                              value={selectedUser.officialReceipt}
                              size="sm"
                              variant="bordered"
                              className="flex w-44 text-md px-1"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <p>No user found</p>
                )}
              </ModalBody>
              <ModalFooter
                className={`flex justify-center gap-6 ${bebasNeue.className}`}
              >
                <Button
                  className="text-3xl p-6 rounded-md border-2 border-blue-100 text-blue-100"
                  variant="bordered"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  className="text-3xl p-6 rounded-md text-white bg-blue-100"
                  onPress={onClose}
                >
                  Print
                </Button>
                <Button
                  className="text-3xl p-6 rounded-md text-white bg-blue-100"
                  onPress={onClose}
                >
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
