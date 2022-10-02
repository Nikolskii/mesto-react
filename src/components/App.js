import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import '../index.css';

// function handleEditAvatarClick() {
//   document
//     .querySelector('.popup_purpose_update-avatar')
//     .classList.add('popup_opened');
// }

// function handleEditProfileClick() {
//   document
//     .querySelector('.popup_purpose_edit-profile')
//     .classList.add('popup_opened');
// }

// function handleAddPlaceClick() {
//   document
//     .querySelector('.popup_purpose_add-card')
//     .classList.add('popup_opened');
// }

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        children={
          <fieldset className="form__fieldset">
            <input
              className="form__input form__input_type_name"
              placeholder="Имя пользователя"
              type="text"
              name="form__input_type_name"
              id="form__input_type_name"
              minlength="2"
              maxlength="40"
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
              minlength="2"
              maxlength="200"
              required
            />
            <span
              className="form__input-error"
              id="form__input_type_job-error"
            ></span>
            <button className="form__button" type="submit" value="Сохранить">
              Сохранить
            </button>
          </fieldset>
        }
      />
      <PopupWithForm
        title="Новое место"
        name="add-card"
        children={
          <fieldset className="form__fieldset">
            <input
              className="form__input form__input_type_place"
              type="text"
              name="form__input_type_place"
              placeholder="Название"
              id="form__input_type_place"
              minlength="2"
              maxlength="30"
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
            <button
              className="form__button form__button_inactive"
              type="submit"
              value="Создать"
              disabled
            >
              Создать
            </button>
          </fieldset>
        }
      />
      <PopupWithForm
        title="Обновить аватар"
        name="update-avatar"
        children={
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
            <button
              className="form__button form__button_inactive"
              type="submit"
              value="Сохранить"
              disabled
            >
              Сохранить
            </button>
          </fieldset>
        }
      />
      <PopupWithForm
        title="Вы уверены?"
        name="submit"
        children={
          <button className="popup__button" type="submit" value="Да">
            Да
          </button>
        }
      />

      <template class="template-element">
        <article class="element">
          <img class="element__image" src="#" alt="alt" />
          <h2 class="element__title"></h2>
          <button
            class="element__delete"
            type="button"
            aria-label="Удалить"
          ></button>
          <button
            class="element__like"
            type="button"
            aria-label="Нравится"
          ></button>
          <p class="element__like-counter"></p>
        </article>
      </template>
    </div>
  );
}

export default App;
