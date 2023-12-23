// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, SoftwareSkillList } from "../../";

export const ProfessionalServiceBase = () => {
  const { PROFESSIONAL_SERVICE_ITEMS: professionalServiceItems } =
    useStaticData();

  return (
    <SectionGroup heading="Professional Services">
      <SoftwareSkillList items={professionalServiceItems} />
    </SectionGroup>
  );
};
