import React from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import Time from '../../public/icon/time.png';
import Pen from '../../public/icon/pen.png';
import Option from '../../public/icon/option.png';

const dataTodo = [
  {
    id: 1,
    title: 'Close off Case #012920-RODRIGUES,Amiguel',
    daysLeft: '2 Days Left',
    date: '12/06/2021',
    desc: 'Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally guaranteed for a success! ',
  },
  {
    id: 2,
    title:
      'Set up documentation report for several Cases : Case 145443, Case 192829 and Case 182203',
    daysLeft: '4 Days Left',
    date: '14/06/2021',
    desc: 'All Cases must include all payment transactions, all documents and forms filled. All conversations in comments and messages in channels and emails should be provided as well in',
  },
  {
    id: 3,
    title: 'Set up appointment with Dr Blake',
    daysLeft: '10 Days Left',
    date: '22/06/2021',
    desc: 'No Description',
  },
];

const TodoContent = () => {
  return (
    <div className="w-[700px] h-[480px] py-2 px-6">
      <div className="flex justify-between ">
        <div className="ml-14">
          <select
            name="todo"
            id="todo"
            className="border border-slate-500 p-2 rounded"
          >
            <option value="My Task">My Task</option>
            <option value="Personal Errands">Personal Errands</option>
            <option value="Urgent To-Do">Urgent To-Do</option>
          </select>
        </div>
        <div className="">
          <button className="bg-[#2F80ED] py-2 px-4 rounded text-white font-semibold">
            New Task
          </button>
        </div>
      </div>
      <div>
        <div className="overflow-y-auto h-[400px] mt-4">
          {dataTodo.map((item, index) => (
            <div key={index} className="border-b-2 border-slate-400 mb-4">
              <div className="grid grid-cols-12">
                <input
                  type="checkbox"
                  className="w-4 h-4 col-span-1 mt-1 ml-4"
                />
                <div className="flex col-span-7  ">
                  <div className="flex items-center ">
                    <h2 className="font-semibold mr-2">{item.title}</h2>
                  </div>
                </div>

                <div className="flex gap-x-3 col-span-4 items-center whitespace-nowrap">
                  <p className="text-xs text-red-400">{item.daysLeft}</p>
                  <p className="text-sm">{item.date}</p>
                  <span className="cursor-pointer">
                    <IoIosArrowUp />
                  </span>
                  <span className="">
                    <img src={Option} alt="" className="w-5 cursor-pointer" />
                  </span>
                </div>
              </div>
              <div className="mx-10 my-3 ">
                <div className="flex items-center gap-x-5">
                  <img src={Time} alt="time" className="w-6 h-6" />
                  <input
                    type="date"
                    className="border border-slate-500 p-2 rounded"
                    defaultValue="24/06/2021"
                  />
                </div>
                <div className="flex gap-x-6 mt-2">
                  <img src={Pen} alt="time" className="w-4 h-4" />
                  <p className="text-justify">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContent;
