import pcsTools from './pcsTools.js';

// const potus = pcsTools.getElement('#potus');

// pcsTools.css(potus, 'color', 'red');
// pcsTools.click(potus, () => {
//     console.log('clicked potus')
// });

// pcsTools.on(potus, 'mouseenter', () => {
//     pcsTools.css(potus, 'backgroundColor', 'blue')
// });

// pcsTools.on(potus, 'mouseleave', () => {
//     pcsTools.css(potus, 'backgroundColor', 'white')
// });

// //pcsTools.setCss(potus, 'font-family', 'cursive');
// console.log(pcsTools.css(potus, "font-family"));


const potus = pcsTools('#potus');
// const potus = $('#potus');

potus.css('color', 'red');
potus.click(() => {
    console.log('clicked potus');
});

potus.on('mouseenter', () => {
    potus.css('backgroundColor', 'blue');
});

potus.on('mouseleave', () => {
    potus.css('backgroundColor', 'white');
});
potus.hide();
potus.show();
//potus.sparkle();
//pcsTools.setCss(potus, 'font-family', 'cursive');
//console.log(pcsTools.css(potus, "font-family"));
console.log(potus.css("font-family"));