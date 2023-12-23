// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { FaBriefcase } from "react-icons/fa6";
import { SectionGroup, EducationList } from "../../";

export const JobProfileBase = () => {
  const { JOB_PROFILE_ITEMS: jobProfileItems } = useStaticData();
  // Map Job Profile Items To Education Model
  const jobProfileItemsToEducationModel = jobProfileItems.map(
    ({ date, id, org, title }) => ({
      id,
      university: org,
      degree: title,
      type: date,
    })
  );

  return (
    <SectionGroup heading="Job Profile">
      <EducationList
        items={jobProfileItemsToEducationModel}
        icon={<FaBriefcase className="w-5 h-5 fill-black" />}
      />
    </SectionGroup>
  );
};
