import { removeUser } from "@/utils/actions";

function DeleteButton({ id }: { id: string }) {
  const removedUserId = removeUser.bind(null, id);

  return (
    <form action={removedUserId}>
      <input type='hidden' name='name' value='randomf**k' />
      <button type='submit' className='bg-red-500 cursor-pointer text-white text-xs rounded p-2'>
        delete
      </button>
    </form>
  );
}
export default DeleteButton;