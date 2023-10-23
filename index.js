
var ans = new Promise((res, rej)=>{
      
    if(false){
        return res()
    }else{
        return rej()
    }
})
ans.then(()=>{
    console.log("resolve ho gya hai")
}).catch(()=>{
    console.log("reject ho gya hai")
})
console.log(ans)