(()=>{"use strict";const e=e=>{document.querySelector(".location .city").innerText=`${e.name}, ${e.sys.country}`;let n=document.querySelector(".current .temp");n.innerHTML=Math.round(e.main.temp)+"<span>°c</span>",n.addEventListener("click",(function(){let t=document.querySelector(".current .temp span"),r=Math.round(e.main.temp);console.log(t.innerText),"°c"===t.innerText?n.innerHTML=9*r/5+32+"<span>°f</span>":n.innerHTML=r+"<span>°c</span>"}));let t=document.querySelector(".current .weather");t.innerText=e.weather[0].main,document.querySelector(".hi-low").innerText=`${e.main.temp_min}°c / ${e.main.temp_max}°c`;let r=document.querySelector(".current .icon");"Clouds"===t.innerText?r.innerHTML='<img src="../dist/img/cloudy.svg">':"Clear"===t.innerText?r.innerHTML='<img src="../dist/img/day.svg">':"Rain"===t.innerText?r.innerHTML='<img src="../dist/img/rainy-6.svg">':"Mist"===t.innerText?r.innerHTML='<img src="../dist/img/snowy-1.svg">':r.innerHTML='<img src="../dist/img/day.svg">'};(window.onload=function(){let e=new Date;var n;document.querySelector(".location .date").innerText=`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(n=e).getDay()]} ${n.getDate()} ${["January","February","March","April","May","June","July","August","September","October","November","December"][n.getMonth()]} ${n.getFullYear()}`})();const n=document.querySelector(".search-box");n.addEventListener("keypress",(function(t){var r;13===t.keyCode&&(r=n.value,fetch(`https://api.openweathermap.org/data/2.5/weather?q=${r}&units=metric&APPID=74b515b6adf05a133d5641ca29abaa14`,{mode:"cors"}).then((e=>e.json())).then(e))}))})();