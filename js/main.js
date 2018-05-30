var inputObject = [3,5,7,1,4,23,0,8,9];
var svgElement = d3.select('body').append('svg').attr('height','100%').attr('width','100%');
var elementBinaryTree = {id:0,value:0,head_id:0,tail_left_id:0,tail_right_id:0}; //  'id',value,'upper head id','lower left id', 'lower right id'
class main_handler {
    
    constructor(obj,size){
        this.inputArr = obj;
        this.sizeArr = size;
        this.heapSize = 0;
        
        this.binaryTree = [];
        
    }
    idGenerator(){
        return Math.floor(Math.random() * 1000000);
    }
    treeGeneration(){
        for(var i =0; i< this.sizeArr; i++){
            var elementBinaryTree = {id:0,value:0,head_id:0,tail_left_id:0,tail_right_id:0};
            elementBinaryTree['id'] = this.idGenerator();
            console.log('ID for element '+(i+1)+' is '+ elementBinaryTree['id']);
            elementBinaryTree['value']=this.inputArr[i];
            this.binaryTree.push(elementBinaryTree);
        }
        console.log('Initial binary tree');
        console.log(this.binaryTree);
        this.heapAssignment();
    }
    
    heapAssignment(){
        let x,sum,y,k=0;
        console.log('Reached heapAssignment()');
        for(var i =0; i<this.sizeArr; i++){
            /*
            x = Math.pow(2,i);
            y = Math.pow(2,i+1);
            sum += x;
            */
            for(var j=1;j<=Math.pow(2,i);j++){
                if(k < this.sizeArr-2){
                this.binaryTree[i]['tail_left_id'] = this.binaryTree[k+1]['id'];
                this.binaryTree[i]['tail_right_id'] = this.binaryTree[k+2]['id'];
                
                }
            }k = Math.pow(2,i+1);
        } console.log(this.binaryTree);
    }
}

var object = new main_handler(inputObject,(inputObject.length));
object.treeGeneration();