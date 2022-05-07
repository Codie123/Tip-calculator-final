const userInput = document.getElementById('user-bill');
const tipPercentage = document.querySelectorAll('.btn-grid #tip');
const customeTip = document.getElementById('cust-tip');
const userCount = document.getElementById('user-count');
const tipAmount = document.getElementById('tip-amount');
const totalAmount = document.getElementById('total-amount')
const reset = document.getElementById('reset')

// custome
let errorMessage = document.getElementById('error');

let bill=userCount
let tip=tipPercentage
let peopleCount=userCount

userInput.addEventListener('input',()=>{
    if(parseFloat(userInput.value)){
        bill = parseFloat(userInput.value)
    }
    tipCalculator(bill,tip,peopleCount)
})

tipPercentage.forEach(x =>{
    x.addEventListener('click',()=>{
        tipPercentage.forEach(y=>{
            if(y.classList.contains('active')){
                y.classList.remove('active')
            }
        })
    x.classList.toggle('active')
    tip = x.getAttribute('value')
    console.log('hello friend')
    tipCalculator(bill,tip,peopleCount)  
    })
})
customeTip.addEventListener('input',()=>{
    if(parseFloat(customeTip.value)){
        tip = parseFloat(customeTip.value);
        console.log(tip)
    }
    tipCalculator(bill,tip,peopleCount)
})
userCount.addEventListener('keyup',()=>{

    if(parseInt(userCount.value)){
        peopleCount = parseFloat(userCount.value);
      
    }
    tipCalculator(bill,tip,peopleCount)
})

function tipCalculator(bill,tip,count){
    if(userCount.value !=0 && userInput.value !=0){

    let tipPerPerson = ((tip*bill)/100) /count
    let totalamount = (parseInt(bill)+parseInt(tip)) /count

    tipAmount .innerText = "$"+ tipPerPerson.toFixed(2);
    totalAmount.innerText = "$"+ totalamount.toFixed(2);

        
       
            reset.classList.add('focus')

    
    errorMessage.classList.remove('active')
    userCount.classList.remove('error')
    }else{
        errorMessage.classList.add('active')
        userCount.classList.add('error')
    }
}


reset.addEventListener('click',()=>{

    bill="0"
    tip="0"
    peopleCount="0"

    userInput.value=""
    customeTip.value=""
    userCount.value=""
    tipAmount.innerHTML = "$0.00"
    totalAmount.innerHTML = "$0.00"
    tipPercentage.forEach(x=>{
        if(x.classList.contains('active')){
            x.classList.remove('active')
        }
    })
    
    reset.classList.remove('focus')
    
    tipCalculator(bill,tip,peopleCount)

})