'use client';
import { createUser } from "@/utils/actions";
import { useFormState, useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className={btnStyle} disabled={pending}>
      {pending ? "submitting..." : "submit"}
    </button>
  );
};

function Form() {
const [result, formAction] = useFormState(createUser, null);

  return (
    <form action={formAction} className={formStyle}>
      {result &&
        <p className={`w-full text-white ${result.status === 'success' ? 'bg-green-600' : 'bg-red-500'} rounded p-2`}>
          {result.message}
        </p>
      }
      <h2 className='text-2xl capitalize mb-4'>create user</h2>
      <input type='text' name='firstName' required className={inputStyle} />
      <input type='text' name='lastName' required className={inputStyle} />
      <SubmitButton />
    </form>
  );
}

const formStyle = "max-w-lg flex flex-col gap-y-4 shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle = "bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded capitalize";

export default Form;
