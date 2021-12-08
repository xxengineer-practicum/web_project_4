class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
    this._handleEsc = this._handleEsc.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this.open = this.open.bind(this);
  }

  _handleEsc(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handleClose(evt) {
    if (
      evt.target.classList.contains("modal") ||
      evt.target.classList.contains("modal__close-btn")
      ) {
      this.close();
    }
  }

  _setEventListeners() {
    this.popupElement.addEventListener("click", this._handleClose);
    document.addEventListener("keyup", this._handleEsc);
  }

  _removeEventListeners() {
    this.popupElement.removeEventListener("click", this._handleClose);
    document.removeEventListener("keyup", this._handleEsc);
  }

  open() {
    this.popupElement.classList.add("modal_display");
    this._setEventListeners();
  }

  close() {
    this.popupElement.classList.remove("modal_display");
    this._removeEventListeners();
  }
}

export default Popup;