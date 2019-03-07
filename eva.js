(function(win) {
  win._ = {
    chunk: function(arr, size) {
      var newArr = [];
      for (var i = 0; i< arr.length; i++) {
        if (newArr.length < arr.length/size) {
          var item = arr.slice(i*size,(i+1)*size);
          newArr.push(item);
        }
        return newArr;
      }
    },
    compact: function(arr) {
      var brr = [];
      for (var i = 0; i< arr.length; i++) {
        if(arr[i]==false || arr[i]==undefined) {
          brr.push(arr[i]);
        }
      }
      for (var i = 0; i < brr.length; i++) {
        for(var j = 0;j < arr.length; j++){
          if(arr[j]==brr[i]){
              arr.splice(j,1);
              j--;
          }
        }
      }
      return arr;
    },
    concat:function(arr, value) {
      var newArr = arr;
        for (var i = 1;i < arguments.length; i++) {
          if (typeof arguments[i] == 'object') {
            newArr = newArr.concat(arguments[i]);
          } else {
            newArr.push(arguments[i]);
          }
        }
        return newArr;
    },
    difference:function(arr, value) {
      var newArr = arr;
      for (var i = 0; i < newArr.length; i++) {
        for(var j = 0;j < arguments[1].length; j++){
          if(arguments[1][j]==newArr[i]){
            newArr.splice(i,1);
            i--;
          }
        }
      }
      return newArr;
    },
    differenceBy:function(arr, value, methods) {
      var newArr = arr;
      for (var i = 0; i < newArr.length; i++) {
        for(var j = 0;j < arguments[1].length; j++){
          if(methods(arguments[1][j])==methods(newArr[i])){
            newArr.splice(i,1);
            i--;
          }
        }
      }
      return newArr;
    },
    differenceWith:function(arr, value, func) {
      var newArr = arr;
      return newArr;
    }
  }
})(window);