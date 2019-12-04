// 会变黄的原因是 background: rgb(222,222,2 是黄色，*{transition: all 1s;}解决
/* 把 code 写到 #code 和 style 标签里 */
function writeCode(prefix, code, fn){
  let domCode = document.querySelector('#code')
  domCode.innerHTML = prefix || ''
  var n = 0
  let id = setInterval(()=>{
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css, 'css');
    styleTag.innerHTML = prefix + code.substring(0,n)
    domCode.scrollTop = domCode.scrollHeight
    if(n >= code.length){
      window.clearInterval(id)
      fn.call()
    }
  },10)
}

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
#code{
  position: fixed;
  left: 0;
  width: 50%;
  height: 100%;
}
#paper{
  position: fixed;
  right: 0;
  width: 50%;
  height: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
}
#paper > .content{
  background: white;
  height: 100%;
  width: 100%;
}
`
var result2 = `
#paper{

}
/* 接下来把 Markdown 变成 HTML - 用库marked.js */
/* 接下来给 HTML 加样式 */
/* 这就是我的会动的简历 */
/* 谢谢观看 */
`
var md = `
# 自我介绍

我叫 田佳军
1991年8月出生
常州工学院毕业
自学前端半年
希望应聘前端开发岗位

# 既能接受

熟悉 JavaScript CSS

# 项目介绍

1. xxx 轮播
2. xxx 简历
3. xxx 画板

# 联系方式

QQ XXX
Email xxx
手机 xxx
`

writeCode('', result, ()=>{
  createPaper(()=>{
    writeCode(result, result2, ()=>{
      writeMarkdown(md, ()=>{
        markdownToHtml(()=>{
          write(result+result2, result3)
        })
      })
    })
  })
})

function createPaper(fn){
  var paper = document.createElement('div')
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn.call()
}

function writeMarkdown(markdown, fn){
  let domPaper = document.querySelector('#paper > .content')
  var n = 0
  let id = setInterval(()=>{
    n += 1
    domPaper.innerHTML = markdown.substring(0,n)
    domPaper.scrollTop = domPaper.scrollHeight
    if(n >= markdown.length){
      window.clearInterval(id)
      fn.call()
    }
  },10)
}