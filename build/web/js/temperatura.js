/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
 function calcularTemperatura(oper)
{
    let a = parseFloat(document.getElementById("txtNumero1").value);
    let resp = 0;


    switch (oper)
    {
        case 1:
            resp = calcularGradosCentigradosFarenheit(a);
            break;

        case 2:
            resp = calcularGradosCentigradosKelvin(a);
            break;
    }
    document.getElementById("txtResultado").value = resp;
}

function calcularGradosCentigradosFarenheit(n1)
{
    let resultado = (n1 * 9 / 5) + 32;
    return resultado;
}

function calcularGradosCentigradosKelvin(n1)
{
    let resultado = n1 + 273.15;
    return resultado;
}


function calcularTemperaturaDos(oper)
{
    let b = parseFloat(document.getElementById("txtNumero2").value);
    let resp = 0;


    switch (oper)
    {
        case 1:
            resp = calcularGradosFahrenheitCentigrados(b);
            break;

        case 2:
            resp = calcularGradosFahrenheitKelvin(b);
            break;
    }
    document.getElementById("txtResultadoo").value = resp;
}

function calcularGradosFahrenheitCentigrados(n2)
{
    let resultado = (n2-32)*5/9;
    return resultado;
}

function calcularGradosFahrenheitKelvin(n2)
{
    let resultado = (n2-32)*5/9+275;
    return resultado;
}
function calcularTemperaturaTres(oper)
{
    let c = parseFloat(document.getElementById("txtNumero3").value);
    let resp = 0;


    switch (oper)
    {
        case 1:
            resp = calcularGradosKelvinCentigrados(c);
            break;

        case 2:
            resp = calcularGradosKelvinFahrenheit(c);
            break;
    }
    document.getElementById("txtResultadooo").value = resp;
}

function calcularGradosKelvinCentigrados(n3)
{
    let resultado = (n3-273.15);
    return resultado;
}

function calcularGradosKelvinFahrenheit(n3)
{
    let resultado = (n3-273.15)*9/5+32;
    return resultado;
}