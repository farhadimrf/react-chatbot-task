"use client";
import { ChevronDown, MessageSquareText, SendHorizontal, UserRound, X } from "lucide-react";
import { useState } from "react";

type ChatbotProps = {
   direction: "bottom-right" | "bottom-left";
};

const Chatbot = ({ direction }: ChatbotProps) => {
   const [isOpen, setIsOpen] = useState(true);
   const chatPosition = direction === "bottom-right" ? "right-1 sm:right-3" : "left-3 sm:left-3";
   const chatHeight = isOpen ? "h-[75vh] sm:max-h-[650px]" : "h-0";

   return (
      <>
         <div className={`fixed ${chatPosition} bottom-1`}>
            <div
               onClick={() => setIsOpen(!isOpen)}
               className="m-1 border rounded-full p-3 bg-[#006ffd] text-white flex items-center justify-center "
            >
               {!isOpen ? (
                  <MessageSquareText className="h-8 w-8" />
               ) : (
                  <ChevronDown className="h-8 w-8" />
               )}
            </div>
         </div>
         {isOpen && (
            <div
               className={`absolute flex flex-col items-center justify-between shadow-lg border rounded-b-lg rounded-t-2xl w-[98%] sm:w-[350px] ${chatPosition} bottom-[66px] bg-white ${chatHeight}`}
            >
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

                  <X
                     className="text-white cursor-pointer h-5 w-5"
                     onClick={() => setIsOpen(!isOpen)}
                  />
               </div>

               <div className="h-full w-full flex flex-col text-sm px-1 pt-2">
                  <div className="bg-white text-black self-start p-2 m-2 rounded-xl border max-w-[60%]">
                     Hello! How can I help you?
                  </div>
                  <div className="bg-[#006ffd] text-white self-end p-2 m-2 rounded-xl max-w-[60%]">
                     Im here to assist you.
                  </div>
               </div>

               <div className="flex pb-2 px-2 items-center w-full gap-1">
                  <div className="border flex-1 rounded-3xl p-1.5 ">
                     <input
                        type="text"
                        placeholder="Type your message..."
                        className="w-full bg-transparent focus:outline-none placeholder:text-sm placeholder:ps-1"
                     />
                  </div>
                  <div className="rounded-full p-2 rotate-180 bg-[#006ffd]">
                     <SendHorizontal className="h-5 w-5 text-white" />
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default Chatbot;
