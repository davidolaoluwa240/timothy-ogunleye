// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, ContactList } from "../../";

export const ContactBase = () => {
  const { CONTACT_ITEMS: contactItems } = useStaticData();

  return (
    <SectionGroup heading="Contact">
      <ContactList items={contactItems} />
    </SectionGroup>
  );
};
