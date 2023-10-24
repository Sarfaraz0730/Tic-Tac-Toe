/*
In a real -world scenario , you might need to fetch data from an API and then 
perform some operations on the received data . Let 's say you are working on a 
weather application where you need to fetch weather data from an API and then
 display it on the user interface .

Using your understanding of As ynchronous Javascript , write a function named ` 
get Weather Data ` that makes an API call to ` https :// api .weather api .com /v 
1 /current .json ?key = YOUR _API _KEY &q = London ` ( replace ` YOUR _API _KEY ` 
with your actual API key ). The function should return the current temperature
 in London .

Remember to handle any potential errors that might occur during the API call .

Please write your answer in Javascript code .
*/







// var ans = new Promise((res, rej)=>{
      
//     if(false){
//         return res()
//     }else{
//         return rej()
//     }
// })
// ans.then(()=>{
//     console.log("resolve ho gya hai")
// }).catch(()=>{
//     console.log("reject ho gya hai")
// })
// // console.log(ans)



// var ans2 = new Promise((res, rej)=>{
//     var n = Math.floor(Math.random()*10);

//     if(n <5){
//         return res()
//     }else {
//         return rej()
//     }
// })
// ans2.then(()=>{
//     console.log("resolve")
// }).catch(()=>{
//     console.log("reject")
// })

// // console.log(ans2)
// var allPromises = Promise.race([ans, ans2]).then((values) => {
//     console.log(values);
//   });
//   console.log("allPromises : ",allPromises)