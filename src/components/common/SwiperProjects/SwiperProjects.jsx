import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCard from "../SwiperCard/SwiperCard";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css";
import "./SwiperProjects.css";
import repos from "../../../reposDB";
import { useEffect, useState } from "react";

const SwiperProjects = () => {
  const [swipes, setSwipes ] = useState(2);
  useEffect(() => {
    if (window.innerWidth < 1240) {
      setSwipes(1);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth < 1240) {
        setSwipes(1);
      } else if (window.innerWidth > 1240) {
        setSwipes(2);
      }
    })
  }, [])

  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={swipes}
      navigation
      pagination={{ clickable: true }}
    >
      {repos.map((repo) => (
        <SwiperSlide key={repo.id}>
          <SwiperCard name={repo.name} img={repo.img} url={repo.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperProjects;
