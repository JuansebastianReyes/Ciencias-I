var Gmunicipios = {
    
    vertices : ["1","2","3","4","5","6","7"],
    
    pesos : [[ 0 ,"1","2","3","4","5","6","7"],
             ["1", 0 , 2 , 3 , 3 , 2 , 3 , 3 ],
             ["2", 2 , 0 , 4 , 5 ,999,999,999],
             ["3", 3 , 4 , 0 ,999, 6 ,999,999],
             ["4", 3 , 3 ,999, 0 , 5 , 4 , 2 ],
             ["5", 2 ,999, 6 , 5 , 0 , 4 , 7 ],
             ["6", 3 ,999,999, 4 , 4 , 0 , 6 ],
             ["7", 3 ,999,999, 2 , 7 , 6 , 0 ]
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

salida=prompt('Ingrese el id del municipio de origen:','');
inicio=darNombre(salida);
llegada=prompt('Ingrese el id del municipio de llegada:','');
fin=darNombre(llegada);
alert("Su puto de salida es "+ inicio);
alert("Su puto de llegada es " + fin);

costo = Gmunicipios.pesos;
dijkstra(max,salida);


for(i=1;i<=max;i++){
    if(i != salida){
        console.log("source :"+ salida +"\t destination :"+i+"\t MinCost is :"+ distancia[i] +"\t");
    }
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
            if(distancia[minpos] + costo[minpos][k] < distancia[k] && flag[k] != 1)
                distancia[k] = distancia[minpos] + costo[minpos][k];
        }
     }
}
