function showCount(arr){
  //return arr.length +" elements are there in this array";
  return `${arr.length}  elements are there in this array`;
};

function addNum(a,b){
  //return arr.length +" elements are there in this array";
  return `${a} + ${b} =  ${a+b}`;
};
var pi = 3.14


module.exports.showCount = showCount;
module.exports.addNum = addNum;
module.exports.pi = pi;
