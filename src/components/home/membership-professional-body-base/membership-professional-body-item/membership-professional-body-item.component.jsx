export const MembershipProfessionalBodyItem = ({ title }) => {
  return (
    <li
      className="text-lg text-black text-justify"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  );
};
