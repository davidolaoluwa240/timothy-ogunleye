// Components
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Hero,
  SoftwareSkill,
  InternationalEngagement,
  YoutubeEmbed,
  PastEventPicture,
  PastEvent,
  FutureEvent,
} from "../../components";

export const DefaultLayout = () => {
  return (
    <div className="font-crimson bg-white-100">
      <header>
        <Navbar />
        <Hero />
      </header>
      <div className="p-4 lg:p-6 grid grid-cols-[347px_1fr_347px] gap-6 max-w-[1408px]">
        <aside className="flex flex-col gap-6">
          <SoftwareSkill />
          <InternationalEngagement />
        </aside>

        <main className="overflow-hidden">
          <Outlet />
        </main>

        <aside className="flex flex-col gap-6">
          <YoutubeEmbed />
          <PastEventPicture />
          <PastEvent />
          <FutureEvent />
        </aside>
      </div>
    </div>
  );
};
