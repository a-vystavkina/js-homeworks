
'use strict'

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    let discriminant = b**2 - 4*a*c;
    let x = [];
    if (discriminant < 0) {
      return x;
    } else if(discriminant == 0) {
      x = [-b / 2*a];
    } else if(discriminant > 0) {
      x = [(-b + discriminant)/ 2*a, (-b - discriminant)/ 2*a];
    }
    return x;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let sum = 0;
    let averageMark = [];
    for (i = 0; i <= averageMark.length; i++) {
    	if(averageMark.length > 4) {
           averageMark.splice(5);
           console.log(averageMark);
    	} 
        sum += averageMark[i];
        let arithmeticMean = sum / averageMark.length;
    }
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let year = new Date().getFullYear();
    let result = (year >= 2001) ? `Сожалею, ${name}, но я не могу вам продать алкоголь. 
    Зато могу предложить вам замечательный клюквенный компот!` : `Не желаете ли олд-фэшн, ${name}?`;
    return result;
    console.log(result);
}