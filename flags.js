let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send()

request.onload=function(){
    if (request.status==200){
        let f= JSON.parse(request.responseText)
         f.map((c)=>{
             console.log(c.flags.png)
         });
    }
    else{
             console.log("Request not success")
        }
        request.onerror=function(){
            console.log(error)
        }
}