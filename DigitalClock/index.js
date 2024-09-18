const clock = document.getElementById('clock')



setInterval(()=>{
    //print in cosole
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
},1000);