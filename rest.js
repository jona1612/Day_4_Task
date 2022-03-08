let request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all")
request.send()

request.onload=function(){
    if (request.status==200){
        let con= JSON.parse(request.responseText)
        con.map((c) => {

            console.log("COUNTRY NAME - " + c.name.official)
            console.log("REGION - " + c.region)
            console.log("SUB REGION - " + c.subregion)
            console.log("POPULATION - " + c.population)
            
        });
    }
    else
    {
        request.onerror = function () {
            console.log(error)
        }
    }
}