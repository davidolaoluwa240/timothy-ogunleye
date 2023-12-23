// Components
import { SelectedTrainingWebinarItem } from "../../";

export const SelectedTrainingWebinarList = ({ items }) => {
  // Rendered Selected Training Webinar Item
  const renderedSelectedTrainingWebinarItems = items.map(
    ({ id, ...restProps }) => (
      <SelectedTrainingWebinarItem key={id} id={id} {...restProps} />
    )
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-2">
      {renderedSelectedTrainingWebinarItems}
    </div>
  );
};
