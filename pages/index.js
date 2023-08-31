import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import deved from "../public/m.JPG";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/minister.png";
import web2 from "../public/msn.png";
import web3 from "../public/227.png";
import web4 from "../public/myadmin.png";
import web5 from "../public/karanta.png";
import web6 from "../public/nbf.png";
import Badge from '../pages/badge'



export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  function changeColor() {
    if (darkMode) {
      document.body.style.background = "#101827";
    } else {
      document.body.style.background = "#F2F4F6";
    }
  }
  useEffect(() => {
    changeColor();
  });
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portofolio Ramane</title>
        <meta name="title" content="Ramane's Portfolio" />
        <meta name="description" content="Bienvenue sur mon Portfolio ce site contien un bref resumé de mon parcour, mes experiences, mes projet, mon github et quelques un de mes reseau sociaux" />
        <meta name="keywords" content="developpeur web, front-end, react, javascript" />
        <meta name="image" content={deved} />

        <meta property="og:image" content={deved} />

        <link rel="icon" href="/fav.png" />
      </Head>
      <main className=" bg-white   dark: dark:bg-gray-900  md:px-20 lg:px-30  ">
        <section className="max-w-4xl min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">DevelopedByRamane</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="/CV Abdourahamane Saley Haougui.pdf" download="CV Abdourahamane Saley Haougui.pdf"                >
                 Telecharger le CV
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Abdourahamane Saley Haougui
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Développeur Web
                        </h3>          
                        <div className="text-center">
              <Badge />
            </div>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Salut, tu peux m'appeler
              <span className="text-teal-600"> Ramane</span> en abrégé ! Je suis un développeur web avec une expérience approfondie du développement Web. J'étais en autodidacte depuis 3 ans et j'ai rejoint un codecamp qui me fait créer des sites web qui aident les organisations à relever des défis commerciaux et à répondre à leurs besoins.

              , et le language principal de ma pile technologique est{" "}
              <span className="text-teal-600">JavaScript</span> . J'apprends tout au long de ma vie je m'inscris actuellement au programme {" "}
              <a
                className="hover:underline ml-1 text-blue-500"
                href="https://openclassrooms.com/fr/paths/594-integrateur-web"
                target="_blank"
              >
                openclassrooms
              </a>{" "}
              . Aime la musique, les jeux et le sport..
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                href="https://wa.me/22792357311"
                target="_blank"
              >
               <FaWhatsappSquare/>
              </a>
              <a
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                href="https://www.linkedin.com/in/abdourahamane-saley-haougui-6a8004263/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                href="https://github.com/ramanesdr"
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="max-w-4xl">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services que je propose</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Depuis le début de mon parcours en tant que développeur indépendant, j'ai travaillé à distance pour des
              <span className="text-teal-500"> agences </span>
              consultés pour des <span className="text-teal-500">startups </span>
              et j'ai collaboré avec des personnes talentueuses pour créer des produits numériques à usage professionnel et grand public.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            J'offre une large gamme de services, y compris 
              <span className="text-teal-500">le développement Web ,</span>{" "}
              <span className="text-teal-500">la programmation </span>,
              <span className="text-teal-500"> API Integration</span>.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Front-End development
              </h3>
              <p className="py-2">
              Créer des designs élégants adaptés à vos besoins en suivant la théorie du design de base.
              </p>
              <h4 className="py-4 text-teal-600">Outils que j'utilise</h4>
              <p className="text-gray-800 py-1">Html5</p>
              <p className="text-gray-800 py-1">Css3</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">UX/UI</p>
              <p className="text-gray-800 py-1">Version Control</p>

            </div>
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Framework</h3>
              <p className="py-2">
              Vous vouliez un cadre pour votre projet ? Je peux utiliser de nombreux frameworks CSS et de développement.
              </p>
              <h4 className="py-4 text-teal-600">Outils que j'utilise</h4>
              <p className="text-gray-800 py-1">React.js</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">materialize.css</p>
              <p className="text-gray-800 py-1">Sass/Scss</p>
              <p className="text-gray-800 py-1">Wordpress</p>


            </div>
          </div>
        </section>
        <section className="py-10 max-w-4xl">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Depuis que j'ai commencé mon voyage en 2020, j'ai appris de nombreuses plateformes comme
              <a
                className="hover:underline ml-1 text-blue-500"
                href="https://www.freecodecamp.org/learn"
                target="_blank"
              >
                freecodecamp
              </a>
              <a
                className="hover:underline ml-1 text-blue-500"
                href="https://www.simplilearn.com/"
                target="_blank"
              >
                ,simplilearn
              </a>{" "}
              <a
                className="hover:underline ml-1 text-blue-500"
                href="https://www.cisco.com/"
                target="_blank"
              >
                ,cisco
              </a>
              <a
                className="hover:underline ml-1 text-blue-500"
                href="https://scrimba.com/"
                target="_blank"
              >
                ,scrimba
              </a>
              ... etc. Et en 2021 j'ai rejoint un codecamp appelé{" "}
              <a
                className="hover:underline ml-1 text-blue-500"
                href="https://www.codeloccol.org/"
                target="_blank"
              >
                codeloccol
              </a>
              . comme vous le verrez dans mon CV, cela me fait faire de nombreux projets, certains d'entre eux peuvent être vérifiés dans mon{" "}
              <a
                className="hover:underline ml-1 text-blue-500"
                href="https://github.com/ramanesdr"
                target="_blank"
              >
                github
              </a>
              .Tous mes dépôts github proviennent de mon parcours de formation.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap justify-center ">
            <div className="growd basis-1/4 flex-4 ">
              <a
                href="https://ramanesdr.github.io/projet-Mi/"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web1}
                />
              </a>
            </div>
            <div className="growd basis-1/4 flex-4">
              <a
                href="https://ramanesdr.github.io/maison/"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web2}
                />
              </a>
            </div>
            <div className="growd basis-1/4 flex-4">
              <a
                href="https://ramanesdr.github.io/227voyage/"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web3}
                />
              </a>
            </div>
            <div className="growd basis-1/4 flex-4">
              <a
                href="https://ramanesdr.github.io/myadmin/"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web4}
                />
              </a>
            </div>
            <div className="growd basis-1/4 flex-4">
              <a
                href="https://ramanesdr.github.io/karanta/"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web5}
                />
              </a>
            </div>
            <div className="growd basis-1/4 flex-4">
              <a
                href="https://ramanesdr.github.io/niebephone/"
                target="_blank"
              >
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web6}
                />
              </a>
            </div>
          </div>
        </section>

        <footer className="bg-white dark:bg-gray-900">
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-800 dark:text-gray-300 sm:text-center">
              © 2023{" "}
              <a
                href="https://www.linkedin.com/in/abdourahamane-saley-haougui-6a8004263/"
                target="_blank"
                className="hover:underline"
              >
                Abdourahamane Saley
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
              <a
                href="https://www.facebook.com/abdourahamanesaley.haougui/"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="https://www.linkedin.com/in/abdourahamane-saley-haougui-6a8004263/"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Linkedin</span>
              </a>
              <a
                href="https://github.com/ramanesdr"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
            </div>
          </div>
        </footer>
      </main>

    </div>
  );
}
