

const FeaturedChefRecipes = () => {
  const recipes = [
    {
      id: 1,
      imageSrc: "https://i.ibb.co/fCGf661/cook-2364221-1280.jpg",
      title: "Recipe 1",
      description: "This means starting with whole foods like raw vegetables and fruits, proteins, and whole grains, and making food from scratch. ",
      link: "recipe1.html",
    },
    {
      id: 2,
      imageSrc: "https://i.ibb.co/fCGf661/cook-2364221-1280.jpg",
      title: "Recipe 2",
      description: "This means starting with whole foods like raw vegetables and fruits, proteins, and whole grains, and making food from scratch. ",
      link: "recipe1.html",
    },
    {
      id: 3,
      imageSrc: "https://i.ibb.co/fCGf661/cook-2364221-1280.jpg",
      title: "Recipe 3",
      description: "This means starting with whole foods like raw vegetables and fruits, proteins, and whole grains, and making food from scratch. ",
      link: "recipe1.html",
    },
    {
      id: 4,
      imageSrc: "https://i.ibb.co/fCGf661/cook-2364221-1280.jpg",
      title: "Recipe 4",
      description: "This means starting with whole foods like raw vegetables and fruits, proteins, and whole grains, and making food from scratch. ",
      link: "recipe1.html",
    }
   
  ];

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Featured Chef Recipes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-gray-100 p-4 rounded">
            <img src={recipe.imageSrc} alt={recipe.title} className="w-full rounded" />
            <h3 className="text-lg font-bold mt-2 mb-1">{recipe.title}</h3>
            <p className="mb-2">{recipe.description}</p>
            <a href={recipe.link} className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedChefRecipes;
