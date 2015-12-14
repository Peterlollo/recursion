// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



var getElementsByClassName = function(className
){
  // your code here
  var targetClass = '.';
  targetClass += className;
  var targClassWithout = '';
  targClassWithout += className;
  var answer = [];
  var count = 0;
  function search (el) {
    if(count === 0) {
     var el = document;
    }
    if($(el).hasClass(targClassWithout)) {
      answer.push($(el)[0]);
    }
    count++;
    var found = $(el).find(targetClass)[0];
    if(found === undefined) {
      if($(el).next().length !==0) {
        return search($(el).next());
      }
      return answer;
    }
    return search(found);
  }
  return search();
};