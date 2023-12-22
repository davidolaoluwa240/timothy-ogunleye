// Components
import { SoftwareSkillItem } from "../../";

export const SoftwareSkillList = ({ items }) => {
  // Rendered Software Skill Items
  const renderedSoftwareSkillItems = items.map(({ id, ...restProps }) => (
    <SoftwareSkillItem key={id} id={id} {...restProps} />
  ));

  return (
    <div className="flex flex-col gap-4">{renderedSoftwareSkillItems}</div>
  );
};
