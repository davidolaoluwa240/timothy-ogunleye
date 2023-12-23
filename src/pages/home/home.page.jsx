// Components
import {
  JobProfileBase,
  ProfessionalExperienceBase,
  MembershipProfessionalBodyBase,
  ProfessionalServiceBase,
  ParticipatedConductedTrainingBase,
  GrantReceivedBase,
  ResearchInterestBase,
  ServicesBase,
  PublicationBase,
  SelectedTrainingWebinarBase,
} from "../../components";

export const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <SelectedTrainingWebinarBase />
      <ProfessionalServiceBase />
      <JobProfileBase />
      <ProfessionalExperienceBase />
      <MembershipProfessionalBodyBase />
      <ServicesBase />
      {/* <PublicationBase /> */}
      <ResearchInterestBase />
      <GrantReceivedBase />
      <ParticipatedConductedTrainingBase />
    </div>
  );
};
