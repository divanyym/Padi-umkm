import { Text, Img, Heading } from "./..";
import React, { Suspense } from "react";

const landingImageList = [
    { paymentImageOne: "images/img_vector.png" },
    { paymentImageOne: "images/img_vector_18x80.png" },
    { paymentImageOne: "images/img_vector_40x74.png" },
    { paymentImageOne: "images/img_bank_logo.svg" },
    { paymentImageOne: "images/img_bank_logo_black_900.svg" },
    { paymentImageOne: "images/img_bank_logo_red_600.svg" },
    { paymentImageOne: "images/img_vector_32x54.png" },
    { paymentImageOne: "images/img_vector_24x72.png" },
];

export default function Footer({ ...props }) {
    return (
        <footer {...props} className={`${props.className} flex justify-center items-end py-[22px] sm:py-5 bg-gray-50`}>
            <div className="container-xs mt-9 flex justify-center md:px-5">
                <div className="flex w-full flex-col items-center">
                    <div className="mx-[90px] flex items-start justify-between gap-5 self-stretch md:mx-0 md:flex-col">
                        <div className="flex w-[50%] items-start justify-between gap-[22px] md:w-full md:flex-col">
                            <div className="flex w-[40%] flex-col items-start gap-[22px] md:w-full">
                                <Heading as="h5" className="!font-opensans tracking-[0.25px] !text-blue_gray-900">
                                    Tentang PaDi UMKM
                                </Heading>
                                <ul className="flex flex-col items-center gap-3">
                                    <li>
                                        <a href="#">
                                            <Text size="textmd" as="p" className="!font-opensans tracking-[0.75px] !text-blue_gray-400_02">
                                                Syarat & Ketentuan
                                            </Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text size="textmd" as="p" className="!font-opensans tracking-[0.75px] !text-blue_gray-400_02">
                                                Kebijakan Privasi
                                            </Text>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-[38%] flex-col items-start gap-[22px] md:w-full">
                                <Heading as="h5" className="!font-opensans tracking-[0.25px] !text-blue_gray-900">
                                    Informasi
                                </Heading>
                                <ul className="flex flex-col items-center gap-3">
                                    <li>
                                        <a href="#">
                                            <Text size="textmd" as="p" className="!font-opensans tracking-[0.75px] !text-blue_gray-400_02">
                                                Panduan Pembeli
                                            </Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text size="textmd" as="p" className="!font-opensans tracking-[0.75px] !text-blue_gray-400_02">
                                                Kurir Pengiriman
                                            </Text>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Text size="textmd" as="p" className="!font-opensans tracking-[0.75px] !text-blue_gray-400_02">
                                                FAQ (Tanya Jawab)
                                            </Text>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex w-[40%] flex-col items-start gap-[22px] md:w-full">
                            <Heading as="h5" className="!font-opensans tracking-[0.25px] !text-blue_gray-900">
                                Butuh Bantuan?
                            </Heading>
                            <div className="flex flex-col gap-3 self-stretch">
                                <Text size="textmd" as="p" className="!font-opensans tracking-[0.75px] !text-blue_gray-400_02">
                                    Telkom Landmark Tower
                                </Text>
                                <Text size="textmd" as="p" className="!font-opensans tracking-[0.75px] !text-blue_gray-400_02">
                                    Jl. Jendral Gatot Subroto Kav. 52 RT.06/RW.01, Kuningan Barat, Mampang Prapatan, Jakarta Selatan, DKI Jakarta 12710, Indonesia
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[58px] flex flex-col items-start gap-6 self-stretch border border-solid border-gray-200 py-12 pl-[90px] pr-14 md:p-5">
                        <Heading as="h5" className="!font-poppins tracking-[0.05px] !text-blue_gray-900">
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
                    </div>
                    <Text size="textmd" as="p" className="mt-7 !font-opensans !text-[16px] tracking-[0.25px] !text-gray-700">
                        ©2022-2025 Pasar Digital UMKM Indonesia
                    </Text>
                </div>
            </div>
        </footer>
    );
}
