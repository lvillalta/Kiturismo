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
        }
        if(mens.length!=0){
            alert(mens);
        }
    }

}