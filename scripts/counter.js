'use strict'

let counter = 1000;

for(let i = 0; i < counter; i++){
  for(let j = 0; j < counter; j+=12){
    if(i < 100000){
      console.log(`Task Progress: ${i/10}%`)
    }
  }
}

console.log('Task Complete!');
