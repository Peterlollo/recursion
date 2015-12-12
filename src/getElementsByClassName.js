// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
/*var getElementsByClassName = function(className
){
  // your code here
  var target = '.';
  target += className;
  var answer = [];
  var firstSearch = document;
  var count = 0;
  function search (el) {

    if(count === 0) {
     var el = document;
    }
    else {
      var tar = '';
      tar += el; 
    }
    var found = $(el).find(target)[0];
    if(found === undefined) {
      return answer;
    }
    answer.push(found)
    count++;
    return search(found);
  }
  return search();
};*/


var getElementsByClassName = function(className
){
  // your code here
  var targetClass = '.';
  targetClass += className;
  var targClassWithout = '';
  targClassWithout += className;
  var answer = [];
  var firstSearch = document;
  var count = 0;
  function search (el) {
    if(count === 0) {
     var el = document;
    }
    if($(el).hasClass(targClassWithout)) {
      answer.push($(el)[0]);
    }
    count++;
    var find = $(el).find(targetClass);
    var found = $(el).find(targetClass)[0];
    if(found === undefined) {
      /*if(el.hasChildNodes()) {
        var children = found.childNodes;
        for(var i = 0; i < children.length; i++) {
          search(children[i]);
        }
      }*/ 
      //EITHER SEARCH THE FIND ARRAY OR THE NEXT() ARRAY FOR HASCLASS()
      if($(el).next().length !==0) {
        return search($(el).next());
      }
      return answer;
    }
    //answer.push(found)
    //count++;
    return search(found);
  }
  return search();
};