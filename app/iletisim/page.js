"use client";
import cn from "@/utils/helpers/cn";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = (props) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const onSubmit = async (data) => {};
  return (
    <div className="relative md:px-8 mx-auto xl:px-5 py-24">
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="absolute inset-0 bg-[url('/iletisim.jpeg')] opacity-60 bg-cover bg-no-repeat"></div>
      <div className="container py-10 mx-auto px-8 h-full w-full text-white opacity-95">
        <div className="container py-10 mx-auto px-8 h-full w-full ">
          <h1 className="mt-2 mb-3  text-white font-semibold tracking-tight text-center lg:leading-snug text-brand-primary text-4xl ">
            İletişim
          </h1>
          <div className="text-center">
            <p className="text-lg text-white">
              Sizi dinlemekten mutluluk duyarız
            </p>
          </div>

          <div className="grid my-10 md:grid-cols-2">
            <div className="my-10">
              <h2 className="text-2xl text-white font-bold">Bize Ulaş</h2>
              <p className="max-w-sm mt-5 text-white font-bold">
                Söyleyecek bir şeyin mi var? Yardım etmek için buradayız. Formu
                doldurun veya e-posta gönderin veya telefonu arayın.
              </p>

              <div className="mt-5">
                <div className="flex items-center mt-2 space-x-2 ">
                  <MapPinIcon className="w-4 h-4 text-white font-bold" />
                  <span className="text-white font-bold">
                    İkitelli OSB Mah, Pik Dökümcüler Sanayi Sitesi No:27, 34490
                    İkitelli Osb/Başakşehir/İstanbul
                  </span>
                </div>

                <div className="flex items-center mt-2 space-x-2  ">
                  <MailIcon className="w-4 h-4 text-white font-bold" />
                  <a
                    className="text-white font-bold"
                    href={`mailto:loivitrin@outlook.com`}
                  >
                    loivitrin@outlook.com
                  </a>
                </div>
                <div className="flex items-center mt-2 space-x-2 ">
                  <PhoneIcon className="w-4 h-4 text-white font-bold" />
                  <a className="text-white" href={`tel:+905301013039`}>
                    0530 101 30 39
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="my-10">
                <input
                  type="checkbox"
                  id=""
                  className="hidden"
                  style={{ display: "none" }}
                  {...register("botcheck")}
                ></input>

                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    autoComplete="false"
                    className={`w-full px-4 py-3 border-2 text-black placeholder:text-gray-800 focus:ring-4`}
                    {...register("name", {
                      required: "Full name is required",
                      maxLength: 80,
                    })}
                  />
                  {errors.name && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.name.message}</small>
                    </div>
                  )}
                </div>

                <div className="mb-5">
                  <label htmlFor="email_address" className="sr-only">
                    Mail adresiniz
                  </label>
                  <input
                    id="email_address"
                    type="email"
                    placeholder="Mail adresiniz"
                    name="email"
                    autoComplete="false"
                    className={`w-full px-4 py-3 border-2 text-black placeholder:text-gray-800 focus:ring-4`}
                    {...register("email", {
                      required: "Enter your email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="mt-1 text-red-600">
                      <small>{errors.email.message}</small>
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Mesajınız"
                    className={`w-full px-4 py-3 border-2 text-black placeholder:text-gray-800  rounded-md outline-none  h-36 focus:ring-4`}
                    {...register("message", {
                      required: "Enter your Message",
                    })}
                  />
                  {errors.message && (
                    <div className="mt-1 text-red-600">
                      {" "}
                      <small>{errors.message.message}</small>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-semibold text-white transition-colors bg-gray-900 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 "
                >
                  {isSubmitting ? (
                    <svg
                      className="w-5 h-5 mx-auto text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>

              {isSubmitSuccessful && isSuccess && (
                <div className="mt-3 text-sm text-center text-green-500">
                  {"Mesaajınız başarıyla gönderildi."}
                </div>
              )}
              {isSubmitSuccessful && !isSuccess && (
                <div className="mt-3 text-sm text-center text-red-500">
                  {
                    "Bir şeyler ters gitti. Lütfen sonra tekrar deneyin, veya mailimize basarak bize ulaşın."
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
