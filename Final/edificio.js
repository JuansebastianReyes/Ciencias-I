var datos ={ //id x y
	aptos : [[1.1,250,400,"green" ],
			 [1.2,150,375,"green" ],
			 [1.3,350,375,"green" ],
			 [1.4,250,350,"green" ],
			 [2.1,250,300,"blue"  ],
			 [2.2,150,275,"blue"  ],
			 [2.3,350,275,"blue"  ],
			 [2.4,250,250,"blue"  ],
			 [3.1,250,200,"yellow"],
			 [3.2,150,175,"yellow"],
			 [3.3,350,175,"yellow"],
			 [3.4,250,150,"yellow"],
			 [4.1,250,100,"purple"],
			 [4.2,150, 75,"purple"],
			 [4.3,350, 75,"purple"],
			 [4.4,250, 50,"purple"],
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


for(var i=0;i<=15;i++){
		dibujarNodo(datos.aptos[i][1],datos.aptos[i][2],datos.aptos[i][3]);

}



//dibujarNodo(datos.aptos[0][1],datos.aptos[0][2],"green");
//dibujarNodo(datos.aptos[1][1],datos.aptos[1][2],"green");
//dibujarNodo(datos.aptos[2][1],datos.aptos[2][2],"green");
//dibujarNodo(datos.aptos[3][1],datos.aptos[3][2],"green");
//dibujarNodo(datos.aptos[4][1],datos.aptos[4][2],"blue");
//dibujarNodo(datos.aptos[5][1],datos.aptos[5][2],"blue");
//dibujarNodo(datos.aptos[6][1],datos.aptos[6][2],"blue");
//dibujarNodo(datos.aptos[7][1],datos.aptos[7][2],"blue");
//dibujarNodo(datos.aptos[8][1],datos.aptos[8][2],"yellow");
//dibujarNodo(datos.aptos[9][1],datos.aptos[9][2],"yellow");
//dibujarNodo(datos.aptos[10][1],datos.aptos[10][2],"yellow");
//dibujarNodo(datos.aptos[11][1],datos.aptos[11][2],"yellow");
//dibujarNodo(datos.aptos[12][1],datos.aptos[12][2],"purple");
//dibujarNodo(datos.aptos[13][1],datos.aptos[13][2],"purple");
//dibujarNodo(datos.aptos[14][1],datos.aptos[14][2],"purple");
//dibujarNodo(datos.aptos[15][1],datos.aptos[15][2],"purple");



