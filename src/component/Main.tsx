import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Popup from './Popup';
import ChatContent from './ChatContent';
import TodoContent from './TodoContent';

const Main = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [chatIcons, setChatIcons] = useState(false);
  const [todoIcons, setTodoIcons] = useState(false);

  const handleIconClick = () => {
    setShowIcons(!showIcons);
  };

  const handleChat = () => {
    setChatIcons(!chatIcons);
    setTodoIcons(false);
  };

  const handleTodo = () => {
    setTodoIcons(!todoIcons);
    setChatIcons(false);
  };

  return (
    <div className="flex-grow p-4 bg-[#333333]">
      <div className="fixed bottom-4 right-4">
        <motion.div
          className={`w-12 h-12 ${
            chatIcons || todoIcons ? 'bg-[#4F4F4F]' : 'bg-[#2F80ED]'
          } rounded-full flex justify-center items-center`}
          onClick={handleIconClick}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <img src="../../public/icon/toggle.png" alt="menu" className="w-3" />
        </motion.div>
      </div>
      <AnimatePresence>
        {showIcons && (
          <div className="fixed bottom-4 right-20 flex space-x-4">
            <motion.div
              className={`w-11 h-11 ${
                todoIcons ? 'bg-[#8785FF]' : 'bg-[#F2F2F2]'
              }  rounded-full flex justify-center items-center`}
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: 1,
                x: chatIcons ? 60 : 0 || todoIcons ? 130 : 0,
              }}
              exit={{ opacity: 0, x: 20 }}
              onClick={handleTodo}
            >
              <img
                src={`${
                  todoIcons
                    ? '../../public/icon/chat-2.png'
                    : '../../public/icon/chat-1.png'
                }`}
                alt="menu"
                className="w-5"
              />
            </motion.div>
            <motion.div
              className={`w-11 h-11 ${
                chatIcons ? 'bg-[#F8B76B]' : 'bg-[#F2F2F2]'
              }  rounded-full flex justify-center items-center`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: chatIcons ? 70 : 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={handleChat}
            >
              <img
                src={`${
                  chatIcons
                    ? '../../public/icon/todo-2.png'
                    : '../../public/icon/todo-1.png'
                }`}
                alt="menu"
                className="w-5"
              />
            </motion.div>
          </div>
        )}
        <Popup
          isOpen={chatIcons || todoIcons}
          content={todoIcons ? <ChatContent /> : <TodoContent />}
        />
      </AnimatePresence>
    </div>
  );
};

export default Main;
