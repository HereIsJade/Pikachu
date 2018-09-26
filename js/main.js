!function(){
  let code = `/*
 * Hey.
 * Welcome to my live coding tutorial on drawing Pikachu.
 * Let's begin. We start by animating... well, everything.
 */

 * {
  -webkit-transition: all 0.5s;
}
.code-editor {
  padding: 20px;
}
/**
 * This is good, but all the text is white!
 * Let's make it even more readable.
 */
.token.comment { color: #999; }
.token.selector { color: #cc99cd; }
.token.property { color: #f8c555; }
/**
 * Cool. Now, prepare a yellow canvas for preview.
 */
.preview {
  background: #FEE433;
}
/*
 * Let's first draw Pikachu a nose.
 */
.nose {
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent;
  border-radius: 11px;
  position: absolute;
  left: 50%;
  top: 28px;
  margin-left: -12px;
}
/*
 * Give him eyes.
 */
.eye {
  width: 49px;
  height: 49px;
  background: #2E2E2E;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000000;
}
/*
 * Bling bling eyeballs!
 */
.eye::before{
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  left: 6px;
  top:-1px;
  border: 2px solid #000;
}
/*
 * Left eye to the left (...I know)
 */
.eye.left{
  right: 50%;
  margin-right: 90px;
}
/*
 * Right eye to (...stop!)
 */
.eye.right{
  left: 50%;
  margin-left: 90px;
}
/*
 * OK, now red cheeks!
 */
.face{
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px;
}
/*
 * Put them in the right place.
 */
.face.left{
  right: 50%;
  margin-right: 116px;
}
.face.right{
  left: 50%;
  margin-left: 116px;
}
/*
 * Upper lips.
 */
.upperLip{
  height: 25px;
  width: 80px;
  border: 2px solid black;
  position: absolute;
  top: 50px;
  background: #FDE348;
}
.upperLip.left{
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right{
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
/*
 * Lower lips.
 */
.lowerLip-wrapper{
  bottom: 0;
  position: absolute;
  left: 50%;
  margin-left: -150px;
  height: 110px;
  overflow: hidden;
  width: 300px;
}
.lowerLip{
  height: 3500px;
  width: 300px;
  background: #990513;
  border-radius: 200px/2000px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden;
}
/*
 * Cute little tongue.
 */
.lowerLip::after{
  content: '';
  position: absolute;
  bottom: -20px;
  width: 100px;
  height: 100px;
  background: #FC4A62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}
/*
 * Alright, here is our Pikachu. Try it by yourself!
 */
`
  let duration = 50
  let domCode = document.querySelector('#code')
  let styleTag = document.querySelector("#styleTag")

  function writeCSS(prefix, code, callback){
    let n = 0
    let id = setTimeout(function fn(){
      n += 1
	    // display the code inside <pre> tag
      let htmlCode = prefix + code.substring(0, n)
      // domCode.innerHTML = htmlCode
	    // highlight the code
	    domCode.innerHTML = Prism.highlight(htmlCode, Prism.languages.css, 'css');
	    // apply the css code by updating #styleTag
      styleTag.innerHTML = htmlCode

      // make sure to the scroll bar is always at the bottom
      domCode.scrollTop = domCode.scrollHeight

      if(n < code.length){
        id = setTimeout(fn, duration)
      }else{
        callback && callback.call()
      }
    }, duration)
  }

  writeCSS('', code)

  let $buttons = $('.actions')
  $buttons.on('click', 'button', (e)=>{
    let button = e.currentTarget
    let speed = $(button).attr('data-speed')
    $(button).addClass('active').siblings().removeClass('active')
    console.log(speed)
    switch (speed){
      case 'slow':
        duration = 100
        break
      case 'normal':
        duration = 50
        break
      case 'fast':
        duration = 10
        break
      default:
        duration = 50
    }
  })

}()