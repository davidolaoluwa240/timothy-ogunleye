// Components
import { Image } from "@nextui-org/react";

export const PartnerItem = ({ image, title }) => {
  return (
    <Image
      className="w-full object-cover"
      classNames={{ wrapper: "!max-w-full" }}
      src={image}
      alt={title}
    />
  );
};
