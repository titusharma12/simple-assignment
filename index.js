function myFunction(){
    debugger;
   let number = document.getElementById('number').value;
   let msg = document.getElementById('msg');
   number = Number.parseInt(number);
   let output =[] ; 
   if(number < 0){
      msg.innerHTML="enter a positive value";
   }
  else if(number > 0) {
    if(number%2 == 0){
   for(let i = 0 ; i <= 2 ; i++){
     number = number + 2;
    output[i] = number ;
     console.log(output);
     
   }
   msg.innerHTML = output;

  }

  else{
      for(let i = 0 ; i <= 2 ; i++){
     number = number + 2;
    //  console.log(number);
     output[i] = number ;
     console.log(output);
   }

   msg.innerHTML = output;
  }
  }

 else if(isNaN(number)){

   msg.innerHTML = "";
 }

}