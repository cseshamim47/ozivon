import { sendContactEmailAction } from "@/utils/sendContactEmailAction";
import SectionTitle from "../Common/SectionTitle";
import { useTranslations } from "next-intl";
import { useRef, useTransition } from "react";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import Link from "next/link";
import toast from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("Contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      console.log(formData);
      const { errorMessage } = await sendContactEmailAction(formData);
      if (!errorMessage) {
        toast.success("Message sent!");
        formRef.current?.reset();
      } else {
        console.log(errorMessage);
        toast.error(errorMessage);
      }
    });
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title={t("title")} paragraph={t("paragraph")} center />
        <div className="flex justify-center pb-16">
          <div className="flex gap-6 text-4xl justify-center items-center">
                <Link href={`https://www.linkedin.com`}>
                  <FaLinkedin className="hover:text-primary"/>
                </Link>
                <Link href={`https://www.instagram.com/`}>
                  <RiInstagramFill className="hover:text-primary"/>
                </Link>
                <Link href={`https://www.youtube.com`}>
                  <IoLogoYoutube className="hover:text-primary"/>
                </Link>
                <Link href={`https://www.tiktok.com`}>
                  <AiFillTikTok className="hover:text-primary"/>
                </Link>
                <Link href={`https://www.facebook.com`}>
                  <FaFacebookSquare className="hover:text-primary"/>
                </Link>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <form ref={formRef} onSubmit={handleSubmit} method="post">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/3">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark"
                    >
                      {t("form.name.label")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder={t("form.name.placeholder")}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      disabled={isPending}
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/3">
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark"
                    >
                      {t("form.email.label")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder={t("form.email.placeholder")}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      disabled={isPending}
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/3">
                  <div className="mb-8">
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm font-medium text-dark"
                    >
                      {t("form.phone.label")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t("form.phone.placeholder")}
                      className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      disabled={isPending}
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-dark"
                    >
                      {t("form.message.label")}
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder={t("form.message.placeholder")}
                      className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary"
                      disabled={isPending}
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button
                    type="submit"
                    disabled={isPending}
                    className="shadow-submit !rounded-full bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                  >
                    {t("form.submitButton")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
