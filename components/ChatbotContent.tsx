type ChatbotContentProps = {
   chatMessages: { type: "user" | "bot"; text: string }[];
};

const ChatbotContent = ({ chatMessages }: ChatbotContentProps) => {
   return (
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
   );
};

export default ChatbotContent;
