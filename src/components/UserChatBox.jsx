"use client";
import { useState, useEffect } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import WhatsAppChatOpener from "./WhatsAppChatOpener";

const UserChatBox = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);


  if (!isMounted) return null;

  return (
    <div className="text-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-[10%]  md:right-[4.5%] lg:right-[2.8%] bottom-[6%] md:bottom-[4%] lg:bottom-[6%] z-50 bg-black text-white border p-2 text-2xl rounded-full hover:scale-105 transition"
      >
        <BsChatDotsFill className="scale-x-[-1]" />
      </button>

      {isOpen && (
        <div className="fixed z-30 right-10 bottom-[20%] w-72 h-auto bg-background bg-opacity-10 border shadow-lg rounded-lg flex flex-col">
          <WhatsAppChatOpener
            isLoading={isLoading}
          />
        </div>
      )}
    </div>
  );
};

export default UserChatBox;