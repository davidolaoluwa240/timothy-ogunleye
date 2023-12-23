// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { FaBriefcase } from "react-icons/fa6";
import { SectionGroup, EducationList } from "../../";

export const ProfessionalExperienceBase = () => {
  const { PROFESSIONAL_EXPERIENCE_ITEMS: professionalExperienceItems } =
    useStaticData();
  // Map Professional Experience Items To Education Model
  const professionalExperienceItemsToEducationModel =
    professionalExperienceItems.map(({ date, id, org, title }) => ({
      id,
      university: org,
      degree: title,
      type: date,
    }));

  return (
    <SectionGroup heading="Professional Experience">
      <EducationList
        items={professionalExperienceItemsToEducationModel}
        icon={<FaBriefcase className="w-5 h-5 fill-black" />}
      />
    </SectionGroup>
  );
};
