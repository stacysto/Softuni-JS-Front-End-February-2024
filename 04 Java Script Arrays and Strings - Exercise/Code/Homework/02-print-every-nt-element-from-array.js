function solve (array, step){
let result =[];
   for ( let i = 0; i<array.length; i +=step){

    result.push(array[i]);
   }
   console.log(result);

}
function quickSolve(array, step){
let result = array.filter((element, index)=> index%step === 0);

console.log(result);
}

// solve(['5', 
// '20', 
// '31', 
// '4', 
// '20', '30', '25'], 
// 2
// ) ;

quickSolve(['5', 
'20', 
'31', 
'4', 
'20', '30', '25'], 
2
) ;