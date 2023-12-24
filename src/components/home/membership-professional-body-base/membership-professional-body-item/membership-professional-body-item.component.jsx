export const MembershipProfessionalBodyItem = ({
  title,
  className,
  ...restProps
}) => {
  return (
    <li
      className={`text-lg text-black text-justify break-words ${className}`}
      dangerouslySetInnerHTML={{ __html: title }}
      {...restProps}
    />
  );
};
