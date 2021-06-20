var dys=document.getElementById('days')
var hr=document.getElementById('hours')
var min=document.getElementById('minutes')
var sec=document.getElementById('seconds')
var datetimelocal=document.getElementById('datetime-local');
var eventname=document.getElementById('event-name');
var heading=document.getElementById('heading');
var audio=document.getElementById('audio');
var timershowcontainer=document.getElementById('timer-show-container');
var lottie=document.getElementById('lottie-file');
var targetDate,todaysDate,ms,seconds,minutes,hours,days;
var intervalId;
function startTimer(){
   
  res=datetimelocal.value==='' && eventname.value===''?'please enter both':datetimelocal.value==='' || eventname.value===''?'you havent filled eithe rone':'success';
  alert(res)
  if(res=='success'){
         var fyear=datetimelocal.value.slice(0,4)
         var fmonth=datetimelocal.value.slice(5,7);
         var fday=datetimelocal.value.slice(8,10);
         var fhour=datetimelocal.value.slice(11,13);
         var fmin=datetimelocal.value.slice(14,datetimelocal.value.length);
         heading.innerHTML=eventname.value;
         datetimelocal.value='';
         eventname.value=''
         targetDate=new Date(fyear,fmonth-1,fday,fhour,fmin);
         intervalId=setInterval(countDownStart,1000);
      }
}
function resetTimer(){
   clearInterval(intervalId);
   var arr=[dys,hr,min,sec];
   arr.forEach(value=>{
      value.innerHTML=0;
   })
   audio.pause();
}
function countDownStart(){
   
   if(sec.innerHTML==1){
      clearInterval(intervalId);
      audio.play();
      timershowcontainer.style.display='none'
      lottie.style.display='block'
   }  
   todaysDate=new Date();
   ms=targetDate-todaysDate;
   if(ms<900){
      var arr=[dys,hr,min,sec];
      arr.forEach(value=>{
      value.innerHTML=0;
   })
      clearInterval(intervalId)
   }
   seconds=Math.floor(ms/1000);
   minutes=Math.floor(seconds/60);
   hours=Math.floor(minutes/60);
   days=Math.floor((ms / (1000*60*60*24)));
   dys.innerHTML=days;
   hr.innerHTML=hours;
   min.innerHTML=minutes;
   sec.innerHTML=seconds;
  
}


