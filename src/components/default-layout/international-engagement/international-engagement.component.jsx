// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, InternationalEngagementList } from "../..";

export const InternationalEngagement = () => {
  const { INTERNATIONAL_ENGAGEMENT_ITEMS: internationalEngagementItems } =
    useStaticData();

  return (
    <SectionGroup heading="Selected International Engagements">
      <InternationalEngagementList items={internationalEngagementItems} />
    </SectionGroup>
  );
};
