export default function SponsorCard  ({ sponsor }) {
    return (
        <div className="   h-[492px] flex gap-[38px] items-start">
            <div className="flex items-center justify-center h-full w-[492px] p-[91px] bg-white/5 rounded-3xl backdrop-blur-sm">
             <img className=" rounded-[2.2rem] w-[250px] h-[250px] md:w-[300px] md:h-[300px]" src={sponsor.image} alt="" />
            </div>
            <div className="flex flex-1 gap-[22px] justify-between flex-col items-start h-full w-full">
                <div className=" w-full flex items-center justify-center py-[43px] bg-white/5 rounded-3xl  ">
                    <span className=" relative font-[700] text-[40px] text-white uppercas ">
                        <span class="absolute inset-[0.1px] bg-white rounded-full blur-2xl mix-blend-overlay"></span>
                        {sponsor.name}
                    </span>
                </div>
                <div className=" flex-1 text-center flex w-full items-center font-[400] text-[18px] text-white justify-center px-[20px] py-[64px] bg-white/5 rounded-3xl  ">
                    {sponsor.context}
                </div>
            </div>
        </div>
    );
  };