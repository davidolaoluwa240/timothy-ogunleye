// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/react";
import { SectionGroup } from "../..";

// Styles
import "swiper/css";

export const PastEventPicture = () => {
  const { PAST_EVENT_PICTURE_ITEMS: pastEventPicItems } = useStaticData();

  // Rendered Past Event Picture Items
  const renderedPastEventPictureItems = pastEventPicItems.map(
    ({ id, image }) => (
      <SwiperSlide key={id}>
        <Image
          className="w-full h-[250px] object-cover"
          classNames={{ wrapper: "!max-w-full" }}
          radius="none"
          src={image}
          alt={`Past event gallery ${id}`}
        />
      </SwiperSlide>
    )
  );

  return (
    <SectionGroup heading="Past Event Pictures">
      <Swiper
        className="w-full"
        loop
        slidesPerView={1.2}
        modules={[Autoplay]}
        autoplay={{ disableOnInteraction: false }}
        spaceBetween={0}
      >
        {renderedPastEventPictureItems}
      </Swiper>
    </SectionGroup>
  );
};
