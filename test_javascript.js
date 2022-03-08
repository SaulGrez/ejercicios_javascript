/* //*prueba suma

let num1 = prompt("numero 1");
let num2 = prompt("numero 2");

res=parseFloat(num1)+parseFloat(num2);

document.write("La resta es " + res);


//*prueba resta

let num3 = prompt("numero 1");
let num4 = prompt("numero 2");

resu=parseFloat(num3)-parseFloat(num4);

document.write("La resta es " + resu);*/

let texto1="xd";
let texto2="xd";

document.write( texto1==texto2 );


let text1="xd1";
let text2="xd1";

document.write( text1!=text2 );

//{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}
let n1=5;
let n2=8;
let n3=10;
let n4=12
let n5=2;

document.write(op= ( (n2>n5 || n4<n3) && (n3<n1 && n4>n1) ));



//´´´´´´´´´´´´´{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}


let numero1=100;
let numero2=20;

resul=parseFloat(numero1)-parseFloat(numero2);

if(resul==80){
      
    document.writeln("<br>"+"tu resultado es positivo")
         
}
 else if (resul>=0) {
         
    document.writeln("<br>"+"tu resultado es negativo")
 }

 else {
      
    document.writeln("<br>"+"tu resultado no es un numero")
 }

//-------------------CONDICIONALES IF-ELSE ------------------------

 dineroSaul=prompt("Dinero de saul: ");
 dineroElvis=prompt("Dinero de elvis: ");
 dineroMago=prompt("Dinero de mago: ");




total=(parseInt(dineroSaul)+parseInt(dineroElvis)+parseInt(dineroMago));

 if(total>=10 && total<20){
       
       prompt("te alcanza para una Coca-cola " + total);
 }
 
else if(total>=20 && total<30){

    alert("Les alcanza para unas Papas " + total);
}

else if(total>=30 && total<40){

    alert("Les alcanza para una caja de chocolates " + total);
}

else if(total>=40 && total<50){

    alert("Les alcanza para unas cervezas " + total);
}

else if(total>=50){

    alert("Les alcanza para  muchas cosas" + total);
}

else{
     
     alert("No les alcanza para nada ");
}

 //*{}{}{}{}-------------ARREGLOS ---------------

 /*let items = {camisa: "gucci", 
 zapatos: "nike", 
 pantalon:"levis"};

let camisa=items["camisa"]
let zapatos=items["zapatos"]
let pantalon=items["pantalon"]

outfit =  `mi camisa es: <b>${camisa}</b> 
mi reloj es: <b>${reloj}</b>`;


document.write(outfit);

let canasta=["manzana","pera","sandia","naranja","melon","fresa"]

document.write("<br>"+canasta["2"]);

//*------ FUNCIONES ----------------------

function suma(parametro1,parametro2){
       
      tot=parametro1+parametro2;
      return tot;
      
}
   resulx=suma(21,20);G
   document.write("<br>"+"El resultado de la suma es: "+resulx); */


//*------ EJERCICIOS CALCULADORA----------------------


let oper = prompt("1:Suma 2:Resta 3:Multiplicación 4:Division ");

function sumx(nx1,nx2){
    let re= parseFloat(nx1)+parseFloat(nx2);
    return re;
}
function resx(nx1,nx2){
    let re= parseFloat(nx1)-parseFloat(nx2);
    return re;
}
function mulx(nx1,nx2){
    let re= parseFloat(nx1)*parseFloat(nx2);
    return re;
}
function divx(nx1,nx2){
    let re= parseFloat(nx1)/parseFloat(nx2);
    return re;
}

