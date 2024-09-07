import { Text, Img, Heading } from "./..";
import React from "react";

export default function ProductDetail({
  productLabel = "UMKM",
  productName = "Service Laptop Asus, Lenovo, MSI, Apple",
  productPrice = "Rp2.000.000",
  locationText = "Kota Bandung",
  ratingText = "4.6",
  soldCount = "Terjual 100",
  additionalLabel = "Non PKP",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[20%] md:w-full border-gray-300_01 border-[0.5px] border-solid bg-white-a700 shadow-xs rounded-lg`}>
      <div className="flex flex-col items-start self-stretch">
        <Img src="images/img_image_61.png" alt="Umkm Image" className="h-[150px] w-full object-cover" />
        <Text as="p" className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02">
          {productLabel}
        </Text>
      </div>
      <div className="self-stretch">
        <div className="flex flex-col gap-1 p-2">
          <Text size="textmd" as="p" className="text-[16px] leading-6">
            {productName}
          </Text>
          <Heading as="p" className="self-end !text-[14px]">
            {productPrice}
          </Heading>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <Img src="images/img_map_pin.svg" alt="Location Icon" className="h-[12px] w-[12px]" />
            <Text as="p">{locationText}</Text>
          </div>
          <div className="flex items-center">
            <Img src="images/img_star.svg" alt="Star Icon" className="h-[12px] w-[12px]" />
            <Text as="p">{ratingText}</Text>
            <div className="ml-1 h-[4px] w-[4px] rounded-sm bg-gray-300" />
            <Text as="p" className="ml-1 !text-cyan-700">
              {soldCount}
            </Text>
          </div>
        </div>
        <div className="mb-[22px] flex bg-white-a700 px-2">
          <div className="mb-2 flex w-[28%] justify-center rounded bg-gray-100_01 p-0.5">
            <Text as="p" className="text-[10px] !font-medium !text-blue_gray-900_02">
              {additionalLabel}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
