import Button from "@/components/Button";
import { Smartphone, MailCheck, MapPinHouse, Cake, Linkedin, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className=" lg:w-[80rem] pb-10 mx-auto mb-[5rem] mt-[5rem] bg-mainbg rounded-3xl border border-maingray/50 shadow-2xl shadow-lightblue">
        <header className=" p-5 mb-7 w-full  flex justify-between items-center">
          <h1 className="font-poppins  text-xl text-mainwhite">
            Pemmer <b>Ferenc</b>
          </h1>

          <div className="flex gap-x-5 items-center">
            <a href="/hu">
              <Image src="/flags/huflag.png" alt="hu flag" width={40} height={30} className="cursor-pointer"></Image>
            </a>
            <a href="/">
              <Image src="/flags/uk-flag.gif" alt="uk flag" width={40} height={30} className="cursor-pointer"></Image>
            </a>
          </div>
        </header>
        {/* About section */}
        <div className="w-full flex items-center pl-8  justify-center border-t border-b border-lightgray p-0 bg-[#252525] h-[8rem]">
          <h1 className=" font-poppins font-bold text-4xl text-mainwhite text-center">Resume</h1>
        </div>
        <div className="grid lg:grid-cols-2 w-4/5 mx-auto mt-[5rem]">
          <Image
            src={"/profilepic"}
            alt="profilepic"
            width={200}
            height={200}
            className="col-span-1 w-[25rem] rounded-full border-8 border-darkblue/80 h-[25rem] shadow-2xl shadow-mainblack mx-auto my-auto bgprofilepic"></Image>
          <div className="col-span-1 my-auto">
            <p className="font-sintony font-light text-sm text-mainwhite/50">frontend developer</p>
            <div className="flex gap-5 items-center mb-5">
              <h1 className="font-poppins font-bold text-4xl text-mainwhite">Ferenc Pemmer</h1>
              <a href="https://www.linkedin.com/in/ferenc-pemmer-1bb20a207/">
                <Linkedin size={30} className="text-darkblue hover:scale-110 transition-all" />
              </a>
            </div>

            <p className="font-sintony font-normal text-sm text-mainwhite">
              My goal is to work as a full-stack developer, contributing to the creation of creative and modern web
              solutions while deepening my knowledge of the latest technologies. I am seeking a position where I can
              participate in the full lifecycle of projects and further develop and apply my web development skills. I
              aim to continue growing and learning to contribute to the long-term success of a dynamic team.
            </p>
            <div className="grid grid-cols-2 gap-5 mt-7">
              <p className="flex items-center gap-2 font-sintony font-medium text-sm text-mainwhite">
                <span>
                  <Smartphone size={30} className="text-darkblue" />
                </span>
                +36 30 953 64 84
              </p>
              <p className="flex items-center gap-2 font-sintony font-medium text-sm text-mainwhite">
                <span>
                  <MailCheck size={30} className="text-darkblue" />
                </span>
                pemmer.ferenc@gmail.com
              </p>
              <p className="flex items-center gap-2 font-sintony font-medium text-sm text-mainwhite">
                <span>
                  <MapPinHouse size={30} className="text-darkblue" />
                </span>
                Hungary, Csősz
              </p>
              <p className="flex items-center gap-2 font-sintony font-medium text-sm text-mainwhite">
                <span>
                  <Cake size={30} className="text-darkblue" />
                </span>
                30 years old
              </p>
            </div>
            <div className="mt-5 flex items-center gap-5">
              <a href="#exp">
                <Button title={"Experiences"}></Button>
              </a>
              <a href="#stack">
                <Button title={"Stack"}></Button>
              </a>
              <a href="#projects">
                <Button title={"Projects"}></Button>
              </a>
            </div>
          </div>
        </div>

        {/* Education  section */}

        <div className="grid lg:grid-cols-2 w-4/5 mx-auto mt-[5rem] gap-10">
          <div>
            <p className="text-mainwhite border-b-4 w-[2rem] font-poppins font-bold text-lg  border-darkblue">
              Education
            </p>
            <div className="border-l-2 border-maingray/50 mt-10">
              <div className="flex align-middle justify-start items center gap-3 ">
                <p className="text-mainwhite  font-sintony font-normal text-sm border bg-mainbg border-darkblue p-2  -ml-4 rounded-xl">
                  2023-2027
                </p>
                <p className="font-sintony font-normal text-mainwhite/50 pt-1.5">University of Dunaújváros</p>
              </div>
              <div className="pl-7 mt-3 pb-6 border-b-2 border-maingray/50">
                <h1 className="font-poppins font-bold text-mainwhite mb-2 text-xl">Business Information Technology</h1>
                <p className="font-sintony font-normal text-mainwhite text-sm">
                  I am currently a part-time student at Dunaújváros University. I am in my 4th semester and expect to
                  earn my degree in 2027.
                </p>
              </div>
              <div className="border-l border-maingray/50 mt-10">
                <div className="flex align-middle justify-start items center gap-3 ">
                  <p className="text-mainwhite  font-sintony font-normal text-sm border bg-mainbg border-darkblue p-2  -ml-4 rounded-xl">
                    2008-2012
                  </p>
                  <p className="font-sintony font-normal text-mainwhite/50 pt-1.5">Eötvös József High School</p>
                </div>
                <div className="pl-7 mt-3 pb-5">
                  <h1 className="font-poppins font-bold text-mainwhite mb-2 text-xl">High School Diploma</h1>
                  <p className="font-sintony font-normal text-mainwhite text-sm">
                    I graduated from high school in the IT specialization group, and my chosen subject for the final
                    exam was also IT.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Experiences section */}

          <div>
            <p id="exp" className="text-mainwhite border-b-4 w-[2rem] font-poppins font-bold text-lg  border-darkblue">
              Experience
            </p>
            <div className="border-l border-maingray/50 mt-10">
              <div className="flex align-middle justify-start items center gap-3 ">
                <p className="text-mainwhite  font-sintony font-normal text-sm border bg-mainbg border-darkblue p-2  -ml-4 rounded-xl">
                  2016-2020
                </p>
                <p className="font-sintony font-normal text-mainwhite/50 pt-1.5">work experiences</p>
              </div>
              <div className="pl-7 mt-3 pb-6 border-b-2 border-maingray/50">
                <h1 className="font-poppins font-bold text-mainwhite mb-2 text-xl">
                  I worked in metal industry positions at the following companies
                </h1>
                <p className="font-sintony font-normal text-mainwhite text-sm">
                  Inox Group Kft. , Kor-Product Kft. , PNH Kft. , Worldinventor Kft.
                </p>
              </div>
              <div className="border-l border-maingray/50 mt-10">
                <div className="flex align-middle justify-start items center gap-3 ">
                  <p className="text-mainwhite  font-sintony font-normal text-sm border bg-mainbg border-darkblue p-2  -ml-4 rounded-xl">
                    2020-2025
                  </p>
                  <p className="font-sintony font-normal text-mainwhite/50 pt-1.5">work experiences</p>
                </div>
                <div className="pl-7 mt-3 pb-5">
                  <h1 className="font-poppins font-bold text-mainwhite mb-2 text-xl">IK METAL Kft. , Freelancer</h1>
                  <p className="font-sintony font-normal text-mainwhite text-sm">
                    I am currently working at IK METAL Kft., but I would like to transition my career to the IT field,
                    particularly in a role where I can contribute to web development. In my previous experiences, I
                    created websites using both CMS platforms and programming languages, as detailed below.
                    Additionally, I designed graphic materials and handled equipment maintenance. During my years in the
                    metal industry, I developed skills such as precision and problem-solving, which are equally
                    essential in the field of web development. Overall, I believe that by leveraging these experiences,
                    I can become a valuable member of a team and contribute to the success of the company's digital
                    projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* skills section */}

        <div>
          <div className="mt-[5rem] w-4/5 mx-auto">
            <div id="stack">
              <p className="text-mainwhite font-poppins font-bold text-center text-lg lg:text-left mb-2">
                Programming Skills
              </p>
            </div>

            <div className=" grid lg:grid-cols-4 mx-auto gap-5">
              <div className="flex items-center justify-center border gap-2 rounded-full p-2 hover:shadow-[#FC490B]/30 hover:shadow-lg shadow-md shadow-[#FC490B]/30 transition-all  border-[#FC490B] bg-[#FC490B]/5">
                <Image src="/stacklogos/html.png" alt="html" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">html</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full  hover:shadow-[#2196F3]/30 p-2 hover:shadow-lg shadow-md shadow-[#2196F3]/30 transition-all  border-[#2196F3] bg-[#2196F3]/5">
                <Image src="/stacklogos/css.png" alt="css" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">css</p>
              </div>
              <div className="flex items-center justify-center gap-2 border rounded-full  hover:shadow-[#FFDF00]/30 p-2 hover:shadow-lg shadow-md shadow-[#FFDF00]/30 transition-all  border-[#FFDF00] bg-[#FFDF00]/5">
                <Image src="/stacklogos/js.png" alt="js" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">javascript</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full  hover:shadow-[#5ADAFD]/30 p-2 hover:shadow-lg shadow-md shadow-[#5ADAFD]/30 transition-all  border-[#5ADAFD] bg-[#5ADAFD]/5">
                <Image src="/stacklogos/react.png" alt="react" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">react</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full  hover:shadow-[#3178C6]/30 p-2 hover:shadow-lg shadow-md shadow-[#3178C6]/30 transition-all  border-[#3178C6] bg-[#3178C6]/5">
                <Image src="/stacklogos/typescript.png" alt="typescript" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">typescript</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full p-2 hover:shadow-[#000000]/30 hover:shadow-lg shadow-md shadow-[#000000]/30 transition-all  border-[#000000] bg-[#000000]/5">
                <Image src="/stacklogos/nextjs.png" alt="nextjs" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">next.js</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full p-2 hover:shadow-[#00758F]/30 hover:shadow-lg shadow-md shadow-[#00758F]/30 transition-all  border-[#00758F] bg-[#00758F]/5">
                <Image src="/stacklogos/mysql.png" alt="mysql" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">Mysql</p>
              </div>
            </div>
            <div className=" mx-auto">
              <p className="text-mainwhite font-poppins font-bold text-lg text-left mb-2  mt-[3rem]">Tools</p>
            </div>
            <div className="grid lg:grid-cols-4 mx-auto gap-5 ">
              <div className="flex items-center justify-center border gap-2 rounded-full p-2 hover:shadow-[#00CF7F]/30 hover:shadow-lg shadow-md shadow-[#00CF7F]/30 transition-all  border-[#00CF7F] bg-[#00CF7F]/5">
                <Image src="/stacklogos/figma.png" alt="figma" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">figma</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full p-2 hover:shadow-[#00A9FF]/30 hover:shadow-lg shadow-md shadow-[#00A9FF]/30 transition-all  border-[#00A9FF] bg-[#00A9FF]/5">
                <Image src="/stacklogos/photoshop.png" alt="photoshop" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">photoshop</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full p-2 hover:shadow-[#000000]/30 hover:shadow-lg shadow-md shadow-[#000000]/30 transition-all  border-[#000000] bg-[#000000]/5">
                <Image src="/stacklogos/github.png" alt="github" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">github</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full p-2 hover:shadow-[#008AD3]/30 hover:shadow-lg shadow-md shadow-[#008AD3]/30 transition-all  border-[#008AD3] bg-[#008AD3]/5">
                <Image src="/stacklogos/vscode.png" alt="vscode" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">vscode</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full p-2 hover:shadow-[#464442]/30 hover:shadow-lg shadow-md shadow-[#464442]/30 transition-all  border-[#464442] bg-[#464442]/5">
                <Image src="/stacklogos/wordpress.png" alt="wordpress" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">wordpress</p>
              </div>
              <div className="flex items-center justify-center border gap-2 rounded-full p-2 hover:shadow-[#EFC853]/30 hover:shadow-lg shadow-md shadow-[#EFC853]/30 transition-all  border-[#EFC853] bg-[#EFC853]/5">
                <Image src="/stacklogos/powerbi.png" alt="powerbi" width={50} height={50}></Image>
                <p className="font-sintony font-bold uppercase text-lg text-mainwhite">power bi</p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 mx-auto w-4/5">
              <div className="mx-auto">
                <div className="">
                  <p className="text-mainwhite font-poppins font-bold text-center text-lg lg:text-left mt-[3rem] mb-2">
                    Soft Skills
                  </p>
                </div>

                <ul className="">
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Teamwork
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Flexibility
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Growth-oriented
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Logical thinking
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Customer-focused
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Proactive
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Strong communication
                      skills
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mx-auto">
                <div className="">
                  <p className="text-mainwhite font-poppins font-bold text-center text-lg lg:text-left mt-[3rem] mb-2">
                    Interests
                  </p>
                </div>

                <ul className="">
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Self-development
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Business
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>IT Technologies
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Podcasts
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>TV Series
                    </p>
                  </li>
                </ul>
              </div>
              <div className="mx-auto">
                <div className="">
                  <p className="text-mainwhite font-poppins font-bold text-center text-lg lg:text-left mt-[3rem] mb-2">
                    Others
                  </p>
                </div>

                <ul className="">
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>B Category driver
                      license
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>English B2
                    </p>
                  </li>
                  <li>
                    <p className="font-poppins font-semibold text-lg text-mainwhite">
                      <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Familiar with the
                      theoretical principles of Agile methodology
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Projects section */}

        <div id="projects" className="mt-[5rem] mb-5">
          <h1 className="text-mainwhite text-center  font-poppins font-bold text-2xl border-b-4 border-darkblue mx-auto w-[17rem]">
            Some of my projects
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-3 px-5">
          <div className="card w-[22rem] mx-auto mb-5 bg-[#252525] p-5 rounded-xl border border-darkblue/30 shadow-sm shadow-darkblue/50 hover:shadow-xl hover:shadow-darkblue/50 transition-all duration-300">
            <Image
              src="/projectpics/project1.png"
              width={400}
              height={350}
              alt="projectpicture"
              className="hover:scale-110 transition-all"></Image>
            <h1 className="font-poppins font-extrabold text-mainwhite text-lg text-center">Laro-Ablak Kft.</h1>
            <p className="font-sintony font-sm text-mainwhite/50 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur adipisci repellat
              ratione quam nisi accusantium nam, enim similique dignissimos neque ea fugiat cum iusto inventore, labore
              quibusdam. Quam?
            </p>
            <div className="mx-auto text-center mt-3">
              <a href="https://laro-ablak.hu/" target="blank" className="text-center mx-auto">
                <Button title={"Live"}></Button>
              </a>
            </div>
          </div>
          <div className="card w-[22rem] mx-auto mb-5 bg-[#252525] p-5 rounded-xl border border-darkblue/30 shadow-sm shadow-darkblue/50 hover:shadow-xl hover:shadow-darkblue/50 transition-all duration-300">
            <Image
              src="/projectpics/project2.png"
              width={400}
              height={350}
              alt="projectpicture"
              className="hover:scale-110 transition-all"></Image>
            <h1 className="font-poppins font-extrabold text-mainwhite text-lg text-center">Pwd Portfolio</h1>
            <p className="font-sintony font-sm text-mainwhite/50 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur adipisci repellat
              ratione quam nisi accusantium nam, enim similique dignissimos neque ea fugiat cum iusto inventore, labore
              quibusdam. Quam?
            </p>
            <div className="mx-auto text-center mt-3">
              <a href="https://pwdportfoliopracticepage.vercel.app/" target="blank" className="text-center mx-auto">
                <Button title={"Live"}></Button>
              </a>
            </div>
          </div>
          <div className="card w-[22rem] mx-auto mb-5 bg-[#252525] p-5 rounded-xl border border-darkblue/30 shadow-sm shadow-darkblue/50 hover:shadow-xl hover:shadow-darkblue/50 transition-all duration-300">
            <Image
              src="/projectpics/project3.png"
              width={400}
              height={350}
              alt="projectpicture"
              className="hover:scale-110 transition-all"></Image>
            <h1 className="font-poppins font-extrabold text-mainwhite text-lg text-center">Arato Attila EV.</h1>
            <p className="font-sintony font-sm text-mainwhite/50 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum itaque consectetur adipisci repellat
              ratione quam nisi accusantium nam, enim similique dignissimos neque ea fugiat cum iusto inventore, labore
              quibusdam. Quam?
            </p>
            <div className="mx-auto text-center mt-3">
              <a href="https://aratoattila.hu/" target="blank" className="text-center mx-auto">
                <Button title={"Live"}></Button>
              </a>
            </div>
          </div>
        </div>

        {/* last section */}
        <div className="mt-[5rem] flex items-center justify-center">
          <h1 className="text-mainwhite  font-poppins font-bold text-2xl w-1/2 text-center ">
            Koszonom hogy vegigolvastad. Ha tetszettek a latottak keress meg es ismerj meg egy inerju keretein belul
            akar.
          </h1>
        </div>
      </section>
      <div className=" fixed bottom-5 right-20">
        <a href="#home">
          <ArrowUp
            size={50}
            className="bg-mainblack/50 hover:bg-mainblack transition-all cursor-pointer text-mainwhite rounded-full p-2"
          />
        </a>
      </div>
    </>
  );
}
