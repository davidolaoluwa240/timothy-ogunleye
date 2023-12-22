// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, EducationList } from "../../";

export const Education = () => {
  const { EDUCATION_HISTORY_ITEMS: educationHistoryItems } = useStaticData();

  return (
    <SectionGroup heading="Educations">
      <EducationList items={educationHistoryItems} />
    </SectionGroup>
  );
};
