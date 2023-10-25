// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

/*
const personAccount = {
    firstName: `Noa`,
    lastName: `Allen`,
    incomes: {
        salary: 1000,
        salary2: 2000,
    },
    expenses: {
        food: 200,
        cloth: 200,
        house: 500
    },

    totalIncome: function(){
        let total = 0;
        for(const income in this.incomes)
        {
            total += this.incomes[income];
        }
        return total;
    },
    totalExpense: function(){
        let total = 0;
        for(const expense in this.expenses)
        {
            total += this.expenses[expense];
        }
        return total;
    },
    accountInfo: function(){
        return `${this.firstName} ${this.lastName}`
    },
    addIncome: function(type, amount){
        this.incomes[type] = amount;
        return this.incomes[type];
    },
    addExpense: function(type, amount){
        this.expenses[type] = amount;
        return this.expenses[type];
    },
    accountBalance: function(){
        return `Balance`;
    },
}
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
console.log(personAccount.addIncome(`salary3`, 1000));
console.log(personAccount.addExpense(`dog`, 100));
console.log(personAccount.accountBalance());
*/

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [
        { userId: 'fg12cy', rate: 5 }
        ],
        likes: ['fg12cy']
    }
];

// Imagine you are getting the above users collection from a MongoDB database.
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// Create a function called signIn which allows user to sign in to the application

/*
const signUp = (username, email, password) =>
{
    for(const user of users)
    {
        if(user.username == username)
        {
            console.log(`Username already exists`);
            return;
        }
        if(user.email == email)
        {
            console.log(`Email already exists`);
            return;
        }
    }

    let id = ``;
    let randomIndex = 0;
    let characters = `0123456789abcdefghijklmnopqrstuvwxyz`;
    for(let i = 0; i < 6; i++)
    {
        randomIndex = Math.floor(Math.random() * ((characters.length - 1) - 0 + 1) + 0);
        id += characters[randomIndex];
    }

    const now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let min = now.getMinutes();

    let time = `${day}/${month}/${year} ${hour}:${min}`;

    let data = {
        _id: id,
        username: username,
        email: email,
        password: password,
        createdAt: time,
        isLoggedIn: false
    };
    users.push(data);
}
signUp(`Hi`, `hi@brook.com`, 1111);
console.log(users);

const signIn = (email, password) =>
{
    for(const user of users)
    {
        if(user.email === email && user.password === password)
        {
            if(user.isLoggedIn === true)
            {
                console.log(`You are already in`);
                return;
            }
            else
            {
                user.isLoggedIn = true;
                console.log(`Welcome`);
                return;
            }
        }
    }

    console.log(`Incorrect email or password`);
}
signIn(`hi@brook.com`, 1111);
console.log(users);
signIn(`hi@brook.com`, 1111);
*/

// The products array has three elements and each of them has six properties.
// Create a function called rateProduct which rates the product
// Create a function called averageRating which calculate the average rating of a product

/*
const rateProduct = (name, userId, rate) =>
{
    for(const product of products)
    {
        if(product.name === name)
        {
            let rating = {
                userId: userId,
                rate: rate
            };
            console.log(rating);
            product.ratings.push(rating);
            break;
        }
    }
}
rateProduct(`TV`, `v83nd7`, 5);
rateProduct(`Laptop`, `v3npxv`, 2);
console.log(products);

const averageRating = (name) =>
{
    for(const product of products)
    {
        if(product.name === name)
        {
            let sum = 0;
            for(const rate of product.ratings)
            {
                sum += rate.rate;
            }

            let avg = sum / product.ratings.length;
            console.log(`Average rate: ${avg}`);
            break;
        }
    }
}
averageRating(`TV`);
*/

// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

/*
const likeProduct = (name, userId) =>
{
    for(const product of products)
    {
        if(product.name === name)
        {
            let index = product.likes.indexOf(userId);

            if(index === -1)
            {
                product.likes.push(userId);
                console.log(`Like added`);
            }
            else
            {
                product.likes.splice(index, 1);
                console.log(`Like removed`);
            }
            
            break;
        }
    }
}
likeProduct(`TV`, `395847`);
console.log(products);
likeProduct(`TV`, `395847`);
console.log(products);
*/