// Components
import { ServicesItem } from "../../";

export const ServicesList = ({ items }) => {
  // Rendered Services Items
  const renderedServicesItems = items.map(({ id, ...restProps }) => (
    <ServicesItem key={id} {...restProps} />
  ));

  return (
    <ol className="flex flex-col gap-2 px-[0.625rem] pb-[0.625rem] list-decimal list-inside">
      {renderedServicesItems}
    </ol>
  );
};
