Array.prototype.groupBy = function (props) {
       var arr = this;
       var partialResult = {};
       
       arr.forEach(el=>{
       
           var grpObj = {};
           
           props.forEach(prop=>{
                 grpObj[prop] = el[prop]
           });
           
           var key = JSON.stringify(grpObj);
           
           if(!partialResult[key]) partialResult[key] = [];
           
           partialResult[key].push(el);
           
       });
       
       var finalResult = Object.keys(partialResult).map(key=>{
          var keyObj = JSON.parse(key);
          keyObj.values = partialResult[key];
          return keyObj;
       })
       
       return finalResult;
    }
    Array.prototype.orderBy = function (func) {
      this.sort((a, b) => {
         
          var a = func(a);
          var b = func(b);
        
          if (typeof a === 'string' || a instanceof String) {
              return a.localeCompare(b);
          }
          return a - b;
      });
      return this;
    }
    Array.prototype.orderByDescending = function (func) {
      this.sort((a, b) => {
          var a = func(a);
          var b = func(b);
          if (typeof a === 'string' || a instanceof String) {
              return b.localeCompare(a);
          }
          return b - a;
      });
      return this;
  }
    Array.prototype.where = function (func){
      return this.filter(func);
    }