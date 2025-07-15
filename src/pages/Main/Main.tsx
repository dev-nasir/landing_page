
import starters from "../../assets/images/starters.jpg";
import mainCourse from "../../assets/images/mainCourse.jpg";
import sushi from "../../assets/images/sushi.jpg";
import noodles from "../../assets/images/noodles.jpg";
import Header from "../../components/Header/Header";
import Slider from "../../components/Slider/Slider";
import Journey from "../../components/Journey/Journey";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import logo2 from "../../assets/images/slide-1-min.jpg";
import logo1 from "../../assets/images/slider-2.jpg";

const Main = () => {
  const cardData = [
    {
      title: "Starters",
      description: "Click to see full menu",
      logo: starters,
    },
    {
      title: "Main Course",
      description: "Click to see full menu",
      logo: mainCourse,
    },
    {
      title: "Sushi",
      description: "Click to see full menu",
      logo: sushi,
    },
    {
      title: "Noodles",
      description: "Click to see full menu",
      logo: noodles,
    },
  ];
  const sliderImages = [logo2, logo1]; 

  return (
    <>
      <Header />
      <Slider section="slider" image={sliderImages} />
      <Journey />
      <section className="bg-image">
        <div className="container">
          <div className="title">
            <h2> Menu</h2>
          </div>
          <div className="cards-container">
            {cardData.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                description={item.description}
                logo={item.logo}
              />
            ))}
          </div>
        </div>
      </section>
      <Slider image={sliderImages}/>
      <Footer />
    </>
  );
};

export default Main;
