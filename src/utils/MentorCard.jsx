const MentorCard = ({ mentor }) => {
  return (
    <div className=" flex flex-col md:flex-row gap-8 items-center p-8 bg-white/5 rounded-3xl backdrop-blur-sm">
      <div className=" p-4 rounded-[2rem] shadow-[0px_0px_16px_#F05323]">
        <img className=" rounded-[2.2rem] w-[250px] h-[250px]" src={mentor.image} alt="" />

      </div>
      <div className=" flex flex-col gap-2 md:gap-4 text-xl md:text-2xl font-bold text-gray-50 capitalize [text-shadow:0px_0px_2px_#fff] ">
        <h1>name : <span className=" font-medium ml-4">{mentor.name}</span> </h1>
        <h1>surname : <span className=" font-medium ml-4">{mentor.surname}</span></h1>
        <h1>job : <span className=" font-medium ml-4">{mentor.job}</span></h1>
        <h1>experience : <span className=" font-medium ml-4">{mentor.experience}</span></h1>
      </div>
      
    </div>
  );
};
export default MentorCard;
