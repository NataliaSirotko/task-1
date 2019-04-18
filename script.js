let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budjet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let shop = prompt("Введите обязательную статью расходов в этом месяце"),
    cost = prompt("Во сколько обойдется?");

prompt("Введите обязательную статью расходов в этом месяце");
prompt("Во сколько обойдется?");

appData.expenses[shop] = cost;

alert(money/30);
