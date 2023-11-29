import deleteRecipe from "@/actions/deleteRecipe";

export default function DeleteRecipeButton({
  recipeId,
  userId,
}: {
  recipeId: string;
  userId: string;
}) {
  const handleClick = async () => {
    const formData = new FormData();
    formData.set("recipeId", recipeId.toString());
    formData.set("userId", userId.toString());
    await deleteRecipe(formData);
  };

  return (
    <button
      onClick={() => {
        handleClick();
      }}
      className="md:opacity-0 md:group-hover:opacity-100 indicator-item badge badge-secondary absolute top-5 right-5 z-10 drop-shadow-md"
    >
      Delete
    </button>
  );
}
