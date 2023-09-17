
type Time = {
    time:Date
  }

export default function GetNowTime({ time }:Time) {
    return (
      <h1>
        Время: {time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
      </h1>
    );
  }
export  {GetNowTime}