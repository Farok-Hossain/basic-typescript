var myName = "Farok Hossain";
var age;
age = 25;
var RussiaIsPowerful = true;
var studentId = 25654;
studentId = "web-4:25654";
var studentId2 = 24562;
studentId2 = "web-4:24562";
var person = {
    name: "Farok Hossain",
    age: 25,
    hobby: "watching movie"
};
var person2 = {
    name: "farok hossain",
    age: 25
};
var person3 = {
    name: "AFS",
    age: 26
};
var person4 = {
    name: "farok",
    age: 24,
    hobby: "sleeping"
};
var person5 = {
    name: "hossain",
    age: 23
};
// Array
var numbers = [42, 54, 2, 1, 25, 26, 415, 45];
var numbers2 = [
    41,
    25,
    12,
    15,
    35,
    "bangladesh",
    true,
];
var persons = [
    {
        name: "farok",
        age: 25,
        hobby: "watching movie"
    },
    {
        name: "Hossain",
        age: 25
    },
    {
        name: "farok",
        age: 23
    },
];
// functions
var greeting = function (name) {
    console.log("Hello ".concat(name));
};
greeting("Farok Hossain");
var add = function (a, b) {
    return a + b;
};
var result = add(11, 25);
console.log(result);
// const introduce1 = ({name, age} : Person) => {
// here is destructing... introduce1 & introduce both are same
// }
var introduce = function (person) {
    console.log("Hello, my name is ".concat(person.name, ", and I'm ").concat(person.age, "! & my hobby is ").concat(person.hobby));
};
introduce({
    name: "farok",
    age: 25,
    hobby: "watching movie"
});
var gameDirection = "left";
var getArray = function (arr) {
    return arr;
};
var myResult = getArray(["afs"]);
console.log(myResult);
// generics type
var getArray2 = function (arr) {
    return arr;
};
getArray2(["sdfsdfj"]);
getArray2([12, 15, 245]);
// enum
var week;
(function (week) {
    week["Sat"] = "SAT";
    week["Sun"] = "SUN";
    week["Mon"] = "MON";
    week["Tue"] = "TUE";
    week["Wed"] = "WED";
    week["Thu"] = "THU";
    week["Fri"] = "FRI";
})(week || (week = {}));
console.log(week.Sun);
