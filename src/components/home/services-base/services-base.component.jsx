// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, ServicesList } from "../..";

export const ServicesBase = () => {
  const { SERVICES_ITEMS: servicesItems } = useStaticData();

  return (
    <SectionGroup heading="Services At Both National And International Levels">
      <ServicesList items={servicesItems} />
    </SectionGroup>
  );
};
