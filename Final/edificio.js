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

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(215,400);
contexto.lineTo(160,375);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(215,300);
contexto.lineTo(160,275);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(215,200);
contexto.lineTo(160,175);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(215,100);
contexto.lineTo(160, 75);
contexto.stroke();
contexto.closePath();
//----------------------------//
contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(340,375);
contexto.lineTo(285,350);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(340,275);
contexto.lineTo(285,250);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(340,175);
contexto.lineTo(285,150);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(340,75);
contexto.lineTo(285,50);
contexto.stroke();
contexto.closePath();
//-------------------------//
contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(235,400);
contexto.lineTo(340,375);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(235,300);
contexto.lineTo(340,275);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(235,200);
contexto.lineTo(340,175);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(235,100);
contexto.lineTo(340, 75);
contexto.stroke();
contexto.closePath();
//------------------------//
contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(160,375);
contexto.lineTo(265,350);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(160,275);
contexto.lineTo(265,250);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(160,175);
contexto.lineTo(265,150);
contexto.stroke();
contexto.closePath();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.moveTo(160,75);
contexto.lineTo(265,50);
contexto.stroke();
contexto.closePath();