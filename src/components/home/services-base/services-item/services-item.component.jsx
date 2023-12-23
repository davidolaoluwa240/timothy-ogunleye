// Components
import { MembershipProfessionalBodyList } from "../../";

export const ServicesItem = ({ name, items }) => {
  // Services Item List To Membership Professional Body Model
  const servicesItemListToMembershipProfessionalBodyModel = items.map(
    (val, i) => ({ title: val, id: i })
  );

  return (
    <li>
      <span className="text-xl font-semibold text-black">{name}</span>
      <MembershipProfessionalBodyList
        className="pl-5"
        items={servicesItemListToMembershipProfessionalBodyModel}
      />
    </li>
  );
};
