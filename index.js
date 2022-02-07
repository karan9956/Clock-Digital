
function updateClock(){
    // Get the current date
    let currentTime = new Date();

    // Extract hour, minute and seconds from the date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    // Pad 0 if hours, minute and second is less than 10 (single digit)
    // currentHour = (currentHour < 10 ? "0": "") + currentHour; 
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds; 

    // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHour >= 12) ? "PM" : "AM";

    // Convert railway clock to AM/PM clock
    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour==0) ?  12 : currentHour;
    

    // Insert the time string inside the DOM
    document.getElementById("hour").innerHTML = currentHour;
    document.getElementById("minute").innerHTML = currentMinutes;
    document.getElementById("second").innerHTML = currentSeconds;
    document.getElementById("ap").innerHTML = timeOfDay;

}
let settime=document.getElementById("btn_id");
settime.addEventListener('click',()=>{
    let inValue = document.getElementById("setWakeupTime").value;
    let inValue1 = document.getElementById("setLunchTime").value;
    let inValue2 = document.getElementById("setnapTime").value;
    let hr = new Date().getHours();
    if(inValue==hr){
        document.getElementById("wake_time_is").style.display="block";
        document.getElementById("wake_title_here").style.display="block";
    }
    else if(inValue1==hr){
        document.getElementById("lunch_time_is").style.display="block";
        document.getElementById("lunch_title_here").style.display="block";
    }
    else if(inValue2==hr){
        document.getElementById("snap_time_is").style.display="block";
        document.getElementById("sleep_title_here").style.display="block";
    }
});