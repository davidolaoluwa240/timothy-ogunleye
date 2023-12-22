// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, YoutubeEmbedList } from "../../";

export const YoutubeEmbed = () => {
  const { YOUTUBE_EMBED_ITEMS: youtubeEmbedItems } = useStaticData();

  return (
    <SectionGroup heading="Youtube">
      <YoutubeEmbedList items={youtubeEmbedItems} />
    </SectionGroup>
  );
};
