'use strict';
let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let expensesProduct = prompt('Введите обязательную статью расходов в этом месяце', ''); 
let expensesCost = prompt('Во сколько обойдется?', '');
let expenses = {
    expensesProduct: expensesCost
}
let optionalExpenses;
let income;
let appData = {
    moneyData: money,
    timeData: time,
    expensesData: expenses,
    optionalExpensesData: optionalExpenses,
    incomeData: income,
    savings: false
}
alert(money/30);