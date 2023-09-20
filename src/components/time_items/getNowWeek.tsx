type Time = {
  time:Date
}
// Надо переписать, в воскресенье 17.09 показывает 38 неделю 
export default function GetNowWeek({ time }:Time){
  let startTimeOfCurrentYear = (new Date(time.getFullYear(), 0, 1)).getTime();
  let currentTime = time.getTime();
  let pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear;
    let hourOfMillisecs = 3600000;
  let hoursOfOneWeek = 168;
  let NumberOfWeek =  Math.floor((Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek)))


return(
  <h1>
  Сейчас {NumberOfWeek} неделя
</h1>
)
}