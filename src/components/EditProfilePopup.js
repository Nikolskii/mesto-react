import { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose }) {
  const [name, setName] = useState('');

  const [description, setDescription] = useState('');

  function handleChange(event) {}

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title="Редактировать профиль"
      name="edit-profile"
      buttonText="Сохранить"
    >
      <fieldset className="form__fieldset">
        <input
          className="form__input form__input_type_name"
          value={name}
          onChange={handleChange}
          placeholder="Имя пользователя"
          type="text"
          name="form__input_type_name"
          id="form__input_type_name"
          minLength="2"
          maxLength="40"
          required
        />
        <span
          className="form__input-error"
          id="form__input_type_name-error"
        ></span>
        <input
          className="form__input form__input_type_job"
          value={description}
          onChange={handleChange}
          placeholder="Краткое описание"
          type="text"
          name="form__input_type_job"
          id="form__input_type_job"
          minLength="2"
          maxLength="200"
          required
        />
        <span
          className="form__input-error"
          id="form__input_type_job-error"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
