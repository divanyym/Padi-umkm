import { Helmet } from "react-helmet";
import {
  img,
  Text,
  ChipView,
  Heading,
  Input,
  Checkbox,
  BreadcrumbLink,
  Breadcrumb,
  BreadcrumbItem,
} from "../../components";
import Footer from "../../components/Footer";
import Heade from "../../components/Header";
import ProductDetail from "../../components/ProductDetail";
import PaDiUMKMSection from "../../components/PaDiUMKMSection ";
import React, { Suspense } from "React";
import {TabPanel, TabList, Tab, Tabs} from "react-tabs";

const productCardsGrid7 = [
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
    }
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
    }
    {
        productLabel: "UMKM",
        productDescription: "Kertas HVS A4 75 gram Paper One - Kertas HVS",
        productPrice: "Rp2.000.000",
        locationText: "Kota Bandung",
        ratingText: "4.6",
        soldCount: "Terjual 100",
        additionalLabel: "Non PKP",
    }
];

export default function LandingPage () {
  const [chipOptions89, setChipOptions89] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [SelectedChipOptions89, setSelectedChipOptions89] = React.useState([]);
  const [chipOption89, setChipOption89] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [SelectedChipOptions89, setSelectedChipOptions89] = React.useState([]);
  const [chipOption89, setChipOption89] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [SelectedChipOptions89, setSelectedChipOptions89] = React.useState([]);
  const [chipOption89, setChipOption89] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [SelectedChipOptions89, setSelectedChipOptions89] = React.useState([]);
  const [chipOption89, setChipOption89] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [SelectedChipOptions89, setSelectedChipOptions89] = React.useState([]);
  const [chipOption89, setChipOption89] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [SelectedChipOptions89, setSelectedChipOptions89] = React.useState([]);
  const [chipOption89, setChipOption89] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [SelectedChipOptions89, setSelectedChipOptions89] = React.useState([]);
  const [chipOption89, setChipOption89] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [SelectedChipOptions89, setSelectedChipOptions89] = React.useState([]);
  const [chipOption89, setChipOption89] = React.useState(() => [
    { value: 1, label: `PDN`},
    { value: 2, label: `TKDN 50%`},
    { value: 3, label: `PKP`},
  ]);
  const [SelectedChipOptions89, setSelectedChipOptions89] = React.useState([]);


  return (
    <>
      <Helmet>
        <title>ATK Products - Quality Office Supplies for UMKM</title>
        <meta
           name="description"
           content="Discover a wide range of quality office supplies (ATK) for UMKM at competitive prices. From pens and pencils to paper and archival equipment, find everything you need for your business in one place."
        />
     </Helmet>
     <div className="w-full bg-white-a700"></div>
       <Header />
       <div className="mt-[22px] flex-col items-center gap-20 md:gap-[60px] sm:gap-10">
         <div className="container-xs px-[42px] md:px-5">
           <div className="flex flex-col gap-8">
             <Breadcrumb
               seperator={<img src"images/img_breadcrumb.svg" alt="Arrow Right" className="h-[16px] w-[16px]" />}
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
                  <div className="felx border-b border-solid border-gray-300_01 bg-gray-50_01 px-3 py-2">
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
                                Pulpen
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

    

                   
          </div>

       </div>
    
    </>
  

