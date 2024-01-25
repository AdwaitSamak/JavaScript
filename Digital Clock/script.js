const time=document.querySelector('#clock')

setInterval(()=>{
    const newtime=new Date().toLocaleTimeString()
    time.innerHTML=newtime;
},1000)