"use client";
import { useState } from "react";

type ChatbotProps = {
   direction: "bottom-right" | "bottom-left";
};

const Chatbot = ({ direction }: ChatbotProps) => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <div className={`fixed ${direction === "bottom-right" ? "right-0" : "left-0"} bottom-0`}>
            <div
               onClick={() => setIsOpen(!isOpen)}
               className="m-1 border rounded-full flex items-center justify-center h-14 w-14 "
            >
               {isOpen ? "open" : "close"}
            </div>
         </div>
         {isOpen && (
            <div
               className={`absolute border rounded-lg w-[98%] sm:w-[350px] ${
                  direction === "bottom-right" ? "right-1 m-auto" : "left-1"
               } bottom-[66px] bg-white ${isOpen ? "h-[90vh] sm:h-[75vh]" : "h-0"}`}
            ></div>
         )}
      </>
   );
};

export default Chatbot;
