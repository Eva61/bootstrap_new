//ciclo for
var text ="";
  var i;
  var valor = parseInt(prompt("Indique un numero del 1 al 10"));
  for (i=0; i<=10;i++){
      text += valor+" * " + i + "=" + i * valor + "<br>";
  }
  document.getElementById('ejemplo1').innerHTML = text;

  //prompt
  var multi = "";
  var y;
  	y=prompt('Generar tabla de Multiplicar', ''); //prompt solicita datos al usuario.
  	y=parseInt(y); //el parseInt transforma el numero en entero. 

  	for (var x=1;x<=10;x++){
  		r=y*x;
  		multi+=(y+"x"+x+"="+r+"<br>");
  	}
  	document.getElementById("ejemplo2").innerHTML=multi;