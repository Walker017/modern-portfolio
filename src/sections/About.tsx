import SlideAnimation from "@/components/slideInAnimation";

export default function About() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="about">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            About
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 md:ml-10 md:mr-40 mt-8">
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              Notre Communauté creer en 2024 Pour apprendre une meilleure expérience aux jeunes développer pour creer leur site web ou encore leur chatbot messenger.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              Toute fois Nous contribuons aussi à la formation de hacking et piratage des réseaux socio, Mais aussi nous aidons les jeunes à progresser dans leur marche en programmation.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              Notre but est de creer un avec radieux des développer en informatique et en hacking 
              nos project font partie des notre avenir  tout en donnant une meilleure culture aux jeunes programmeurs'
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              Notre communauté est donc dédier aux jeunes pationner et ambitieux de la programmation 
              nous contribuons aux bien des jeunes développer en leur ouvrant encore les eux pour apprendre quelques eurreurs commises et de pouvoir les reparer.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
          Nos effort contibuent au bien de tous la communauté ytb & chatgpt.
            </p>
          </SlideAnimation>
        </div>
      </section>
    </>
  );
}
