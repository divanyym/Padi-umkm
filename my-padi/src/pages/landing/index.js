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
    
    
    </>
  )
}
