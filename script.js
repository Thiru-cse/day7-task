//Question 1
var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    //population is less than 1 lakhs
    var res = result.filter((ele)=>ele.population<100000);
    console.log(res);
}