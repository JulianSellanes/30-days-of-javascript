// Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties
// and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.
// Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

class PersonAccount {
    constructor(_firstName, _lastName)
    {
        this.firstName = _firstName;
        this.lastName = _lastName;

        this.incomes = [];
        this.expenses = [];
    }

    totalIncome()
    {
        const totalIncome = this.incomes.reduce((sum, cur) => sum + cur, 0);
        return totalIncome;
    }

    totalExpense()
    {
        const totalExpense = this.expenses.reduce((sum, cur) => sum + cur, 0);
        return totalExpense;
    }

    accountInfo()
    {
        console.log(`Name: ${this.firstName} ${this.lastName}\nTotal Incomes: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpense()}`);
    }

    set addIncome(income)
    {
        this.incomes.push(income);
    }

    set addExpense(expense)
    {
        this.expenses.push(expense);
    }
}

/*
const account = new PersonAccount(`Noa`, `Allen`);
account.addIncome = 1000;
account.addExpense = 500;
account.accountInfo();
*/