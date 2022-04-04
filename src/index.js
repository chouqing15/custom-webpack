import { cube } from './math.js';
import printMe from './print';

  function component() {
   const element = document.createElement('pre');

   // Lodash, now imported by this script
   element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5)
   ].join('\n\n');

  //  element.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
  //   const printMe = module.default;

  //   printMe();
  // });

  element.onclick = printMe;

    return element;
  }

  document.body.appendChild(component());

 if (module.hot) {
  module.hot.accept()
}