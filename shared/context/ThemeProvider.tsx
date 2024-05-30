import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

interface Props {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext 안에서 써야 합니다");
  }

  return themeContext;
}
