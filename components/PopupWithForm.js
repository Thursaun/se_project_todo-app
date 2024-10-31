import Popup from "./Popup.js";
import FormValidator from "./FormValidator.js";

class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit, formValidator}) {
        super({popupSelector});
        this._popupForm = this._popupElement.querySelector(".popup__form");
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popupForm.querySelectorAll(".popup__input");
        this._formValidator = formValidator;
    }

    _getInputValues () {
        const values = {};
        this._inputList.forEach(input => {
            values[input.name] = input.value;
        });
        return values;

    }

    setEventListeners () {
        super.setEventListeners();
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const inputValues = this._getInputValues();
            this._handleFormSubmit(inputValues);
            this.close();
        });
    }

    close() {
        super.close();
        this._formValidator.resetValidation();
    }
}

export default PopupWithForm;