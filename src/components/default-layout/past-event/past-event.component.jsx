// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, SoftwareSkillList } from "../../";

export const PastEvent = () => {
  const { PAST_EVENT_ITEMS: pastEventItems } = useStaticData();

  return (
    <SectionGroup heading="PAST EVENTS">
      <SoftwareSkillList items={pastEventItems} />
    </SectionGroup>
  );
};
