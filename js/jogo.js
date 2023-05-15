var count = 0;
var quant = 0;
document.addEventListener('keypress',(event) => {
 var name = event.key;
 var code = event.code;
 console.log(name);

 if ( name == "j" || (name == "J")){
    console.log(name)
    document.getElementById("a").innerHTML = name;
    quant = quant + 1;
 }
else if ( name == "o" || (name == "O")){
    console.log(name)
    document.getElementById("b").innerHTML = name;
    quant = quant + 1;
}
else if ( name == "A" || (name == "a")){
    console.log(name)
    document.getElementById("c").innerHTML = name; 
    document.getElementById("f").innerHTML = name;
    quant = quant + 2;
 }
else if ( name == "N" || (name == "n")){
    console.log(name)
    document.getElementById("d").innerHTML = name;
    document.getElementById("e").innerHTML = name;
    quant = quant + 2;
  } else {
  count = count + 1;
  document.getElementById("p").src = "images/"+ count +".png";}
   if(quant == 6){
   alert(" Você ganhou");
    if(count > 6)
     alert("perdeu")
   }
}, false);
