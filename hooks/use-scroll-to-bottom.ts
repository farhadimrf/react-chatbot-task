import { useEffect } from "react";

const useScrollToBottom = (
   elementRef: React.MutableRefObject<HTMLDivElement | null>,
   dependencies: any[] = []
) => {
   useEffect(() => {
      const scrollToBottom = () => {
         if (elementRef.current) {
            elementRef.current.scrollTop = elementRef.current.scrollHeight;
         }
      };

      scrollToBottom();
   }, [elementRef, dependencies]);
};

export default useScrollToBottom;
