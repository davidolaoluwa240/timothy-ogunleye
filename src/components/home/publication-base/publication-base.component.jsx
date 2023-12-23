// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, ServicesList } from "../..";

export const PublicationBase = () => {
  const { PUBLICATION_ITEMS: publicationItems } = useStaticData();

  return (
    <SectionGroup heading="Publications">
      <ServicesList items={publicationItems} />
    </SectionGroup>
  );
};
