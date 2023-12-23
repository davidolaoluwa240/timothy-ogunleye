// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, MembershipProfessionalBodyList } from "../..";

export const ResearchInterestBase = () => {
  const { RESEARCH_INTEREST_ITEMS: researchInterestItems } = useStaticData();
  // Research Interest Items To Membership Professional Body Model
  const researchInterestItemsToMembershipProfessionalBodyModel =
    researchInterestItems.map((val, i) => ({ title: val, id: i }));

  return (
    <SectionGroup heading="Research Interest">
      <MembershipProfessionalBodyList
        items={researchInterestItemsToMembershipProfessionalBodyModel}
      />
    </SectionGroup>
  );
};
