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
      <div className="p-4 lg:p-6 grid gap-6 grid-cols-[347px_559px_347px] items-start max-w-[1408px]">
        <aside className="flex flex-col gap-6 sticky top-0">
          <SoftwareSkill />
          <InternationalEngagement />
        </aside>

        <main>
          <Outlet />
        </main>

        <aside className="flex flex-col gap-6 sticky top-0">
          <YoutubeEmbed />
          <PastEventPicture />
          <PastEvent />
          <FutureEvent />
        </aside>
      </div>
    </div>
  );
};
