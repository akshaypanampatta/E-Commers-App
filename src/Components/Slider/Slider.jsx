
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css"


function Slider() {

  return (
    <div className="home">
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100  "
            src="https://www.orientalwatch.com/image.aspx?f=companyactivity/320/edmbanner.jpg&h=624&w=1722 "
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="container-md">
              <h2 className="watch-title">On The Trail Of The Original</h2>
              <p className="watch-caption">
                A new manufactory film dives into the heart of Glashütte
                Original
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://img.freepik.com/premium-photo/light-blue-headset-panorama-plain-studio-background-with-lights_376663-2.jpg?w=1380 "
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2 className="headphone-title">Handpicked Headphones</h2>
            <p className="headphone-caption">We've done the research so you don't have to</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  "
            src="https://img.freepik.com/premium-photo/panorama-golden-pearls-bracelets-ring-white-podium-pink-background_112112-1323.jpg?w=996 "
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 className="jewellery-title">BLING Together</h2>
            <p className="jewellery-caption">
              Crafted For Young Professionals
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
