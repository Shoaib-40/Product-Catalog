function CategoryCard({
  image,
  title,
  description,
  onClick,
}) {

  return (

    <div className="col-12 col-sm-6 col-lg-3">

      <div
        className="category-card p-3 text-center h-100"
        onClick={onClick}
      >

        <img
          src={image}
          alt={title}
          className="category-image"
        />


        <h5 className="fw-bold mt-3">
          {title}
        </h5>


        <p className="text-muted mb-0">
          {description}
        </p>
      </div>
    </div>
  );

}


export default CategoryCard;