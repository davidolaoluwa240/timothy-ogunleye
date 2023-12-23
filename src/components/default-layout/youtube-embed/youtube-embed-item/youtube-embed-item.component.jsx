export const YoutubeEmbedItem = ({ src, title }) => {
  return (
    <iframe
      width="100%"
      height="250"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
};
