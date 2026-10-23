//========================================================================================
//========================================================================================



// for (var i=0 ; i<=5 ; i++ ){

// }
// because var is a functional scope , it does not care about block scope 


// console.log(i)      //6


// --------------------------

// for( let  j=0 ; j<=5 ; j++ ){

// }                   // becase let and cons are block scope , we cant access variables out side the block scope  

// console.log(j)    //  Rfferance error :- j is not define 


// ============================================



// function sample(){
//     var name = " Bhavesh"
//     console.log(name);     // Bhavesh
// }

// sample()

// console.log(name)   // Referance error : - name is not define (in case of let , var and const )
                    


//================================================
   

// if(true){
//     var name = "Bhavesh"
//     console.log(name);   // Bhavesh
// }

// console.log(name);  // Bhavesh

// ====================================================


// if(true){
//     let name = "Bhavesh"
//     console.log(name);   // Bhavesh
// }

// console.log(name);    // Referance Error :- name is not define 


// ==================================================

// if(true){
//     const name = "Bhavesh"
//     console.log(name);   // Bhavesh
// }

// console.log(name); // Referance Error :- name is not define 



//================================================================


// function runloop(){
//     for(i=0 ; i<=5 ; i++){
//         console.log(i)  // 1 , 2 , 3, 4 , 5
//     }

//     console.log(i)    // 6
// }


// runloop()

// console.log(i)    // Referance Error : - i is not define 
                    //  Because var is a functional scope 



//======================================================================

// console.log(x,y);
// var x=10;
// var y=20;  //undefined//

// /console.log(x); //referenceError
// let x=10;

//var ;- hoisted with undefined//
//let,const:-hoisted in temprory dead zone//



let greet=function(){
  console.log("Good morning!!")
}
greet()
