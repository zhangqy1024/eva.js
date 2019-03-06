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
      for (i = 0; i < arr.length; i++) {
        if (arr[i] == false) {
          arr.splice(i,1);
        }
        
      }
      return arr;
    },

  }
})(window);