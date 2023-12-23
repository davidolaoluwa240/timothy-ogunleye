// Hooks
import { useStaticData } from "../../../hooks";

// Components
import { SectionGroup, SelectedTrainingWebinarList } from "../..";

export const SelectedTrainingWebinarBase = () => {
  const { SELECTED_TRAINING_WEBINAR_ITEMS: selectedTrainingWebinarItems } =
    useStaticData();

  return (
    <SectionGroup heading="Some Selected Trainings & Webinars">
      <SelectedTrainingWebinarList items={selectedTrainingWebinarItems} />
    </SectionGroup>
  );
};
