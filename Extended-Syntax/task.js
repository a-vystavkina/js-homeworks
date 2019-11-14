
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
    let array = [];
    if (discriminant < 0) {
      let x = 'Корней нет';
      array.push(x);
    } else if(discriminant === 0) {
        let x1 = -b / 2*a;
        array.push(x1);
    } else if(discriminant > 0) {
        let x2 = -b + Math.sqrt(discriminant)/ 2*a,
            x3 = -b - Math.sqrt(discriminant)/ 2*a;
        array.push(x2, x3);
    }
    return array;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let sum = 0;
    if (marks.length > 5){
        marks.splice(5);
        console.log('Количество оценок больше 5');
    }
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return(sum / marks.length);
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let birthDate = new Date(dateOfBirthday),
        today = new Date(),
        age = today.getFullYear() - birthDate.getFullYear();

    let result = (age <= 18) ? `Сожалею, ${name}, но я не могу вам продать алкоголь. 
    Зато могу предложить вам замечательный клюквенный компот!` : `Не желаете ли олд-фэшн, ${name}?`;
    console.log(result);
    return result;
}
