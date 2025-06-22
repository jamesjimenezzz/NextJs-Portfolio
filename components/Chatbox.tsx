"use client";
import { Loader2, MessageCircleMore, Send, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import chatbot from "@/public/chatbot.jpg";
import { ChatMessage } from "@/types/chat";
import { chatAPI } from "@/lib/chatApi";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input.trim();

    setMessages((prev) => [...prev, { role: "user", content: userText }]);
    setInput("");

    try {
      setIsLoading(true);
      const reply = await chatAPI(userText);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed    items-center bottom-25 z-999 rounded-lg  right-1 sm:right-7 sm:w-96 w-80 sm:h-[600px] h-[500px] bg-gray-100 shadow-2xl outline outline-gray-300 dark:bg-stone-900 dark:outline-stone-700">
          <div className="flex flex-col justify-between h-full">
            <header className="m-3.5 border-b flex justify-between items-center border-gray-300 pb-4">
              <div className="flex items-center  gap-2">
                <Image
                  src={chatbot}
                  alt="picture"
                  className="rounded-full w-12 h-12   object-cover"
                />
                <div className="flex flex-col justify-between h-full">
                  <h1 className="font-bold ">Chat With James</h1>
                  <div className="flex items-center  text-sm gap-3">
                    <p>
                      <span className="text-green-600">•</span> Online
                    </p>
                    <p>•</p>
                    <p>Powered by AI</p>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  className="cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="sm:size-4 size-3" />
                </Button>
              </div>
            </header>
            <main
              ref={chatContainerRef}
              className="flex flex-col pb-5 gap-3 h-full overflow-y-auto"
            >
              <div className="flex max-w-[80%] flex-col gap-2 px-5 py-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={chatbot}
                    alt="picture"
                    className="w-7 object-cover h-7 rounded-full"
                  />
                  <p className="text-xs ">James Jimenez</p>
                </div>
                <p className="bg-gray-200 dark:bg-stone-800 max-w-[90%] break-words rounded-lg py-3 px-4 w-fit    text-sm">
                  Hi there! 👋🏻 Thanks for visiting my website. Feel free to ask
                  me anything about programming, web development, or my
                  experiences in tech. Let me know how I can help!
                </p>
              </div>
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`${
                    m.role === "user" ? "justify-end" : "justify-start"
                  } px-5 py-2 text-sm w-full flex `}
                >
                  {m.role === "user" ? (
                    <div className="flex w-[70%] items-end flex-col gap-2 ">
                      <p className="bg-gray-200 dark:bg-stone-700 w-fit break-words rounded-lg py-3 px-4    text-sm ">
                        {m.content}
                      </p>
                    </div>
                  ) : (
                    <div className="flex w-[70%] flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={chatbot}
                          alt="picture"
                          className="w-7 object-cover h-7 rounded-full"
                        />
                        <p className="text-xs ">James Jimenez</p>
                      </div>
                      <p className="bg-gray-200 dark:bg-stone-800 max-w-[90%] break-words rounded-lg py-3 px-4   w-fit  text-sm">
                        {m.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex w-[70%] px-5 py-2 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src={chatbot}
                      alt="picture"
                      className="w-7 object-cover h-7 rounded-full"
                    />
                    <p className="text-xs ">James Jimenez</p>
                  </div>
                  <p className="bg-gray-200 dark:bg-stone-800 max-w-[90%] break-words rounded-lg py-3 px-4   w-fit  text-sm">
                    <Loader2 className="size-4 animate-spin" />
                  </p>
                </div>
              )}
            </main>
            <div className="w-full z-999 outline outline-gray-200 dark:outline-stone-700 dark:bg-stone-900  bg-white py-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex mx-auto  px-5 items-center gap-2"
              >
                <input
                  type="text"
                  className="w-full focus:ring-black focus:ring-2 dark:focus:ring-white rounded-lg px-4 py-2.5 text-sm dark:outline-stone-700 outline-gray-200 outline "
                  placeholder="Enter a message..."
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                />
                <Button
                  type="submit"
                  disabled={input.trim().length === 0 || isLoading}
                  className="cursor-pointer"
                >
                  <Send className="size-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-5 sm:right-7 right-5">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="flex sm:py-6.5 sm:px-6 rounded-full cursor-pointer  py-6 items-center"
        >
          <MessageCircleMore className="sm:size-5 size-4" />
          <span className="sm:text-base text-xs  ">Chat With James</span>
        </Button>
      </div>
    </>
  );
};

export default Chatbox;
