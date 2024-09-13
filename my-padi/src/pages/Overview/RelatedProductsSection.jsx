import { Text, Img, Heading, ChipView } from "../../components";
import ProductDetail1 from "../../components/ProductDetail1";
import React, { Suspense } from "react";

const umkmProductList = [
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

export default function RelatedProductsSection() {
    const [chipOptions1, setChipOptions1] = React.useState(() => [
        { value: 1, label: "PDN" },
        { value: 2, label: "TKDN 50%" },
        { value: 3, label: "Non PKP" },
    ]);
    const [selectedChipOptions1, setSelectedChipOptions1] = React.useState([]);
    
    const [chipOptions, setChipOptions] = React.useState(() => [
        { value: 1, label: "PDN" },
        { value: 2, label: "TKDN 50%" },
        { value: 3, label: "Non PKP" },
    ]);
    const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

    return (
        <>
            <div className="mt-[66px] flex flex-col items-start gap-4">
                <Heading size="headinglg" as="h5" className="text-[24px] font-bold text-blue_gray-900 md:text-[22px]">
                    Lainnya di Toko Ini
                </Heading>
                <div className="flex w-full gap-4 overflow-x-scroll md:flex-col">
                    <div className="flex w-[1021px] gap-5 md:flex-col">
                        {umkmProductList.map((product, index) => (
                            <div key={index} className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                    <Img
                                        src="images/img_image_61.png"
                                        alt="Product Image"
                                        className="h-[150px] w-full object-cover md:h-auto"
                                    />
                                    <Text
                                        as="p"
                                        className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 text-[10px] font-medium text-gray-50_02"
                                    >
                                        {product.productLabel}
                                    </Text>
                                </div>
                                <div className="flex flex-col gap-1 p-2">
                                    <Text size="textmd" as="p" className="text-[16px] font-normal leading-6 text-blue_gray-800">
                                        {product.productName}
                                    </Text>
                                    <div className="flex">
                                        <Heading as="h6" className="self-end text-[14px] font-bold text-blue_gray-800">
                                            {product.productPrice}
                                        </Heading>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <Img src="images/img_star.svg" alt="Star Icon" className="h-[12px] w-[12px]" />
                                            <Text as="p" className="text-[12px] font-normal text-blue_gray-800">
                                                {product.ratingText}
                                            </Text>
                                        </div>
                                        <div className="ml-1 h-[4px] w-[4px] rounded-sm bg-gray-300" />
                                        <Text as="p" className="ml-1 text-[12px] font-normal text-cyan-700">
                                            {product.soldCount}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <ChipView
                    options={chipOptions}
                    setOptions={setChipOptions}
                    values={selectedChipOptions}
                    setValues={setSelectedChipOptions}
                    className="mb-[22px] flex flex-wrap gap-x-1 gap-y-2 px-2"
                >
                    {(option) => (
                        <React.Fragment key={option.value}>
                            <div
                                onClick={option.toggle}
                                className={`flex h-[18px] min-w-[28px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded ${
                                    option.isSelected ? "bg-blue-50" : "bg-green-50"
                                } px-0.5 text-center text-[10px] font-medium ${
                                    option.isSelected ? "text-cyan-800" : "text-green-800_01"
                                }`}
                            >
                                <span>{option.label}</span>
                            </div>
                        </React.Fragment>
                    )}
                </ChipView>
            </div>
            <div className="ml-4 flex w-[1012px] gap-5 md:ml-0 md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                    {umkmProductList.map((d, index) => (
                        <ProductDetail1 {...d} key={"umkmList" + index} />
                    ))}
                </Suspense>
            </div>
        </>
    );
}
