// // question 1(for each)

// let words = ["eli","beli","bom"];

// words.forEach((word,index)=>{
//     console.log(`${word} ${index}`);
// });



// // question 2(for each)

// let numbers = [34,56,78,8,2];

// numbers.forEach((number,i)=>{
//     console.log(`the element is ${number} , and the index is ${i}`);
// })




// // question 3(for each)

// let someNumbers = [34,56,78,8,2,1];

// someNumbers.forEach((number)=>{
//     if(number%2 == 0){
//         console.log("yes");
//     }
//     else{
//         console.log("no");
//     }
// });




// // question 1(for of)
// let objects = [{name:"eli",age:25},
// {name:"beli",age:13},
// {name:"bomba",age:47},
// {name:"klat",age:79}];


// for(const obj of objects){
//     console.log(obj);
// }




let object = {name:"eliyahu",
age:34,
live:true,
place:"netanya"};

for(const key in object){
    console.log(`${key} - ${object[key]}`)
}






// home work
// question 1

// let reports = [{headline:"bomba klat",writer:"eliyahu",date:"2021"},
//     {headline:"joro joro",writer:"wiz kid",date:"2016"},
//     {headline:"ye",writer:"burna boy",date:"2018"},
//     {headline:"gangam style",writer:"chin chan cho",date:"2010"}];


// a

// reports.forEach((report)=>{
//     console.log(report);
// })

// b

// for(const report of reports){
//     console.log(report);
// }


// question 2

let objects = [{name:"eliyahu",age:25,place:"netanya"},
{name:"eli",age:25,place:"net"},
{name:"eliya",age:25,place:"netany"}];

for (let i = 0; i < objects.length; i++) {
    for(const key in objects[i]){
    console.log(`${key} ${objects[i][key]}`);
}
}
    


// question 3

let books = [{name:"bomba klat",writer:"eliyahu",price:2021},
    {name:"joro joro",writer:"wiz kid",price:2016},
    {name:"ye",writer:"burna boy",price:2018},
    {name:"gangam style",writer:"chin chan cho",price:2010}];



    // a
books.forEach((book)=>{
    console.log(book);
})    

// b
books.forEach((book)=>{
    console.log(book.writer);
})




// question 4

let numbers = [34,46,78,34,68,34];

// a
let result = 0;
numbers.forEach((number)=>{
    result += number
})
console.log(result);


// b
let answer = 0;
for(const number of numbers){
    answer += number;
}
console.log(answer);