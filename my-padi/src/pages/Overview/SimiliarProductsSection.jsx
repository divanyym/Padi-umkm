import { Text, Img, Heading, ChipView } from "./../components";
import ProductDetail1 from "../../components/ProductDetail1";
import React, { Suspense } from "react";

const umkmServiceList = [
  {
    productLabel: "UMKM",
    productName: "Service Laptop Asus, Lenovo, MSI, Apple",
    productPrice: "Rp2.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
  },
  {
    productLabel: "UMKM",
    productName: "Laptop Asus ROG Dual Tablet i7",
    productPrice: "Rp7.500.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
  },
  {
    productLabel: "UMKM",
    productName: "Laptop Asus ROG Gaming Ryzen 7 GT499M",
    productPrice: "Rp8.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
  },
];

export default function SimilarProductsSection() {
  const [chipOptions3, setChipOptions3] = React.useState(() => [
    { value: 1, label: "PDN" },
    { value: 2, label: "TKDN 50%" },
    { value: 3, label: "Non PKP" },
  ]);
  const [selectedChipOptions3, setSelectedChipOptions3] = React.useState([]);
  const [chipOptions2, setChipOptions2] = React.useState(() => [
    { value: 1, label: "PDN" },
    { value: 2, label: "TKDN 50%" },
    { value: 3, label: "Non PKP" },
  ]);
  const [selectedChipOptions2, setSelectedChipOptions2] = React.useState([]);

  return (
    <>
      {/* similar products section */}
      <div className="mt-[34px] flex flex-col items-start gap-4">
        <Heading size="headinglg" as="h4" className="text-[24px] font-bold text-blue_gray-900 md:text-[22px]">
          Produk Serupa
        </Heading>
        <div className="flex w-full gap-4 overflow-x-scroll md:flex-col">
          <div className="flex w-[1021px] gap-5 md:flex-col">
            <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
              <div className="flex flex-col items-start">
                <Img src="images/img_image_61.png" alt="Product Image" className="h-[150px] w-full object-cover md:h-auto" />
                <Text as="p" className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 text-[10px] font-medium text-gray-50_02">
                  UMKM
                </Text>
              </div>
              <div className="flex flex-col gap-1 p-2">
                <Text size="textmd" as="p" className="text-[16px] font-normal leading-6 text-blue_gray-800">
                  Service Laptop Asus, Lenovo, MSI, Apple
                </Text>
                <div className="flex">
                  <Heading as="h6" className="self-end text-[14px] font-bold text-blue_gray-800">
                    Rp2.000.000
                  </Heading>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Img src="images/img_map_pin.svg" alt="Map Pin Icon" className="h-[12px] w-[12px]" />
                    <Text as="p" className="text-[12px] font-normal text-blue_gray-800">Kota Bandung</Text>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
              <div className="flex flex-col items-start">
                <Img src="images/img_image_61.png" alt="Product Image" className="h-[150px] w-full object-cover md:h-auto" />
                <Text as="p" className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 text-[10px] font-medium text-gray-50_02">
                  UMKM
                </Text>
              </div>
              <div className="flex flex-col gap-1 p-2">
                <Text size="textmd" as="p" className="text-[16px] font-normal leading-6 text-blue_gray-800">
                  Laptop Asus ROG Dual Tablet i7
                </Text>
                <div className="flex">
                  <Heading as="h6" className="self-end text-[14px] font-bold text-blue_gray-800">
                    Rp7.500.000
                  </Heading>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Img src="images/img_map_pin.svg" alt="Map Pin Icon" className="h-[12px] w-[12px]" />
                    <Text as="p" className="text-[12px] font-normal text-blue_gray-800">Kota Bandung</Text>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
              <div className="flex flex-col items-start">
                <Img src="images/img_image_61.png" alt="Product Image" className="h-[150px] w-full object-cover md:h-auto" />
                <Text as="p" className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 text-[10px] font-medium text-gray-50_02">
                  UMKM
                </Text>
              </div>
              <div className="flex flex-col gap-1 p-2">
                <Text size="textmd" as="p" className="text-[16px] font-normal leading-6 text-blue_gray-800">
                  Laptop Asus ROG Gaming Ryzen 7 GT499M
                </Text>
                <div className="flex">
                  <Heading as="h6" className="self-end text-[14px] font-bold text-blue_gray-800">
                    Rp8.000.000
                  </Heading>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <Img src="images/img_map_pin.svg" alt="Map Pin Icon" className="h-[12px] w-[12px]" />
                    <Text as="p" className="text-[12px] font-normal text-blue_gray-800">Kota Bandung</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChipView
          options={chipOptions3}
          setOptions={setChipOptions3}
          values={selectedChipOptions3}
          setValues={setSelectedChipOptions3}
          className="mb-[22px] flex flex-wrap gap-x-1 gap-y-2 px-2"
        >
          {(option) => (
            <React.Fragment key={option.index}>
              {option.isSelected ? (
                <div
                  onClick={option.toggle}
                  className="flex h-[18px] min-w-[28px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded bg-blue-50 px-0.5 text-center text-[10px] font-medium text-cyan-800"
                >
                  <span>{option.label}</span>
                </div>
              ) : (
                <div
                  onClick={option.toggle}
                  className="flex h-[18px] min-w-[28px] cursor-pointer flex-row items-center justify-center rounded bg-green-50 px-0.5 text-center text-[10px] font-medium text-green-800_01"
                >
                  <span>{option.label}</span>
                </div>
              )}
            </React.Fragment>
          )}
        </ChipView>
      </div>

      <div className="ml-4 flex w-[1012px] gap-5 md:ml-0 md:flex-col">
        <Suspense fallback={<div>Loading feed...</div>}>
          {umkmServiceList.map((d, index) => (
            <ProductDetail1 {...d} key={"umkmList" + index} />
          ))}
        </Suspense>
      </div>
    </>
  );
}
