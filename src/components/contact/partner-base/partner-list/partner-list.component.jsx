// Components
import { PartnerItem } from "../../";

export const PartnerList = ({ items }) => {
  // Rendered Partner Items
  const renderedPartnerItems = items.map(({ id, ...restProps }) => (
    <PartnerItem key={id} {...restProps} />
  ));

  return (
    <div className="grid grid-cols-3 gap-8 items-center justify-between py-[0.625rem] pb-[0.625rem]">
      {renderedPartnerItems}
    </div>
  );
};
