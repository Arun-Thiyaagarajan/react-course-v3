import { FormEvent, useState } from "react";
import { Task } from "./types";
import { nanoid } from "nanoid";

type TaskFormProps = {
  addTask: (task: Task) => void;
}

const Form = ({ addTask }: TaskFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!text) {
      alert('Please add some task!');
      return;
    }
    addTask({
      id: nanoid(),
      description: text,
      isCompleted: false,
    });
    setText('');
  }

  return (
    <div>
      <form className="form task-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="btn">
          add task
        </button>
      </form>
    </div>
  );
}

export default Form;
