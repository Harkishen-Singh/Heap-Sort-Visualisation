var inputObject = [6,5,4,3,2,1];
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
        for(var i =0; i<this.sizeArr; i++){
            try{
            k = i;
            if(i==0)
                for(var j=i;j<Math.pow(2,i);j++){
                    if(this.binaryTree[j]['tail_left_id']==0){
                
                        this.binaryTree[j]['tail_left_id']=this.binaryTree[lastIndex]['id'];
                        lastIndex++;
                        this.binaryTree[j]['tail_right_id']=this.binaryTree[lastIndex]['id'];
                        lastIndex++;
                    }
            }
            else
            for(var j=i;j<=Math.pow(2,i);j++){
                if(this.binaryTree[j]['tail_left_id']==0){
                    this.binaryTree[j]['head_id'] = this.binaryTree[k-1]['id'];
                    this.binaryTree[j]['tail_left_id']=this.binaryTree[lastIndex]['id'];
                    lastIndex++;
                    this.binaryTree[j]['tail_right_id']=this.binaryTree[lastIndex]['id'];
                    lastIndex++;           
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
        var ccc =0;
        for(var i=0;i<this.sizeArr;i++){
            if(i != 0){
                ccc++;
                let id1 = this.binaryTree[i]['tail_left_id'];
                if(true)
                for(var j=0;j<this.sizeArr;j++){
                    
                    if(this.binaryTree[j]['id']==id1 ){
                        this.binaryTree[j]['head_id']=this.binaryTree[i]['id'];
                    }
                }
                let id2 = this.binaryTree[i]['tail_right_id'];
                if(true){
                    for(var j=0;j<this.sizeArr;j++){
                        
                    if(this.binaryTree[j]['id']==id2 ){
                        this.binaryTree[j]['head_id']=this.binaryTree[i]['id'];
                    }
                } 
            }  
        }
        }//console.log(this.binaryTree);
        this.heapSort(this.binaryTree);
    }

    heapSort(arr, index=this.sizeArr-1){
        console.log('heapSort() going on');
        let temp;
        let aa = arr[index]['head_id'];
        let Hindex = 0;
        for(var i = 0; i <this.sizeArr; i++) {
            if(arr[i]['id']==aa)
            {
                console.log('Id maatched at index : '+i);
                Hindex = i;break;
            }
        };
        if(arr[index]['value'] > arr[Hindex]['value']){
            console.log('Swapping')
            temp = arr[index];
            console.log(arr[Hindex])
            arr[index] = arr[Hindex];
            arr[Hindex] = temp;
            console.log('Temp is ')
            console.log(temp)
        }
        
        if(index>0){
                index--;console.log('repeating');
                this.heapSort(arr, index);
        }
        else{let checker = false;
            for(var o = 0 ;o<this.sizeArr-1;o++){
                if(arr[o]<arr[o+1])
                    checker=true
            }
            if(checker==true){
                index = this.sizeArr-1;
                this.heapSort(arr, index);
            }

        }
        console.log(arr);        
    }
}

var object = new main_handler(inputObject,(inputObject.length));
object.treeGeneration();
var inputObject = [3,8,2,4,3,7];