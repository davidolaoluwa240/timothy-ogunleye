// Components
import { Button } from "@nextui-org/react";

export const EducationItem = ({ university, degree, type }) => {
  return (
    <div className="bg-white-200 p-4 flex flex-col gap-2 rounded-md">
      <h3 className="font-semibold text-xl">{university}</h3>
      <p className="text-black-300 text-lg font-medium">{degree}</p>
      <Button
        className="font-semibold text-white self-start"
        color="primary"
        disableRipple
      >
        {type}
      </Button>
    </div>
  );
};
