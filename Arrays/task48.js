 // forEachArray Function:
function forEachArray(array,callback){
    // console.log(callback)
    for(let i=0; i<array.length; i++){
      callback(array[i],i,array);
    }
  }
  
  // mapArray Function:
  function mapArray(array,callback){
    let result=[];
    for (let i=0; i<array.length; i++){
      result.push(callback(array[i],i,array));
    }
    return result;
  }
  
  // filterArray Function:
  function filterArray(array,callback){
    let result=[];
    for (let i=0; i<array.length;i++){
      if (callback(array[i],i,array)){
        result.push(array[i])
      }
       }
    return result;
                                                                                                                                                                                                                                                                                                                                                                                                      
  }