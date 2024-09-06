import { Text, Img, Heading } from "./..";
import React from "react";

const landingImageList = [
    { paymentImageOne: "images/img_vector.png" },
    { paymentImageOne: "images/img_vector_18x80.png" },
    { paymentImageOne: "images/img_vector_40x74.png" },
    { paymentImageOne: "images/img_bank_logo.svg" },
    { paymentImageOne: "images/img_bank_logo_black_900.svg" },
    { paymentImageOne: "images/img_bank_logo_red_600.svg" },
    { paymentImageOne: "images/img_vector_32x45.png" },
    { paymentImageOne: "images/img_vector_24x72.png" },  
];

export default function Footer({...props}) {
    return (
      <footer {...props} className={`${props.className} flex justify-center items-end py-[22px] sm:py-5 bg-gray-50`}> 
        <div className="container mx-auto flex flex-col items-center">
          <div className="w-full flex items-start justify-between gap-5 self-end md:w-full md:flex-col-reverse"> 
            <div className="w-full flex flex-col items-start gap-[12px] md:w-full">
              <Heading className="flex-col items-center gap-3">
                <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                  Tentang PaDi UMKM
                </Text>
              </Heading>
              <ul className="flex flex-col items-start gap-[12px] md:w-full">
                <li>
                  <a href="#" className="self-start">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      Syarat & Ketentuan
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      Kebijakan Privasi
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-[20%] flex-col items-start gap-[12px] md:w-full">
              <Heading as="h2" className="font-opensans tracking-[0.5px] text-blue_gray-800">
                Informasi
              </Heading>
              <ul className="flex flex-col items-center gap-3">
                <li>
                  <a href="#">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      Panduan Pembeli
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      Kurir Pengiriman
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#" className="self-start">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      FAQ (Tanya Jawab)
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-[12px] self-center">
              <Heading as="h2" className="font-opensans tracking-[0.5px] text-blue_gray-800">
                Hubungi Kami
              </Heading>
              <ul className="flex flex-col items-center gap-3">
                <li>
                  <a href="mailto:example@example.com">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      Email
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      LinkedIn
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="@procurement" target="_blank" rel="noreferrer">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      @procurement
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="@indofair" target="_blank" rel="noreferrer">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      Telkom Tower
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="https://indonesia.telkom.com" target="_blank" rel="noopener">
                    <Text size="text-md" as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                      Telkom Landmark Tower
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col items-start gap-[12px] md:w-full">
            <Heading as="p" className="font-opensans tracking-[0.5px] text-blue_gray-800">
              Building Bank
            </Heading>
            <div className="flex flex-col gap-5 self-stretch">
              <Text as="p" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                Telkom Landmark Tower
              </Text>
              <Text as="p" className="font-opensans leading-[19px] tracking-[0.75px] text-blue_gray-400_02">
                Jl. Jendral Gatot Subroto Kav. 52 RT.06/RW.06, Kuningan Barat, Mampang Prapatan, Jakarta Selatan,
                DKI Jakarta 12710, Indonesia
              </Text>
            </div>
          </div>
          
          <div className="flex w-full items-center justify-center gap-6 md:w-full sm:flex-col">
            <div className="flex items-end justify-center">
              <Text className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                Copyright &copy; 
              </Text>
              <span>2024</span>
              <Text size="text-sm" className="font-opensans tracking-[0.75px] text-blue_gray-400_02">
                Telkom Indonesia
              </Text>
            </div>
          </div>
          
          <div className="flex gap-3.5">
            <img src="/images/img_facebook.svg" alt="Facebook Logo" className="w-[24px] h-[24px]" />
            <img src="/images/img_instagram.svg" alt="Instagram Logo" className="w-[24px] h-[24px]" />
            <img src="/images/img_twitter.svg" alt="Twitter Logo" className="w-[24px] h-[24px]" />
            <img src="/images/img_youtube.svg" alt="YouTube Logo" className="w-[24px] h-[24px]" />
          </div>
          
          <div className="mt-[58px] flex flex-col items-start gap-6 self-stretch border border-solid border-gray-200 py-12 pl-[90px] pr-14 md:p-5">
            <Heading as="h5" className="font-poppins tracking-[0.05px] text-blue_gray-900">
                Metode Pembayaran
            </Heading>
            
            <div className="mr-[-422px] flex w-[96%] gap-7 md:mr-0 md:w-full md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                {landingImageList.map((d, index) => (
                    <Img 
                    key={`paymentList${index}`}
                    src={d.paymentImageOne}
                    alt="Payment Image One"
                    className="my-2 h-[22px] w-[12%] object-contain md:my-0 md:w-full"
                    />
                ))}
                </Suspense>
            </div>
            
            <Text size="text-md" as="p" className="mt-7 font-opensans text-[16px] tracking-[0.25px] text-gray-700">
                ©2022-2025 Pasar Digital UMKM Indonesia
            </Text>
                    </div>
                    </div>
                </footer>
                );
            }
