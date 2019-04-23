'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) { //true ||...
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i=0; i<2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } 
            else {
                i = i -1;   
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed(); //возвращает строковое значение!
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i=1; i<4; i++) {
            let q = prompt("Статья необязательных расходов?", '');
        
            if (typeof(q) === 'string' && typeof(q) != null && q != '' && q.length < 50) {
                appData.optionalExpenses[i] = q;
            } 
            else {
                i = i -1;   
            }
        }
    },
    chooseIncome: function() {
        

        for(let i=0; i<1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

            console.log(typeof(+items));

            if ((typeof(items)) === 'string' || (typeof(items)) != null && items != '' && items != +items) {
                console.log(typeof(+items));
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
            } else {
                i--;
            }
        }
       
        let arr = appData.income;
        arr.forEach((item, i) => {
            console.log('Способы доп. заработка: ' + (i+1) + ": " + item + ";");
        });    
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " +'\n' + appData[key]);
}
