export default function GetNowDayWeek() {
    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
      ];
      
      let date = new Date();
      let nowDate = date.getDay();

      return(
        days[nowDate]
      )
}

export {GetNowDayWeek}
