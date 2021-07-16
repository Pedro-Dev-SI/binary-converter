const convtodec = () =>{

   event.preventDefault();
   
   const binValue = document.querySelector("#bin-input").value
   binValue.toString()

   //Validation
   for(var i = binValue.length-1; i >= 0; i--) {
      if(binValue[i] !== '1' && binValue[i] !== '0'){
         alert('Invalid binary number')
         return;
      }

   }

   const dec = parseInt(binValue, 2)
   document.querySelector('#dec-output').value = dec

}

const convtobin = () => {

   event.preventDefault()

   let decValue = document.querySelector('#dec-input').value

   let bin = ""

   while(decValue > 0){

      bin = decValue%2 + bin
      decValue = Math.floor(decValue / 2)
      
   }

   document.querySelector('#bin-output').value = bin

}