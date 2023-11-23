import { useEffect, useState } from "react";
import { currentDate, formatTime } from "../utils/dateTime";

function timeDate() {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    time,
    currentDate,
  };
}

export default timeDate;
