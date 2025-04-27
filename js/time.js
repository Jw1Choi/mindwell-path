
function toDate(yyyy, mm, dd)
{
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();

var resultDate = new Date(yyyy+year, month+mm, day+dd);

year = resultDate.getFullYear();
month = resultDate.getMonth() + 1;
day = resultDate.getDate();

if (month < 10)
    month = "0" + month;
if (day < 10)
    day = "0" + day;

return year + "." + month + "." + day;
}