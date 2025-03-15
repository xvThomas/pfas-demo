import Control from 'ol/control/Control'

export class MapInstructionsControl extends Control {
  constructor() {
    const element = document.createElement('div')
    element.className = 'map-instructions ol-unselectable ol-control'
    element.innerHTML =
      'Pour zoomer, cliquer sur la carte puis utiliser la touche ⌘ (cmd) + molette de défilement'

    super({
      element: element,
    })
  }

  hide() {
    this.element.style.display = 'none'
  }
}
