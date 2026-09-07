function getElement(id) {
  return document.querySelector(id);
}

function setCss(element,property, value) {
  element.style[property] = value;
}

function on(element,eventType, callback) {
  element.addEventListener(eventType, callback);
}

function click(element, callback) {
  on(element, 'click', callback);
}

function getCss(element, property) {
    //return element.style[property];
    return getComputedStyle(element)[property];
}
function hide(element) {
    setCss(element,"display","none")
}

function show(element) {
    setCss(element,"display","block")
}

function sparkle(element) {
    setInterval(() => {
        element.style.color = getColor();
    }, 1000);
}

function getColor() {
    return `#${Math.floor(Math.random() * 16777217).toString('16').padStart(6, '0')}`;
}

function getText(element) {
    return element.textContent;
}

function setText(element, text) {
    element.textContent = text;
}
export default function (selector) {
     const element = getElement(selector);
    //const element=document.querySelectorAll(selector);
    return {

        css: (property, value) => {
            if (value === undefined) {
                return getCss(element, property);
            } else {
               // element.forEach(e=>setCss(e,property,value))
                setCss(element, property, value);
            }
        },

        hide: () => hide(element),
        show: () => show(element),

        on: (eventType, callback) => {
            on(element, eventType, callback);
        },

        click: (callback) => {
            click(element, callback);
        },

        sparkle: () => sparkle(element),
        
        text: (value) => {
            if (arguments.length === 0) {
                return getText(element);
            } else {
                setText(element, value);
            }
        }

    };
}
// const pcsTools = {
//     getElement,
//     //setCss,
//     //getCss,
//     on,
//     click,
//     css: (element, property, value) => {
//         if (value === undefined) {
//             return getCss(element, property);
//         } else {
//             setCss(element, property, value);
//         }
//     },
    
//     };


//export default pcsTools;