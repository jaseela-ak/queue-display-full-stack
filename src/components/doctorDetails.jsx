import { Fragment } from "react";
import { v4 as uuid } from "uuid";

function DoctorDetails({ data }) {
  const colors = ["green", "orange", "blue"];
  console.log("??", data);

  return (
    <div className="h-full  w-full flex flex-col items-center  gap-3  md:flex-row md:gap-5 md:h-[40vh] lg:flex-col lg:h-full">
      <div className="h-[360px] md:h-full  lg:max-h-[380px] w-full ">
        <img
          src={data.Image}
          alt="doc dp"
          className=" w-full h-full object-cover object-[50%15%] rounded-xl lg:max-h-[380px]"
        />
      </div>

      <div className="h-full  w-full  flex flex-col justify-between ">
        <h2 className=" text-3xl sm:text-5xl font-bold text-slate-800 text-center  py-4 px-2 bg-slate-200 rounded-md">
          {data.Name}
        </h2>

        <div className="h-fit  w-full flex flex-col justify-end  g-2 ">
          <div className=" w-full flex justify-between gap-2 my-2  flex-wrap">
            {/* {doctorData.contact.map((contact) => ( */}
            <div
              // key={uuid()}
              className=" flex items-center justify-center gap-1 sm:gap-2 p-2 bg-slate-200 rounded-md flex-grow"
            >
              {/* <span className="material-symbols-outlined font-bold text-sm sm:text-lg text-slate-700"> */}
              {/* {contact.icon} */}
              {/* </span> */}

              <span className="font-bold  text-sm sm:text-lg text-slate-700">
                {data.Phone}
              </span>
            </div>
            <div
              // key={uuid()}
              className=" flex items-center justify-center gap-1 sm:gap-2 p-2 bg-slate-200 rounded-md flex-grow"
            >
              {/* <span className="material-symbols-outlined font-bold text-sm sm:text-lg text-slate-700">
            
              </span> */}

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>

              <span className="font-bold  text-sm sm:text-lg text-slate-700">
                {data.Email}
              </span>
            </div>
            <div
              // key={uuid()}
              className=" flex items-center justify-center gap-1 sm:gap-2 p-2 bg-slate-200 rounded-md flex-grow"
            >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
 
              <span className="font-bold  text-sm sm:text-lg text-slate-700">
                {data.Address}
              </span>
            </div>
            {/* ))}  */}
          </div>

          <Fragment key={uuid()}>
            {/* prettier-ignore */}
            <div className={`w-full flex justify-between px-3 p-1 my-1 bg-green-200
               
               rounded-md`} >
                <h2 className={`font-bold text-base sm:text-lg text-blue-800 `}>Experience</h2>
                <h2 className={`font-bold text-base sm:text-lg text-blue-800 `} >
                  {data.Experience}
                </h2>
                </div>
                <div className={`w-full flex justify-between px-3 p-1 my-1 bg-red-200
               
               rounded-md`}>
                <h4 className={`font-bold text-base sm:text-lg text-blue-800 `}>Department</h4>
                  <h4 className={`font-bold text-base sm:text-lg  text-blue-800`} >
                  {data.Department}
                </h4>
                </div>
                <div className={`w-full flex justify-between px-3 p-1 my-1 bg-slate-200
               
               rounded-md`}>
                <h4 className={`font-bold text-base sm:text-lg text-blue-800 `}>Specialization</h4>
                <h4 className={`font-bold text-base sm:text-lg  text-blue-800`} >
                  {data.Specialization}
                </h4>
                </div>
              
          </Fragment>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
