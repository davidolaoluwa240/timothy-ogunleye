// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, PartnerList } from "../../";

export const PartnerBase = () => {
  const { PARTNER_ITEMS: partnerItems } = useStaticData();

  return (
    <SectionGroup heading="Partners">
      <PartnerList items={partnerItems} />
    </SectionGroup>
  );
};
