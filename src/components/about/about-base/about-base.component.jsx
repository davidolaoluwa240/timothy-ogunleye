// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { Image } from "@nextui-org/react";
import { SectionGroup } from "../../";

export const AboutBase = () => {
  const { ABOUT_TIMOTHY: aboutTimothy } = useStaticData();

  // Rendered About Description
  const renderedAboutDescription = aboutTimothy.descriptions.map((val, i) => (
    <p className="text-justify [&:not(:last-child)]:mb-4 is-text-black" key={i}>
      {val}
    </p>
  ));

  return (
    <SectionGroup heading="About">
      <div className="px-[0.625rem]">
        <Image
          className="object-cover w-[313px] h-[396px]"
          classNames={{ wrapper: "!max-w-full float-left mr-[0.625rem]" }}
          radius="none"
          src={aboutTimothy.image}
          alt="Timothy Ogunleye"
        />
        {renderedAboutDescription}
      </div>
    </SectionGroup>
  );
};
