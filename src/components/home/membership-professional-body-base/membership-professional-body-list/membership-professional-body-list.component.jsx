// Components
import { MembershipProfessionalBodyItem } from "../../../";

export const MembershipProfessionalBodyList = ({
  items,
  className,
  ...restProps
}) => {
  // Membership Professional Body Items
  const renderedMembershipProfessionalBodyItems = items.map(
    ({ id, ...restProps }) => (
      <MembershipProfessionalBodyItem key={id} {...restProps} />
    )
  );

  return (
    <ul
      className={`flex flex-col gap-2 px-[0.625rem] pb-[0.625rem] list-disc list-inside ${className}`}
      {...restProps}
    >
      {renderedMembershipProfessionalBodyItems}
    </ul>
  );
};
