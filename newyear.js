/* ---------- 0. 视差 ---------- */
const svg = document.getElementById('newyear2020');
window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth  - 0.5) * 15;
  const y = (e.clientY / window.innerHeight - 0.5) * 15;
  svg.style.transform = `translate(${x}px, ${y}px)`;
});

/* ---------- 1. 动态加载 anime.min.js ---------- */
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/animejs@3.2.1/lib/anime.min.js';
document.head.appendChild(script);

script.onload = () => {
  /* 1. HAPPY 描边 */
  anime({
    targets: '#newyear2020 #happy',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    delay: anime.stagger(375),
    direction: 'alternate',
    loop: true
  });

  /* 2. NEWYEAR 描边 */
  anime({
    targets: '#newyear2020 #NEWYEAR',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3750,
    delay: anime.stagger(375),
    direction: 'alternate',
    loop: true
  });

  /* 3. 小星星浮动 */
  anime({
    targets: '#newyear2020 #Vector_43, #Vector_210, #Vector_207, #Vector_42, #Vector_45',
    translateY: [-10, 0],
    easing: 'easeInOutSine',
    duration: 3750,
    delay: anime.stagger(375),
    direction: 'alternate',
    loop: true
  });
};