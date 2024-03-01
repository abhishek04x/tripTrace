import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/review.jpg'
import ava02 from '../../assets/images/review 2.jpg'
import ava03 from '../../assets/images/review 1.jpg'
import ava04 from '../../assets/images/review 3.jpg'

const Testimonials = () => {

  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
      {
        breakpoint: 992,
        settings:{
           slidesToShow:2,
           slidesToScroll:1,
           infinite:true,
           dots:true,
        },
      },
      {
        breakpoint: 576,
        settings:{
           slidesToShow:1,
           slidesToScroll:1,
        },
      },
    ],
  };
  return <Slider{ ...settings}>
    <div className="testimonial py-4 px-3">
    <p>
    Absolutely incredible! Their dedication to customer satisfaction shone through in every aspect of our trip. Impeccable service and attention to detail made our vacation unforgettable.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3"> Dhairya Mishra</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>
    </div>
    <div className="testimonial py-4 px-3">
    <p>
    Remarkable experience! From personalized itineraries to prompt responses, their team exhibited exceptional professionalism. Their passion for travel resonates in the seamless and memorable journeys they curate.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava04} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3"> Dhruv Prakash</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>
    </div>
    <div className="testimonial py-4 px-3">
    <p>
    Exceeded expectations! Our travel dreams were brought to life thanks to their expert guidance. Their knowledgeable staff went above and beyond, ensuring every moment was filled with adventure and delight.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava03} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3"> Riti Kumari</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>
    </div>

    <div className="testimonial py-4 px-3">
    <p>
    Exceptional service at its finest! Their commitment to creating unique and tailored experiences truly sets them apart. Our group had an amazing time, and we can't wait to plan our next adventure with them.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3"> Dhairya Mishra</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>
    </div>
    <div className="testimonial py-4 px-3">
    <p>
    Remarkable experience! From personalized itineraries to prompt responses, their team exhibited exceptional professionalism. Their passion for travel resonates in the seamless and memorable journeys they curate.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3"> Akay Sharma</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>
    </div>
  </Slider>
};

export default Testimonials
