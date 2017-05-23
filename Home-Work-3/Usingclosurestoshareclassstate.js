var sum = 0, count=[];
 function Cat(name, weight1) { 

if (typeof name == 'undefined' || typeof weight1 == 'undefined') {
         throw new Error('Cats not instantiated with name, weight: ' + name + ', ' + weight);
     }     
  this.name = name;
  this._weight = weight1;
  sum += this._weight;
  count.push(this);
 };

Object.defineProperty(Cat.prototype, "weight", {
     get: function () {     
         return this._weight;
     },
     set: function (wight) {
         this._weight = wight;
         sum += this._weight;         
         },
        
 });

 Object.defineProperty(Cat, "averageWeight", {
     get: function () {
         return function () {
         console.log(count);
             return count ? sum / count.length : 0;
         };
     }
 });
