const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
  
// Find the person who has many skills in the users object.

/*
let skilledPerson = null;

for(const user in users)
{
  if(skilledPerson === null || users[user].skills.length > users[skilledPerson].skills.length)
  {
    skilledPerson = user;
  }
}
console.log(skilledPerson);
*/

// Count logged in users, count users having greater than equal to 50 points from the following object.

/*
let loggedCount = 0;
let greaterCount = 0;

for(const user in users)
{
  if(users[user].isLoggedIn === true)
  {
    loggedCount++;
  }

  if(users[user].points >= 50)
  {
    greaterCount++;
  }
}
console.log(`Logged in users: ${loggedCount}`);
console.log(`Users having >= 50 points: ${greaterCount}`);
*/

// Find people who are MERN stack developer from the users object

/*
let developers = [];

for(const user in users)
{
  if(users[user].skills.includes(`MongoDB`) === true &&
    users[user].skills.includes(`Express`) === true &&
    users[user].skills.includes(`React`) === true &&
    users[user].skills.includes(`Node`) === true)
  {
    developers.push(user);
  }
}
console.log(developers);
*/

// Set your name in the users object without modifying the original users object

/*
let copy = Object.assign({}, users);
copy.Noa = {
  email: 'noa.com',
  skills: ['JavaScript', 'MongoDB'],
  age: 20,
  isLoggedIn: false,
  points: 40
}
console.log(copy);
*/

// Get all keys or properties of users object

//console.log(Object.keys(users));

// Get all the values of users object

//console.log(Object.values(users));