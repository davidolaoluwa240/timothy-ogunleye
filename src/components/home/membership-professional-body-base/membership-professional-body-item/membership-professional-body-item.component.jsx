export const MembershipProfessionalBodyItem = ({ title }) => {
  return (
    <li
      className="text-lg text-black text-justify break-words"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};
