
function suma(){
    valor1 = document.getElementsByName("num1")[0].value; 
    valor2 = document.getElementsByName("num2")[0].value;
    sum=parseInt(valor1)+parseInt(valor2); 
    alert("El resultado es "+sum);
    }
function multi(){
    valor1 = document.getElementsByName("num1")[0].value; 
    valor2 = document.getElementsByName("num2")[0].value; 
    prod=parseInt(valor1)*parseInt(valor2); 
    alert("El resultado es "+prod);
    }
function divi(){
    valor1 = document.getElementsByName("num1")[0].value; 
    valor2 = document.getElementsByName("num2")[0].value; 
    div=parseInt(valor1)/parseInt(valor2); 
    alert("El resultado es "+div);
    }
function res(){
    valor1 = document.getElementsByName("num1")[0].value; 
    valor2 = document.getElementsByName("num2")[0].value; 
    rest=parseInt(valor1)-parseInt(valor2); 
    alert("El resultado es "+rest);
    }