
const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secsEl= document.getElementById('seconds');



const newDate=document.getElementById('date');
const submitBtn = document.getElementById("Create");
const yourCount= document.getElementById("yourCount");

const newYears= "1 jan 2021 ";




function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalTime=(Date.parse(newYearsDate)- Date.parse(currentDate))/1000;
    const days= Math.floor(totalTime/3600/24);
    const hours= Math.floor(totalTime/3600)%24;
    const mins= Math.floor(totalTime/60)%60;
    const secs= Math.floor(totalTime)%60;    

    daysEl.innerHTML= formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minsEl.innerHTML= formatTime(mins);
    secsEl.innerHTML=formatTime(secs);

    setInterval(countdown,1000);

}

function formatTime(time){
    if(time<0){
        time=0;
    }
    return time<10 ? ( `0${time}` ) : time;
}

countdown();


submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    myCount();
   
    function myCount(){
        const newYearsDate = new Date(newDate.value);
    const currentDate = new Date();
    if(newDate.value==""){
        return;
    }
    else{
        const totalTime=(Date.parse(newYearsDate)- Date.parse(currentDate))/1000;
    const days= Math.floor(totalTime/3600/24);
    const hours= Math.floor(totalTime/3600)%24;
    const mins= Math.floor(totalTime/60)%60;
    const secs= Math.floor(totalTime)%60;    

   
   
    const yourCount= document.getElementById("yourCount");
    
    yourCount.innerHTML= 
    `<div class="countdown-container">
    <div class="days-c">
        <p class="big-text" id="days">${formatTime(days)}</p>
        <span>days</span>
    </div>

    
    <div class="hours-c">
        <p class="big-text" id="hours">${formatTime(hours)}</p>
        <span>hours</span>
    </div>

    
    <div class="mins-c">
        <p class="big-text" id="mins">${formatTime(mins)}</p>
        <span>mins</span>
    </div>
    <div class="seconds-c">
        <p class="big-text" id="seconds">${formatTime(secs)}</p>
        <span>seconds</span>
    </div>


</div>`;
document.body.appendChild(yourCount);
setInterval(myCount,1000);
    }
    
    
}

});




