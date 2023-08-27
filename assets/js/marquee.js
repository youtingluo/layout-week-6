import marquee from '../../node_modules/vanilla-marquee/dist/vanilla-marquee.min.js';
export const myScroller = new marquee(document.getElementById("marquee1"), {
  direction: 'right',
  recalcResize: true,
  duration: 8000,
})
export const myScroller2 = new marquee(document.getElementById("marquee2"), {
  direction: 'left',
  recalcResize: true,
  duration: 8000,
})
