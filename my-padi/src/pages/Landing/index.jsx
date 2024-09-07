import { Helmet } from "react-helmet";
import {
  Img,
  Text,
  ChipView,
  Heading,
  Input,
  CheckBox,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductDetail from "../../components/ProductDetail";
import PaDiUMKMSection from "../../components/PaDiUMKMSection";
import React, { Suspense } from "react";
import {TabPanel, TabList, Tab, Tabs} from "react-tabs";

const productCardsGrid = [
  {
    productLabel: "UMKM",
    productDescription: "Kertas HVS A4 75 gram Paper One - Kertas HVS",
    productPrice: "Rp2.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
  },
  {
    productLabel: "UMKM",
    productDescription: "Best Seller Pen Pulpen Zabra Sarisa 0.5 Warna",
    productPrice: "Rp7.500.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
  },
  {
    productLabel: "UMKM",
    productDescription: "KERTAS A4 70 gram SIDU - ATK",
    productPrice: "Rp8.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
  },
  {
    productLabel: "UMKM",
    productDescription: "Kertas HVS A4 75 gram Paper One - Kertas HVS",
    productPrice: "Rp2.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "PKP",
 },
 {
    productLabel: "UMKM",
    productDescription: "Kertas HVS A4 75 gram Paper One - Kertas HVS",
    productPrice: "Rp2.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
 },
 {
    productLabel: "UMKM",
    productDescription: "Kertas HVS A4 75 gram Paper One - Kertas HVS",
    productPrice: "Rp2.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
 },
 {
    productLabel: "UMKM",
    productDescription: "Lem UYU 8.2gr Lem Stick ATK",
    productPrice: "Rp7.500.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "PKP",
 },
 {
    productLabel: "UMKM",
    productDescription: "Meja Laptop Kaya Warna Abu",
    productPrice: "Rp8.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
 },
 {
    productLabel: "UMKM",
    productDescription: "Kertas HVS A4 75 gram Paper One - Kertas HVS",
    productPrice: "Rp2.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
 },
 {
    productLabel: "UMKM",
    productDescription: "Kertas HVS A4 75 gram Paper One - Kertas HVS",
    productPrice: "Rp2.000.000",
    locationText: "Kota Bandung",
    ratingText: "4.6",
    soldCount: "Terjual 100",
    additionalLabel: "Non PKP",
 },
];

export default function LandingPage() {
  const [chipOptions8, setChipOptions8] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [selectedChipOptions8, setSelectedChipOptions8] = React.useState([]);
  const [chipOptions7, setChipOptions7] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [selectedChipOptions7, setSelectedChipOptions7] = React.useState([]);
  const [chipOptions6, setChipOptions6] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [selectedChipOptions6, setSelectedChipOptions6] = React.useState([]);
  const [chipOptions5, setChipOptions5] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [selectedChipOptions5, setSelectedChipOptions5] = React.useState([]);
  const [chipOptions4, setChipOptions4] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [selectedChipOptions4, setSelectedChipOptions4] = React.useState([]);
  const [chipOptions3, setChipOptions3] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [selectedChipOptions3, setSelectedChipOptions3] = React.useState([]);
  const [chipOptions2, setChipOptions2] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [selectedChipOptions2, setSelectedChipOptions2] = React.useState([]);
  const [chipOptions1, setChipOptions1] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [selectedChipOptions1, setSelectedChipOptions1] = React.useState([]);
  const [chipOptions, setChipOptions] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <>
      <Helmet>
        <title>ATK Products - Quality Office Supplies for UMKM</title>
        <meta
           name="description"
           content="Discover a wide range of quality office supplies (ATK) for UMKM at competitive prices. From pens and pencils to paper and archival equipment, find everything you need for your business in one place."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <Header />
        <div className="mt-[22px] flex-col items-center gap-20 md:gap-[60px] sm:gap-10">
          <div className="container-xs px-[42px] md:px-5">
            <div className="flex flex-col gap-8">
              <Breadcrumb
                seperator={<Img src="images/img_breadcrumb.svg" alt="Arrow Right" className="h-[16px] w-[16px]" />}
                className="flex flex-wrap items-center gap-2 px-10 sm:px-5"
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <Text size="texts" as="p" className="!font-opensans !text-[14px] !text-blue_gray-400_01">
                      Beranda
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <Text size="texts" as="p" className="!font-opensans !text-[14px] !text-blue_gray-400_01">
                      Produk
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    <Text size="texts" as="p" className="!font-opensans !text-[14px]">
                      ATK
                    </Text>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
              <div className="flex items-start gap-[30px] md:felx-col"> 
                <div className="w-[18%] md:w-full">
                  <div className="flex flex-col gap-3 rounded-lg border border-solid border-gray-300_01 bg-white-a700">
                    <div className="flex border-b border-solid border-gray-300_01 bg-gray-50_01 px-3 py-2">
                      <Heading size="headingxs" as="h1">
                        Filter
                      </Heading>
                    </div>
                    <div className="mb-3 flex flex-col gap-3"> 
                      <div className="flex flex-col items-center gap-2 bf-white-a700 px-3">
                        <Heading as="h2" className="bg-white-a700 pr-[34px] !text-[14px] sm:pr-5">
                          Kategori
                        </Heading>
                        <div className="flex flex-col gap-2 self-stretch">
                          <div className="flex items-center justify-between gap-5">
                            <Text size="texts" as="p" className="!text-[14px]">
                              Alat Tulis  
                            </Text> 
                            <img src="images/img_chevron_up.svg" alt="chebron up" className="h-[16px] w-[16px]" /> 
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="px-2"> 
                              <div className="flex"> 
                                <Text size="texts" as="p" className="!text-[14px]">
                                  Pulpen
                                </Text>
                              </div>
                            </div>
                            <div className="px-2">
                              <div className="flex"> 
                                <Text size="texts" as="p" className="!text-[14px]">
                                  Pensil
                                </Text>
                              </div>
                            </div>                 
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-5 self-stretch">
                          <Text size="texts" as="p" className="!text-[14px]">
                            Kertas
                          </Text>
                          <img src="images/img_chevron_up.svg" alt="chebron up" className="h-[16px] w-[16px]" />
                        </div>
                        <div className="mx-2 flex self-stretch md:mx-0">
                          <Text size="text-s" as="p" className="!text-[14px]">
                            Kertas A4
                          </Text>
                        </div>
                        <div className="flex items-center justify-between gap-5 self-stretch">
                          <Text size="text-s" as="p" className="!text-[14px]">
                            Perlengkapan Arsip
                          </Text>
                          <Img src="images/img_chevron_up.svg" alt="Chevron Up" className="h-[16px] w-[16px]" />
                        </div>
                        <div className="mx-2 flex self-stretch md:mx-0">
                          <Text size="text-s" as="p" className="!text-[14px]">
                            Folder
                          </Text>
                        </div>
                      </div>  
                      <div className="flex flex-col gap-3">
                        <div className="h-px bg-gray-300_01" />
                        <div className="flex flex-col items-start justify-center gap-3 bg-white-a700">
                          <div className="flex flex-col gap-2 self-stretch px-3">
                            <div className="flex items-center justify-between gap-5 bg-white-a700">
                              <Heading as="h3" className="!text-[14px]">
                                Lokasi
                              </Heading>
                              <Img src="images/img_arrow_up.svg" alt="Arrow Up" className="h-[24px] w-[24px]" />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                              <CheckBox
                                name="Jakarta Checkbox"
                                label="DKI Jakarta"
                                id="jakartaCheckbox"
                                className="gap-2 text-[14px] text-blue_gray-800"
                              />
                              <CheckBox
                                name="East Java Checkbox"
                                label="Jawa Timur"
                                id="EastJavaCheckbox"
                                className="gap-2 text-[14px] text-blue_gray-800"
                              />
                              <CheckBox
                                name="West Java Checkbox"
                                label="Jawa Timur"
                                id="WestJavaCheckbox"
                                className="gap-2 text-[14px] text-blue_gray-800"
                              />
                              <CheckBox
                                name="Central Java Checkbox"
                                label="Jawa Tengah"
                                id="CentralJavaCheckbox"
                                className="gap-2 text-[14px] text-blue_gray-800"
                              />
                              <CheckBox
                                name="North Sumatra Checkbox"
                                label="Sumatera Utara"
                                id="NorthSumatraCheckbox"
                                className="gap-2 text-[14px] text-blue_gray-800"
                              />
                            </div>
                          </div>    
                          <Text as="p" className="ml-3 !text-cyan-700 md:ml-0">
                            Lihat Semua
                          </Text>
                        </div>
                        <div className="h-px bg-gray-300_01" />
                      </div>
                      <div className="flex flex-col items-start gap-2 bg-white-a700 px-3">
                        <div className="flex items-center justify-between gap-5 self-stretch bg-white-a700">
                          <Heading as="h4" className="self-end !text-[14px]">
                            Rentang Harga
                          </Heading>
                          <Img src="images/img_arrow_up.svg" alt="Arrow Up" className="h-[24px] w-[24px]" />
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2 self-stretch bg-white-a700">
                          <Text size="texts" as="p" className="!text-[14px] !font-medium">
                            Harga Terendah
                          </Text>
                          <Input shape="round" name="Lowest Price Input" placeholder={'Rp'} className="self-stretch" />
                        </div>
                        <div className="flex flex-col gap-2 self-stretch bg-white-a700">
                          <div>
                            <div className="flex">
                              <Text size="texts" as="p" className="self-end !text-[14px] !font-medium">
                                Harga Tertinggi
                              </Text>
                            </div>
                          </div>
                          <Input shape="round" name="Highest Price Input" placeholder={'Rp'} className="self-stretch" />
                        </div>
                        <CheckBox
                          name="Discount Price Checkbox"
                          label="Harga Diskon"
                          id="DiscountPriceCheckbox"
                          className="gap-2 text-[14px] text-blue_gray-800"
                        />
                        <CheckBox
                          name="Installment Service Checkbox"
                          label="Bisa Termin Jasa"
                          id="InstallmentServiceCheckbox"
                          className="gap-2 text-[14px] text-blue_gray-800"
                        />
                      </div>
                      <div className="h-px bg-gray-300_01" />
                      <div className="flex flex-col gap-2 bg-white-a700 px-3">
                        <div className="flex items-center justify-beetween gap-5 bg-white-a700">
                          <Heading as="h5" className="self-end !text-[14px]">
                            Tipe Toko
                          </Heading>
                          <img src="images/img_arrow_up.svg" alt="Arrow Up" className="h-[24px] w-[24px]" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <CheckBox
                            name="UMKM Checkbox"
                            label="UMKM"
                            id="UMKMCheckbox"
                            className="gap-2 text-[14px] text-blue_gray-800"
                          />
                          <CheckBox
                            name="Large Vendor Checkbox"
                            label="Vendor Besar"
                            id="LargeVendorCheckbox"
                            className="gap-2 text-[14px] text-blue_gray-800"
                          />
                          <CheckBox
                            name="PKP Checkbox"
                            label="PKP"
                            id="PKPCheckbox"
                            className="gap-2 text-[14px] text-blue_gray-800"
                          />
                          <CheckBox
                            name="Non-PKP Checkbox"
                            label="Non PKP"
                            id="NonPKPCheckbox"
                            className="gap-2 text-[14px] text-blue_gray-800"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="h-px bg-gray-300_01" />
                        <div className="flex flex-col gap-2 bg-white-a700 px-3">
                          <div className="flex items-center justify-between gap-5 bg-white-a700">
                            <Heading as="h6" className="self-end !text-[14px]">
                              Rating
                            </Heading>
                            <Img src="images/img_arrow_up.svg" alt="Arrow Up" className="h-[24px] w-[24px]" />
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex w-[8%] flex-col items-center">
                              <div className="h-[16px] w-[16px] rounded border border-solid border-gray-600 bg-white-a700" />
                            </div>
                            <Img src="images/img_signal.svg" alt="Rating Signal" className="h-[16px] w-[16px]" />
                            <Text size="texts" as="p" className="!text-[14px]">
                              4 Ke Atas
                            </Text>
                          </div>
                        </div>
                        <div className="h-px bg-gray-300_01" />
                      </div>  
                      <div className="flex flex-col gap-2 bg-white-a700 px-3">
                        <div className="flex items-center justify-between gap-5 bg-white-a700">
                          <Heading as="p" className="!text-[14px]">
                            Sertifikat
                          </Heading>
                          <Img src="images/img_arrow_up.svg" alt="Arrow Up" className="h-[24px] w-[24px]" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <CheckBox
                            name="Domestic Product Checkbox"
                            label="Produk Dalam Negeri"
                            id="DomesticProductCheckbox"
                            className="gap-2 text-[14px] text-blue_gray-800"
                          />
                          <CheckBox
                            name="TKDN Checkbox"
                            label="TKDN"
                            id="TKDNCheckbox"
                            className="gap-2 text-[14px] text-blue_gray-800"
                          />
                        </div>
                        <div className="flex flex-col gap-2 bg-white-a700">
                          <div>
                            <div className="flex">
                              <Text size="texts" as="p" className="!text-[14px] !font-medium">
                                Nilai TKDN Minimal (%)
                              </Text>
                            </div>
                          </div>
                          <Input
                            shape="round"
                            name="TKDN Value Input"
                            placeholder={'Contoh: 20'}
                            className="!text-blue_gray-300_01"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 self-center md:self-stretch">
                  <Tabs
                    className="flex flex-col items-center"
                    selectedTabClassName="!text-cyan-700_01"
                    selectedTabPanelClassName="mt-[22px] !relative tab-panel--selected"
                  >
                    <div className="flex justify-center self-stretch md:flex-col">
                      <TabList className="flex flex-wrap items-start gap-8 px-4">
                        <Tab className="mb-3 font-opensans text-[16px] font-normal text-blue_gray-400_01">Produk</Tab>
                        <Tab className="font-opensans text-[16px] font-normal text-blue_gray-400_01">Penjual</Tab>
                      </TabList>
                      <Img 
                        src="images/img_tab_menu_item.svg" 
                        alt="Tab Menu Item"
                        className="h-[36px] w-[10%] object-contain md:w-full"    
                      />
                      <Img 
                        src="images/img_tab_menu_item.svg" 
                        alt="Tab Menu Item"
                        className="h-[36px] w-[10%] object-contain md:w-full"    
                      />
                      <div className="flex w-[14%] flex-col gap-1.5 md:w-full">
                        <div className="mx-4 mt-1.5 flex justify-center gap-1 md:mx-0">
                          <Img src="images/img_settings.svg" alt="Settings Icon" className="h-[20px] w-[20px]" />
                          <Text size="texts" as="p" className="!font-opensans !text-[14px]">
                            Pilih Lokasi
                          </Text>
                        </div>
                        <div className="h-px bg-gray-300_01" />
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-center self-stretch sm:flex-col">
                      <Text size="textmd" as="p" className="tracking-[-0.04px]">
                        <span>Menampilkan 1 - 15 produk dari total 649 untuk&nbsp;</span>
                        <span className="font-bold">&quot;ATK&quot;</span>
                      </Text>
                      <div className="flex flex-1 items-center justify-end sm:self-stretch">
                        <Img src="images/img_filter.svg" alt="Filter Icon" className="h-[16px] w-[16px]" />
                        <Text size="texts" as="p" className="!font-opensans !text-[14px]">
                          Urutkan
                        </Text>
                      </div>
                    </div>
                    {[...Array(2)].map((_, index) => (
                      <TabPanel key={`tab-panel${index}`} className="absolute mt-[22px] items-center self-stretch">
                        <div className="w-full self-stretch">
                          <div className="flex flex-col gap-5">
                            <div className="flex gap-5 md:flex-col">
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                  <Img
                                    src="images/img_image_61.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div> 
                                <div className="mb-[22px]">
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        Paket Alat Tulis Kantor ATK - Bandung
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp2.000.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center">
                                        <Img 
                                          src="images/img_map_pin.svg"
                                          alt="Location Pin"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">Kota Bandung</Text>
                                      </div>
                                      <div className="flex itemns-center">
                                        <div className="flex itemns-center">
                                          <Img 
                                            src="images/img_star.svg"
                                            alt="Star Image"
                                            className="h-[12px] w-[12px]"
                                          />
                                          <Text as="p">4.6</Text>
                                        </div> 
                                        <div className="ml-1 h-[4px] w-4px rounded-sm bg-gray-300" />
                                        <Text as="p"className="ml-1 !text-cyan-700">
                                          Terjual 100
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex bg-white-a700 px-2">
                                    <div className="mb-2 flex w-[28%] justify-center rounded bg-gray-100_01 p-0.5 md:w-full">
                                      <div className="flex w-full justify-center">
                                        <Text as="p" className="!text-[10px] !font-medium !text-blue_gray-900_02">
                                          NON PKP
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                  <Img
                                    src="images/img_image_54.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div>
                                <div>
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        Kertas HVS A4 Letter Grosir
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp7.500.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_map_pin.svg"
                                          alt="Location Pin"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">Kota Bandung</Text>
                                      </div>
                                      <div className="flex-items-center">
                                        <div className="flex-items-center">
                                          <Img
                                            src="images/img_star.svg"
                                            alt="Star Image"
                                            className="h-[12px] w-[12px]"
                                          />
                                          <Text as="p">4.6</Text>
                                        </div>
                                        <div className="ml-1 h-[4px] w-4px rounded-sm bg-gray-300" />
                                        <Text as="p"className="ml-1 !text-cyan-700">
                                          Terjual 100
                                        </Text>
                                      </div>
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
                              </div>
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                  <Img
                                    src="images/img_image_64.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div>
                                <div>
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        Lem UYU 8.2gr Lem Stick ATK
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp8.000.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_map_pin.svg"
                                          alt="Location Pin"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">Kota Bandung</Text>
                                      </div>
                                      <div className="flex-items-center">
                                        <div className="flex-items-center">
                                          <Img
                                            src="images/img_star.svg"
                                            alt="Star Image"
                                            className="h-[12px] w-[12px]"
                                          />
                                          <Text as="p">4.6</Text>
                                        </div>
                                        <div className="ml-1 h-[4px] w-4px rounded-sm bg-gray-300" />
                                        <Text as="p"className="ml-1 !text-cyan-700">
                                          Terjual 100
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <ChipView
                                    options={chipOptions1}
                                    setOptions={setChipOptions1}
                                    values={selectedChipOptions1}
                                    setValues={setSelectedChipOptions1}
                                    className="mb-[22px] flex flex-wrap gap-x-1 gap-y-2 px-2"
                                  >
                                    {(option) => (
                                      <React.Fragment key={option.index}>
                                        {option.isSelected ? (
                                          <div
                                            onClick={option.toggle}
                                            className="flex h-[18px] min-w-[28px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded bg-gray-100 px-0.5 text-center text-[10px] font-medium text-blue_gray-900_02"
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
                              </div>
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start bg-gray-100">
                                  <Img
                                    src="images/img_image_54.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div>
                                <div>
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        Kertas A4 70 gram SIBU - ATK
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp7.000.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex flex-wrap items-center">
                                      <Text
                                        as="p"
                                        className="flex items-center justify-center rounded bg-deep_orange-50 p-0.5 !text-[10px] !font-medium !text-red-400"
                                      >
                                        25%
                                      </Text>
                                      <Text
                                        as="p"
                                        className="self-end !text-[10px] !text-blue_gray-300_01 line-through"
                                      >
                                        Rp 10.000.000
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_map_pin.svg"
                                          alt="Location Pin"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">Kota Bandung</Text>
                                      </div>
                                      <div className="flex items-center">
                                        <div className="flex items-center">
                                          <Img
                                            src="images/img_star.svg"
                                            alt="Star Image"
                                            className="h-[12px] w-[12px]"
                                           />
                                           <Text as="p">4.6</Text>
                                        </div>
                                        <div className="ml-1 h-[4px] w-[4px] rounded-sm bg-gray-300" />
                                        <Text as="p" className="ml-1 !text-cyan-700">
                                          Terjual 100
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex bg-white-a700 px-2">
                                    <div className="mb-2 flex w-[16%] justify-center rounded bg-blue-50 p-0.5 md:w-full">
                                      <div className="flex w-full justify-center">
                                        <Text as="p" className="!text-[10px] !font-medium !text-cyan-800">
                                          PKP
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                  <Img
                                    src="images/img_image_61.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover opacity-60 md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div>
                                <div>
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        Meja Laptop Kayu Warna Abu
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp7.500.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex flex-wrap items-center">
                                    <Text
                                        as="p"
                                        className="flex items-center justify-center rounded bg-deep_orange-50 p-0.5 !text-[10px] !font-medium !text-red-400"
                                      >
                                        25%
                                      </Text>
                                      <Text
                                        as="p"
                                        className="self-end !text-[10px] !text-blue_gray-300_01 line-through"
                                      >
                                        Rp 10.000.000
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_map_pin.svg"
                                          alt="Location Pin"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">Kota Bandung</Text>
                                      </div>
                                      <div className="flex items-center">
                                        <div className="flex items-center">
                                          <Img
                                            src="images/img_star.svg"
                                            alt="Star Image"
                                            className="h-[12px] w-[12px]"
                                          />
                                          <Text as="p">4.6</Text>
                                        </div>
                                        <div className="ml-1 h-[4px] w-[4px] rounded-sm bg-gray-300" />
                                        <Text as="p" className="ml-1 !text-cyan-700">
                                          Terjual 100
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <ChipView
                                    options={chipOptions2}
                                    setOptions={setChipOptions2}
                                    values={selectedChipOptions2}
                                    setValues={setSelectedChipOptions2}
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
                              </div>
                            </div>
                            <div className="flex gap-5 md:flex-col">
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                  <Img
                                    src="images/img_image_61.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div> 
                                <div>
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        Paket Alat Tulis Kantor - Paket ATK
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp2.000.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center">
                                        <Img 
                                          src="images/img_map_pin.svg"
                                          alt="Location Pin"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">Kota Bandung</Text>
                                      </div>
                                      <div className="flex itemns-center">
                                        <div className="flex itemns-center">
                                          <Img 
                                            src="images/img_star.svg"
                                            alt="Star Image"
                                            className="h-[12px] w-[12px]"
                                          />
                                          <Text as="p">4.6</Text>
                                        </div> 
                                        <div className="ml-1 h-[4px] w-4px rounded-sm bg-gray-300" />
                                        <Text as="p"className="ml-1 !text-cyan-700">
                                          Terjual 100
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-[22px] flex bg-white-a700 px-2">
                                    <div className="mb-2 flex w-[28%] justify-center rounded bg-gray-100_01 p-0.5 md:w-full">
                                      <div className="flex w-full justify-center">
                                        <Text as="p" className="!text-[10px] !font-medium !text-blue_gray-900_02">
                                          NON PKP
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                  <Img
                                    src="images/img_image_61.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div>
                                <div>
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        Kertas HVS A4 70 gram SIBU - ATK
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp7.500.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_map_pin.svg"
                                          alt="Location Pin"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">Kota Bandung</Text>
                                      </div>
                                      <div className="flex-items-center">
                                        <div className="flex-items-center">
                                          <Img
                                            src="images/img_star.svg"
                                            alt="Star Image"
                                            className="h-[12px] w-[12px]"
                                          />
                                          <Text as="p">4.6</Text>
                                        </div>
                                        <div className="ml-1 h-[4px] w-4px rounded-sm bg-gray-300" />
                                        <Text as="p"className="ml-1 !text-cyan-700">
                                          Terjual 100
                                        </Text>
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
                              </div>
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                  <Img
                                    src="images/img_image_61.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div>
                                <div>
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        Kertas HVS A4 75 gram Paper One - Kertas HVS
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp8.000.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_map_pin.svg"
                                          alt="Location Pin"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">Kota Bandung</Text>
                                      </div>
                                      <div className="flex-items-center">
                                        <div className="flex-items-center">
                                          <Img
                                            src="images/img_star.svg"
                                            alt="Star Image"
                                            className="h-[12px] w-[12px]"
                                          />
                                          <Text as="p">4.6</Text>
                                        </div>
                                        <div className="ml-1 h-[4px] w-4px rounded-sm bg-gray-300" />
                                        <Text as="p"className="ml-1 !text-cyan-700">
                                          Terjual 100
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <ChipView
                                    options={chipOptions4}
                                    setOptions={setChipOptions4}
                                    values={selectedChipOptions4}
                                    setValues={setSelectedChipOptions4}
                                    className="mb-[22px] flex flex-wrap gap-x-1 gap-y-2 px-2"
                                  >
                                    {(option) => (
                                      <React.Fragment key={option.index}>
                                        {option.isSelected ? (
                                          <div
                                            onClick={option.toggle}
                                            className="flex h-[18px] min-w-[28px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded bg-gray-100 px-0.5 text-center text-[10px] font-medium text-blue_gray-900_02"
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
                              </div>
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                  <Img
                                    src="images/img_image_61.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div>
                                <div>
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        Best Seller Pen Pulpen Zabra Sarisa 0.5 Warna
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp7.500.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <div className="flex rounded bg-deep_orange_50">
                                        <Text as="p" className="!text-[10px] !font-medium !text-red-400">
                                          25%
                                        </Text>
                                      </div>
                                      <Text
                                        as="p"
                                        className="self-end !text-[10px] !text-blue_gray-300_01 line-through"
                                      >
                                        Rp 10.000.000
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_map_pin.svg"
                                          alt="Location Pin"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">Kota Bandung</Text>
                                      </div>
                                      <div className="flex items-center">
                                        <div className="flex items-center">
                                          <Img
                                            src="images/img_star.svg"
                                            alt="Star Image"
                                            className="h-[12px] w-[12px]"
                                          />
                                          <Text as="p">4.6</Text>
                                        </div>
                                        <div className="ml-1 h-[4px] w-[4px] rounded-sm bg-gray-300" />
                                        <Text as="p" className="ml-1 !text-cyan-700">
                                          Terjual 100
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex bg-white-a700 px-2">
                                    <div className="mb-2 flex w-[16%] justify-center rounded bg-blue-50 p-0.5 md:w-full">
                                      <div className="flex w-full justify-center">
                                        <Text as="p" className="!text-[10px] !font-medium !text-cyan-800">
                                          PKP
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                                <div className="flex flex-col items-start">
                                  <Img
                                    src="images/img_image_61.png"
                                    alt="Product Image"
                                    className="h-[150px] w-full object-cover opacity-60 md:h-auto"
                                  />
                                  <Text
                                    as="p"
                                    className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                  >
                                    UMKM
                                  </Text>
                                </div>
                                <div>
                                  <div className="flex flex-col gap-1 p-2">
                                    <div>
                                      <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                        (ATK) Ard DAIICHA Clear Sleeve 9001 A4
                                      </Text>
                                      <div className="flex">
                                        <Heading as="p" className="self-end !text-[14px]">
                                          Rp7.500.000
                                        </Heading>
                                      </div>
                                    </div>
                                    <div className="flex flex-wrap items-center">
                                    <Text
                                      as="p"
                                      className="flex items-center justify-center rounded bg-deep_orange-50 p-0.5 !text-[10px] !font-medium !text-red-400"
                                    >
                                      25%
                                    </Text>
                                    <Text
                                      as="p"
                                      className="self-end !text-[10px] !text-blue_gray-300_01 line-through"
                                    >
                                      Rp 10.000.000
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center">
                                      <Img
                                        src="images/img_map_pin.svg"
                                        alt="Location Pin"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text as="p">Kota Bandung</Text>
                                    </div>
                                    <div className="flex items-center">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_star.svg"
                                          alt="Star Image"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">4.6</Text>
                                      </div>
                                      <div className="ml-1 h-[4px] w-[4px] rounded-sm bg-gray-300" />
                                      <Text as="p" className="ml-1 !text-cyan-700">
                                        Terjual 100
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <ChipView
                                  options={chipOptions5}
                                  setOptions={setChipOptions5}
                                  values={selectedChipOptions5}
                                  setValues={setSelectedChipOptions5}
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
                            </div>
                          </div>
                          <div className="flex gap-5 md:flex-col">
                            <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                              <div className="flex flex-col items-start">
                                <Img
                                  src="images/img_image_61.png"
                                  alt="Product Image"
                                  className="h-[150px] w-full object-cover md:h-auto"
                                />
                                <Text
                                  as="p"
                                  className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                >
                                  UMKM
                                </Text>
                              </div> 
                              <div>
                                <div className="flex flex-col gap-1 p-2">
                                  <div>
                                    <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                      Lem UYU 8.2gr Lem Stick ATK
                                    </Text>
                                    <div className="flex">
                                      <Heading as="p" className="self-end !text-[14px]">
                                        Rp2.000.000
                                      </Heading>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center">
                                      <Img 
                                        src="images/img_map_pin.svg"
                                        alt="Location Pin"
                                        className="h-[12px] w-[12px]"
                                      />
                                     <Text as="p">Kota Bandung</Text>
                                   </div>
                                   <div className="flex itemns-center">
                                     <div className="flex itemns-center">
                                       <Img 
                                         src="images/img_star.svg"
                                         alt="Star Image"
                                         className="h-[12px] w-[12px]"
                                       />
                                       <Text as="p">4.6</Text>
                                     </div> 
                                     <div className="ml-1 h-[4px] w-4px rounded-sm bg-gray-300" />
                                     <Text as="p"className="ml-1 !text-cyan-700">
                                       Terjual 100
                                     </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="mb-[22px] flex bg-white-a700 px-2">
                                  <div className="mb-2 flex w-[28%] justify-center rounded bg-gray-100_01 p-0.5 md:w-full">
                                    <div className="flex w-full justify-center">
                                      <Text as="p" className="!text-[10px] !font-medium !text-blue_gray-900_02">
                                        NON PKP
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                              <div className="flex flex-col items-start">
                                <Img
                                  src="images/img_image_61.png"
                                  alt="Product Image"
                                  className="h-[150px] w-full object-cover md:h-auto"
                                />
                                <Text
                                  as="p"
                                  className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                >
                                  UMKM
                                </Text>
                              </div>
                              <div>
                                <div className="flex flex-col gap-1 p-2">
                                  <div>
                                    <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                      Paket Alat Tulis Kantor - Paket ATK
                                    </Text>
                                    <div className="flex">
                                      <Heading as="p" className="self-end !text-[14px]">
                                        Rp7.500.000
                                      </Heading>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center">
                                      <Img
                                        src="images/img_map_pin.svg"
                                        alt="Location Pin"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text as="p">Kota Bandung</Text>
                                    </div>
                                    <div className="flex-items-center">
                                      <div className="flex-items-center">
                                        <Img
                                          src="images/img_star.svg"
                                          alt="Star Image"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">4.6</Text>
                                      </div>
                                      <div className="ml-1 h-[4px] w-4px rounded-sm bg-gray-300" />
                                      <Text as="p"className="ml-1 !text-cyan-700">
                                        Terjual 100
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <ChipView
                                  options={chipOptions6}
                                  setOptions={setChipOptions6}
                                  values={selectedChipOptions6}
                                  setValues={setSelectedChipOptions6}
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
                            </div>
                            <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                              <div className="flex flex-col items-start">
                                <Img
                                  src="images/img_image_61.png"
                                  alt="Product Image"
                                  className="h-[150px] w-full object-cover md:h-auto"
                                />
                                <Text
                                  as="p"
                                  className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                >
                                  UMKM
                                </Text>
                              </div>
                              <div>
                                <div className="flex flex-col gap-1 p-2">
                                  <div>
                                    <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                      Kertas HVS A4 75 gram Paper One - Kertas HVS
                                    </Text>
                                    <div className="flex">
                                      <Heading as="p" className="self-end !text-[14px]">
                                        Rp8.000.000
                                      </Heading>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center">
                                      <Img
                                        src="images/img_map_pin.svg"
                                        alt="Location Pin"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text as="p">Kota Bandung</Text>
                                    </div>
                                    <div className="flex-items-center">
                                      <div className="flex-items-center">
                                        <Img
                                          src="images/img_star.svg"
                                          alt="Star Image"
                                          className="h-[12px] w-[12px]"
                                        />
                                        <Text as="p">4.6</Text>
                                      </div>
                                      <div className="ml-1 h-[4px] w-4px rounded-sm bg-gray-300" />
                                      <Text as="p"className="ml-1 !text-cyan-700">
                                        Terjual 100
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <ChipView
                                  options={chipOptions7}
                                  setOptions={setChipOptions7}
                                  values={selectedChipOptions7}
                                  setValues={setSelectedChipOptions7}
                                  className="mb-[22px] flex flex-wrap gap-x-1 gap-y-2 px-2"
                                >
                                  {(option) => (
                                    <React.Fragment key={option.index}>
                                      {option.isSelected ? (
                                        <div
                                          onClick={option.toggle}
                                          className="flex h-[18px] min-w-[28px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded bg-gray-100 px-0.5 text-center text-[10px] font-medium text-blue_gray-900_02"
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
                            </div>
                            <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                              <div className="flex flex-col items-start">
                                <Img
                                  src="images/img_image_61.png"
                                  alt="Product Image"
                                  className="h-[150px] w-full object-cover md:h-auto"
                                />
                                <Text
                                  as="p"
                                  className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                >
                                  UMKM
                                </Text>
                              </div>
                              <div>
                                <div className="flex flex-col gap-1 p-2">
                                  <div>
                                    <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                      Paket Alat Tulis Kantor - Bandung
                                    </Text>
                                    <div className="flex">
                                      <Heading as="p" className="self-end !text-[14px]">
                                        Rp7.500.000
                                      </Heading>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap items-center">
                                    <Text 
                                      as="p" 
                                      className="flex items-center justify-center rounded bg-deep_orange-50 p-0.5 !text-[10px] !font-medium !text-red-400"
                                    >
                                      25%
                                    </Text>
                                    <Text
                                      as="p"
                                      className="self-end !text-[10px] !text-blue_gray-300_01 line-through"
                                    >
                                      Rp 10.000.000
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-1">
                                    <div className="flex items-center">
                                      <Img
                                        src="images/img_map_pin.svg"
                                        alt="Location Pin"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text as="p">Kota Bandung</Text>
                                    </div>
                                    <div className="flex items-center">
                                      <div className="flex items-center">
                                        <Img
                                          src="images/img_star.svg"
                                          alt="Star Image"
                                          className="h-[12px] w-[12px]"
                                         />
                                         <Text as="p">4.6</Text>
                                      </div>
                                      <div className="ml-1 h-[4px] w-[4px] rounded-sm bg-gray-300" />
                                      <Text as="p" className="ml-1 !text-cyan-700">
                                        Terjual 100
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex bg-white-a700 px-2">
                                  <div className="mb-2 flex w-[16%] justify-center rounded bg-blue-50 p-0.5 md:w-full">
                                    <div className="flex w-full justify-center">
                                      <Text as="p" className="!text-[10px] !font-medium !text-cyan-800">
                                        PKP
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-full rounded-lg border-[0.5px] border-solid border-gray-300_01 bg-white-a700 shadow-xs">
                              <div className="flex flex-col items-start">
                                <Img
                                  src="images/img_image_61.png"
                                  alt="Product Image"
                                  className="h-[150px] w-full object-cover opacity-60 md:h-auto"
                                />
                                <Text
                                  as="p"
                                  className="relative mt-[-16px] flex items-center justify-center rounded-tr bg-cyan-700 p-0.5 !text-[10px] !font-medium !text-gray-50_02"
                                >
                                  UMKM
                                </Text>
                              </div>
                              <div>
                                <div className="flex flex-col gap-1 p-2">
                                  <div>
                                    <Text size="textmd" as="p" className="!text-[16px] leading-6">
                                      Meja Laptop Kayu Warna Abu
                                    </Text>
                                    <div className="flex">
                                      <Heading as="p" className="self-end !text-[14px]">
                                        Rp7.500.000
                                      </Heading>
                                    </div>
                                  </div>
                                  <div className="flex flex-wrap items-center">
                                  <Text
                                    as="p"
                                    className="flex items-center justify-center rounded bg-deep_orange-50 p-0.5 !text-[10px] !font-medium !text-red-400"
                                  >
                                    25%
                                  </Text>
                                  <Text
                                    as="p"
                                    className="self-end !text-[10px] !text-blue_gray-300_01 line-through"
                                  >
                                    Rp 10.000.000
                                  </Text>
                                </div>
                                <div className="flex flex-col gap-1">
                                  <div className="flex items-center">
                                    <Img
                                      src="images/img_map_pin.svg"
                                      alt="Location Pin"
                                      className="h-[12px] w-[12px]"
                                    />
                                    <Text as="p">Kota Bandung</Text>
                                  </div>
                                  <div className="flex items-center">
                                    <div className="flex items-center">
                                      <Img
                                        src="images/img_star.svg"
                                        alt="Star Image"
                                        className="h-[12px] w-[12px]"
                                      />
                                      <Text as="p">4.6</Text>
                                    </div>
                                    <div className="ml-1 h-[4px] w-[4px] rounded-sm bg-gray-300" />
                                    <Text as="p" className="ml-1 !text-cyan-700">
                                      Terjual 100
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <ChipView
                                options={chipOptions8}
                                setOptions={setChipOptions8}
                                values={selectedChipOptions8}
                                setValues={setSelectedChipOptions8}
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
                          </div>
                        </div> 
                      </div>  
                    </div>
                  </TabPanel> 
                ))}
                <div className="mt-5 grid grid-cols-5 justify-center gap-5 gap-y-[18px] self-stretch md:grid-cols-3 sm:grid-col-1">
                  <Suspense fallback={<div>Loading feed...</div>}>
                    {productCardsGrid7.map((d, index) => (
                      <ProductDetail {...d} key={"landing" + index} />
                    ))}
                  </Suspense>
                </div>
                <div className="mt-3 flex flex-wrap items-center">
                  <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[16px] w-[16px] self-end" />
                  <Text size="texts" as="p" className="ml-2 !font-opensans !text-[14px]">
                    1
                  </Text>
                  <Text size="texts" as="p" className="ml-2.5 !font-opensans !text-[14px] !text-blue_gray-400_01">
                    2
                  </Text>
                  <Text size="texts" as="p" className="ml-2 !font-opensans !text-[14px] !text-blue_gray-400_01">
                    3
                  </Text>
                  <Text size="texts" as="p" className="ml-2 !font-opensans !text-[14px] !text-blue_gray-400_01">
                    4
                  </Text>
                  <Text size="texts" as="p" className="ml-2 !font-opensans !text-[14px] !text-blue_gray-400_01">
                    5
                  </Text>
                  <Text size="texts" as="p" className="ml-2 !font-opensans !text-[14px] !text-blue_gray-400_01">
                    ...
                  </Text>
                  <Text size="texts" as="p" className="ml-2 !font-opensans !text-[14px] !text-blue_gray-400_01">
                    15
                  </Text>
                  <Img 
                    src="images/img_arrow_right.svg" 
                    alt="Arrowright" 
                    className="ml-2 h-[16px] w-[16px] self-end" 
                  />
                </div>
              </Tabs>
            </div>
          </div> 
        </div>
      </div>

      {/* pa di u m k m section */}
      <PaDiUMKMSection/> 
    </div>   
    <Footer className="mt-[74px]" /> 
  </div>            
</>
);
}
