function calculate(input){
   var f = {add:'+', sub:'-', div:'/', mul:'*'};
   //Setting the order of operations
   f.dmsa = [ [[f.mul] , [f.div]], [[f.add] , [f.sub]] ];
   var output;
   for(var i=0, n=f.dmsa.length; i<n; i++ ){
      // Regular Expression to look for operators between floating numbers or integers
      var re = new RegExp('(\\d+\\.?\\d*)([\\'+f.dmsa[i].join('\\')+'])(\\d+\\.?\\d*)');
      re.lastIndex = 0;                                     // be cautious and reset re start pos
      // Loop while there is still calculation for level of precedence
      while(re.test(input)){
         //document.write('<div>' + input + '</div>');
         output = calc_internal(RegExp.$1,RegExp.$2,RegExp.$3);
         if (isNaN(output) || !isFinite(output)) return output;   // exit early if not a number
         input  = input.replace(re,output);
      }
   }
   return output;

   function calc_internal(a,op,b){
      a=a*1; b=b*1;
      switch(op){
         case f.add: return a+b; break;
         case f.sub: return a-b; break;
         case f.div: return a/b; break;
         case f.mul: return a*b; break;
         default: null;
      }
   }
}
 