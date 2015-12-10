// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:





var stringifyJSON = function(obj) {
  var result = '';
  if(obj === null) {
    return 'null'
  }
  else if(Array.isArray(obj)) {
    result += '['
    if(obj.length>0) {
      for(var i = 0; i<obj.length; i++) {
        result += stringifyJSON(obj[i]);
        if(i !== obj.length-1) {
          result += ',';
        }
      }
    }
    result += ']'
    return result;
  }
  else if(!(Number.isNaN(parseInt(obj)))) {
     return obj.toString();
  }
  else if(typeof obj === 'string') {
    result += '\"';
    result += obj;
    result += '\"';
    return result;
  }
  else if(typeof obj === "object") {
    result += '{';
    var count = 0;
    for(var prop in obj) {
      count++;
    }
    if(count>0) {
      for(var prop in obj) {
        count --;
        result += stringifyJSON(prop) + ':';
        result += stringifyJSON(obj[prop]);
        if(count !== 0) {
          result += ',';
        }
      }
    }
    result += '}'
    return result;
  }
  return obj.toString();
};