if(oper==1){
          
    let nx1=prompt("Primer número a sumar ");
    let nx2=prompt("Segundo número a sumar ");
    let residuo=sumx(nx1,nx2);
    alert("Resultado es: "+residuo);
}
else if(oper==2){
          
    let nx1=prompt("Primer número a restar ");
    let numx2=prompt("Segundo número a restar ");
    let residuo=resx(nx1,numx2);
    alert("Resultado es: "+residuo);
}
else if(oper==3){
          
    let numx1=prompt("Primer número a multiplicar ");
    let numx2=prompt("Segundo número a multiplicar ");
    let residuo=mulx(numx1,numx2);
    alert("Resultado es: "+residuo);
}
else if(oper==4){
          
    let numx1=prompt("Primer número a dividir ");
    let numx2=prompt("Segundo número a dividir ");
    let residuo=divx(numx1,numx2);
    alert("Resultado es: "+residuo);
}

else{
    alert("No seleccionaste ninguna opción valida ");
}


//*------ PROGRAMACION ORIENTADA A OBJETOS CON JAVASCRIPT----------------------

class Animal{
    constructor(clase,edad,color,estatura){
    this.clase=clase;
    this.edad=edad;
    this.color=color;
    this.estatura=estatura; 
      }
}

class Ave extends Animal{
    constructor(clase,edad,color,estatura,plumas){
    super(clase,edad,color,estatura);
    this.plumas=plumas;
    }   
    
    set AveRaza(nuevas_plumas){
           this.plumas=nuevas_plumas;

    }

   get AveRaza(){
          return this.plumas;
   }
}



const ave = new Ave("colibri","2","verde","0.2 m","rojas");
const perro = new Animal("bull-dog","5","marron","1.2m");
const gato = new Animal("egipcio","3","blanco","0.5 m")

ave.AveRaza="plumas exoticas";

document.write("<br>"+"El perro es "+perro.clase+"&nbsp tiene "+perro.edad+"&nbsp es de color "+perro.color+"&nbsp y su estatura es de "+perro.estatura);
document.write("<br>"+"El ave es "+ave.clase+"&nbsp tiene "+ave.edad+"&nbsp es de color "+ave.color+"&nbsp y su estatura es de "+ave.estatura+"&nbsp y sus plumas son de color "+ave.plumas+"&nbsp de "+ave.AveRaza);
document.write("<br>"+"El gato es "+gato.clase+"&nbsp tiene "+gato.edad+"&nbsp es de color "+gato.color+"&nbsp y su estatura es de "+gato.estatura);



//*------ PROGRAMACION ORIENTADA A OBJETOS EJERCICIO--------

class Celulares{
     constructor(modelo,rdp,rdc,ram,alm){   
         
         this.modelo = modelo;
         this.rdp = rdp;
         this.rdc = rdc;
         this.ram = ram;
         this.alm = alm;
       
        }


    prender(){ 
         if(this.encendido == false){
         document.write("<br>"+"Dispositivo: Encendido");
             this.encendido = true;
            }  

          else{
       document.write("<br>"+"Dispositivo: Apagado");
        this.encendido = false;
        }
     }  
     
     mod_cel(){
        
        document.write("<br>"+`El modelo es: ${this.modelo}`);
     }

     resolucion_pantalla(){
         document.write("<br>"+`La resolucion de la pantlla es: ${this.rdp}`);
     }

     resolucion_camara(){
        document.write("<br>"+`La resolucion de la camara es de: ${this.rdc}`);
    }

    memoria_ram(){
        document.write("<br>"+`La memoria RAM es de: ${this.ram}`);
    }

    almacenamiento(){
        document.write("<br>"+`Su capacidad es de: ${this.alm}`);
    }

}


const celular1= new Celulares("Samsung ","Full HD ","5mpx ", "2GB ", "16GB");

document.write("<br>"+` ${celular1.mod_cel()}`+"<br>"+` ${celular1.resolucion_pantalla()}`+
"<br>"+` ${celular1.resolucion_camara()}`+"<br>"+` ${celular1.memoria_ram()}`+
"<br>"+` ${celular1.almacenamiento()}`);
    
   

let numerosx=["<br>" + "papel ","carbon ","rollo ","pecas ","pollo "];

document.write(numerosx[1]);
/*let restot=numerosx.join("  ---  ");

document.write("<br>" + restot);*/