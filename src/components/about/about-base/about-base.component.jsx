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
          className="object-cover w-[600px] sm:w-[313px] h-[300px] sm:h-[396px]"
          classNames={{
            wrapper:
              "!max-w-full sm:float-left sm:mr-[0.625rem] mb-[0.625rem] sm:mb-0",
          }}
          radius="none"
          src={aboutTimothy.image}
          alt="Timothy Ogunleye"
        />
        {renderedAboutDescription}
      </div>
    </SectionGroup>
  );
};
