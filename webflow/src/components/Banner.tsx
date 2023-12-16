
const Banner = () => {
  return (
    <div className="w-full max-h-screen relative">
        <img src="/public/img/Banner.png" alt="banner-img" className="top-0 w-full h-[530px] object-cover"/>
        <img src="/public/img/Backgroundbanner.png" alt="fill-backgroud"className="top-0 left-0 w-2/5 h-full object-cover absolute"/>
        <div className="absolute max-top-48 lg:top-48 max-md:top-24 max-sm:top-5 left-8 lg:left-5 max-md:3 max-sm:left-1 mg w-2/5 h-full flex flex-col justify-start text-white ">
            <div className="md:left-[20px] sm:left-[1px] lg:left-[50px] max-w-[1100px] m-auto absolute p-4">
                <p className="text-lg max-md:text-base max-sm:text-[8px]"><div className="bg-[#40DDB6] w-3 h-3 max-md:w-2 max-md:h-2 max-sm:w-2 max-sm:h-2 max inline-block mx-[5px] max-md:mx-[3px] max-sm:mx-[2px]"></div>About Us</p>
                <h1 className="my-[4px] max-md:my-[1px] max-sm:my-[1px] max-w-[600px] max-md:w-[100px] max-sm:w-[191px] font-bold text-6xl max-md:text-3xl max-sm:text-[16px] drop-shadow-2xl">Know About Us</h1>
                <p className="text-[#B9B9B9]">Collaboratively administrate empowered markets plug <br /> and play networks dynamically procrastinated </p>
            </div>
        </div>
    </div>
  )
}

export default Banner;