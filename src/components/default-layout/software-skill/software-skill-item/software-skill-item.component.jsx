export const SoftwareSkillItem = ({ id, title, description }) => {
  return (
    <div className="relative bg-white shadow-md p-[0.625rem]">
      <span className="absolute flex items-center justify-center text-2xl font-black bg-white py-2 px-5 rounded-full shadow-sm top-[-10px] left-[-15px]">
        {id}
      </span>
      <h3 className="text-lg font-semibold text-black pl-7">{title}</h3>
      <p className="text-lg text-black mt-2 text-justify">{description}</p>
    </div>
  );
};
