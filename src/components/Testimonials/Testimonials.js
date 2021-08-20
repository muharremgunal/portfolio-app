import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.scss";

const Testimonials = () => {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <div className="testimonials ">
      <h1> Testimonials</h1>
      <p className="colluage">
        People I've worked with have said some nice things...
      </p>
      <Slider {...settings}>
        <div>
          <img src="./img/batuhan yılmaz.jpg" alt="profile" />
          <p className="comment">
            “In the begining, he started with design. After that with realising
            how software is exciting for him , he decided to switch his career
            in this way. He made it and is now so powerful developer. I really
            enjoy while working with him. ”
          </p>
          <h3>Ahmet Batuhan Yılmaz</h3>
          <p className="role">Senior Frontend Developer</p>
        </div>
        <div>
          <img src="./img/emre aybey.jpg" alt="profile" />
          <p className="comment">
            “Muharrem will see things not just from the eyes of a developer but
            also from the designer view of point. With this mixed skills he is a
            formidable developer who will produce desired outcome quickly. If
            you want to have fast and great products just give him a chance.”
          </p>
          <h3>Yunus Emre Aybey</h3>
          <p className="role">Team Lead</p>
        </div>
        <div>
          <img src="./img/rıfatcan gurbuz.jpg" alt="profile" />
          <p className="comment">
            “Muharrem was a real pleasure to work with and we look forward to
            working with him again. He’s definitely the kind of designer you can
            trust with a project from start to finish.”
          </p>
          <h3>Rıfat Can Gürbüz</h3>
          <p className="role">Senior Frontend Developer</p>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
