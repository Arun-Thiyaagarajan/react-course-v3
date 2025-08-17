import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/Buttons";
import { fetchFavouriteId } from "@/utils/actions";
import FavouriteToggleForm from "./FavouriteToggleForm";

async function FavouriteToggleButton({ productId }: { productId: string }) {
  const { userId } = auth();

  if (!userId) return <CardSignInButton />;
  
  const favouriteId = await fetchFavouriteId({ productId });

  return <FavouriteToggleForm favouriteId={favouriteId} productId={productId} />;
}
export default FavouriteToggleButton;
