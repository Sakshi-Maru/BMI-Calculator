const form = document.querySelector('form')

form.addEventListener('submit', function(e){
     e.preventDefault()

     const height = parseInt(document.querySelector('#height').value)
     const weight = parseInt(document.querySelector('#weight').value)
     const result = document.querySelector('#result')

     if( height === '' || height<0 || isNaN(height)){
        result.innerHTML=`Please give valid height ${height}`;
     }
      else if( weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML=`Please give valid weight ${weight}`;
     }
     else{
        const bmi =(weight / ((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span>${bmi}</span>`;
     }
})

form.addEventListener('submit', function(e){
    const bmi = document.querySelector('bmi')

    if(bmi < 18.6){
    console.log('you are under weight')
    }
    else if(bmi >= 18.6 || bmi<=24.9){
        console.log('your weight is in normal range')
        }
    else(bmi >= 24.9){
            console.log('you are overweight weight')
            }
})