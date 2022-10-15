const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Bloco de notas</h1>
      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        className="generic-button"
      >
        Dark mode
      </button>
    </div>
  );
};
export default Header;
