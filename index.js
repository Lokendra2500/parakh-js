let a = [1, 3, 5, 6, 7, 9]
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
// filter -> return array by some condition.
// user --> 2
console.log(a.filter(item => item > 3));
console.log(user.filter(item => item.id === 2))

// map
console.log(a.map(item => item+2));

// reduce
console.log(a.reduce((acc, curr) => acc+curr))
