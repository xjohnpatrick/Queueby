import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/modal";

import { Button } from "@nextui-org/button";

import { dashboardRows } from "@/app/users/rows";

import { bebasNeue, montserrat } from "@/app/fonts/fonts";

import {RadioGroup, Radio} from "@nextui-org/radio";

import { useEffect, useState } from "react";

import {DatePicker} from "@nextui-org/date-picker";

import { Input } from "@nextui-org/input";


interface DashboardModalProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string;
  }

export default function DashboardModal({isOpen, onClose, userId}: DashboardModalProps) {

    const selectedUser = dashboardRows.find(user => user.userId === userId);
    
    const [userStatus, setUserStatus] = useState("")

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

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onClose} isDismissable={false} isKeyboardDismissDisabled={true} size="2xl" backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={`flex flex-col gap-1 bg-blue-100 text-white text-3xl ${bebasNeue.className}`}>Edit Information</ModalHeader>
              <ModalBody className={`text-xl p-8 ${bebasNeue.className} `}>
                {selectedUser ? (
                  <>
                  <div className="flex gap-4">
                    <div className="flex flex-col leading-6">
                      <span className="text-blue-100">User ID:</span>
                      <span className="text-blue-100">Full Name:</span>
                      <span className="text-blue-100">Address:</span>
                      <span className="text-blue-100">Contact No:</span>
                      <span className="text-blue-100">Gender:</span>
                      <span className="text-blue-100">Age:</span>
                      <span className="text-blue-100">Purpose:</span>
                      <span className="text-blue-100 my-5">Status:</span>
                      <div className="flex flex-col leading-9">
                        <span className="text-blue-100">Date:</span>
                        <span className="text-blue-100">Official Receipt:</span>
                      </div>
                    </div>

                    <div className={`flex flex-col font-normal text-medium ${montserrat.className}`}>
                      <span>{selectedUser.userId}</span>
                      <span>{selectedUser.fullName}</span>
                      <span>{selectedUser.address}</span>
                      <span>{selectedUser.contactNo}</span>
                      <span>{selectedUser.gender}</span>
                      <span>{selectedUser.age}</span>
                      <span>{selectedUser.purpose}</span>
                      <span className="my-5"> 
                        <RadioGroup
                            orientation="horizontal"
                            value={userStatus}
                            onChange={handleStatusChange}
                          >
                            <Radio value="PENDING">Pending</Radio>
                            <Radio value="TO RECEIVE">To Receive</Radio>
                            <Radio value="COMPLETED">Completed</Radio>
                            <Radio value="DECLINED">Declined</Radio>
                          </RadioGroup>
                        </span>

                      <div className="flex flex-col gap-3">
                        <span>
                          <DatePicker
                            isReadOnly size="sm" className="flex w-44 h-6 text-md px-1" variant="bordered"/>
                        </span>
                        <span><Input isReadOnly value={selectedUser.officialReceipt} size="sm" variant="bordered" className="flex w-44 h-6 text-md px-1"/></span>
                      </div>

                    </div>

                  </div>
                </>
                ) : (
                  <p>No user found</p>
                )} 
              </ModalBody>
              <ModalFooter className={`flex justify-center gap-6 ${bebasNeue.className}`}>
                <Button className="text-3xl p-6 rounded-md border-2 border-blue-100 text-blue-100" variant="bordered" onPress={onClose}>
                  Close
                </Button>
                <Button className="text-3xl p-6 rounded-md text-white bg-blue-100" onPress={onClose}>
                  Print
                </Button>
                <Button className="text-3xl p-6 rounded-md text-white bg-blue-100" onPress={onClose}>
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