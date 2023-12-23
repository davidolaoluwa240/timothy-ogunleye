// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/autoplay";

export const Hero = () => {
  const { HERO_ITEMS: heroItems } = useStaticData();

  //   Rendered Hero Items
  const renderedHeroItems = heroItems.map(({ id, image }) => (
    <SwiperSlide key={id}>
      <Image
        radius="none"
        className="w-[400px] h-[250px] object-cover"
        classNames={{ wrapper: "!max-w-full" }}
        src={image}
        alt={`Gallery Images ${id}`}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      className="px-2 lg:px-6 max-w-[1408px] mx-auto"
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={0}
      loop
      autoplay={{
        disableOnInteraction: false,
        delay: 1000,
      }}
      speed={1500}
      breakpoints={{
        400: {
          slidesPerView: 1.5,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 6,
        },
      }}
    >
      {renderedHeroItems}
    </Swiper>
  );
};
