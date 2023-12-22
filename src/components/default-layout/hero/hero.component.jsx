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
        width={300}
        height={290}
        src={image}
        alt={`Gallery Images ${id}`}
      />
    </SwiperSlide>
  ));

  return (
    <Swiper
      className="max-w-[1408px]"
      modules={[Autoplay]}
      loop
      slidesPerView={6}
      autoplay={{
        disableOnInteraction: false,
        delay: 1000,
        waitForTransition: true,
      }}
      speed={1500}
    >
      {renderedHeroItems}
    </Swiper>
  );
};
