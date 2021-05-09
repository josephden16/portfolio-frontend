export const formatTime = (time: string): string => {
  let date = new Date(time);

  let monthNum: number = date.getUTCMonth(); + 1;
  let year: number = date.getUTCFullYear();
  let day: number = date.getUTCDay();

  let month: string = "";

  switch (monthNum) {
    case 1:
      month = "January";
      break;
    case 2: 
      month = "February";
      break;
    
    case 3:
      month = "March";
      break;

    case 4: 
      month = "April";
      break;
    
    case 5: 
      month = "May";
      break;
    
    case 6:
      month = "June";
      break;
    
    case 7:
      month = "July";
      break;
    
    case 8: 
      month = "August";
      break;
    
    case 9:
      month = "September";
      break;
    
    case 10:
      month = "October";
      break;
    
    case 11:
      month = "November";
      break;

    case 12: 
      month = "December";
      break;
    
    default:
      month = "";
      break;
  }

  if (month && day && year) {
    let date = `${month} ${day}, ${year}`;
    return date;
  }
}
