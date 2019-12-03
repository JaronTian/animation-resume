// 会变黄的原因是 background: rgb(222,222,2 是黄色，*{transition: all 1s;}解决
var result = `/*
* 面试官你好，我是田佳军
* 我讲义动画的形式来介绍我自己
* 只用文字介绍太单调了
* 我就用代码来介绍吧
* 首先准备一些样式
*/
    
*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size: 16px;
}
#code{
border: 1px solid red;
padding: 16px;
}

/* 我需要一点代码高亮 */

.token.selector{
  color: #690;
}
.token.property{
  color: #905;
}
.token.function{
  color: #DD4A68;
}

/* 加点 3D 效果 */
#code{
  transform: rotate(360deg);
}
/* 不玩了，我来介绍一下我自己吧 */
/* 我需要一张白纸 */
`

var n = 0
var id = setInterval(()=>{
  n +=1
  code.innerHTML = result.substring(0,n) //返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集
  code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
  styleTag.innerHTML = result.substring(0,n)
  console.log('一轮')
  if(n >= result.length){
    window.clearInterval(id)
    fn2()
    fn3(result)
  }
},30)

function fn2(){
  var paper = document.createElement('div')
  paper.id = 'paper'
  document.body.appendChild(paper)
}

function fn3(preResult){
  var result = `
#paper{
  width: 100px; height: 100px;
  background: red;
}
  `
  var n = 0
  var id = setInterval(()=>{
    n += 1
    code.innerHTML = preResult + result.substring(0,n)
    code.innerHTML = Prism.highlight(code.innerHTML, Prism.languages.css, 'css');
    styleTag.innerHTML = preResult + result.substring(0,n)
    if(n >= result.length){
      window.clearInterval(id)
    }
  },50)
}