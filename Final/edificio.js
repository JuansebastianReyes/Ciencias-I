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

	datosIlu : [[1.1,,,],
			   [1.2,,,,],
			   [1.3,,,,],
			   [1.4,,,,],
			   [2.1,,,,],
			   [2.2,,,,],
			   [2.3,,,,],
			   [2.4,,,,],
			   [3.1,,,,],				
			   [3.2,,,,],
			   [3.3,,,,],
			   [3.4,,,,],
			   [4.1,,,,],
			   [4.2,,,,],
			   [4.3,,,,],
			   [4.4,,,,],
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

var lienzo = document.getElementById("c");
var contexto = lienzo.getContext("2d");

function dibujarNodo(posX,posY,colorborde){	
					var x = posX;
					var y = posY;
					var r = 10;
					contexto.beginPath();
					contexto.strokeStyle =colorborde;
					contexto.fillStyle = "#6ab150";
					contexto.lineWidth = 2;
					contexto.arc(x,y,r,0,2*Math.PI);
					contexto.fill();					
					contexto.stroke();
					contexto.closePath();

}

function iluminacion(nodo){

}

function luzVecinos(nodo){

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

console.log(cola.getFrontElement())

while(j <= cola.size()-1){
	dibujarNodo(datos.aptos[j][1],datos.aptos[j][2],datos.aptos[j][3]);
	j++;
}

for(var v=0;v<cola.size()-4;v++){
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