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
    },/*
    differenceWith:function(arr, value, methods) {
      var newArr = arr;
      return newArr;
    },*/
    drop:function(arr, num) {
      if(num){
        arr.splice(0,num);
      }
      return arr;
    },
    dropRight:function(arr,num) {
      var newArr = [];
      var len = arr.length;
      if(num) {
        if(len > num) {
          newArr = arr.slice(0,len-num);
        }
      }else{
        newArr = arr.slice(0,len-1);
      }
      return newArr;
    },/*
    dropRightWhile:function(arr, methods) {
      return arr;
    },
    dropWhile:function(arr, methods) {
      return arr;
    },*/
    fill:function(arr, value, start, end) {
      if(!start && !end) {
        for (var i = 0; i < arr.length; i++) {
          arr[i]=value
        }
      }else if(start && !end) {
        for (var i = start; i < arr.length; i++) {
          arr[i]=value
        }
      }else if(start && end && end >= start) {
        for (var i = start; i < end; i++) {
          arr[i]=value
        }
      }
      return arr;
    },
    findIndex:function(arr, item, fromIndex) { // 功能未实现
      for (var i = fromIndex == undefined ? 0 : fromIndex; i < arr.length; i++) {
        if(typeof item === 'function') { // 如果传入的方法是函数
          if (item(arr[i])) {
            return i;
          }
        } else if (typeof item === 'object' && Array.prototype.isPrototypeOf(item)) { // 判断传入的item是否为数组
          if (arr[i].item[0] == item[1]) {
            return i;
          }
        } else if (typeof item === 'object' && !Array.prototype.isPrototypeOf(item)) { // 判断传入的item是否为对象
          if (arr[i] === item) {
            return i;
          }
        } else if (typeof item === 'string') {
          if (arr[i].item) {
            return i;
          }
        }
        return -1;
      }
    },
    findLastIndex:function(arr, item, fromIndex) { // fromIndex = arr.length-1
      //此方法同上
    },
    flatten:function(arr) { // 展开数组
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
        if ( Array.prototype.isPrototypeOf(arr[i]) ) {
          for (var j =0; j < arr[i].length; j++) {
            newArr.push(arr[i][j]);
          }
        } else {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    },
    flattenDeep:function(arr) { // 深度展开数组
      var str = JSON.stringify(arr);
      str = str.replace(/[\[\]]/g, '');
      arr = eval('['+str+']');
      return arr;
    },
    flattenDepth:function(arr, depth) { // 根据depth值展开数组
      if(!depth) depth = 1;
      var newArr = [];
      for (var p = 0; p < depth; p++) {
        newArr = _.flatten(arr);
        arr = newArr;
      }
      return newArr;
    },
    fromPairs:function(pairs) {
      var newArr = {};
      for (var i = 0; i < pairs.length; i++) {
        newArr[pairs[i][0]] = pairs[i][1];
      }
      return newArr;
    },
    head:function(arr) {
      if(arr){
        return arr[0];
      }
      return;
    },
    indexOf:function(arr, value, fromIndex) {
      if (!fromIndex) fromIndex = 0;
      if (value && fromIndex === 0) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === value) {
            return i;
          }
        }
      } else if (value && fromIndex) {
        for (var i = fromIndex; i < arr.length; i++) {
          if (arr[i] === value) {
            return i;
          }
        }
      }else{
        return -1;
      }
    },
    initial:function(arr) {
      var newArr = [];
      return newArr;
    }
  }
})(window);