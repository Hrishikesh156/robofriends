console.log("Start");

function logiUser(email,pswd,callback){
    setTimeout(()=>{
        console.log("Now we have the data");
        callback({userEmail:email});

    },5000);
}
const user = logiUser("hrishi@gmail.com","hrishi",user=>{
    console.log(user);
});
console.log("End");