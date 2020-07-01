export default class Field {
  class = ''
  color = ''
  style = ''
  columnClass = ''
  columnStyle = ''
  disable = () => false
  hide = () => false
  hideColumn = () => false

  constructor () {
    return this
  }

  getFields () {
    return this
  }

  setClass (styleClass) {
    this.class = styleClass

    return this
  }

  setStyle (style) {
    this.style = style

    return this
  }

  setColor (color) {
    this.color = color

    return this
  }

  setDisable (callback) {
    this.disable = callback

    return this
  }

  setHide (callback) {
    this.hide = callback

    return this
  }

  setColumnClass (columnClass) {
    this.columnClass = columnClass

    return this
  }

  setColumnStyle (columnStyle) {
    this.columnStyle = columnStyle

    return this
  }

  setHideColumn (callback) {
    this.hideColumn = callback

    return this
  }
}
