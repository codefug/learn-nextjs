import { useTheme } from "@/shared/context/ThemeProvider";
import styles from "@/styles/Setting.module.css";
import Dropdown from "@/widgets/Dropdown";

export default function Setting() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h1 className={styles.title}>설정</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>테마 설정</h2>
        <Dropdown
          className={styles.input}
          name="theme"
          value={theme}
          onChange={(name, value) => {
            setTheme(value);
          }}
          options={[
            { label: "라이트", value: "light" },
            { label: "다크", value: "dark" },
          ]}
        />
      </section>
    </div>
  );
}
