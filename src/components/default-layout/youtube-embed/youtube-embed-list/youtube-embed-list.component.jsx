// Components
import { YoutubeEmbedItem } from "../../";

export const YoutubeEmbedList = ({ items }) => {
  // Rendered Youtube Embed Items
  const renderedYoutubeEmbedItems = items.map(({ id, ...restProps }) => (
    <YoutubeEmbedItem key={id} {...restProps} />
  ));

  return <div className="flex flex-col gap-4">{renderedYoutubeEmbedItems}</div>;
};
