"use client";
import { ChevronDown, MessageSquareText, SendHorizontal, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type ChatbotProps = {
   direction: "bottom-right" | "bottom-left";
};
type ChatMessage = {
   type: "user" | "bot";
   text: string;
};

type FormData = {
   message: string;
};

const Chatbot = ({ direction }: ChatbotProps) => {
   const [isOpen, setIsOpen] = useState(true);
   const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
   const chatPosition = direction === "bottom-right" ? "right-1 sm:right-3" : "left-1 sm:left-3";
   const chatHeight = isOpen ? "h-[75vh] sm:max-h-[650px]" : "h-0";

   const { register, handleSubmit, setValue } = useForm<FormData>();
   console.log("iam renderefe");
   const generateRandomBotResponse = () => {
      const responses = [
         "I'm here to help!",
         "How can I assist you today?",
         "Ask me anything!",
         "Let me know what you need.",
      ];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
   };
   useEffect(() => {
      const botMessage = generateRandomBotResponse();
      setChatMessages([{ type: "bot", text: "Hi, How can i help you?" }]);
   }, []);

   const onSubmit: SubmitHandler<FormData> = (data) => {
      const userMessage = data.message.trim();

      if (userMessage !== "") {
         const botMessage = generateRandomBotResponse();

         setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: "user", text: userMessage },
            { type: "bot", text: botMessage },
         ]);

         setValue("message", "");
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

               <div className="h-full w-full flex flex-col text-sm px-1 pt-2 overflow-auto">
                  {chatMessages.map((message, index) => (
                     <div
                        key={index}
                        className={`bg-${
                           message.type === "bot"
                              ? "white text-black self-start"
                              : "[#006ffd] text-white self-end"
                        } p-2 m-2 rounded-3xl px-3 border max-w-[70%]`}
                     >
                        {message.text}
                     </div>
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
                        className="w-full bg-transparent focus:outline-none placeholder:text-sm placeholder:ps-1"
                     />
                  </div>
                  <button type="submit" className="rounded-full p-2 rotate-180 bg-[#006ffd]">
                     <SendHorizontal className="h-5 w-5 text-white" />
                  </button>
               </form>
            </div>
         )}
      </>
   );
};

export default Chatbot;
