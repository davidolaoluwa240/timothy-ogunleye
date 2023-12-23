// Components
import { EducationItem } from "../../";

export const EducationList = ({ items, icon }) => {
  // Rendered Education Item
  const renderedEducationItem = items.map(({ id, ...restProps }) => (
    <EducationItem key={id} {...restProps} icon={icon} />
  ));

  return (
    <div className="flex flex-col pb-[0.625rem] px-[0.625rem] gap-4">
      {renderedEducationItem}
    </div>
  );
};
