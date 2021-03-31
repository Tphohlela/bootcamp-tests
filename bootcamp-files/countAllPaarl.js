function countAllPaarl(regNumbers){
    var newRegList = regNumbers.split(', ');
  
    var newArray = [];
   
    for(var i=0;i < newRegList.length ;i++){
      
     console.log(newRegList[i]);
      
      if( newRegList[i].startsWith('CJ')){
        newArray.push(newRegList[i]);
      }
      
    }
}    