import { ChatMessage } from "./Chatbot";

type TextBubble = {
   message: ChatMessage;
};

const TextBubble = ({ message }: TextBubble) => {
   return (
      <div
         className={`${
            message.type === "bot"
               ? "bg-[#e7e7e7] text-red self-start"
               : "bg-[#0B93F6] text-white self-end"
         } p-2 m-2 rounded-3xl px-3 border max-w-[70%]`}
      >
         {message.text}
      </div>
   );
};

export default TextBubble;
