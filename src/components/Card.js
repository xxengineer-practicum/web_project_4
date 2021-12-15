import PopupWithImage from "./PopupWithImage"
import { modalTrash } from "../pages/index"

// Classes

class Card {
  constructor(data, templateSel) {
    this._templateSel = templateSel
    this._name = data.name
    this._link = data.link
    this._likes = data.likes
    this._owner = data.owner
    this.id = data._id

    this._cardEl = this._getTemplate()
    this._likeButton = this._cardEl.querySelector(".card__like")
    this._trashButton = this._cardEl.querySelector(".card__trash")

    this._preview = new PopupWithImage(".modal_type_preview")
  }

  _getTemplate() {
    return document
      .querySelector(this._templateSel)
      .content.querySelector(".card")
      .cloneNode(true)
  }

  _handleLike() {
    this._likeButton.classList.toggle("card__like_active")

  }

  _handleTrash() {


  }

  _handlePreview() {
    // Pull preview modal elements from utils.js constant exports
    this._preview.open(this._link, this._name)
  }

  _setEventListeners() {
    // Make card like buttons clickable & save like
    this._likeButton
      .addEventListener("click", () => {
        this._handleLike()
      })

    // Make trash cans clickable and remove card
    if (this._trashButton) {
      this._trashButton
        .addEventListener("click", () => {
          this._handleTrash()
        })
    }

    // Make images clickable and view image preview
    this._cardImgEl
      .addEventListener("click", () => {
        this._handlePreview()
      })
  }

  createCard({ me }) {
    if (this._owner != me) {
      this._trashButton.remove()
    }

    // Set title to name input
    this._cardTitleEl = this._cardEl.querySelector(".card__title")
    this._cardTitleEl.textContent = this._name

    // Set image to link input
    this._cardImgEl = this._cardEl.querySelector(".card__image")
    this._cardImgEl.src = this._link
    this._cardImgEl.alt = `Image of ${this._name}`

    this._cardImgEl.onerror = () => {
      this._cardImgEl.src = "https://memegenerator.net/img/instances/60573683.jpg"
    }

    this._setEventListeners(this._cardEl)

    return this._cardEl
  }
}

export default Card