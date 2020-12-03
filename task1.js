const button = document.getElementsByClassName("btn")[0];    
const textInput = document.getElementById("salary");
const value = document.getElementsByClassName("jars");
button.addEventListener("click" , function (event)
{
    event.preventDefault();
    salary = textInput.value;
    value[0].innerText = salary * 0.55;
    value[1].innerText = salary * 0.1;
    value[2].innerText = salary * 0.05;
    value[3].innerText = salary * 0.1;
    value[4].innerText = salary * 0.1;
    value[5].innerText = salary * 0.1;
});

