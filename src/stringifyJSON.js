// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*var stringifyJSON = function(obj) {
  // your code goes here
  var result = "";
  var args = Array.prototype.slice.call(arguments);
  for(var i = 0; i<args.length; i++) {
  	var argItem = args[i];
  	argItem.forEach(function(item) {
  		if(typeof item === "number") {
  			result = result + item;
  		}
  		result += item;
  	})
  }
  return result;
};*/


/*=====================
Attempt two
====================*/

/*var stringifyJSON = function(obj) {
  // your code goes here
  var result = "";
  var args = Array.prototype.slice.call(arguments);
  if(args.length<3) {
    return result;
  }
  args.reduce(function(start, item){
    if(typeof item === "object") {
  	 for(var prop in item) {
  		  result += prop + ":";
  		  result += item[prop]
  		  start[prop] = item[prop];
      }
  	}
    else if(typeof item === "number") {
      result += item;
    }
    else if(Array.isArray(item)) {
      for(var i = 0; i<item.length; i++) {
        result += item[i];
      }
    }
  	return start;
  }, {})
  return result;
};*/


/*var stringifyJSON = function(obj) {
  var result;
  if(obj.length === 0) {
    return;
  }
  var last = obj.pop();
  if(typeof last === "number"){
    result = last.toString();
  }
  return result + stringifyJSON(obj)
}*/

//TREAT OBJ LIke a string! get it to.string() asap

var stringifyJSON = function(obj) {
  var result = '';
  if(obj === null) {
    return 'null'
  }


  else if(Array.isArray(obj)) {
    result += '['
    if(obj.length>1) {
      for(var i = 0; i<obj.length; i++) {
        result += stringifyJSON(obj[i].toString());
        if(i !== obj.length-1) {
          result += ',';
        }
      }
    }
    else if(obj.length>0) {
      result += stringifyJSON(obj.toString());
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
  
  return obj.toString();
};