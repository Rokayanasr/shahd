import "./App.css";
import sound from "./assets/Bird Chirping Sound Effect [TubeRipper.com].m4a";
import StarRate from "./components/StarRate";
function App() {
    return (
        <>
            <section className='m-4 md:m-12 rounded-md bg-tw-bgColor px-6 py-10 md:p-8'>
                <div className='flex flex-col md:gap-12 gap-4  mb-8 px-2 lg:px-8'>
                    <div className='flex flex-col md:flex-row md:gap-12 gap-4 md:justify-between w-full'>
                        <div className='flex flex-col md:gap-12 gap-4 items-start justify-end basis-1/2'>
                            <h2 className='sm:text-3xl text-xl  text-tw-primary font-black'>
                                رد المتدرب: <br />
                                خالد عاصم الرحيلي
                            </h2>
                            <h2 className='sm:text-3xl text-xl  text-tw-primary font-black'>الجنس: ذكر</h2>
                        </div>
                        <div className='flex  flex-col md:gap-12 gap-4 items-start justify-end basis-1/2'>
                            <h2 className='sm:text-3xl text-xl  text-tw-primary font-black'>التخصص: القانون</h2>

                            <h2 className='sm:text-3xl text-xl  text-tw-primary font-black'>نوع الترافع : قضية جنائية</h2>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <svg width={30} height={30} viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M45.8346 24.9993C45.8346 36.4993 36.5013 45.8327 25.0013 45.8327C13.5013 45.8327 4.16797 36.4993 4.16797 24.9993C4.16797 13.4993 13.5013 4.16602 25.0013 4.16602C36.5013 4.16602 45.8346 13.4993 45.8346 24.9993Z'
                                stroke='#303468'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                            <path
                                d='M32.7305 31.6257L26.2721 27.7715C25.1471 27.1048 24.2305 25.5006 24.2305 24.1881V15.6465'
                                stroke='#303468'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                        <h4 className='lg:font-bold font-black text-lg lg:text-base text-tw-primary'>الزمن متبقي للتقييم: يوم و7 ساعات</h4>
                    </div>
                </div>
                <div className='px-2 py-8 md:p-8 rounded-md bg-tw-secondary md:gap-12 gap-8 flex flex-col'>
                    <div className='flex flex-col gap-8'>
                        <h3 className='lg:text-lg text-2xl font-black lg:font-bold text-tw-primary'>تفاصيل الرد:</h3>
                        <div className='flex items-center justify-center'>
                            <div className='bg-[#EAECF3] rounded-lg w-full overflow-hidden'>
                                <audio className='w-full bg-[#EAECF3]' controls src={sound}></audio>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h3 className='lg:text-lg text-2xl font-black lg:font-bold text-tw-primary'>تقييم الرد:</h3>
                        <div className='flex items-center justify-center bg-[#ffff] md:w-fit rounded-full p-2'>
                            <StarRate className=''></StarRate>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h3 className='lg:text-lg text-2xl font-black lg:font-bold text-tw-primary'>ملاحظات للمتدرب:</h3>
                        <div className='flex items-center justify-center'>
                            <div className='bg-[#ffff] rounded-lg w-full overflow-hidden lg:p-8 p-4'>
                                <h4 className='lg:font-bold font-black text-lg lg:text-base text-tw-primary'>تحتاج التدريب اكثر علي:</h4>
                                <h4 className='lg:font-bold font-black text-lg lg:text-base text-tw-primary'>- النصوص اللغوية</h4>
                                <h4 className='lg:font-bold font-black text-lg lg:text-base text-tw-primary'>- اللوائح الخاصة بنظام العمل</h4>
                                <h4 className='lg:font-bold font-black text-lg lg:text-base text-tw-primary'>- مراجعة المادة 77 من نظام العمل</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center pt-8">
                      <button className="bg-tw-primary text-[#ffff] w-[60%] h-[8vh] rounded-full">ارسال</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
