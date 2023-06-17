
init();


function init() {

  let delay = 1

  // 背景
  const bgWrap = document.querySelector('.fv-bg-wrapper')
  const bg = document.querySelector('.fv-bg')
  const sw = window.innerWidth

  // 右から
  gsap.set(bgWrap, {
    x: sw,
  })
  gsap.to(bgWrap, {
    x: 0,
    duration: 1,
    delay: delay,
    ease: Expo.easeInOut,
  })

  // 中身を逆に動かして固定してるように
  gsap.set(bg, {
    x: -sw,
  })
  gsap.to(bg, {
    x: 0,
    duration: 1,
    delay: delay,
    ease: Expo.easeInOut,
  })


  // タイトル
  delay += 0.55
  const titleBg = document.querySelector('.fv-contents-title .bg')
  gsap.set(titleBg, {
    scaleX: 1,
  })
  gsap.to(titleBg, {
    scaleX: 0,
    duration: 1,
    delay: delay,
    ease: Expo.easeOut,
  })


  // テキスト
  delay += 0
  const textBg = document.querySelector('.fv-contents-text .bg')
  gsap.set(textBg, {
    scaleX: 1,
  })
  gsap.to(textBg, {
    scaleX: 0,
    duration: 1,
    delay: delay,
    ease: Expo.easeOut,
  })
}