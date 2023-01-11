import { useState } from "react";
import { Link } from "react-router-dom";

function Carousel() {
  const content = [
    {
      image: "/images/home/new-recipe-1.jpg",
      title: "Healthy Juicy Chicken Burger (Quick & Easy)",
      description:
        "Quick + Easy Juicy Chicken Burger- Healthy Chicken Burger? That’s right!",
      buttonText: "Learn More",
    },
    {
      image: "/images/home/pancake.jpg",
      title: "Salted Brown Butter Pancake",
      description:
        "Delicious, fluffy salted brown butter pancakes with hints of warm, caramel-like flavor in every bite.",
      buttonText: "Learn More",
    },
    // add more objects here for additional content
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel">
      <ol className="carousel-indicators">
        {content.map((_, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </ol>
      <div className="carousel-inner">
        {content.map((content, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === activeIndex ? "active" : ""
            }`}>
            {/* <!-- ! left side --> */}
            <div className="col-6">
              <img
                src={content.image}
                className="main-image"
                alt={content.title}
              />
            </div>
            {/* <!-- ! right side --> */}
            <div className="col-5 offset-1">
              <h2>{content.title}</h2>
              <span className="line-under-title"></span>
              <p>{content.description}</p>
              <p>
                <Link to={`/detail-recipe/${content.title}`}>
                  <button className="btn btn-primary btn-lg">
                    {content.buttonText}
                  </button>
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;













        // {/* <!-- ! new-recipe / content-1 --> */}
        // <section id="new-recipe">
        //   {/* <!-- ! title --> */}
        //   <div className="container">
        //     <div className="title">New Recipe</div>
        //   </div>

        //   {/* <!-- ! background --> */}
        //   <div className="main-image-background"></div>
        //   {/* <!-- ! content --> */}
        //   <div className="container">
        //     <div className="row align-items-center">
        //       {/* <!-- ! left side --> */}
        //       <div
        //         id="carouselExampleIndicators"
        //         className="carousel slide"
        //         data-ride="carousel">
        //         <ol className="carousel-indicators">
        //           {content.map((_, index) => (
        //             <li
        //               key={index}
        //               data-target="#carouselExampleIndicators"
        //               data-slide-to={index}
        //               className={index === activeIndex ? "active" : ""}
        //               onClick={() => handleSlideChange(index)}
        //             />
        //           ))}
        //         </ol>
        //         <div className="carousel-inner">
        //           {content.map((content, index) => (
        //             <div
        //               key={index}
        //               className={`carousel-item ${
        //                 index === activeIndex ? "active" : ""
        //               }`}>
        //               {/* <!-- ! left side --> */}
        //               <div className="col-6">
        //                 <img
        //                   src={content.image}
        //                   className="main-image"
        //                   alt={content.title}
        //                 />
        //               </div>
        //               {/* <!-- ! right side --> */}
        //               <div className="col-5 offset-1">
        //                 <h2>{content.title}</h2>
        //                 <span className="line-under-title"></span>
        //                 <p>{content.description}</p>
        //                 <p>
        //                   <Link to={`/detail-recipe/${content.title}`}>
        //                     <button className="btn btn-primary btn-lg">
        //                       {content.buttonText}
        //                     </button>
        //                   </Link>
        //                 </p>
        //               </div>
        //             </div>
        //           ))}
        //         </div>
        //         <a
        //           className="carousel-control-prev"
        //           href="#carouselExampleIndicators"
        //           role="button"
        //           data-slide="prev">
        //           <span
        //             className="carousel-control-prev-icon"
        //             aria-hidden="true"></span>
        //           <span className="sr-only">Previous</span>
        //         </a>
        //         <a
        //           className="carousel-control-next"
        //           href="#carouselExampleIndicators"
        //           role="button"
        //           data-slide="next">
        //           <span
        //             className="carousel-control-next-icon"
        //             aria-hidden="true"></span>
        //           <span className="sr-only">Next</span>
        //         </a>
        //       </div>
        //     </div>
        //   </div>
        // </section>