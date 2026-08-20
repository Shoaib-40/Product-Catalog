function CategoryFilter({selectedCategory , setSelectedCategory}) {
    const categories =[
        "All","Clothes","Fashion" ,"Style" , "Accessories"
    ];

    return (
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
            {categories.map((category) => (
                <button key={category} className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setSelectedCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
}

export default CategoryFilter;