var Gmunicipios = {
    
    vertices : ["1","2","3","4","5","6","7"],
			//     A   B   C   D   E   F   G
    pesos : [[ 0 ,"1","2","3","4","5","6","7"],
             ["1", 0 , 3 , 2 , 5 ,999,999,999],
             ["2", 3 , 0 , 4 ,999, 4 , 3 ,999],
             ["3", 2 , 4 , 0 , 5 ,999,999,999],
             ["4", 5 ,999, 5 , 0 , 6 ,999, 3 ],
             ["5",999, 4 ,999, 6 , 0 , 2 , 2 ],
             ["6",999, 3 ,999,999, 2 , 0 , 2 ],
             ["7",999,999,999, 3 , 2 , 2 , 0 ]
            ],
    
     nombres : [["1","Cota"],
                ["2","Madrid"],
                ["3","Chia"],
                ["4","Choachi"],
                ["5","Bogota"],
                ["6","Fomeque"],
                ["7","Ubaque"]
             ]
};

var max = Gmunicipios.vertices.length;
var minpos = 1;

var distancia = new Array(max);
var costo = new Array(max,max);
var pasos = new Array(10);
var paso = new Array(10);

var b = document.getElementById("aceptar");
b.addEventListener("click", municipios);

costo = Gmunicipios.pesos;

//for(i=1;i<=max;i++){
//    if(i != salida){
//        console.log("source :"+ salida +"\t destination :"+i+"\t MinCost is :"+ distancia[i] +"\t");
//    }
//}


//for(j=1;j<=max ;j++){
//		console.log(paso[j] + " " + pasos[j]);
//}

//for(i=1;i<=max;i++){
//	for(j=1;j<=max;j++){
//		console.log(i +" "+j+" "+costo[i][j]);
//	}	
//}

function municipios(){
    /* Para obtener el valor */
    var cod = document.getElementById("salida");
    var salida = cod.value

    var cod = document.getElementById("llegada");
    var llegada = cod.value

    dijkstra(max,salida);
    console.log("source :"+ darNombre(salida) +"\t destination :"+ darNombre(llegada) +"\t MinCost is :"+ distancia[llegada] +"\t");
}

function darNombre(nom){
    for(i=0;i <= max;i++){
        if(nom == Gmunicipios.vertices[i]){
            this.nom=Gmunicipios.nombres[i][1];
        }
    }
    return this.nom;
}

function dijkstra(nodos,inicio){
     var flag = new Array(nodos + 1);
     
     for(i=1;i<=nodos;i++){
        flag[i]=0;
        distancia[i]=costo[inicio][i];
     }
     
     for(c=2;c<=nodos;c++){
        var min = 99;
        for(k=1;k<=nodos;k++){
            if(distancia[k]<min && flag[k] != 1 ){
                min = distancia[i];                                
                minpos = k;
            }
        }
	
        flag[minpos]=1;     
        for(k=1;k<=nodos;k++){
            if(distancia[minpos] + costo[minpos][k] < distancia[k] && flag[k] != 1){
                distancia[k] = distancia[minpos] + costo[minpos][k];
				pasos[k]=k;
                paso[k]= minpos;
            }
        }
     }
}
