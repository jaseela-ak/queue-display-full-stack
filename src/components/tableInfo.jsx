import { tableData } from "../datastore/tabledata";
import { v4 as uuid } from "uuid";
import { useState,useEffect } from "react";
import axios from "axios";

function TableInfo() {

  const [tableData, setTableData] = useState([]);
  const baseURL='http://localhost:8000/queues';
    useEffect(() => {
      // Fetch data from the SQL Server API
      const fetchData = async () => {
        try {
          axios.get(baseURL).then((response) => {
            setTableData(response.data);
            console.log(response.data);
          });// Update table data state
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Scroll to the next row
        setTableData((prevData) => {
          return [...prevData.slice(1), prevData[0]];
        });
      }, 6000);
       // Adjust the scrolling interval as needed
  
      return () => {
        clearInterval(interval); // Clear the interval on component unmount
      };
    }, []);
  


console.log("8888",tableData)
  return (
    <div
      className=" 
      w-full  p-2 gap-2 bg-slate-100 flex
      justify-around flex-wrap rounded-xl custom-scroll
      h-[350px] max-h-[780px] lg:h-full overflow-y-scroll "
    >
      <table className="
         table-fixed w-32 sm:w-42 flex-grow border-separate border-spacing-2 ">
  <thead  className="
              font-bold text-lg text-center text-blue-900
              p-2 bg-blue-200 mb-4 rounded uppercase sticky top-0 
              before:content-[''] before:absolute before:w-full before:h-5 before:left-0 
              before:right-0 before:mx-auto before:bottom-full  before:backdrop-blur-md"
          >
    <tr>
      <th>Department</th>
      <th>Floor</th>
      <th>Room No</th>
      <th>Token</th>

    </tr>
  </thead>
  <tbody >
  {tableData.map((item, index) => (
    <tr key={item.DisplayId}>
    <td  className="bg-slate-200 p-2 border-spacing-2 text-center text-slate-800 rounded-md text-sm md:text-base">{item.Department}</td>
    <td  className="bg-slate-200 p-2 border-spacing-2 text-center text-slate-800 rounded-md text-sm md:text-base">{item.Floor}</td>
    <td  className="bg-slate-200 p-2 border-spacing-2 text-center text-slate-800 rounded-md text-sm md:text-base">{item.RoomNo}</td>
    <td  className="bg-slate-200 p-2 border-spacing-2 text-center text-slate-800 rounded-md text-sm md:text-base">{item.Token}</td>
  </tr>
  ))}
    
    </tbody>
</table>
           
          
    </div>
  );
}

export default TableInfo;
