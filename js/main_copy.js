var inputObject = [6,5,34,23,3,7,1,0,67,45];
var svgElement = d3.select('body').append('svg').attr('height','100%').attr('width','100%');
var elementBinaryTree = {id:0,value:0,head_id:0,tail_left_id:0,tail_right_id:0}; //  'id',value,'upper head id','lower left id', 'lower right id'
var sizeArr = inputObject.length;
var heapSize = 0;
        
var binaryTree = [];
         
function idGenerator(){
        return Math.floor(Math.random() * 1000000);
    }
function  treeGeneration(){
        for(var i =0; i< sizeArr; i++){
            console.log('size is : '+sizeArr);
            var elementBinaryTree = {id:0,value:0,head_id:0,tail_left_id:0,tail_right_id:0};
            elementBinaryTree['id'] = idGenerator();
            console.log('ID for element '+(i+1)+' is '+ elementBinaryTree['id']);
            console.log('value : '+inputObject[i])
            elementBinaryTree['value']=inputObject[i];
            binaryTree.push(elementBinaryTree);
        }
        console.log('Initial binary tree');
        console.log(binaryTree);
        heapAssignment();
    }
function heapAssignment(){
        let x,sum,y,k=0,lastIndex=1;
        for(var i =0; i<sizeArr; i++){
            try{
            k = i;
            if(i==0)
                for(var j=i;j<Math.pow(2,i);j++){
                    if(binaryTree[j]['tail_left_id']==0){
                
                        binaryTree[j]['tail_left_id']=binaryTree[lastIndex]['id'];
                        lastIndex++;
                        binaryTree[j]['tail_right_id']=binaryTree[lastIndex]['id'];
                        lastIndex++;
                    }
            }
            else
            for(var j=i;j<=Math.pow(2,i);j++){
                if(binaryTree[j]['tail_left_id']==0){
                    binaryTree[j]['head_id'] = binaryTree[k-1]['id'];
                    binaryTree[j]['tail_left_id']=binaryTree[lastIndex]['id'];
                    lastIndex++;
                    binaryTree[j]['tail_right_id']=binaryTree[lastIndex]['id'];
                    lastIndex++;           
                }
            }
        }
            catch(e){
            continue;
        }
        }
        
        heapHeadAllotment();
    }
function heapHeadAllotment(){
        var ccc =0;
        for(var i=0;i<sizeArr;i++){
            if(i != 0){
                ccc++;
                let id1 = binaryTree[i]['tail_left_id'];
                if(true)
                for(var j=0;j<sizeArr;j++){
                    
                    if(binaryTree[j]['id']==id1 ){
                        binaryTree[j]['head_id']=binaryTree[i]['id'];
                    }
                }
                let id2 = binaryTree[i]['tail_right_id'];
                if(true){
                    for(var j=0;j<sizeArr;j++){
                        
                    if(binaryTree[j]['id']==id2 ){
                        binaryTree[j]['head_id']=binaryTree[i]['id'];
                    }
                } 
            }  
        }
        }//console.log(binaryTree);
        //heapSort(binaryTree,sizeArr-1);
        var array = binaryTree;
        setTimeout(heapify,5000);
    }
function heapify(arr=binaryTree){ // creating max heap
        for(var i=0;i<sizeArr*10;i++){
            for(var j=sizeArr-1;j>=0;j-=2){
                if(false)
                    continue;
                else{
                    let id_head = arr[j]['head_id'],tmp,tmp2;
                    for(var k=sizeArr-1;k>=0;k--){
                        if(arr[k]['id']==id_head){
                            if(arr[k]['value']<arr[j]['value']){
                                console.log('matched')
                                console.log('arr[k] : '+arr[k]['value'] + ' '+arr[k]['id'] +'  arr[j] : '+arr[j]['value']+ ' '+arr[j]['id'] );
                                console.log('Kid: ' +arr[k]['id']+' value:'+arr[k]['value']+' head:'+arr[k]['head_id']+' tail_left:'+arr[k]['tail_left_id']+' tail_right:'+arr[k]['tail_right_id']);
                                console.log('Jid: ' +arr[j]['id']+' value:'+arr[j]['value']+' head:'+arr[j]['head_id']+' tail_left:'+arr[j]['tail_left_id']+' tail_right:'+arr[j]['tail_right_id']);
                                let temp_head_id = arr[k]['head_id'],
                                    temp_tail_r_id = arr[k]['tail_right_id'],
                                    temp_tail_l_id = arr[k]['tail_left_id'],
                                    temp_value = arr[k]['value'],
                                    temp_id = arr[k]['id'];
                                //arr[k]['id']=arr[j]['id'];
                                //arr[k]['head_id']=arr[j]['head_id'];
                                //arr[k]['tail_right_id']=arr[j]['tail_right_id'];
                                //arr[k]['tail_left_id']=arr[j]['tail_left_id'];
                                arr[k]['value']=arr[j]['value'];
                                //arr[j]['id']=temp_id;
                                //arr[j]['head_id']=temp_head_id
                                //arr[j]['tail_right_id']=temp_tail_r_id;
                                //arr[j]['tail_left_id']=temp_tail_l_id;
                                arr[j]['value']=temp_value;
                                console.log('arr[k] : '+arr[k]['value'] + ' '+arr[k]['id'] +'  arr[j] : '+arr[j]['value']+ ' '+arr[j]['id'] );
                                console.log('Kid: ' +arr[k]['id']+' value:'+arr[k]['value']+' head:'+arr[k]['head_id']+' tail_left:'+arr[k]['tail_left_id']+' tail_right:'+arr[k]['tail_right_id']);
                                console.log('Jid: ' +arr[j]['id']+' value:'+arr[j]['value']+' head:'+arr[j]['head_id']+' tail_left:'+arr[j]['tail_left_id']+' tail_right:'+arr[j]['tail_right_id']);
                            }
                        }
                    }
                }
            }
        }
        console.log(arr);
    }


treeGeneration();