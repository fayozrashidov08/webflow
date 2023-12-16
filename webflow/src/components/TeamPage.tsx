const Members = () => {
    return(
        <>
            <div className="text-center">
                    <p className="text-lg max-md:text-base max-sm:text-[8px]"><div className="bg-[#40DDB6] w-3 h-3 max-md:w-2 max-md:h-2 max-sm:w-2 max-sm:h-2 max inline-block mx-[5px] max-md:mx-[3px] max-sm:mx-[2px]"></div>Our Team</p>
                    <h1 className="text-[70px]">Meet Our Experts</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-[30px] md:px-[100px] w-[100%] mt-[50px] md:justify-between mb-[130px]">
                <div className="md:w-[400px] md:h-[550px] w-[100%] h-[600px] bg-[url('./public/img/members1.png')] bg-cover bg-no-repeat bg-center flex justify-center align-bottom bg-right">
                    <div className="bg-white w-[100%] mt-[440px] md:w-[90%] h-[20%] md:mt-[425px] max-sm:w-[30%] flex flex-col items-center justify-center">
                        <h1 className="text-3xl">Wanda	Forsyth</h1>
                        <h2 className="text-[#7D7D7D]">Designer</h2>
                    </div>
                </div>
                <div className="md:w-[400px] md:h-[550px] w-[100%] h-[600px] bg-[url('./public/img/members2.png')] bg-cover bg-no-repeat bg-center flex justify-center align-bottom bg-right">
                    <div className="bg-white w-[100%] mt-[440px] md:w-[90%] h-[20%] md:mt-[425px] flex flex-col items-center justify-center">
                        <h1 className="text-3xl">David  Simpson</h1>
                        <h2 className="text-[#7D7D7D]">Designer</h2>
                    </div>
                </div>
                <div className="md:w-[400px] md:h-[550px] w-[100%] h-[600px] bg-[url('./public/img/members3.png')] bg-cover bg-no-repeat bg-center flex justify-center align-bottom bg-right">
                    <div className="bg-white w-[100%] mt-[440px] md:w-[90%] h-[20%] md:mt-[425px] flex flex-col items-center justify-center">
                        <h1 className="text-3xl">Madeleine	Grant</h1>
                        <h2 className="text-[#7D7D7D]">Marketing Specialist</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Members;