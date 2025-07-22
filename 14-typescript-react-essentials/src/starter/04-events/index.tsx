import { ChangeEvent, FormEvent, useState } from "react";

type Person = {
  name: string;
};

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData);
    const text = formData.get('text') as string;
    const person: Person = { name: text };

    console.log(person)
  }

  return (
    <section>
      <h2>React & Typescript</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="mb-1" htmlFor="name">Name</label>
        <input
          className="form-input mb-1"
          id="name"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label className="mb-1"  htmlFor="email">Email</label>
        <input
          id="email"
          className="form-input mb-1"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </section>
  );
}
export default Component;
