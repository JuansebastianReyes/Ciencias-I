var buscar = null  
//Lectura texto Plano

function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    buscar = contenido;

    var stringLocation = boyer_moore_horspool(contenido, 'hermano');

    console.log(stringLocation);
    mostrarContenido(contenido);
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
  var elemento = document.getElementById('contenido-archivo');
  elemento.innerHTML = contenido;
}

document.getElementById('file-input').addEventListener('change', leerArchivo, false);

function boyer_moore_horspool(haystack, needle) {
    var badMatchTable = {};
    var maxOffset = haystack.length - needle.length;
    var offset = 0;
    var last = needle.length - 1;
    var scan;
  
    Array.prototype.forEach.call(needle, function (char, i) {
        badMatchTable[char] = last - i;
    });

    
    while (offset <= maxOffset) {
        
        for (scan=last; needle[scan] === haystack[scan+offset]; scan--) {
            
            if (scan === 0) {
              return offset;
            }
        }

        offset += badMatchTable[haystack[offset + last]] || last;
    }

    return -1;
}
