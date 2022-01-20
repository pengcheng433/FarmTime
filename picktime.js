

   // 两个数据相减计算精度
   function accMinus  (arg1,arg2)  {
    var r1,r2,m,n; 
    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0} 
    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0} 
    m=Math.pow(10,Math.max(r1,r2)); 
    //last modify by deeka 
    //动态控制精度长度 
    n=(r1>=r2)?r1:r2; 
    return ((arg1*m-arg2*m)/m).toFixed(n); 
  }
  
  function accMul  (arg1,arg2) {
    if(!arg1 || !arg2){
      return 0
    }
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) { }
    try { m += s2.split(".")[1].length } catch (e) { }
  
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  }
  function accDev(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    if(r2==0){
      return Infinity;
    }else{
      return (r1 / r2) * Math.pow(10, t2 - t1);
    }
   }

  





  function  formatSecond( s ) { 
    var day = Math.floor( s/ (24*3600) ); // Math.floor()向下取整 
    var hour = Math.floor( (s - day*24*3600) / 3600); 
    var minute = Math.floor( (s - day*24*3600 - hour*3600) /60 ); 
    var second = s - day*24*3600 - hour*3600 - minute*60; 
    return  (hour<10?'0'+hour:hour) + ":" + (minute<10?'0'+minute:minute) + ":" + (second<10?'0'+second:second); 
}



function  time(count,time){

let currTimes = new Date().getTime(), 
mul1 = accMul(count,6),
min1 = accMinus(30,mul1),
mul2 = accMul(3600,min1),
min2 = accMinus(currTimes,time),
dev = accDev(min2,1000),
tem = accMinus(mul2,dev) 
console.log(Math.floor(tem));
return Math.floor(tem);
}

var temptiem =time(1,1642576675000);

var truetime =formatSecond(temptiem);
console.log(truetime)