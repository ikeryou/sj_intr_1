
init();


function init() {

  let delay = 1

  // 背景
  const bgWrap = document.querySelector('.fv-bg-wrapper')
  const bg = document.querySelector('.fv-bg')

  // ちょいはやめに登場
  gsap.set(bgWrap, {
    opacity: 0
  })
  gsap.to(bgWrap, {
    opacity: 1,
    duration: 1,
    delay: delay,
    ease: Power2.easeOut,
  })

  // 中身はゆっくり動き続ける
  gsap.set(bg, {
    scale: 1.05
  })
  gsap.to(bg, {
    scale: 1,
    duration: 12,
    delay: delay,
    ease: Power2.easeOut,
  })


  // タイトル
  delay += 1
  const title = document.querySelector('.fv-contents-title')
  gsap.set(title, {
    filter: "blur(50px)",
    opacity: 0,
    scale: 1.1,
  })
  gsap.to(title, {
    filter: 'blur(0px)',
    opacity: 1,
    scale: 1,
    duration: 2,
    delay: delay,
    ease: Power2.easeOut,
  })


  // テキスト
  delay += 1
  const text = document.querySelector('.fv-contents-text')
  gsap.set(text, {
    filter: "blur(50px)",
    opacity: 0,
    scale: 1.1,
  })
  gsap.to(text, {
    filter: 'blur(0px)',
    opacity: 1,
    scale: 1,
    duration: 2,
    delay: delay,
    ease: Power2.easeOut,
  })
}