//alert("Hello world");

//let message = "Hello world";
//alert(message);
//message = "Hallo Welt";
//alert(message);

const Link_Color = "#ff000";
console.log("Link bitte in der Farbe", Link_Color);

let highscore = 520233;
console.log(highscore / 10);

let firstname = "John";
let lastname = "Smith";
console.log("Name: ", firstname, lastname);

let fullname = 'Jeffrey "The Dude" Lebowski';
console.log(fullname);

let template = `Dein Highscore sind ${highscore} Punkte`;
console.log(template);

let isOver18 = true;
console.log(isOver18);

let age = 19;
console.log("über 18", age > 18);

let participants = ["John", "Jane", "Max"];
console.log(participants);
console.log("Einträge im Array:", participants.length);
console.log(participitants[1]);

let gameHighscores = [2099, 3010, 3333, 5000];
console.log(gameHighscores);

let user = {
    firstname: "John";
    lastname: "Smith";
    age: 25;
};

console.log(user);
console.log(user.firstname);
user.highscore = 200;
user["highscore ever"] = 400;
console.log(user);

let a = 2;
let b = 4;
console.log(a+b)
console.log(b/(a-1));
a++;
console.log(a);
