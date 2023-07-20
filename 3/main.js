

console.log(THREE);


init();


function init() {

  // タイトル分解
  const ttl = document.querySelector('.fv-contents-title')
  const ttlHtml = ttl.innerHTML
  const ttlSplit = ttlHtml.split('')
  ttl.innerHTML = ''
  ttlSplit.forEach((item, index) => {
    const el = document.createElement('span')
    
    const elTxt = document.createElement('span')
    elTxt.classList.add('text')
    elTxt.innerHTML = item == ' ' ? '&nbsp;' : item
    el.appendChild(elTxt)

    const elBg = document.createElement('span')
    elBg.classList.add('bg')
    el.appendChild(elBg)

    ttl.appendChild(el)
  })



  let delay = 1

  // 背景

  // 白黒のが下から
  const bgWrap = document.querySelector('.fv-bg-wrapper.-gray')
  const bg = bgWrap.querySelector('img')
  gsap.set(bgWrap, {
    y: '100%',
  })
  gsap.to(bgWrap, {
    y: '0%',
    duration: 1,
    delay: delay,
    ease: Expo.easeInOut,
  })
  gsap.set(bg, {
    y: '-100%',
  })
  gsap.to(bg, {
    y: '0%',
    duration: 1,
    delay: delay,
    ease: Expo.easeInOut,
  })

  // 後でカラーのが
  const delay2 = delay + 1
  const bgWrap2 = document.querySelector('.fv-bg-wrapper.-col')
  const bg2 = bgWrap2.querySelector('img')
  gsap.set(bgWrap2, {
    y: '100%',
  })
  gsap.to(bgWrap2, {
    y: '0%',
    duration: 1,
    delay: delay2,
    ease: Expo.easeInOut,
  })
  gsap.set(bg2, {
    y: '-100%',
  })
  gsap.to(bg2, {
    y: '0%',
    duration: 1,
    delay: delay2,
    ease: Expo.easeInOut,
  })


  // タイトル
  delay += 0.35
  document.querySelectorAll('.fv-contents-title > span').forEach((item, index) => {
    const bg = item.querySelector('.bg')
    const txt = item.querySelector('.text')

    // 色ランダムに
    const col = randomArr([
      new THREE.Color(0xe34ec4),
      new THREE.Color(0xc60834),
      new THREE.Color(0xe89e79),
      new THREE.Color(0x1ea15b),
      new THREE.Color(0x1586c8),
      new THREE.Color(0x972cc7)
    ])

    // 背景
    gsap.set(bg, {
      y: '100%',
      backgroundColor: col.getStyle(),
    })
    gsap.to(bg, {
      y: '-100%',
      duration: 0.75,
      delay: delay + index * 0.025,
      ease: Expo.easeInOut,
    })

    // テキスト
    gsap.set(txt, {
      y: '100%',
      // rotationY: 90,
      color: col.getStyle(),
    })
    gsap.to(txt, {
      y: '0%',
      // rotationY: 0,
      color: '#FFF',
      duration: 0.75,
      delay: (delay + 0.0) + index * 0.025,
      ease: Expo.easeInOut,
    })
  })


  // テキスト あっさりと
  delay += 0
  const text2 = document.querySelector('.fv-contents-text')
  gsap.set(text2, {
    opacity: 0,
  })
  gsap.to(text2, {
    opacity: 1,
    duration: 1,
    delay: delay,
    ease: Expo.easeOut,
  })
}