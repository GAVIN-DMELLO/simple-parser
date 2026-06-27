const complexThing = "www.amazon.in"


let dotOccurance = [];

for(let p=0 ; p<= complexThing.length ; p++){
  if(complexThing[p] == ".")
    dotOccurance.push(p);
}



console.log(dotOccurance.length)

let a="";
for(let i=0 ; i<dotOccurance[0] ; i++){
  a += complexThing[i];
}

let b = "";
for(let j=dotOccurance[0] + 1 ; j<dotOccurance[1] ; j++){
  b += complexThing[j];
}

let c="";
for(let k=dotOccurance[1]  + 1 ; k<complexThing.length ; k++){
  c += complexThing[k];
}

console.log(a);
console.log(b);
console.log(c);

const obj = {
  subDomain : a , 
  secondSubDomain : b ,
  tld : c
}

console.log(obj);

console.log(complexThing.length)
