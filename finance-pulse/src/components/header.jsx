import '../index.css';

function Header() {
  return (
    <header>
      <div className="header__div">
        <img
          src="images/finance-pulse-logo.svg"
          alt="The Finance Pulse logo"
        />
        <h1>Finance Pulse</h1>
      </div>
    </header>
  );
}

export default Header;