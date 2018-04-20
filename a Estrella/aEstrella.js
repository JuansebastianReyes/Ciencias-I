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
            //    id  nombre   h
     nombres : [["1","Cota"   ,2 ],
                ["2","Madrid" ,4 ],
                ["3","Chia"   ,6 ],
                ["4","Choachi",8 ],
                ["5","Bogota" ,10],
                ["6","Fomeque",12],
                ["7","Ubaque" ,14]
             ]
};



var max = Gmunicipios.vertices.length;
var costo = new Array(max,max);
var adyacentes = new Array(max);
var idAdyacentes = new Array(max);
var heuristicas = new Array(max);
var recoridos = new Array(max);
var optimo = null;
var total = 0;
var pasos = 0;
var nodoUno = null;
var ultimo = 0;

costo = Gmunicipios.pesos;

var b = document.getElementById("aceptar");
b.addEventListener("click", municipios);

//salida=prompt('Ingrese el origen','');
//llegada=prompt('Ingrese la llegada','');
//aEstrella(salida,llegada);
//console.log(total);


function municipios(){
    /* Para obtener el valor */
    var cod = document.getElementById("salida");
    var salida = cod.value;

    var codl = document.getElementById("llegada");
    var llegada = codl.value;

    aEstrella(salida,llegada);

    console.log("source :"+ darNombre(salida) +"\t destination :"+ darNombre(llegada) +"\t MinCost is :"+ total +"\t");
}

function darNombre(nom){
    for(i=0;i <= max;i++){
        if(nom == Gmunicipios.vertices[i]){
            this.nom=Gmunicipios.nombres[i][1];
        }
    }
    return this.nom;
}

function vecinos(id){
    for(i=1;i<=7;i++){
        if(costo[id][i]>=1 && costo[id][i]<999){
            adyacentes[i] = costo[id][i];
            idAdyacentes[i] = costo[0][i];
        }
    }
}

function asignarNodo(id,val,idVecinos,pesoVecinos){
    this.id = id;
    this.val = val;
    this.idVecinos = idVecinos.filter(Boolean);
    this.pesoVecinos = pesoVecinos.filter(Boolean);
}

function verificarVecino(llegada){
    var fin = false;
    for(i=0;i<5;i++){
        if(llegada != nodoUno.idVecinos[i]){
           if(fin == false){ 
                heuristicas[i] = nodoUno.pesoVecinos[i] + Gmunicipios.nombres[i][2];
            }
        }else{
            ultimo = nodoUno.pesoVecinos[i] + Gmunicipios.nombres[i][2];
            fin = true;   
        }
    }
    heuristicas = heuristicas.filter(Boolean);
    if(fin==true){
        return false;
    }else{
        return true;
    }
}

function aEstrella(inicio,llegada){

    var fin = false;
    
    vecinos(inicio);   
    nodoUno = new asignarNodo(salida,pasos+1,idAdyacentes,adyacentes);
    vecino = verificarVecino(llegada);
    //console.log(heuristicas)
    if(vecino){
        for(i=0;i<max;i++){
            if(recoridos[i] != this.inicio){
                heuristicas[i] = 999; 
                //console.log(heuristicas);
            }
        }
        var min = Math.min.apply(null, heuristicas);
        //console.log(nodoUno.idVecinos);
        for(i=0;i<5;i++){
            if(min == heuristicas[i]){
                optimo = nodoUno.idVecinos[i];
                console.log(darNombre(optimo));
            }
        }
        recoridos[pasos] = inicio;
        //console.log(recoridos);
        pasos = pasos + 1;
        heuristicas = [];
        nodoUno.idVecinos=[];
        nodoUno.pesoVecinos=[];
        idAdyacentes=[];
        adyacentes=[];
        total = total + min;
        aEstrella(optimo,llegada);
    }else{
        total = total + ultimo;
        console.log("llegada");
    }
}