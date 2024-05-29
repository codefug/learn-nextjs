import { ChangeEvent, FormEvent, useState } from "react";

export default function SearchForm() {
  const [value, setValue] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target?.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange} />
    </form>
  );
}
