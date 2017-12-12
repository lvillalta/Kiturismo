window.onload =function () {
   //variables
    var form1,nombre,email,asunto,mensaje,pos;
    var mens="";
    //Instancias
    form1= document.getElementById("form1");
    nombre= document.getElementById("nombre");
    email= document.getElementById("email");
    asunto= document.getElementById("asunto");
    mensaje= document.getElementById("mensaje");
    
    form1.onsubmit=function(){
        if(nombre.value.length==0){
          
          mens+="Ingrese un nombre";
        }
        if(email.value.length==0){
            
            mens+="\nIngrese un correo";
        }else{
            if(email.value.length<10){
               mens+="\nEl email ingresado es muy corto";
                }else{
                    pos=email.value.indexOf("@");
                    if(pos==-1){
                        mens+="\nemail ingresado no válido, no tiene arroba";
                    }else{
                        pos=email.value.indexOf(".");
                        if(pos==-1){
                            mens+="\nemail ingresado no válido, no tiene punto";
                        }
                    }
            }

        }
        if(mens.length!=0){
            alert(mens);
        }else{
            alert("Informacion enviada"+"\n"+"Gracias por comunicarte con nosotros "+nombre.value    
                );
        }
    }


    //Creamos los Listeners
    //nombre
    nombre.onfocus=function(){
        enciende(nombre);
    }
    nombre.onblur=function(){
        apaga(nombre);
    }
    
    //email
    email.onfocus=function(){
        enciende(email);
    }
    email.onblur=function(){
        apaga(email);
    }

    //asunto
    asunto.onfocus=function(){
        enciende(asunto);
    }
    asunto.onblur=function(){
        apaga(asunto);
    }

    //mensaje
    mensaje.onfocus=function(){
        mensaje.value="";
        enciende(mensaje);
    }
    mensaje.onblur=function(){
        apaga(mensaje);
    }


}

//funciones
function enciende (campo) {
    campo.setAttribute("class","enciende");
}

function apaga (campo) {
    campo.setAttribute("class","apaga");
}
