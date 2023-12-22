export const YoutubeEmbedItem = ({ src, title }) => {
  return (
    <iframe
      width="100%"
      height="250"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; encrypted-media"
      allowFullScreen
    />
  );
};
