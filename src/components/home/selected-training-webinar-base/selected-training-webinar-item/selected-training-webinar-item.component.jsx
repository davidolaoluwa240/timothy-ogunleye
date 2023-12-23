// Components
import { Image, Card, CardHeader, CardBody } from "@nextui-org/react";

export const SelectedTrainingWebinarItem = ({ id, image, content }) => {
  return (
    <Card>
      <CardHeader>
        <Image
          className="w-[700px] h-[357px] object-cover"
          classNames={{ wrapper: "!max-w-full" }}
          src={image}
          alt={`training/webinar ${id}`}
        />
      </CardHeader>
      <CardBody>
        <p
          className="text-justify text-black"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CardBody>
    </Card>
  );
};
