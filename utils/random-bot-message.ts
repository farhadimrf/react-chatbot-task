const useRandomBotMessage = () => {
   const generateMessage = () => {
      const responses = [
         "I'm here to help!",
         "How can I assist you today?",
         "Ask me anything!",
         "Let me know what you need.",
         "Feel free to ask me any questions!",
         "I'm at your service. What can I do for you?",
         "Need assistance? I'm here for you.",
         "Curious about anything? Ask away!",
         "Let's chat! What's on your mind?",
         "Tell me your thoughts, I'm listening.",
         "How can I make your day better?",
         "Looking for information? I've got you covered.",
         "What can I help you with today?",
         "Feel free to share your concerns or inquiries.",
      ];
      const randomIndex = Math.floor(Math.random() * responses.length);
      return responses[randomIndex];
   };

   return { generateMessage };
};

export default useRandomBotMessage;
