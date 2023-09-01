import marquee from '../../node_modules/vanilla-marquee/dist/vanilla-marquee.min.js';
export const myScroller = new marquee(document.getElementById("marquee1"), {
  direction: 'right',
  duplicated: true,
  gap: 0,
  recalcResize: true,
  duration: 4000,
})
export const myScroller2 = new marquee(document.getElementById("marquee2"), {
  direction: 'left',
  duplicated: true,
  gap: 0,
  recalcResize: true,
  duration: 4000,
})
