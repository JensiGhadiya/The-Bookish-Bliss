import React from 'react';
import list from '../../public/list.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';  // Ensure the correct path to the Cards component

const Freebook = () => {
  const filterData = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(filterData);

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <h1 className='font-semibold text-xl pb-2'> Free Offered Books</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum maxime aspernatur inventore quas porro consequuntur voluptatibus distinctio voluptatem temporibus! Consequuntur iusto repellat sequi blanditiis possimus vitae eaque nesciunt consequatur.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {filterData.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Freebook;
