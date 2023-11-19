// 16 дз

const a = 8;

if (a < 10){
    alert('Константа меньше 10')
}else{alert('Константа больше 10')}

let nameBD = 'Iznaur';
let passwordBD = '1115';
let emailBD = 'azamatov@iz';

let name = prompt('Логин?');
let password = prompt('Пароль?');
let email = prompt('Почта?');

if (nameBD == name && passwordBD == password && emailBD == email) {
    alert('Здраствуйте!')
    
}else{
    alert('Вы совершили ошибку при вводе данных!')
    console.log('Log in error');
}

let x = 10; y = 7; x > y ? alert('x больше y') : alert('x меньше y');

let num = 10;
if (num % 2 == 0){
   console.log('число четное'); 
}else{
    console.log('число не четное');
}

let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let num3 = parseFloat(prompt("Введите третье число:"));

if (num1 >= num2 && num1 >= num3) {
  console.log(num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2);
} else {
  console.log(num3);
}

// 17 дз

function num(){
    const a = 8
    if (a < 10) {
        console.log('Константа меньше 10');
    }else{console.log('Константа не меньше 10');}
}
num()
    function fn(){
        alert('Привет мир!');
    }
    fn()
function jm(){
   console.log('Java Script');
}
 jm()

const text = "Lorem ipsum dolor sit amet";
function checkTextContent(str) {
  if (str.toLowerCase().includes("lorem")) {
    console.log("У вас ошибка в тексте");
  } else {
    console.log($,{str});
  }
}
checkTextContent(text);
//  18 дз
 let man = {
    name: "Азаматов",
    famile: "Изнаур",
    age: 16,
    rost: 182,
    login: "azamatov07",
    passwoed: "Az.11152007",
    summa_deneg_account: 10000
  };
console.log(man);

const введенныйПароль = "Az.11152007"; 

if (введенныйПароль === man.пароль) {
  console.log(`Добро пожаловать, ${man.name} ${man.famile}. Ваш логин ${man.login}`);
} else {
  console.log(`Указанный пароль ${введенныйПароль} не верен. Попробуйте еще раз`);
}

let num = 0;
while (num < 3) {
  console.log(`4ucno: ${num}`);
  num++;
}


