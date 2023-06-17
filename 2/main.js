
init();


function init() {

  // 分解
  const ttl = document.querySelector('.fv-contents-title')
  const ttlHtml = ttl.innerHTML
  const ttlSplit = ttlHtml.split('')
  ttl.innerHTML = ''
  ttlSplit.forEach((item, index) => {
    const el = document.createElement('span')
    el.innerHTML = item == ' ' ? '&nbsp;' : item
    ttl.appendChild(el)
  })


  let delay = 1

  // 背景
  const bgWrap = document.querySelector('.fv-bg-wrapper')
  gsap.set(bgWrap, {
    borderRadius: '100%', // まるいマスク的な
    opacity: 0,
    scale: 0.75
  })
  gsap.to(bgWrap, {
    borderRadius: '0%',
    scale: 1,
    opacity: 1,
    duration: 1,
    delay: delay,
    ease: Elastic.easeOut.config(1, 0.75),
  })

  // タイトル一個ずつ
  delay += 0.25
  document.querySelectorAll('.fv-contents-title span').forEach((item, index) => {
    gsap.set(item, {
      opacity: 0,
      y: 100,
      scale: 0,
      rotationZ: random2(45, 180),
    })
    gsap.to(item, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotationZ: 0,
      duration: 0.75,
      delay: delay + index * 0.025,
      ease: Elastic.easeOut.config(2, 0.75),
    })
  })

  // テキストはいつのまに出てる感じに
  delay += 0.5
  const text = document.querySelector('.fv-contents-text')
  gsap.set(text, {
    opacity: 0,
  })
  gsap.to(text, {
    opacity: 1,
    duration: 0.5,
    delay: delay,
    ease: Power2.easeOut,
  })
}