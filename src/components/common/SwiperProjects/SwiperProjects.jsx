import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SwiperCard from "../SwiperCard/SwiperCard";
import "../../../../node_modules/swiper/swiper-bundle.min.css";
import "swiper/css";
import "./SwiperProjects.css";
import repos from "../../../reposDB";

const SwiperProjects = () => {
  return (
    <Swiper
      className="swiper"
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={2}
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
