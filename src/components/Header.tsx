
import './Header.css'
import { useState, useEffect } from 'react';


type Time = {
  time:Date
}

function Week(){
  let currentDateTime = new Date();
  let startTimeOfCurrentYear = (new Date(currentDateTime.getFullYear(), 0, 1)).getTime();
  let currentTime = currentDateTime.getTime();
  let pastTimeOfStartCurrentYear: number = currentTime - startTimeOfCurrentYear;
	let hourOfMillisecs: number = 3600000;
  let hoursOfOneWeek: number = 168;
  let NumberOfWeek: number=  Math.floor((Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek).toFixed(2)))

return(
  <h2>
  Сейчас {NumberOfWeek} неделя
</h2>
)
}

function Clock({ time }:Time) {
  return (
    <h1>
      Время: {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
    </h1>
  );
}

function MegaDate(){
  const DateOne = new Date()
  let getYear = DateOne.getFullYear();
  let getDate = DateOne.getDate();
  let getMonth = DateOne.getMonth();
    const Months = [
      {id: 0,
        name:'Января'},
      {id: 1,
        name:'Февраля'},
      {id: 2,
        name:'Марта'},
      {id: 3,
        name:'Апреля'},
      {id: 4,
        name:'Мая'},
      {id: 5,
        name:'Июня'},
      {id: 6,
        name:'Июля'},
      {id: 7,
        name:'Августа'},
      {id: 8,
        name:'Сентября'},
      {id: 9,
        name:'Октября'},
      {id: 10,
        name:'Ноября'},
      {id: 11,
        name:'Декабря'},
    ];
    let RealMonth = Months.filter(person => person.id === getMonth)

  return (
    <article>
     {RealMonth.map(person =>
      <h2 key={person.id}>{getDate} {person.name} {getYear} года</h2>
      )}
    </article>
    )
}


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
            <h1 className='NumberOfWeek'>{<Week />}</h1>
            <h1>{<MegaDate />}</h1>
            <h1 className='Time'>{<Clock time={time}/>} </h1>
        </div>
    )
}

export  {Header}