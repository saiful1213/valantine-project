function getValueInput (inputId, value){
   const fieldtId = document.getElementById(inputId);
   const inputValuestring = fieldtId.value;
   const inputValue = parseInt(inputValuestring) * value;
   fieldtId.value = '';
   return inputValue; 
}

function setInnerText (id, value){
   document.getElementById(id).innerText = value;
}

document.getElementById('choco-btn').addEventListener('click', function () {
   const inputValue = getValueInput('field-input', 200);
   setInnerText ('choco-amount', inputValue);
   total();
})

document.getElementById('rose-btn').addEventListener('click', function () {
   const roseValue = getValueInput('rose-input', 100);
   setInnerText ('rose-amount', roseValue);
   total();
})

document.getElementById('diary-btn').addEventListener('click', function () {
   const diaryValue = getValueInput('diary-input', 150)
   setInnerText ('diary-amount', diaryValue);
   total();
})

function total(){
   const chocolate = getInnerText('choco-amount');
   const rose = getInnerText('rose-amount');
   const diary = getInnerText('diary-amount');
   const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);
   setInnerText('total-amount', totalSum);
}

function getInnerText (id){
   const innerTextString = document.getElementById(id).innerText;
   return innerTextString;
}

document.getElementById('apply-btn').addEventListener('click', function(){
   const promoFieldString = document.getElementById('promo-input').value;
   document.getElementById('promo-input').value = '';
   if(promoFieldString == 'disc30'){
      const totalAmount = document.getElementById('total-amount').innerText;
      const discount = parseInt(totalAmount) * 0.3;
      const remaining = totalAmount - discount;
      setInnerText('all-cost', remaining);
   }
   else{
      const totalAmount = document.getElementById('total-amount').innerText;
      setInnerText('all-cost', totalAmount);
   }
})