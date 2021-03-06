function Pila() {
    var elements = [];
 
    this.add = add;
    this.pop = pop;
    this.getTopElement = getTopElement;
    this.hasElements = hasElements;
    this.removeAll = removeAll;
    this.size = size;
 
    function add(element) {
        elements.push(element);
    }
 
    function pop() {
            return elements.pop();    
    }
 
    function getTopElement() {
        return elements[elements.length - 1];
    }
 
    function hasElements() {
        return elements.length > 0;
    }
 
    function removeAll() {
        elements = [];
    }
 
    function size() {
        try{
            return elements.length;
        }catch(err){
            return "La cadena esta vacia";
        }
    }
}

function Cola() {
    var elements = [];
 
    this.add = add;
    this.remove = remove;
    this.getFrontElement = getFrontElement;
    this.hasElements = hasElements;
    this.removeAll = removeAll;
    this.size = size;
    this.toString = toString;
 
    function add(element) {
        elements.push(element);
    }
 
    function remove() {
        return elements.shift();
    }
 
    function getFrontElement() {
        return elements[0];
    }
 
    function hasElements() {
        return elements.length > 0;
    }
 
    function removeAll() {
        elements = [];
    }
 
    function size() {
        try{
            return elements.length;
        }catch(err){
            return "La cadena esta vacia";
        }
    }
 
    function toString() {
        console.log(elements.toString());
    }
}