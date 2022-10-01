import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../index.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
      <section
        className="popup popup_purpose_edit-profile"
        aria-label="Редактирование профиля"
      >
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="form form_purpose_edit-profile"
            name="form-profile"
            novalidate
          >
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
          </form>
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      <section
        className="popup popup_purpose_add-card"
        aria-label="Новое место"
      >
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form
            className="form form_purpose_add-card"
            name="form-place"
            novalidate
          >
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
          </form>
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      {/* no */}
      <section
        className="popup popup_purpose_open-image"
        aria-label="Большое изображение"
      >
        <div className="popup__container-image">
          <figure className="popup__figure">
            <img className="popup__image" src="#" alt="alt" />
            <figcaption className="popup__caption"></figcaption>
          </figure>
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      <section
        className="popup popup_purpose_submit"
        aria-label="Удаление карточки"
      >
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__button" type="submit" value="Да">
            Да
          </button>
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
      <section
        className="popup popup_purpose_update-avatar"
        aria-label="Обновить аватар"
      >
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="form form_purpose_update-avatar"
            name="update-avatar"
            novalidate
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
              <button
                className="form__button form__button_inactive"
                type="submit"
                value="Сохранить"
                disabled
              >
                Сохранить
              </button>
            </fieldset>
          </form>
          <button
            className="popup__close-button"
            type="button"
            aria-label="Закрыть"
          ></button>
        </div>
      </section>
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
