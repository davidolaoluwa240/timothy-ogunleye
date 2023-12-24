// Components
import { ContactItem } from "../..";

export const ContactList = ({ items }) => {
  // Rendered Contact Items
  const renderedContactItems = items.map(({ id, ...restProps }) => (
    <ContactItem key={id} {...restProps} />
  ));

  return (
    <ul className="flex flex-col gap-4 pb-[0.625rem] px-[0.625rem]">
      {renderedContactItems}
    </ul>
  );
};
