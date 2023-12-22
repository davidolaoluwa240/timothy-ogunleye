// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, SoftwareSkillList } from "../../";

export const FutureEvent = () => {
  const { FUTURE_EVENT_ITEMS: futureEventItems } = useStaticData();

  return (
    <SectionGroup heading="FUTURE EVENTS">
      <SoftwareSkillList items={futureEventItems} />
    </SectionGroup>
  );
};
