// Components
import { InternationalEngagementItem } from "../..";

export const InternationalEngagementList = ({ items }) => {
  // Rendered International Engagement Items
  const renderedInternationalEngagementItems = items.map(
    ({ id, ...restProps }) => (
      <InternationalEngagementItem key={id} {...restProps} />
    )
  );

  return (
    <div className="flex flex-col gap-4">
      {renderedInternationalEngagementItems}
    </div>
  );
};
