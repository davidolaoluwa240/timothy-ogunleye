// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, SoftwareSkillList } from "../../";

export const SoftwareSkill = () => {
  const { SOFTWARE_SKILL_ITEMS: softwareSkillItems } = useStaticData();

  return (
    <SectionGroup heading="Software Skils">
      <SoftwareSkillList items={softwareSkillItems} />
    </SectionGroup>
  );
};
