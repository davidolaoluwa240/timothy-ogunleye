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
    <div className="flex flex-col gap-2">
      {renderedSelectedTrainingWebinarItems}
    </div>
  );
};
