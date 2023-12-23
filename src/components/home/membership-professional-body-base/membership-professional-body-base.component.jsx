// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, MembershipProfessionalBodyList } from "../../";

export const MembershipProfessionalBodyBase = () => {
  const {
    MEMBERSHIP_PROFESSIONAL_BODY_ITEMS: membershipProfessionalBodyItems,
  } = useStaticData();

  return (
    <SectionGroup heading="Membership of Professional Bodies">
      <MembershipProfessionalBodyList items={membershipProfessionalBodyItems} />
    </SectionGroup>
  );
};
