// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, MembershipProfessionalBodyList } from "../..";

export const GrantReceivedBase = () => {
  const { GRANT_RECEIVED_ITEMS: grantReceivedItems } = useStaticData();
  // Grant Received Items To Membership Professional Body Model
  const grantReceivedItemsToMembershipProfessionalBodyModel =
    grantReceivedItems.map((val, i) => ({ title: val, id: i }));

  return (
    <SectionGroup heading="Grants Received">
      <MembershipProfessionalBodyList
        items={grantReceivedItemsToMembershipProfessionalBodyModel}
      />
    </SectionGroup>
  );
};
