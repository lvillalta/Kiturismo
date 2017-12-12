/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function AsignaValor(Nombre,Valor){
    var Campo = document.getElementById(Nombre);
    if(Valor==""){
        Campo.value="";
    }else{
        if(Campo.value!=""){
            Campo.value = Campo.value + Valor;
        }else{
            Campo.value = Valor;
        }
    }
}

function randOrd(){
    return (Math.round(Math.random())-0.5);
}

function marcador(Div,Nombre){
    var resultado = "";
    var num  = new Array('1','2','3','4','5','6','7','8','9','0');
    var key  = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    num.sort(randOrd);
    key.sort(randOrd);
    resultado = "<table cellpadding='1' cellspacing='1' width='100'>";
    var ini = 0;
    var fin = 10;
    resultado += "<tr bgcolor='#F0F7FD'>";
    for ( var n=0; n<10; ++n ){
        resultado += "<td align='center'><input type='button' onclick=\"AsignaValor('"+Nombre+"','"+num[n]+"')\" value=" + num[n] + " class='button_key'></td>";
    }
    resultado += "</tr>";
    for ( var i=0; i<3; ++i ){
        resultado += "<tr bgcolor='#F0F7FD'>";
        for ( var j=ini; j<fin; ++j ){
            resultado += "<td align='center'><input type='button' onclick=\"AsignaValor('"+Nombre+"','"+key[j]+"')\" value=" + key[j] + " class='button_key'></td>";
        }
        if(j<20){
            ini = j;
            fin = ini + 10;
        }else if(j==20){
            ini = j;
            fin = ini + 6;
        }else if(j==26){
            resultado += "<td bgcolor='#1C5280' colspan='4' align='center' style='cursor:pointer;' onclick=\"AsignaValor('"+Nombre+"','')\" class='Button'><strong>Limpiar</strong></td>";
        }
        resultado += "</tr>";
    }
    resultado += "</table><br>";
    document.getElementById(Div).innerHTML=resultado;
}
Ahora para poder llamarlo desde una página jsp solo tendriamos el siguiente código
index.jsp

<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Estilos.css">
        <Script language="JavaScript" type="text/javascript" src="Teclado.js"></Script>
    </head>
    <body onload="marcador('contenedor','campo_clave');">
        <div align="center" valing="center"><br><br>
            <table cellpadding="2" cellspacing="0">
                <tr>
                    <td>Clave de Acceso</td>
                </tr>
                <tr>
                    <td><input type="password" id="campo_clave" style="width:150px" readonly="true" class="caja_secure" /></td>
                </tr>
                <tr>
                    <td align="center">
                        <div id="contenedor"></div>
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>