"use client";
import { UserRound, X } from "lucide-react";
import React from "react";

type ChatbotHeaderProps = {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatbotHeader = ({ isOpen, setIsOpen }: ChatbotHeaderProps) => {
   return (
      <div className="flex justify-between items-center rounded-t-2xl w-full p-4 bg-[#006ffd]">
         <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-full">
               <UserRound className="h-7 w-7 text-[#006ffd]" />
            </div>
            <div className="flex flex-col text-white items-start">
               <h3 className="text-base">Bot</h3>
               <p className="text-sm">Your support</p>
            </div>
         </div>

         <X className="text-white cursor-pointer h-5 w-5" onClick={() => setIsOpen(!isOpen)} />
      </div>
   );
};

export default ChatbotHeader;
