  function getUrlParams () {
    const map = new Map()
    const href = location.href
    const indexQ = href.indexOf('?')
    if (indexQ !== -1) {
      const query = href.substr(indexQ + 1)
      const params = query.split('&')
      for (let i = 0; i < params.length; i++) {
        const temp = params[i].split('=')
        map.set(temp[0], temp[1])
      }
    }
    return map
  }

  function randomNumber(count) {
    let res = ''
    for (i = 0; i < count; i++) {
      res += Math.floor(Math.random() * 10)
    }
  
    return res
  }

  Date.prototype.Format = function(fmt)   
{    
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
} 

function getCurrDate() {
  let d=new Date()
  let ymd=d.Format("yyyy-MM-dd");
  let hms=d.Format("hh:mm:ss");
  let S=d.Format("S");
	return ymd+","+hms;
}

//   //获取n位随机数,随机来源chars
// var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// function generateMixed(n) {
//     var res = "";
//     for(var i = 0; i < n; i++) {
//         var _index = Math.ceil(Math.random() * (chars.length-1));
//         console.log(_index)
//         res += chars[_index];
//     }
//     return res;
// }
// var num1 = generateMixed(6);
// console.log(num1)