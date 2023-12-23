// Components
import { Button } from "@nextui-org/react";

export const EducationItem = ({ university, degree, type, icon }) => {
  return (
    <div className="bg-white-200 relative p-4 flex flex-col gap-2 rounded-md">
      <h3 className="font-semibold text-xl max-w-[95%]">{university}</h3>
      <p className="text-black-300 text-lg font-medium max-w-[95%]">{degree}</p>
      <Button
        className="font-semibold text-white self-start"
        color="primary"
        disableRipple
      >
        {type}
      </Button>
      {!!icon && (
        <span className="absolute flex items-center justify-center bg-white py-4 px-4 rounded-full shadow-sm top-[-10px] right-[-15px]">
          {icon}
        </span>
      )}
    </div>
  );
};
