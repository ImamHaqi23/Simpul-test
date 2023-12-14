import React from 'react';
import iconSearch2 from '../../public/icon/search2.png';
import groupChat from '../../public/icon/groupChat.png';

const dataChat = [
  {
    id: 1,
    img: groupChat,
    title: '109220-Naturalization',
    date: 'January 1,2021 19:10',
    name: 'Cameron Philips',
    message: 'Please check this out!',
  },
  {
    id: 2,
    img: groupChat,
    title:
      'Jeanette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
    date: '02/06/2021 10:45',
    name: 'Ellen',
    message: 'Hey, please read',
  },
  {
    id: 3,
    img: groupChat,
    title: '8405-Diana SALAZAR MUNGUIA',
    date: '01/06/2021 12:19',
    name: 'Cameron Philips',
    message:
      'I understand your initial concerns and thats very valid, Elizabeth. But you...',
  },
];

const ChatContent = () => {
  return (
    <div className="w-[650px] h-[480px] py-2 px-6">
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
      <div className="overflow-y-auto h-full">
        {dataChat.map((item, index) => (
          <div
            key={index}
            className="flex gap-x-2 pt-2 pb-7  border-b-2 border-slate-400"
          >
            <div className="">
              <img src={item.img} alt="chat" className="" />
            </div>
            <div className="w-full">
              <div className="flex gap-x-5">
                <h2 className="text-[#0f1114] font-semibold">{item.title}</h2>
                <p className="text-xs whitespace-nowrap mt-1">{item.date}</p>
              </div>
              <div>
                <p className="text-sm font-bold">{item.name}:</p>
                <p className="text-xs ">{item.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatContent;
