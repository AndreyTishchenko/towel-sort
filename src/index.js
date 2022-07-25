module.exports = function towelSort (matrix) {
  if(matrix != null){
    let resultArr = [];
    matrix.forEach((element, index) => {
      index % 2 ? resultArr.push(...element.reverse()) : resultArr.push(...element)
    });
    return resultArr;
  }else{
    return []
  }

};