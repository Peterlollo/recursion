// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  var result = [];
  var targetStr = '';
  targetStr += '.';
  targetStr += className;
  return targetStr;
  if($('.className') === undefined) {
  	return result;
  }
  result.push($('.className').NODE);
  NODE.removeClass('.className');
  return result.push(getElementsByClassName(className));
};
