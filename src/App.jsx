import Slider from "react-slick";
import { v4 as uuid } from "uuid";

import HeaderInfo from "./components/headerInfo";
import DoctorDetails from "./components/doctorDetails";
import TableInfo from "./components/tableInfo";
import FooterSlider from "./components/footerSlider";
import { useState,useEffect } from "react";
import { doctorData } from "./datastore/doctorsData";
import axios from 'axios';
function App() {
  const doctorSliderSettings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const [doctersData, setDoctersData] = useState([]);
    const baseURL='http://localhost:8000/docters';

    useEffect(() => {

      // Fetch data from the SQL Server API
      const fetchDocterData = async () => {
        try {
          axios.get(baseURL).then((response) => {
            setDoctersData(response.data);
            console.log(response.data);
          });// Update table data state
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchDocterData();
    }, []);
console.log("....==",doctersData)   

  return (
    <section className="font-rubik">
      <HeaderInfo />

      <div className=" p-2 flex flex-col gap-3  lg:flex-row lg:gap-3 ">
        <Slider {...doctorSliderSettings} className="w-full lg:max-w-[400px] ">
          {doctersData.map((doctor,index) => (
            <DoctorDetails 
            // key={uuid()} 
            key={index}
            data={doctor} />
          ))}
        </Slider>

        <TableInfo />
      </div>

      <FooterSlider />
    </section>
  );
}

export default App;
