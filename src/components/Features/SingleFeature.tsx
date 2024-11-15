// @ts-nocheck

import { Feature } from "@/types/feature";
import { useTranslations } from "next-intl";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { id, icon } = feature;
  const stringId = id.toString();
  const tString = `Features.steps.${stringId}` as const;
  const t = useTranslations(tString as any);

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="flex items-center">
          <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {icon}
          </div>
          <div className="mb-10 flex h-[50px] w-[100px] font-bold text-xl items-center justify-center rounded-md text-primary">
            {t(`stepLabel` as any)}
          </div>
        </div>

        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl">
          {t(`title`)}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {t(`paragraph`)}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
