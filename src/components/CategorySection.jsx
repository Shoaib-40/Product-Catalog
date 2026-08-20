import CategoryCard from "./CategoryCard";


function CategorySection({
  sectionRef,
  categories,
  setSelectedCategory,
  productsRef,
}) {
  const handleCategoryClick = (category) => {

    setSelectedCategory(category.title);


    productsRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  };
  return (

    <section
      ref={sectionRef}
      id="categories"
      className="py-5 bg-light"
    >

      <div className="container">

        <h2 className="text-center fw-bold mb-2">
          Shop By Category
        </h2>


        <p className="text-center text-muted mb-5">
          Explore our collection
        </p>


        <div className="row g-4">

          {categories.map((category) => (

            <CategoryCard
              key={category.title}
              image={category.image}
              title={category.title}
              description={category.description}
              onClick={() =>
                handleCategoryClick(category)
              }
            />

          ))}
        </div>
      </div>
    </section>

  );

}
export default CategorySection;