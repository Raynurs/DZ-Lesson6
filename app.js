let input = document.querySelector('input')
let buttonPlus = document.querySelector('.btn-plus')
let buttonMinus = document.querySelector('.btn-minus')
let inputNumber = parseInt(input.placeholder)




if(inputNumber < 10){
    document.querySelector('.btn-plus').addEventListener('click', function(){
        inputNumber += 1
        if(inputNumber <= 10){
            input.placeholder = inputNumber
            console.log(inputNumber);
        }
    })
}

if (inputNumber > -10) {
    document.querySelector('.btn-minus').addEventListener('click', function() {
      inputNumber -= 1
      if (inputNumber >= -10) {
        input.placeholder = inputNumber;
        console.log(inputNumber);
      }
    });
  }
  
  
  
  
  
  
  
