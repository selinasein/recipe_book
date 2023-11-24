// Fake database of recipe posts
export const fakeRecipes = [
  {
    id: 1,
    title: "Spaghetti Bolognese",
    image: "/images/SpaghettiBolognese.jpg",
    description: "Classic Italian pasta dish with a rich meat sauce.",
    ingredients: [
      "500g ground beef",
      "1 onion",
      "2 cloves garlic",
      "400g canned tomatoes",
      "200g spaghetti",
    ],
    instructions:
      "Cook spaghetti according to package instructions. In a separate pan, sauté chopped onions and garlic. Add ground beef and brown. Pour in canned tomatoes and simmer. Serve sauce over cooked spaghetti.",
    category: "Italian",
    createdAt: "2021-06-01T23:28:56.782Z",
    postedBy: "Selina",
    userId: "1",
    likes: 20,
    comments: 10,
  },
  {
    id: 2,
    title: "Chicken Stir-Fry",
    image: "/images/ChickenStir-Fry.jpg",
    description: "Quick and healthy stir-fry with chicken and vegetables.",
    ingredients: [
      "300g chicken breast",
      "1 bell pepper",
      "1 broccoli",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
    ],
    instructions:
      "Slice chicken and stir-fry until cooked. Add chopped vegetables and continue to stir-fry. Season with soy sauce and sesame oil. Serve hot.",
    category: "Italian",
    createdAt: "2021-06-01T23:28:56.782Z",
    postedBy: "Selina",
  },
  {
    id: 3,
    title: "Chocolate Chip Cookies",
    image: "/images/ChocolateChipCookies.jpg",
    description: "Classic chocolate chip cookies, perfect for dessert.",
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1/2 teaspoon baking soda",
      "1 cup unsalted butter",
      "1/2 cup granulated sugar",
      "1 cup brown sugar",
      "2 teaspoons vanilla extract",
      "2 cups chocolate chips",
    ],
    instructions:
      "Preheat oven to 350°F. In a bowl, whisk together flour and baking soda. In another bowl, cream together butter, granulated sugar, and brown sugar. Add vanilla extract. Gradually add dry ingredients. Fold in chocolate chips. Drop rounded tablespoons of dough onto baking sheets. Bake for 10-12 minutes.",
    category: "Italian",
    createdAt: "2021-06-01T23:28:56.782Z",
    postedBy: "Selina",
  },
  {
    id: 4,
    title: "Vegetarian Pizza",
    image: "",
    description: "Delicious pizza with a variety of fresh vegetables.",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Bell peppers",
      "Red onion",
      "Olives",
      "Cherry tomatoes",
    ],
    instructions:
      "Roll out pizza dough. Spread a layer of tomato sauce. Add mozzarella cheese and your favorite vegetables. Bake in a preheated oven until crust is golden and cheese is melted.",
    category: "Italian",
    createdAt: "2021-06-01T23:28:56.782Z",
    postedBy: "Selina",
  },
  {
    id: 5,
    title: "Avocado Toast",
    image: "",
    description:
      "A simple and healthy breakfast option with mashed avocado on toast.",
    ingredients: [
      "2 slices of whole grain bread",
      "1 ripe avocado",
      "Salt and pepper",
      "Red pepper flakes (optional)",
      "Poached egg (optional)",
    ],
    instructions:
      "Toast the bread slices. Mash the ripe avocado and spread it evenly on the toasted bread. Sprinkle with salt, pepper, and red pepper flakes if desired. Add a poached egg on top for extra protein.",
    category: "Italian",
    createdAt: "2021-06-01T23:28:56.782Z",
    postedBy: "Selina",
  },
];

export const userData = {
  username: "Selina Sein",
  location: "Vancouver",
  joinedDate: "January 1, 2023",
};

export const categories = [
  { id: 1, name: "Asian" },
  { id: 2, name: "Italian" },
  { id: 3, name: "Mexican" },
  { id: 4, name: "American" },
  { id: 5, name: "Fast Food" },
  { id: 6, name: "Dessert" },
  { id: 7, name: "Other" },
];

export default { fakeRecipes, userData, categories };
