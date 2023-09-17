
import './Header.css'
import { useState, useEffect } from 'react'
import GetNowTime from  './time_items/getNowTime'
import GetNowWeek from  './time_items/getNowWeek'
import GetMegaDate from  './time_items/getMegaDate'

 function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
  }

export default function Header() {
    const time = useTime()
    return(
        <div className='Header-bar'>
          <h1><GetNowTime time={time}/></h1>
          <h1><GetNowWeek time={time}/></h1>
          <h1><GetMegaDate time={time}/></h1>   
        </div>
    )
}

export  {Header}