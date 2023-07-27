import { loadScript } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  const textOnButton = [...block.firstElementChild.children][0].children[0].textContent;
  [...block.firstElementChild.children][0].textContent = textOnButton;
  [...block.firstElementChild.children][0].setAttribute('onclick', 'showKioskCard()');
}
loadScript('/blocks/place-order-button/delayed.js', { type: 'text/javascript', charset: 'UTF-8' });
