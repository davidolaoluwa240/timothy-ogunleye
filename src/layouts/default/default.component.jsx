// Components
import { Outlet } from "react-router-dom";
import {
  Navbar,
  Hero,
  SoftwareSkill,
  InternationalEngagement,
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
        <main>{Outlet}</main>
        <aside>
          <SoftwareSkill />
        </aside>
      </div>
    </div>
  );
};
