// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, MembershipProfessionalBodyList } from "../..";

export const ParticipatedConductedTrainingBase = () => {
  const {
    PARTICIPATED_CONDUCTED_TRAINING_ITEMS: participatedConductedTrainingItems,
  } = useStaticData();
  // Participated and Conducted Training Items To Membership Professional Body Model
  const participatedConductedTrainingItemsToMembershipProfessionalBodyModel =
    participatedConductedTrainingItems.map(({ id, title, content }) => ({
      id,
      title: `${
        title ? `<strong className="font-bold">${title}: </strong>` : ""
      }${content}`,
    }));

  return (
    <SectionGroup heading="Participated and Conducted Training">
      <MembershipProfessionalBodyList
        items={
          participatedConductedTrainingItemsToMembershipProfessionalBodyModel
        }
      />
    </SectionGroup>
  );
};
