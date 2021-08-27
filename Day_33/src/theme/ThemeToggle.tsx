import { useContext } from "react";
import ThemeContext, { ThemeContextType } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <button
      className={`toggle-theme ${theme ? "dark" : ""}`}
      onClick={() => {
        setTheme(!theme);
      }}
    >
      {theme ? "Dark" : "Light"}
    </button>
  );
};

export default ThemeToggle;
