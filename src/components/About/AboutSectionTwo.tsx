import { getLocalizedStaticProps } from '@/utils/getLocalizedStaticProps';
import { useTranslations } from 'next-intl';

const AboutSectionTwo = () => {
  const t = useTranslations('AboutSectionTwo');

  return (
    <section
      id="whoweare"
      className="relative bg-gradient-to-r from-blue-50 via-gray-100 to-gray-50 py-16 px-6 overflow-hidden"
    >
      {/* Background shapes with animation */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-30 -translate-x-20 -translate-y-20 z-0 animate-float1"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-40 translate-x-24 translate-y-24 z-0 animate-float2"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-20">
        <div>
          <img src="/images/how-we-are.png" alt={t('imageAlt')} />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-dark mb-10">{t('title')}</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto lg:mx-0">
            {t('mainParagraph')}
          </p>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
            {t('secondParagraph')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

export const getStaticProps = getLocalizedStaticProps;

