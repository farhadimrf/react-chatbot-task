# React Chatbot Component

A React chatbot component designed for integrating chat functionality into your web applications. This project utilizes Tailwind CSS for styling.

## Getting Started

To get started, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result. You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Inter, a custom Google Font.

## Installation

To use this chatbot component in your project, you can install it from npm:

```bash
 npm install react-chatbot-task
```

```bash
 npm install tailwind
```

## Usage

```bash
import React from 'react';
import Chatbot from 'react-chatbot-task/components/Chatbot';

const YourComponent = () => {
  return (
    <div>
      <h1>Your App</h1>
      <Chatbot direction="bottom-right" />
    </div>
  );
};

export default YourComponent;
```

Then add this code into your tailwind.config.tsx

```bash
import type { Config } from "tailwindcss";

const config: Config = {
   content: [
   ///,
      "./node_modules/react-chatbot-task/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   plugins: [],
};
export default config;
```

## Chatbot direction

You can modify the `direction` prop of the Chatbot component to either "bottom-right" or "bottom-left" to change its position.

## Learn More

To learn more about Next.js, check out the following resources:

Next.js Documentation
Tailwind CSS Documentation
