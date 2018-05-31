var inputObject = [6,5,67,45,34,23];
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
        //this.heapSort(this.binaryTree,this.sizeArr-1);
        var array = this.binaryTree;
        this.heapify(array);
    }

    heapSort(arr, index){
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
            temp = arr[index];
            arr[index] = arr[Hindex];
            arr[Hindex] = temp;
        }
        
        if(index>1){
                index--;console.log('repeating');
                this.heapSort(arr, index);
        }
        else{let checker = false;
            for(var o = 0 ;o<this.sizeArr-1;o++){
                if(arr[o]>arr[o+1])
                    checker=true
                else{
                    checker=false;break;
                }
            }
            if(checker==false){
                index = this.sizeArr-1;console.log(arr);     
                this.heapSort(arr, index);
            }

        }
        console.log(arr);        
    }
    heapify(arr){ // creating max heap
        for(var i=0;i<this.sizeArr;i++){
            for(var j=this.sizeArr-1;j>=0;j--){
                if(arr[j]['head_id']==0)
                    continue;
                else{
                    let id_head = arr[j]['head_id'],tmp,tmp2;
                    for(var k=this.sizeArr-1;k>=0;k--){
                        if(arr[k]['id']==id_head){
                            if(arr[k]['value']<arr[j]['value']){
                                console.log('arr[k] : '+arr[k]['value']+'  arr[j] : '+arr[j]['value']);
                                console.log('matched')

                                let temp_head_id = arr[k]['head_id'],
                                    temp_tail_r_id = arr[k]['tail_right_id'],
                                    temp_tail_l_id = arr[k]['tail_left_id'],
                                    temp_value = arr[k]['value'],
                                    temp_id = arr[k]['id'];
                                arr[k]['id']=arr[j]['id'];
                                arr[k]['head_id']=arr[j]['head_id'];
                                arr[k]['tail_right_id']=arr[j]['tail_right_id'];
                                arr[k]['tail_left_id']=arr[j]['tail_left_id'];
                                arr[k]['value']=arr[j]['value'];
                                arr[j]['id']=temp_id;
                                arr[j]['head_id']=temp_head_id;
                                arr[j]['tail_right_id']=temp_tail_r_id;
                                arr[j]['tail_left_id']=temp_tail_l_id;
                                arr[j]['value']=temp_value;
                                console.log('arr[k] : '+arr[k]['value']+'  arr[j] : '+arr[j]['value']);
                            }
                        }
                    }
                }
            }
        }
        console.log(arr);
    }


}

var object = new main_handler(inputObject,(inputObject.length));
object.treeGeneration();
var inputObject = [3,8,2,4,3,7];