const input = "user(gavin) action(login) status(success)"

let arr=[]

for(let j=0 ; j<input.length ; j++){
  if(input[j]=="(" || input[j]==")"){
    arr.push(j);
  }
}

console.log(arr)

let final = []

for(let k=0 ; k<arr.length ; k+=2){
  final.push(input.substring(arr[k]+1 , arr[k+1]))
}



console.log(final)