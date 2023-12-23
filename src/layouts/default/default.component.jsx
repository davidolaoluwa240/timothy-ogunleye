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
      <div className="p-2 lg:p-6 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-[347px_1fr_347px] items-start max-w-[1408px] mx-auto">
        <aside className="flex flex-col gap-6 xl:sticky top-0 row-start-2 md:col-start-1 md:col-end-2 xl:col-start-1 xl:col-end-2 xl:row-start-1">
          <SoftwareSkill />
          <InternationalEngagement />
        </aside>

        <main className="xl:sticky top-0 row-start-1 md:col-start-1 md:col-end-3 xl:col-start-2 xl:col-end-3">
          <Outlet />
        </main>

        <aside className="flex flex-col gap-6 xl:sticky top-0 row-start-3 md:row-start-2 md:col-start-2 md:col-end-3 xl:col-start-3 xl:col-end-3 xl:row-start-1">
          <YoutubeEmbed />
          <PastEventPicture />
          <PastEvent />
          <FutureEvent />
        </aside>
      </div>
    </div>
  );
};
