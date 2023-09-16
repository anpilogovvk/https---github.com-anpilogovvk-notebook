
import './Header.css'
import { useState, useEffect } from 'react';


type Time = {
  time:Date
}

function Week({ time }:Time){
  let startTimeOfCurrentYear = (new Date(time.getFullYear(), 0, 1)).getTime();
  let currentTime = time.getTime();
  let pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear;
	let hourOfMillisecs = 3600000;
  let hoursOfOneWeek = 168;
  let NumberOfWeek =  Math.floor((Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek)))

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

function MegaDate({ time }:Time){
  //const DateOne = new Date()
  let getYear = time.getFullYear();
  let getDate = time.getDate();
  let getMonth = time.getMonth();
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
            <h1 className='NumberOfWeek'>{<Week time={time}/>}</h1>
            <h1>{<MegaDate time={time}/>}</h1>
            <h1 className='Time'>{<Clock time={time}/>} </h1>
        </div>
    )
}

export  {Header}