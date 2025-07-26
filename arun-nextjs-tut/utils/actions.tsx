'use server';
import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
};

export const createUser = async (prevState: any, formData: FormData) => {
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const fullName = `${firstName} ${lastName}`.trim();
  // const rawData = Object.fromEntries(formData);

  const newUser: User = {
    id: Date.now().toString(),
    firstName,
    lastName,
    fullName
  };

  try {
    const result = await saveUser(newUser);
    revalidatePath('/actions');
    return result;
  } catch (error) {
    console.log(error)
    return {
      message: "Oops! Failed to add the user!",
      status: "failed",
    };
  }

  // redirect('/');
};

export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile('users.json', { encoding: 'utf-8' });
  const users = result ? JSON.parse(result) : [];

  return users;
}

const saveUser = async (user: User) => {
  const users = await fetchUsers();
  const userExist = users.some((o) => o.fullName === user.fullName);
  if (userExist) {
    return {
      message: "User Already Exist!",
      status: 'failed'
    };
  }
  users.push(user);
  await writeFile('users.json', JSON.stringify(users));
  return {
    message: "User Added Successfully!",
    status: "success",
  };
}

export const deleteUser = async (formData: FormData) => {
  const id = formData.get("id") as string;
  const users = await fetchUsers();
  const updatedUsers = users.filter((user: User) => user.id !== id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};

export const removeUser = async (id: string, formData: FormData) => {
  const name = formData.get("name") as string;
  console.log(name);

  const users = await fetchUsers();
  const updatedUsers = users.filter((user) => user.id !== id);
  await writeFile("users.json", JSON.stringify(updatedUsers));
  revalidatePath("/actions");
};
