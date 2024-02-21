import { useForm } from "react-hook-form";
import { SendHorizontal } from "lucide-react";

type ChatbotTextSectionProps = {
   onSubmit: any;
   name: string;
};

const ChatbotTextSection = ({ onSubmit, name }: ChatbotTextSectionProps) => {
   const { register, handleSubmit, setValue } = useForm();
   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex pb-2 px-2 items-center w-full gap-1">
         <div className="border flex-1 rounded-3xl p-1.5 ">
            <input
               {...register(name)}
               type="text"
               placeholder="Type your message..."
               className="w-full bg-transparent ps-1 text-sm focus:outline-none placeholder:text-sm placeholder:ps-1"
            />
         </div>
         <button type="submit" className="rounded-full p-2 rotate-180 bg-[#006ffd]">
            <SendHorizontal className="h-5 w-5 text-white" />
         </button>
      </form>
   );
};

export default ChatbotTextSection;
