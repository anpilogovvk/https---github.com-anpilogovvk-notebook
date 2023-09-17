import GetNowDayWeek from  './getDayWeekWord'
import GetNowMonthName from  './getMothWord'


type Time = {
    time:Date
  }
  
  export default function GetMegaDate({ time }:Time){
    let getYear = time.getFullYear();
    let getDate = time.getDate();

    return (
        <h1>  <GetNowDayWeek/>, {getDate} <GetNowMonthName time={time}/> {getYear} года</h1>
      )
  }

  export {GetMegaDate}