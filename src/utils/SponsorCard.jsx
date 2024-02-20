export default function SponsorCard({ sponsor }) {
  return (
    <div className="   h-[492px] flex gap-[38px] items-start max-lg:flex-col h-[520px] max-lg:h-[auto] max-lg:items-center">
      <div className="flex items-center justify-center h-[100%] w-[40%] p-[91px] bg-white/5 rounded-3xl backdrop-blur-sm max-lg:h-[auto] max-lg:w-[100%]">
        <img
          className=" rounded-[2.2rem] w-[100%] h-[100%] max-lg:w-[150px] max-lg:h-[150px]"
          src={sponsor.image}
          alt=""
        />
      </div>
      <div className="flex flex-1 gap-[22px] justify-between flex-col items-start h-full w-full">
        <div className=" w-full flex items-center justify-center py-[43px] bg-white/5 rounded-3xl  ">
          <span className=" relative font-[500] text-[40px] text-shadow max-lg:text-[25px] text-white uppercas ">
            {sponsor.name}
          </span>
        </div>
        <div className=" flex-1 text-center flex w-full items-center font-[400] text-[16px] text-white justify-center px-[20px]  max-lg:py-[10px] bg-white/5 rounded-3xl max-lg:h-auto ">
          {sponsor.context}
        </div>
      </div>
    </div>
  );
}
