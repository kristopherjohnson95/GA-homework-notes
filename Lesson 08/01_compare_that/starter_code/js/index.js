
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);

     console.log(a);
     console.log(b);
 
     // Add comparison logic


     // Is A more than B 

     if(isNaN(a) || isNaN(b)){
      comparison = "N/A";
     } else if(a > b){

      //Is b more than A
      comparison = "c"; 

     } else if( a > b ){
      comparison = ">";


     }else if( a > b ){
      comparison = "<";

     } else if( a > b ){
      comparison = "=";
     }


     //is B more than A



     //Is A equal to B 
 


     document.querySelector('#comparison').innerText = comparison;
   };
 