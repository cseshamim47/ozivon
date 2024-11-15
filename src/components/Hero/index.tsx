import Link from "next/link";
import { useTranslations } from "next-intl";
import { getLocalizedStaticProps } from "@/utils/getLocalizedStaticProps";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white min-h-max pb-16 pt-[150px] md:pb-[120px] md:pt-[140px] xl:pb-[160px] xl:pt-[200px] 2xl:pb-[200px] 2xl:pt-[240px] bg-cover bg-[url('/images/miami-beach.jpg')] after:content-[''] after:bg-[#002E51] after:absolute after:w-full after:h-full after:top-0 after:bg-opacity-70 after:-z-20"
    >
      <div className="container ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp mx-auto max-w-[800px] text-center px-4 py-6" data-wow-delay=".2s">
              <h1 className="mb-5 text-3xl font-black leading-tight text-white sm:text-4xl sm:leading-tight md:text-6xl md:leading-tight">
                {t("title")}
              </h1>
              <p className="mb-12 text-base !leading-relaxed text-white sm:text-lg md:text-2xl">
                {t("description")}
              </p>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="#"
                  className="rounded-full bg-primary sm:px-8 px-4 py-4 text-sm md:text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

export const getStaticProps = getLocalizedStaticProps;


