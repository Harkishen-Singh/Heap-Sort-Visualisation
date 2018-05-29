var inputObject = [3,5,7,1,4,23,0];
var svgElement = d3.select('body').append('svg').attr('height','100%').attr('width','100%');

class main_handler {
    constructor(obj,size){
        this.inputArr = obj;
        this.sizeArr = size;
        this.heapSize = 0;

    }
    
    heapSize(){
        let x,sum,y;
        for(var i =0; i<this.sizeArr; i++){
            x = Math.pow(2,i);
            y = Math.pow(2,i+1);
            sum += x;
            
            
        }
    }
}