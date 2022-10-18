import { useEffect, useState } from 'react';
import { api } from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Состояния попапов
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState({});

  // Обработчики состояния попапов
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      {/* Попап редактирования профиля */}
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        title="Редактировать профиль"
        name="edit-profile"
        buttonText="Сохранить"
      >
        <fieldset className="form__fieldset">
          <input
            className="form__input form__input_type_name"
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

      {/* Попап добавления карточки */}
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        title="Новое место"
        name="add-card"
        buttonText="Создать"
      >
        <fieldset className="form__fieldset">
          <input
            className="form__input form__input_type_place"
            type="text"
            name="form__input_type_place"
            placeholder="Название"
            id="form__input_type_place"
            minLength="2"
            maxLength="30"
            required
          />
          <span
            className="form__input-error"
            id="form__input_type_place-error"
          ></span>
          <input
            className="form__input form__input_type_link"
            type="url"
            name="form__input_type_link"
            placeholder="Ссылка на картинку"
            id="form__input_type_link"
            required
          />
          <span
            className="form__input-error"
            id="form__input_type_link-error"
          ></span>
        </fieldset>
      </PopupWithForm>

      {/* Попап редактирования аватара */}
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        name="update-avatar"
        buttonText="Сохранить"
      >
        <fieldset className="form__fieldset">
          <input
            className="form__input form__input_type_avatar"
            type="url"
            name="form__input_type_avatar"
            placeholder="Ссылка на картинку"
            id="form__input_type_avatar"
            required
          />
          <span
            className="form__input-error"
            id="form__input_type_avatar-error"
          ></span>
        </fieldset>
      </PopupWithForm>

      {/* Попап подтверждения */}
      <PopupWithForm title="Вы уверены?" name="submit" buttonText="Да" />

      {/* Попап полноразмерного изображения */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
