import Button from "@/components/Button";
import { Smartphone, MailCheck, MapPinHouse, Cake, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className=" lg:w-[80rem] pb-10 mx-auto mb-[5rem] mt-[5rem] bg-mainbg rounded-3xl border border-maingray/50 shadow-2xl shadow-lightblue">
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
            <p className="font-sintony font-light text-sm text-mainwhite/50">frontend fejlesztő</p>
            <div className="flex gap-5 items-center mb-5">
              <h1 className="font-poppins font-bold text-4xl text-mainwhite">Pemmer Ferenc</h1>
              <a href="https://www.linkedin.com/in/ferenc-pemmer-1bb20a207/">
                <Linkedin size={30} className="text-darkblue hover:scale-110 transition-all" />
              </a>
            </div>

            <p className="font-sintony font-normal text-sm text-mainwhite">
              Célom, hogy full-stack fejlesztőként kreatív és modern webes megoldások készítésében vegyek részt,
              miközben tovább mélyítem tudásomat a legújabb technológiákban. Egy olyan pozíciót keresek, ahol részt
              vehetek projektek teljes életciklusában és ahol fejleszthetem illetve kamatoztathatom a webfejlesztési
              tudásom. Szeretnék tovább fejlődni és tanulni, hogy hosszútávon hozzájáruljak egy dinamikus csapat
              sikeréhez.
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
                Magyarország, Csősz
              </p>
              <p className="flex items-center gap-2 font-sintony font-medium text-sm text-mainwhite">
                <span>
                  <Cake size={30} className="text-darkblue" />
                </span>
                30 éves vagyok
              </p>
            </div>
            <div className="mt-5 flex items-center gap-5">
              <a href="#exp">
                <Button title={"Tapasztalatok"}></Button>
              </a>
              <a href="#stack">
                <Button title={"Technológiák"}></Button>
              </a>
              <a href="#projects">
                <Button title={"Projektek"}></Button>
              </a>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 w-4/5 mx-auto mt-[5rem] gap-10">
          <div>
            <p className="text-mainwhite border-b-4 w-[2rem] font-poppins font-bold text-lg  border-darkblue">
              Tanulmányok
            </p>
            <div className="border-l-2 border-maingray/50 mt-10">
              <div className="flex align-middle justify-start items center gap-3 ">
                <p className="text-mainwhite  font-sintony font-normal text-sm border bg-mainbg border-darkblue p-2  -ml-4 rounded-xl">
                  2023-2027
                </p>
                <p className="font-sintony font-normal text-mainwhite/50 pt-1.5">Dunaújvárosi Egyetem</p>
              </div>
              <div className="pl-7 mt-3 pb-6 border-b-2 border-maingray/50">
                <h1 className="font-poppins font-bold text-mainwhite mb-2 text-xl">Gazdaságinformatika</h1>
                <p className="font-sintony font-normal text-mainwhite text-sm">
                  jelenleg a dunaújvárosi egyetemen vagyok levelezős hallgató. A 4. szemeszterem töltöm éppen, a
                  diplomámat várhatóan 2027 ben szerzem meg.
                </p>
              </div>
              <div className="border-l border-maingray/50 mt-10">
                <div className="flex align-middle justify-start items center gap-3 ">
                  <p className="text-mainwhite  font-sintony font-normal text-sm border bg-mainbg border-darkblue p-2  -ml-4 rounded-xl">
                    2008-2012
                  </p>
                  <p className="font-sintony font-normal text-mainwhite/50 pt-1.5">
                    Eötvös József Szakképző Iskola És Kollégium
                  </p>
                </div>
                <div className="pl-7 mt-3 pb-5">
                  <h1 className="font-poppins font-bold text-mainwhite mb-2 text-xl">Érettségi</h1>
                  <p className="font-sintony font-normal text-mainwhite text-sm">
                    informatika szakmacsoportban végeztem a középiskolában és az érettségin a választott tantárgyam is
                    ez volt.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p id="exp" className="text-mainwhite border-b-4 w-[2rem] font-poppins font-bold text-lg  border-darkblue">
              Tapasztalat
            </p>
            <div className="border-l border-maingray/50 mt-10">
              <div className="flex align-middle justify-start items center gap-3 ">
                <p className="text-mainwhite  font-sintony font-normal text-sm border bg-mainbg border-darkblue p-2  -ml-4 rounded-xl">
                  2016-2020
                </p>
                <p className="font-sintony font-normal text-mainwhite/50 pt-1.5">tapasztalat</p>
              </div>
              <div className="pl-7 mt-3 pb-6 border-b-2 border-maingray/50">
                <h1 className="font-poppins font-bold text-mainwhite mb-2 text-xl">
                  Ezeknél a cégeknél dolgoztam fémipari poziciókban:
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
                  <p className="font-sintony font-normal text-mainwhite/50 pt-1.5">tapasztalat</p>
                </div>
                <div className="pl-7 mt-3 pb-5">
                  <h1 className="font-poppins font-bold text-mainwhite mb-2 text-xl">IK METAL Kft. , Szabadúszó</h1>
                  <p className="font-sintony font-normal text-mainwhite text-sm">
                    Jelenleg az IK METÁL Kft.-nél dolgozom, azonban szeretném IT területen folytatni a karrieremet,
                    különösen olyan szerepkörben, ahol lehetőségem van webfejlesztésben részt venni. Korábbi
                    tapasztalataim során weboldalakat készítettem CMS rendszerekkel és programnyelvekkel egyaránt amiket
                    lentebb részletezek. Ezen kívül grafikai anyagokat terveztem és eszközkarbantartással is
                    foglalkoztam. A fémiparban eltöltött évek során olyan készségeket sajátítottam el, mint a precizitás
                    és a problémamegoldás, amelyek alapvető fontosságúak a webfejlesztés területén is. Összességében
                    hiszem, hogy ezeket a tapasztalatokat felhasználva hasznos tagja lehetek egy csapatnak, és
                    hozzájárulhatok a vállalat sikeres digitális projektjeihez.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[5rem] w-4/5 mx-auto">
            <div id="stack">
              <p className="text-mainwhite font-poppins font-bold text-center text-lg lg:text-left mb-2">
                Programozási ismeretek
              </p>

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
                <p className="text-mainwhite font-poppins font-bold text-lg text-left mb-2  mt-[3rem]">Eszközök</p>
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
                    <p className="text-mainwhite col-span-1 font-poppins font-bold text-center text-lg lg:text-left mt-[3rem] mb-2">
                      Személyes készségek
                    </p>
                    <ul className="">
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Jó csapatjátékos
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Rugalmasság
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>
                          Fejlődésközpontúság
                        </p>
                      </li>

                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span> Logikus
                          gondolkodás
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Ügyfélorientált
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Proaktív
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Jó kommunikációs
                          készség
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto">
                    <div className="">
                      <p className="text-mainwhite col-span-1 font-poppins font-bold text-center text-lg lg:text-left mt-[3rem] mb-2">
                        Érdeklődési Körök
                      </p>
                    </div>

                    <ul className="">
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Önfejlesztés
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Üzlet
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>IT Technológiák
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Podcastek
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Sorozatok / Filmek
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="mx-auto">
                    <div className="">
                      <p className="text-mainwhite col-span-1 font-poppins font-bold text-center text-lg lg:text-left mt-[3rem] mb-2">
                        Egyéb
                      </p>
                    </div>

                    <ul className="">
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>B kategóriás
                          jogosítvány
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Angol B2
                        </p>
                      </li>
                      <li>
                        <p className="font-poppins font-semibold text-lg text-mainwhite">
                          <span className="font-poppins font-semibold text-lg text-darkblue">- </span>Ismerem az agilis
                          módszertan elméletét
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
