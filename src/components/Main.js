import profileAvatar from '../images/profile-avatar.jpg';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <img className="profile__avatar" src={profileAvatar} alt="Аватар" />
        <button
          className="profile__update-button"
          onClick={props.onEditAvatar}
        ></button>
        <h1 className="profile__title">Жак-Ив Кусто</h1>
        <button
          className="profile__edit-button"
          type="button"
          aria-label="Редактировать профиль"
          onClick={props.onEditProfile}
        ></button>
        <p className="profile__subtitle">Исследователь океана</p>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить фотографию"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements" aria-label="Места"></section>
    </main>
  );
}

export default Main;
