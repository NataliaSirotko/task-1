let start = document.getElementById('start'),
    budgetV = document.querySelector('.budget-value'),
    dayBudgetV = document.querySelector('.daybudget-value'),
    levelV = document.querySelector('.level-value'),
    expensesV = document.querySelector('.expenses-value'),
    optionalV = document.querySelector('.optionalexpenses-value'),
    incomeV = document.querySelector('.income-value'),
    monthSavV = document.querySelector('.monthsavings-value'),
    yearSavV = document.querySelector('.yearsavings-value');
    inputs = document.querySelectorAll('.expenses-item'),

    submit = document.getElementsByTagName('button')[0],
    submitOpt = document.getElementsByTagName('button')[1],
    btnCount = document.getElementsByTagName('button')[2],
    inputsOpt = document.querySelectorAll('.optionalexpenses-item'),

    chooseIncome = document.querySelector('.choose-income'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');