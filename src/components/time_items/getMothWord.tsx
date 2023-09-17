type Time = {
    time:Date
  }

export default function GetNowMonthName({ time }:Time) {
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
  
      return(
        <h2>
            {RealMonth.map(person =>
            <h5 key={person.id}>{person.name}</h5>)}
        </h2>
      )
}
export {GetNowMonthName}