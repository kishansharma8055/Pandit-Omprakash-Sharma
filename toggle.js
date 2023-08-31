// document.write("hello world");
// document.getElementById("btn").addEventListener("click", function () {
//     alert("Form Successfully Submit")

// });

// function add(x, y) {
//     var sum = x + y;
//     document.getElementById("demo").innerHTML = sum;
// }
// add(5, 6);

// var person = {
//     name: "kishan sharma",
//     age: 19,
//     hobbies: ["coding", "cricket", "gaming"],
//     married: false,
//     details: function () {
//         alert(this.name + " " + this.age + " year old");
//     }
// }
// document.write(person.age);

// var fruits = {
//     mango: {
//         color: "yello",
//         taste: "sweet"
//     },
//     apple: {
//         color: "red",
//         taste: "sweet"
//     }
// }
// document.write(fruits.mango.color);

// take input from user
// function myfun() {
//     let username = window.prompt("hello welcome to my website");
//     let str = "nice to meet you " + username + "! welcome bask.";
//     alert(str);
// }

// length of a string
// let str = "kishan sharma";
// let strlen = str.length;
// document.write(strlen);

// index of a string
// let str = "kishan sharma";
// let x = str[3];
// let strpos = str.indexOf("sha");
// let strpos2 = str.lastIndexOf("sha");
// let strpos3 = str.search("sha");
// document.write(x);
// document.write(strpos);
// document.write(strpos2);
// document.write(strpos3);

// string operation
// let str = "kishan sharma";
// let str1 = str.slice(2, 6);
// let str2 = str.substring(2, 6);
// let str3 = str.substr(3, 9);
// let str4 = str.replace("kishan", "deepak");
// // all white space are remove
// let str5 = str.trim(str);
// let str6 = str.toUpperCase();
// let str7 = str.toLowerCase();
// let str8 = str.concat(" ", "deepak");
// document.write(str1);
// document.write(str2);
// document.write(str3);
// document.write(str4);
// document.write(str5);
// document.write(str6);
// document.write(str7);
// document.write(str8);

// for dark and light website
const toggle_btn = document.querySelector('#checkbox');
console.log(toggle_btn);
toggle_btn.addEventListener('change', () => {
    if (toggle_btn.checked) {
        console.log("toggle button chacked");
        document.body.classList.add('dark-mode')
    }
    else {
        document.body.classList.remove('dark-mode')
    }
});
// if (toggle_btn.checked) {
//     document.body.classList.add('dark-mode')
// }
// else {
//     document.body.classList.remove('dark-mode')
// }