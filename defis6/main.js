const check = document.getElementById("check") ;

check.addEventListener("click", function() {
    let year = document.getElementById("year").value ;
    if(year%400 == 0 || (year%4 == 0 && year%100 != 0))
    {
        result.innerHTML = year + 'is a leap year'
    }
    else
    {
        result.innerHTML = year + 'is not a leap year'
    }

});

