import React from 'react';
import './testimonials.css';

// https://www.npmjs.com/package/react-owl-carousel
import OwlCarousel from 'react-owl-carousel';
// importing this in from the node_modules folder from the npm package
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonials() {
  const studentTestimonials = [
    {
      name: 'M. Gallego',
      testimony:
        'I absolutely loved this program! Ms. H and all the instructors at MedCare are amazing. I joined the program in 2017 to get certified as a medical assistant and work while attending college and in the future professional school. This program is great for all students who are pursuing careers in the medical field and the best thing is that you can finish the program at your own pace and take as long as you need or your hectic school/life schedule permits.',
    },
    {
      name: 'B. Cunningham',
      testimony:
        'MedCare is absolutely amazing. Clinicals are always very hands on and informative, which helps you to retain the necessary material. I would 10/10 recommend this program to anyone looking to obtain a certification to get the necessary hours/experience they need to to go on to their professional schools and careers.',
    },
    {
      name: 'J. Pena',
      testimony:
        'Received my MA certificate from MedCare and I couldn’t have asked for a better experience. Ms. H is so passionate about the medical field and it shows in her teaching. The program works with students schedules and Ms. H and her staff will do everything to make sure you feel prepared for the test. I learned so much while attending this program and can’t thank MedCare enough for everything!',
    },
    {
      name: 'M. Foltz',
      testimony:
        'This is the best place to go to get your certification. You learn important techniques in medicine extremely well from experienced health care professionals. It’s all hands on, using real patients and real medical equipment.',
    },
    {
      name: 'A. Waris',
      testimony:
        'This is such an amazing program. It’s an easy way for college students to receive their certifications with hands on experience.',
    },
    {
      name: 'T. Nguyen',
      testimony:
        'Medcare is a great program! Mrs. H. is an amazing instructor and wonderful person overall. She is very knowledgeable about the material she teaches. She makes sure that you are ready before taking the exam. This program was perfect for me while I was in undergrad',
    },
    {
      name: 'R. Cummings',
      testimony:
        'MedCare is a wonderful and affordable program led by the passionate and knowledgeable Ms. H. Ms. H and the MedCare instructors truly care about their students and go above and beyond to make sure we leave the school with the tools and the confidence needed to safely and properly carry out the duties of a medical assistant.',
    },
  ];

  return (
    <section>
      <div className="testimonials-section">
        <div className="text-center">
          <h1>OUR GRAD TESTIMONIALS</h1>
          <p>What our students say about us</p>
        </div>

        <OwlCarousel
          className="testimonials-owl-carousel owl-theme p-10"
          items="3"
          autoplay
          center
          nav
          dots
          loop
          margin={10}
        >
          <div className="item">
            <p>"{studentTestimonials.testimony}"</p>
            <p>M. Gallego</p>
          </div>

          <div className="item">
            <p>"hi"</p>
            <p>M. Gallego</p>
          </div>

          <div className="item">
            <p>"hi"</p>
            <p>M. Gallego</p>
          </div>

          <div className="item">
            <p>"hi"</p>
            <p>M. Gallego</p>
          </div>

          <div className="item">
            <p>"hi"</p>
            <p>M. Gallego</p>
          </div>

          <div className="item">
            <p>"hi"</p>
            <p>M. Gallego</p>
          </div>

          <div className="item">
            <p>"hi"</p>
            <p>M. Gallego</p>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}

export default Testimonials;
