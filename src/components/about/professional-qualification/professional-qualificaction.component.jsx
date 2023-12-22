// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, EducationList } from "../../";

export const ProfessionalQualification = () => {
  const {
    PROFESSIONAL_QUALIFICATION_HISTORY_ITEMS:
      professionalQuanlificationHistoryItems,
  } = useStaticData();

  return (
    <SectionGroup heading="Professional Qualifications">
      <EducationList items={professionalQuanlificationHistoryItems} />
    </SectionGroup>
  );
};
