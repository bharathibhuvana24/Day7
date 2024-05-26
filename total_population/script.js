var reques = new XMLHttpRequest();
reques.open("GET","https://restcountries.com/v3.1/all");
reques.send();
reques.onload=function(){
    var resul=JSON.parse(reques.response);
    var total = resul.reduce((acc,curr) =>{
        return acc+curr.population;
    } ,0);

    console.log(total);
 
}