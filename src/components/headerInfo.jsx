import { v4 as uuid } from "uuid";
import timeDate from "../hooks/timeDate";

function HeaderInfo() {
  const { time, currentDate } = timeDate();

  const headerInfo = [
    {
      title: "www.jnhsa.com",
      info: "00962362536",
    },
    {
      title: currentDate(),
      info: time,
    },
    {
      title: "Saturday - thurday",
      info: "08:00Am - 11:00 PM",
    },
  ];

  return (
    <header
      className="
        flex flex-col items-center text-center p-2  gap-4
        md:flex-row md:justify-between"
    >
      <h1
        className="
          text-xl sm:text-4xl  md:text-3xl font-bold p-4 
          text-green-800 bg-green-100 rounded-md"
      >
        Jeddah National Hospital
      </h1>

      <div
        className="
          w-full flex flex-wrap gap-2 flex-col items-center  
          sm:flex-row sm:gap-4 sm:max-w-fit "
      >
        {headerInfo.map((info) => (
          <div
            key={uuid()}
            className="
              w-full bg-slate-100 text-center text-slate-800
              sm:flex-grow sm:w-fit p-4 rounded-md"
          >
            <h3
              className="
                font-bold text-slate-700 
                text-base leading-8"
            >
              {info.title}
            </h3>
            <p className="text-sm">{info.info}</p>
          </div>
        ))}
      </div>
    </header>
  );
}

export default HeaderInfo;
