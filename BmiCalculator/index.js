const form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
        alert("please give a valid height");
    }
    if(weight === '' || weight < 0 || isNaN(weight)){
        alert("please give a valid height");
    }else {
       const bmi =  (weight / ((height*height)/10000)).toFixed(1)
       if(bmi< 18.6){
        results.innerHTML = `<span> ${"under weight" } :- ${bmi}</span>`;
         
       }
       else if(  bmi === 18.6 || bmi <24.9){
        results.innerHTML = `<span> ${"Normal" } :- ${bmi}</span>`;
       }
       else{
        results.innerHTML = `<span> ${"Overweight" } :- ${bmi}</span>`;
       }
       
    }
});