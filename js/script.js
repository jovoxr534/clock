const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const h = document.querySelector('.h')
const m = document.querySelector('.m')
const s = document.querySelector('.s')
function clock() {
    let soat = new Date().getHours()
    let min = new Date().getMinutes()
    let sec = new Date().getSeconds()
    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${min * 6}deg)`
    h.style.transform = `rotate(${soat * 30}deg)`
    hours.innerHTML = soat
    minutes.innerHTML = min
    if(minutes.innerHTML < 10) {
        minutes.innerHTML = '0' + minutes.innerHTML
    }
    if(hours.innerHTML < 10) {
        hours.innerHTML = '0' + hours.innerHTML
    }
    setTimeout(function() {
        clock()
    }, 1000);
}

clock()

const tabsItem = document.querySelectorAll('.tabsItem')
const tabsContentItem = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function() {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}
const stopwatchBtn = document.querySelector('.stopwatch__btn')
const tabsLinkSpan = document.querySelector('.tabsLink__span')
const stopwatchSeconds= document.querySelector('.stopwatch__seconds')
const stopwatchMinutes= document.querySelector('.stopwatch__minutes')
const stopwatchHours= document.querySelector('.stopwatch__hours')
function sekundamer(){
    if(stopwatchBtn.innerHTML == 'stop'){
        stopwatchSeconds.innerHTML++
      if (stopwatchSeconds.innerHTML>59){
        stopwatchSeconds.innerHTML=0
        stopwatchMinutes.innerHTML++
       if (stopwatchMinutes.innerHTML>59){
        stopwatchMinutes.innerHTML=0
        stopwatchHours.innerHTML++
      }}
       setTimeout(function() {
     sekundamer()
  }, 1000); 
  }
}
stopwatchBtn.addEventListener('click' , function(){
    if (stopwatchBtn.innerHTML == 'start'){
        stopwatchBtn.innerHTML = 'stop'  
        tabsLinkSpan.classList.add('active') 
             setTimeout(function() {
     sekundamer()
  }, 1000); 

    } else if (stopwatchBtn.innerHTML == 'stop') {
        stopwatchBtn.innerHTML = 'clear'
        tabsLinkSpan.classList.remove('active')
        tabsLinkSpan.classList.add('active_clear')
    } else {
        stopwatchBtn.innerHTML = 'start'
        tabsLinkSpan.classList.remove('active_clear')
        stopwatchSeconds.innerHTML= 0  
        stopwatchMinutes.innerHTML = 0
        stopwatchHours.innerHTML = 0
    }
})




