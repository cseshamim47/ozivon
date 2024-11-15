import { useTranslations } from 'next-intl';

const SectionTitle = ({
  title,
  paragraph,
  width = "670px",
  center,
  mb = "70px",
  translationNamespace,
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  translationNamespace?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        {paragraph && (
          <p className="text-base !leading-relaxed text-body-color md:text-lg">
            {paragraph}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionTitle;
