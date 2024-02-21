"use client";
import { ChevronDown, MessageSquareText, SendHorizontal, UserRound, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ChatbotHeader from "./ChatbotHeader";
import TextBubble from "./TextBubble";
import useScrollToBottom from "@/hooks/use-scroll-to-bottom";
import useRandomBotMessage from "@/utils/random-bot-message";

type ChatbotProps = {
   direction: "bottom-right" | "bottom-left";
};
export interface ChatMessage {
   type: "user" | "bot";
   text: string;
}

type FormData = {
   message: string;
};

const Chatbot = ({ direction }: ChatbotProps) => {
   const [isOpen, setIsOpen] = useState(true);
   const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
   const chatPosition = direction === "bottom-right" ? "right-1 sm:right-3" : "left-1 sm:left-3";
   const chatHeight = isOpen ? "h-[75vh] sm:max-h-[650px]" : "h-0";

   const { register, handleSubmit, setValue } = useForm<FormData>();

   const chatContainerRef = useRef<HTMLDivElement | null>(null);
   useScrollToBottom(chatContainerRef, [chatMessages]);

   const { generateMessage } = useRandomBotMessage();

   useEffect(() => {
      setChatMessages([{ type: "bot", text: "Hi Welcome to the chatbot, How can i help you?" }]);
   }, []);

   const onSubmit: SubmitHandler<FormData> = async (data) => {
      const userMessage = data.message.trim();

      if (userMessage !== "") {
         setChatMessages((prevMessages) => [...prevMessages, { type: "user", text: userMessage }]);
         setValue("message", "");

         setTimeout(() => {
            const botMessage = generateMessage();
            setChatMessages((prevMessages) => [...prevMessages, { type: "bot", text: botMessage }]);
         }, 600);
      }
   };

   return (
      <>
         <div className={`fixed ${chatPosition} bottom-1`}>
            <div
               onClick={() => setIsOpen(!isOpen)}
               className="m-1 border rounded-full p-3 bg-[#006ffd] text-white flex items-center justify-center "
            >
               {!isOpen ? (
                  <MessageSquareText className="h-7 w-7 cursor-pointer" />
               ) : (
                  <ChevronDown className="h-7 w-7 cursor-pointer" />
               )}
            </div>
         </div>
         {isOpen && (
            <div
               className={`absolute flex flex-col items-center justify-between shadow-lg border rounded-b-lg rounded-t-2xl w-[98%] sm:w-[350px] ${chatPosition} bottom-[70px] bg-white ${chatHeight}`}
            >
               <ChatbotHeader isOpen={isOpen} setIsOpen={setIsOpen} />

               <div
                  ref={chatContainerRef}
                  className="h-full w-full flex flex-col text-sm px-1 pt-2 overflow-auto"
               >
                  {chatMessages.map((message, index) => (
                     <TextBubble key={index} message={message} />
                  ))}
               </div>

               <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex pb-2 px-2 items-center w-full gap-1"
               >
                  <div className="border flex-1 rounded-3xl p-1.5 ">
                     <input
                        {...register("message")}
                        type="text"
                        placeholder="Type your message..."
                        className="w-full ps-1  text-sm focus:outline-none placeholder:text-sm"
                     />
                  </div>
                  <button type="submit" className="rounded-full p-2  bg-[#006ffd]">
                     <SendHorizontal className="h-5 w-5 text-white" />
                  </button>
               </form>
            </div>
         )}
      </>
   );
};

export default Chatbot;
