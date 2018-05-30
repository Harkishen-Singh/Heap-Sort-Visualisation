var inputObject = [3,5,7,1,4,23,0];
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
        let x,sum,y,k=0,lastIndex=1;
        console.log('Reached heapAssignment()');
        for(var i =0; i<this.sizeArr; i++){
            try{
            k = i;
            if(i==0)
                for(var j=i;j<Math.pow(2,i);j++){
                    if(this.binaryTree[j]['tail_left_id']==0){
                
                        this.binaryTree[j]['tail_left_id']=this.binaryTree[lastIndex]['id'];
                        lastIndex++;console.log(lastIndex);
                        this.binaryTree[j]['tail_right_id']=this.binaryTree[lastIndex]['id'];
                        lastIndex++;  
                        console.log(lastIndex);
                    }
            }
            else
            for(var j=i;j<=Math.pow(2,i);j++){
                if(this.binaryTree[j]['tail_left_id']==0){
                    this.binaryTree[j]['head_id'] = this.binaryTree[k-1]['id'];
                    console.log('Worked successfully!')
                    this.binaryTree[j]['tail_left_id']=this.binaryTree[lastIndex]['id'];
                    lastIndex++;console.log(lastIndex);
                    this.binaryTree[j]['tail_right_id']=this.binaryTree[lastIndex]['id'];
                    lastIndex++; console.log(lastIndex);            
                }
            }
        }
            catch(e){
            continue;
        }
        }
        
        this.heapHeadAllotment();
    }
    heapHeadAllotment(){
        for(var i=0;i<this.sizeArr;i++){
            if(i != 0){
                let id1 = this.binaryTree[i]['tail_left_id'];
                for(var j=0;j<this.sizeArr;j++){
                    if(this.binaryTree[j]['id']==id1 && this.binaryTree[j]['head_id']==0){
                        console.log(this.binaryTree[i] + ' ' + this.binaryTree[j]);
                        this.binaryTree[j]['head_id']=this.binaryTree[i]['id'];
                    }
                }
                let id2 = this.binaryTree[i]['tail_left_id'];
                if(id2 != 0){
                    for(var j=0;j<this.sizeArr;j++){
                    if(this.binaryTree[j]['id']==id2 && this.binaryTree[j]['head_id']==0){
                        this.binaryTree[j]['head_id']=this.binaryTree[i]['id'];
                    }
                } 
            }  
        }
        }console.log(this.binaryTree);
    }
}

var object = new main_handler(inputObject,(inputObject.length));
object.treeGeneration();