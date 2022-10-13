import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./BotAvatar/BotAvatar";

const botName = "ExcitementBot";

const config = {
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}, I'm here to help you explain how I work.`
    ),
    createChatBotMessage(
      "Hello Aditya, please select the option you need our help with: ",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
    createChatBotMessage(
      "1. Request Video Leactures",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
    createChatBotMessage(
      "2. Request Test Results",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
    createChatBotMessage(
      "3. Give Teacher Feedback",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
    createChatBotMessage(
      "4. Doubt Solving",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
    createChatBotMessage(
      "5. Student Information",
      {
        withAvatar: false,
        delay: 500,
        widget: "overview",
      }
    ),
  ],
  botName: botName,
  customComponents: {
    botAvatar: (props) => <BotAvatar {...props} />,
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: "purple",
    },
    chatButton: {
      backgroundColor: "purple",
    },
  },
};

export default config;
