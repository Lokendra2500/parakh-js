// loops -> iteration or repeat

let user = [
  { 
    id: 1, 
    name: 'Lokendra Prajapati',
  },
  { 
    id: 2, 
    name: 'Anjali',
  },
  { 
    id: 3, 
    name: 'Parakh',
  },
  { 
    id: 4, 
    name: 'Raju',
  }

]

// for loop
// for (initialization; condition, increment/decrement);
// exm: for (let i = 0; i < 10; i++);

for (let i = 0; i < user.length; i++) {
  console.log(user[i]);
}

// forEach loops ---> when we want to access data from data set.
// exm: forEach(item of dataSet)
// forEach(let item of UserList)
// ngFor="let item of dataSet"

user.forEach(item => {
  console.log(item);
})

// for...in loops --> return indexes.
for(let i in user) {
  console.log('value of i: ', i);
}

// for...of loop --> return values of array.
for (let i of user) {
  console.log('value of i: ', i);
}


// table of 2
for (let i = 1; i <= 10; i++) {
  console.log(2*i);
}

// Ques 1. 
// input array ---> [1, 1, 1, 0, 0, 0, 1, 1, .....] length = n
// 10 <= n <= 1000
// output array ---> [0, 0, 0, 1, 1, 1, 0, 0, .....]


 