import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "next-intl";

// Define the type for translation keys
type FeatureTranslationKey =
  | "quickTurnaround"
  | "riskFree"
  | "noHiddenFees"
  | "experienced";

const ChooseSectionTwo = () => {
  const t = useTranslations("ChooseSectionTwo");

  const features: { icon: string; translationKey: FeatureTranslationKey }[] = [
    { icon: "⏱️", translationKey: "quickTurnaround" },
    { icon: "🛡️", translationKey: "riskFree" },
    { icon: "💸", translationKey: "noHiddenFees" },
    { icon: "🌐", translationKey: "experienced" },
  ];

  return (
    <section id="whyChooseOzivon" className="relative py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="container mx-auto text-center mb-9">
          <SectionTitle title={t("title")} center />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-8 rounded-lg shadow-md bg-white transform transition-all hover:scale-105 hover:shadow-lg duration-300"
            >
              <div className="text-5xl mb-4 text-custom-blue">
                {feature.icon}
              </div>
              <h3 className="text-xl text-center font-semibold text-dark mb-2">
                {t(`features.${feature.translationKey}.title` as const)}
              </h3>
              <p className="text-body-color text-center">
                {t(`features.${feature.translationKey}.description` as const)}
              </p>
              <div className="absolute bottom-0 right-0 z-[-1]">
                {/* First SVG Decoration */}
                <svg
                  width="179"
                  height="158"
                  viewBox="0 0 179 158"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
                    fill="url(#paint0_linear_70:153)"
                  />
                  <path
                    opacity="0.3"
                    d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
                    fill="url(#paint1_linear_70:153)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_70:153"
                      x1="69.6694"
                      y1="29.9033"
                      x2="196.108"
                      y2="83.2919"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_70:153"
                      x1="165.348"
                      y1="-75.4466"
                      x2="-3.75136"
                      y2="103.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                      <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second SVG Decoration */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ChooseSectionTwo;
