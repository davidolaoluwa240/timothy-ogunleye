export const SectionGroup = ({
  heading,
  children,
  className,
  ...restProps
}) => {
  return (
    <div className={`flex flex-col bg-white ${className}`} {...restProps}>
      <div className="bg-black-200 flex items-center p-[0.625rem] justify-center mb-5">
        <h2 className="uppercase font-semibold text-xl text-white text-center max-w-[80%]">
          {heading}
        </h2>
      </div>
      {children}
    </div>
  );
};
