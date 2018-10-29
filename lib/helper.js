const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
"July", "Aug", "Sep", "Oct", "Novr", "Dec"];

export function isString(inputtxt) {
    let Regex=/^[a-zA-Z]*$/
    if(Regex.test(inputtxt))
      return true
    else
      return false
}

export function getCurrentTime() {
    let date=new Date()
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();
    return  day+" "+monthNames[monthIndex]+" ,"+year;
}

export function formatDate(date) {
    var d = new Date(date);
    let day = d.getDate();
    let monthIndex = d.getMonth();
    let year = d.getFullYear();
	  let amOrPm = (d.getHours() < 12) ? "AM" : "PM";
	  let hour = (d.getHours() < 12) ? d.getHours() : d.getHours() - 12;
	  return   day+" "+monthNames[monthIndex]+" "+year + '  ' + hour + ':' + d.getMinutes() + ' ' + amOrPm;
}