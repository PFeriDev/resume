export default function Home() {
  return (
    <>
      <section className=" md:w-3/5 h-[200rem] mx-auto mt-[5rem] bg-mainbg rounded-3xl border border-maingray/50 shadow-2xl shadow-lightblue">
        <header className=" p-8 mb-7 w-full h-9">
          <h1 className=" font-poppins  text-xl text-mainwhite">
            Pemmer <b>Ferenc</b>
          </h1>
        </header>

        <div className="w-full flex items-center pl-8 shadow-inner shadow-mainwhite  border-t border-b border-lightgray p-0 bg-[#252525] h-[8rem]">
          <h1 className=" font-poppins font-bold text-4xl text-mainwhite">Oneletrajz</h1>
        </div>
        <div className="grid lg:grid-cols-2 w-full">
          <div className="col-span-1 w-[15rem] rounded-full border-4 border-maingray h-[15rem] mx-auto my-auto"></div>
          <div>jobb</div>
        </div>
        <div className="grid lg:grid-cols-2 w-full">
          <div>tanulmanyok</div>
          <div>tapasztalat</div>
        </div>
      </section>
    </>
  );
}
