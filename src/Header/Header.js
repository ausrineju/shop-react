import logo from "./logo.png";

function Header() {
  return (
    <header class="header">
      <nav class="nav">
        <img src={logo} alt="Atlas logo" class="nav__logo" id="logo" />
        <ul class="nav__links">
          <li class="nav__item">
            <a class="nav__link" href="#section--1">
              Whats new
            </a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#section--2">
              Clothes & Accesories
            </a>
          </li>
        </ul>
        <form class="login">
          <input
            type="text"
            placeholder="username"
            class="login__input login__input--user"
          />
          <input
            type="password"
            placeholder="password"
            maxlength="8"
            class="login__input login__input--pass"
          />
          <button class="login__btn">&rarr;</button>
        </form>
      </nav>
    </header>
  );
}
export default Header;
