import React, { useState } from 'react';
import iconSearch2 from '../../public/icon/search2.png';
import groupChat from '../../public/icon/groupChat.png';
import iconChat from '../../public/icon/iconChat.png';
import MainChat from './MainChat';

const dataChat = [
  {
    id: 1,
    img: groupChat,
    title: '109220-Naturalization',
    date: 'January 1,2021 19:10',
    name: 'Cameron Philips:',
    message: 'Please check this out!',
  },
  {
    id: 2,
    img: groupChat,
    title:
      'Jeanette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
    date: '02/06/2021 10:45',
    name: 'Ellen:',
    message: 'Hey, please read',
  },
  {
    id: 3,
    img: groupChat,
    title: '8405-Diana SALAZAR MUNGUIA',
    date: '01/06/2021 12:19',
    name: 'Cameron Philips:',
    message:
      'I understand your initial concerns and thats very valid, Elizabeth. But you...',
  },
  {
    id: 4,
    img: iconChat,
    title: 'FastVisa Support',
    date: '01/06/2021 12:19',
    name: '',
    message: 'Hey there! Welcome to your inbox',
  },
];

const ChatContent = ({ isLoading }) => {
  const [content, setContent] = useState(false);

  const handleClick = () => {
    setContent(!content);
  };

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="w-[650px] h-[480px] my-6 mx-8">
      {content ? (
        <MainChat onCloseClick={handleClick} />
      ) : (
        <div className="py-2 px-6">
          <div className="relative mb-1">
            <input
              type="text"
              className="w-full border border-slate-400 rounded p-1"
            />
            <div className="absolute top-1 left-10">
              <p className="text-slate-400">Search</p>{' '}
            </div>
            <div className="absolute top-3 right-10">
              {' '}
              <img src={iconSearch2} alt="Search Icon" className="w-3 h-3" />
            </div>
          </div>
          <div className="overflow-y-auto h-[400px] mt-[22px] scrollbar-thin scrollbar-thumb-gray-300">
            {dataChat.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-12 gap-x-2 pt-2 pb-[22px]  border-b-2 border-slate-300 cursor-pointer"
                onClick={handleClick}
              >
                <div className="col-span-1 text-center">
                  <img src={item.img} alt="chat" className="m-auto" />
                </div>
                <div className="col-span-11 pl-3">
                  <div className="flex gap-x-5">
                    <h2 className="text-[#2F80ED] font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-xs whitespace-nowrap mt-1">
                      {item.date}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-sm font-bold">{item.name}</p>
                    <p className="text-xs ">{item.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatContent;
