var datos ={ //id x y
	aptos : [[1.1,225,400,"green" ],
			 [1.2,150,375,"green" ],
			 [1.3,350,375,"green" ],
			 [1.4,275,350,"green" ],
			 [2.1,225,300,"blue"  ],
			 [2.2,150,275,"blue"  ],
			 [2.3,350,275,"blue"  ],
			 [2.4,275,250,"blue"  ],
			 [3.1,225,200,"yellow"],
			 [3.2,150,175,"yellow"],
			 [3.3,350,175,"yellow"],
			 [3.4,275,150,"yellow"],
			 [4.1,225,100,"purple"],
			 [4.2,150, 75,"purple"],
			 [4.3,350, 75,"purple"],
			 [4.4,275, 50,"purple"],
			],

	datosIlu : [[1.1,3500,0.6,0.8,14],
			   	[1.2,3300,0.4,0.8,14],
			    [1.3,3600,0.6,0.8,14],
			    [1.4,3200,0.7,0.8,14],
			    [2.1,3400,0.5,0.6,14],
			    [2.2,3500,0.6,0.6,14],
			    [2.3,3300,0.7,0.6,14],
			    [2.4,3500,0.6,0.6,14],
			    [3.1,3500,0.4,0.4,14],				
			    [3.2,3600,0.5,0.4,14],
			    [3.3,3500,0.7,0.4,14],
			    [3.4,3200,0.6,0.4,14],
			    [4.1,3500,0.5,0.2,14],
			    [4.2,3200,0.7,0.2,14],
			    [4.3,3400,0.6,0.2,14],
			    [4.4,3300,0.5,0.2,14],
			  ],

	nodosAd :[[1.1,null,1.2,1.3,2.1],
			   [1.2,null,1.1,1.4,2.2],
			   [1.3,null,1.2,1.4,2.3],
			   [1.4,null,1.2,1.3,2.4],
			   [2.1,1.1,2.2,2.3,3.1],
			   [2.2,1.2,2.1,2.4,3.2],
			   [2.3,1.3,2.1,2.4,3.3],
			   [2.4,1.4,2.2,2.3,3.4],
			   [3.1,2.1,3.2,3.3,4.1],				
			   [3.2,2.2,3.1,3.4,4.2],
			   [3.3,2.3,3.1,3.4,4.3],
			   [3.4,2.4,3.2,3.3,4.4],
			   [4.1,3.1,4.2,4.3,null],
			   [4.2,3.2,4.1,4.4,null],
			   [4.3,3.3,4.1,4.4,null],
			   [4.4,3.4,4.2,4.3,null],
			  ],
			
}
var habitable = new Pila();
var noHabitable = new Pila();
var lienzo = document.getElementById("c");
var contexto = lienzo.getContext("2d");

function dibujarNodo(posX,posY,colorborde,estado){	
					var x = posX;
					var y = posY;
					var r = 10;
					contexto.beginPath();
					contexto.strokeStyle =colorborde;
					contexto.fillStyle = estado;
					contexto.lineWidth = 2;
					contexto.arc(x,y,r,0,2*Math.PI);
					contexto.fill();					
					contexto.stroke();
					contexto.closePath();

}

function iluminacion(nodo){
	var iluminacion;
	var i =0

	while(i<16) {
		z = datos.datosIlu[i][0];
		if (nodo == z){
			iluminacion = ((4)*(datos.datosIlu[i][1])*(datos.datosIlu[i][2])*(datos.datosIlu[i][2]))/datos.datosIlu[i][4]
			if(iluminacion >= 350 && iluminacion<=450){
				habitable.add(datos.aptos[i][0]);
				dibujarNodo(datos.aptos[i][1],datos.aptos[i][2],datos.aptos[i][3],"#6ab150");
			}else{
				noHabitable.add(datos.aptos[i][0]);
				dibujarNodo(datos.aptos[i][1],datos.aptos[i][2],datos.aptos[i][3],"red");
			}
		}	
		i++	
	}
}

function vertices(x1,y1,x2,y2){
	contexto.beginPath();            
	contexto.strokeStyle="black";
	contexto.moveTo(x1,y1);
	contexto.lineTo(x2,y2);
	contexto.stroke();
	contexto.closePath();
}

var cola = new Cola();
var j=0;

for(var i=0;i<=15;i++){
		cola.add(datos.aptos[i][0]);
}



while(cola.size() != 0){
	iluminacion(cola.getFrontElement());
	cola.remove();
}

console.log("Las oficinas habilitadas por iluminacion son: ")

while(habitable.size() != 0){
	console.log(habitable.getTopElement());
	habitable.pop();
}

console.log("Las oficinas no habilitadas por iluminacion son: ")

while(noHabitable.size() != 0){
	console.log(noHabitable.getTopElement());
	noHabitable.pop();
}

for(var v=0;v<12;v++){
	vertices(datos.aptos[v][1],datos.aptos[v][2]-10,datos.aptos[(v+4)][1],datos.aptos[(v+4)][2]+10);
}

//-------------------------------//


vertices(datos.aptos[0 ][1]-10,datos.aptos[0 ][2],datos.aptos[1 ][1]+10,datos.aptos[1 ][2]);
vertices(datos.aptos[4 ][1]-10,datos.aptos[4 ][2],datos.aptos[5 ][1]+10,datos.aptos[5 ][2]);
vertices(datos.aptos[8 ][1]-10,datos.aptos[8 ][2],datos.aptos[9 ][1]+10,datos.aptos[9 ][2]);
vertices(datos.aptos[12][1]-10,datos.aptos[12][2],datos.aptos[13][1]+10,datos.aptos[13][2]);

//----------------------------//
vertices(datos.aptos[2 ][1]-10,datos.aptos[2 ][2],datos.aptos[3 ][1]+10,datos.aptos[3 ][2]);
vertices(datos.aptos[6 ][1]-10,datos.aptos[6 ][2],datos.aptos[7 ][1]+10,datos.aptos[7 ][2]);
vertices(datos.aptos[10][1]-10,datos.aptos[10][2],datos.aptos[11][1]+10,datos.aptos[11][2]);
vertices(datos.aptos[14][1]-10,datos.aptos[14][2],datos.aptos[15][1]+10,datos.aptos[15][2]);

//-------------------------//

vertices(datos.aptos[0 ][1]+10,datos.aptos[0 ][2],datos.aptos[2 ][1]-10,datos.aptos[2 ][2]);
vertices(datos.aptos[4 ][1]+10,datos.aptos[4 ][2],datos.aptos[6 ][1]-10,datos.aptos[6 ][2]);
vertices(datos.aptos[8 ][1]+10,datos.aptos[8 ][2],datos.aptos[10][1]-10,datos.aptos[10][2]);
vertices(datos.aptos[12][1]+10,datos.aptos[12][2],datos.aptos[14][1]-10,datos.aptos[14][2]);

//------------------------//


vertices(datos.aptos[1 ][1]+10,datos.aptos[1 ][2],datos.aptos[3 ][1]-10,datos.aptos[3 ][2]);
vertices(datos.aptos[5 ][1]+10,datos.aptos[5 ][2],datos.aptos[7 ][1]-10,datos.aptos[7 ][2]);
vertices(datos.aptos[9 ][1]+10,datos.aptos[9 ][2],datos.aptos[11][1]-10,datos.aptos[11][2]);
vertices(datos.aptos[13][1]+10,datos.aptos[13][2],datos.aptos[15][1]-10,datos.aptos[15][2]);