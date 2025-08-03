import { LuUser } from "react-icons/lu";
import { currentUser } from "@clerk/nextjs/server";

async function UserIcon() {
  // const { userId } = auth();

  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return <img src={profileImage} className='w-6 h-6 rounded-full object-cover' />;
  }

  return <LuUser className='w-6 h-6 p-0.5 bg-primary rounded-full text-white' />;
}
export default UserIcon;
