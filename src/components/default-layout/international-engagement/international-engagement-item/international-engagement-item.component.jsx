// Components
import { Button } from "@nextui-org/react";

export const InternationalEngagementItem = ({ title, to, tags }) => {
  // Rendered International Engagement Item Tags
  const renderedTags = tags.map((val, i) => (
    <Button
      key={i}
      className="font-semibold text-white"
      color="primary"
      disableRipple
    >
      {val}
    </Button>
  ));

  return (
    <div className="p-[0.625rem] shadow-md bg-white">
      <a
        className="capitalize underline text-justify font-medium"
        href={to}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
      <div className="mt-2">{renderedTags}</div>
    </div>
  );
};
