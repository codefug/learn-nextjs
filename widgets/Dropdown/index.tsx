import { useEffect, useState, useRef, Dispatch, SetStateAction } from "react";
import styles from "./Dropdown.module.css";

type LabelObj = {
  label: "라이트" | "다크";
  value: "light" | "dark";
};

type Options = LabelObj[];

interface Props {
  className: string;
  name: string;
  value: string;
  options: Options;
  onChange: (name: string, value: string) => void;
}

export default function Dropdown({
  className,
  name,
  value,
  options,
  onChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputClick() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  function handleBlur() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const isInside = inputRef.current?.contains(e.target as Node);
      if (!isInside) {
        setIsOpen(false);
      }
    }

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const classNames = `${styles.input} ${
    isOpen ? styles.opened : ""
  } ${className}`;
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div
      className={classNames}
      onClick={handleInputClick}
      onBlur={handleBlur}
      ref={inputRef}
    >
      {selectedOption?.label}
      <span className={styles.arrow}>▴</span>
      <div className={styles.options}>
        {options.map((option) => {
          const selected = value === option.value;
          const className = `${styles.option} ${
            selected ? styles.selected : ""
          }`;
          return (
            <div
              className={className}
              key={option.value}
              onClick={() => onChange(name, option.value)}
            >
              {option.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
