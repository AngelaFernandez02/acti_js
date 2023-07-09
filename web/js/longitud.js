/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */
function calcularLongitud(oper)
{
    let d = parseFloat(document.getElementById("txtNumero4").value);
    let resp = 0;


    switch (oper)
    {
        case 1:
            resp = calcularCentimetrosPulgadas(d);
            break;

        case 2:
            resp = calcularCentimetrosPies(d);
            break;
        case 3:
            resp = calcularCentimetrosYardas(d);
            break;

        case 4:
            resp = calcularCentimetrosMillas(d);
            break;
    }
    document.getElementById("txtResultado4").value = resp;
}
function calcularCentimetrosPulgadas(n4)
{
    let resultado = (n4*0.39370);
    return resultado;
}
function calcularCentimetrosPies(n4)
{
    let resultado = (n4/30.48);
    return resultado;
}
function calcularCentimetrosYardas(n4)
{
    let resultado = (n4/91.44);
    return resultado;
}
function calcularCentimetrosMillas(n4)
{
    let resultado = (n4/160934.4);
    return resultado;
}

function calcularLongitudDos(oper)
{
    let e = parseFloat(document.getElementById("txtNumero5").value);
    let resp = 0;


    switch (oper)
    {
        case 1:
            resp = calcularPulgadasCentimetros(e);
            break;

        case 2:
            resp = calcularPulgadasPies(e);
            break;
        case 3:
            resp = calcularPulgadasYardas(e);
            break;

        case 4:
            resp = calcularPulgadasMillas(e);
            break;
    }
    document.getElementById("txtResultado5").value = resp;
}
function calcularPulgadasCentimetros(n5)
{
    let resultado = (n5*2.54);
    return resultado;
}
function calcularPulgadasPies(n5)
{
    let resultado = (n5/12);
    return resultado;
}
function calcularPulgadasYardas(n5)
{
    let resultado = (n5*0.0277777777778);
    return resultado;
}
function calcularPulgadasMillas(n5)
{
    let resultado = (n5/63360);
    return resultado;
}
function calcularLongitudTres(oper)
{
    let f = parseFloat(document.getElementById("txtNumero6").value);
    let resp = 0;


    switch (oper)
    {
        case 1:
            resp = calcularPiesCentimetros(f);
            break;

        case 2:
            resp = calcularPiesPulgadas(f);
            break;
        case 3:
            resp = calcularPiesYardas(f);
            break;

        case 4:
            resp = calcularPiesMillas(f);
            break;
    }
    document.getElementById("txtResultado6").value = resp;
}
function calcularPiesCentimetros(n6)
{
    let resultado = (n6*30.48);
    return resultado;
}
function calcularPiesPulgadas(n6)
{
    let resultado = (n6*12);
    return resultado;
}
function calcularPiesYardas(n6)
{
    let resultado = (n6/3);
    return resultado;
}
function calcularPiesMillas(n6)
{
    let resultado = (n6/5280);
    return resultado;
}


function calcularLongitudCuatro(oper)
{
    let g = parseFloat(document.getElementById("txtNumero7").value);
    let resp = 0;


    switch (oper)
    {
        case 1:
            resp = calcularYardasCentimetros(g);
            break;

        case 2:
            resp = calcularYardasPulgadas(g);
            break;
        case 3:
            resp = calcularYardasPies(g);
            break;

        case 4:
            resp = calcularYardasMillas(g);
            break;
    }
    document.getElementById("txtResultado7").value = resp;
}
function calcularYardasCentimetros(n7)
{
    let resultado = (n7*91.44);
    return resultado;
}
function calcularYardasPulgadas(n7)
{
    let resultado = (n7*36);
    return resultado;
}
function calcularYardasPies(n7)
{
    let resultado = (n7*3);
    return resultado;
}
function calcularYardasMillas(n7)
{
    let resultado = (n7/1760);
    return resultado;
}
function calcularLongitudCinco(oper)
{
    let h = parseFloat(document.getElementById("txtNumero8").value);
    let resp = 0;


    switch (oper)
    {
        case 1:
            resp = calcularMillasCentimetros(h);
            break;

        case 2:
            resp = calcularMillasPulgadas(h);
            break;
        case 3:
            resp = calcularMillasPies(h);
            break;

        case 4:
            resp = calcularMillasYardas(h);
            break;
    }
    document.getElementById("txtResultado8").value = resp;
}
function calcularMillasCentimetros(n8)
{
    let resultado = (n8*160934.400000000);
    return resultado;
}
function calcularMillasPulgadas(n8)
{
    let resultado = (n8*63360);
    return resultado;
}
function calcularMillasPies(n8)
{
    let resultado = (n8*5280);
    return resultado;
}
function calcularMillasYardas(n8)
{
    let resultado = (n8*1760);
    return resultado;
}







