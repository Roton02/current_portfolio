"use client";
import { FaWhatsapp } from "react-icons/fa";
import { ThreeDots } from "react-loader-spinner";


const WhatsAppChatOpener = ({
  defaultMessage = "Hello sir! How can I help you today?",
  isLoading = false,
}) => {
  const whatsAppNumber = "+8801569140343";
  const openWhatsAppChat = () => {
    window.open(`https://wa.me/${whatsAppNumber}`, "_blank");
  };

  return (
    <div className="relative bg-primary max-w-xs m-1 rounded-xl font-sans py-3">
      <div className="rounded-xl p-2 shadow-md cursor-pointer transition-all duration-300">
        <div className="min-h-[50px] flex flex-col relative z-10">
          <div className="w-full flex items-end gap-2 max-w-[80%]">
            <img
              src='https://i.ibb.co.com/bjb2XrRr/roton-hero.png'
              className="rounded-full p-1 border h-8 w-8"
            />
            <div className="m-0 mb-2.5 relative bg-gray-800 p-2 min-h-5 rounded-sm text-xs flex items-center leading-relaxed z-10 text-white">
              <span className="bg-gray-800 rotate-12 h-6 w-2 absolute rounded-br-[130%] -bottom-[5px] -left-[1px] -z-10"></span>
              {isLoading ? (
                <ThreeDots
                  visible={true}
                  height="10"
                  width="30"
                  color="#fff"
                  radius="2"
                  ariaLabel="three-dots-loading"
                />
              ) : (
                defaultMessage
              )}
            </div>
          </div>

          <button
            className="bg-green-700 max-w-[70%] ml-auto mt-6 text-white border-none rounded-2xl py-2 px-4 cursor-pointer transition-colors hover:bg-green-600 flex items-center gap-1.5"
            onClick={openWhatsAppChat}
          >
            <FaWhatsapp />
            <span className="text-xs">Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChatOpener;
