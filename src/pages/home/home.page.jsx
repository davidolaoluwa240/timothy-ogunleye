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
  WelcomeAddressBase,
} from "../../components";

export const Home = () => {
  return (
    <div className="flex flex-col gap-6">
      <WelcomeAddressBase />
      <JobProfileBase />
      <ProfessionalExperienceBase />
      <MembershipProfessionalBodyBase />
      <ServicesBase />
      <ResearchInterestBase />
      <GrantReceivedBase />
      <SelectedTrainingWebinarBase />
      <ProfessionalServiceBase />
      <ParticipatedConductedTrainingBase />
      <PublicationBase />
    </div>
  );
};
