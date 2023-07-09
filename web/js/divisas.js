/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function calcularDivisas(oper)
{
    let i = parseFloat(document.getElementById("txtNumeroU").value);
    let resp = 0;


    switch (oper)
    {
        case 1:
            resp = calcularPesoMexicanoDolarEsta(i);
            break;

        case 2:
            resp = calcularPesoMexicanoDolarCana(i);
            break;
        case 3:
            resp = calcularPesoMexicanoEuro(i);
            break;

        case 4:
            resp = calcularPesoMexicanoLibraEst(i);
            break;
        case 5:
            resp = calcularPesoMexicanoPesoChi(i);
            break;

        case 6:
            resp = calcularPesoMexicanoPesoUru(i);
            break;
        case 7:
            resp = calcularPesoMexicanoRupia(i);
            break;

        case 8:
            resp = calcularPesoMexicanoYen(i);
            break;
            
        case 9:
            resp = calcularPesoMexicanoZotly(i);
            break;
    }
    document.getElementById("txtResultadoU").value = resp;
}
function calcularPesoMexicanoDolarEsta(n8)
{
    let resultado = (n8/24.04);
    return resultado;
}
function calcularPesoMexicanoDolarCana(n8)
{
    let resultado = (n8/17.24);
    return resultado;
}
function calcularPesoMexicanoEuro(n8)
{
    let resultado = (n8/26.2);
    return resultado;
}
function calcularPesoMexicanoLibraEst(n8)
{
    let resultado = (n8/30.05);
    return resultado;
}
function calcularPesoMexicanoPesoChi(n8)
{
    let resultado = (n8/0.028);
    return resultado;
}
function calcularPesoMexicanoPesoUru(n8)
{
    let resultado = (n8/0.56);
    return resultado;
}
function calcularPesoMexicanoRupia(n8)
{
    let resultado = (n8/0.32);
    return resultado;
}
function calcularPesoMexicanoYen(n8)
{
    let resultado = (n8/0.22);
    return resultado;
}
function calcularPesoMexicanoZotly(n8)
{
    let resultado = (n8/5.78);
    return resultado;
}

