// Components
import {
  AboutBase,
  Education,
  ProfessionalQualification,
} from "../../components";

export const About = () => {
  return (
    <div className="flex flex-col gap-6">
      <AboutBase />
      <Education />
      <ProfessionalQualification />
    </div>
  );
};
