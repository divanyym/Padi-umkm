import { CloseSVG } from "../input/close.jsx";
import MegaMenu1 from "./MegaMenu1";
import { Button, Input, Img, Text } from "./..";
import React from "react";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header {...props} className={`${props.className} bg-white-a700`}>
      <div className="flex items-center justify-between gap-5 self-stretch bg-gray-100 px-[22px] py-1.5 sm:flex-col sm:px-5">
        <ul className="flex gap-8 sm:flex-col">
          <li>
            <a href="#">
              <Text size="texts" as="p" className="!font-opensans !text-blue_gray-400_01">
                Mitra PaDi UMKM
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text size="texts" as="p" className="!font-opensans !text-blue_gray-400_01">
                Menjadi Penjual
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text size="texts" as="p" className="!font-opensans !text-blue_gray-400_01">
                Info
              </Text>
            </a>
          </li>
          <li>
            <a href="#">
              <Text size="texts" as="p" className="!font-opensans !text-blue_gray-400_01">
                Pusat Bantuan
              </Text>
            </a>
          </li>
          <li
            onMouseLeave={() => {
              setMenuOpen(false);
            }}
            onMouseEnter={() => {
              setMenuOpen(true);
            }}
          >
            <div className="flex cursor-pointer items-center gap-0.5">
              <Text size="texts" as="p" className="!font-opensans !text-blue_gray-400_01">
                Bahasa
              </Text>
              <Img
                src="images/img_arrow_down_blue_gray_400_01.svg"
                alt="Language Arrow"
                className="h-[16px] w-[16px]"
              />
            </div>
            {menuOpen ? <MegaMenu1 /> : null}
          </li>
        </ul>
        <div className="flex items-center gap-6">
          <a href="#">
            <Img src="images/img_image_14.png" alt="Promo Image One" className="h-[24px] w-[24px] object-cover" />
          </a>
          <Img src="images/img_image_15.png" alt="Promo Image Two" className="h-[12px] w-[72%] object-contain" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 self-stretch">
        <div className="container-xs mt-2 md:px-5">
          <div className="flex items-center justify-center gap-6 md:flex-col">
            <Img src="images/img_header_logo.svg" alt="Main Logo" className="h-[54px] w-[98px] object-contain" />
            <div className="flex flex-1 items-center justify-between gap-5 md:flex-col md:self-stretch">
              <div className="flex items-center gap-1">
                <a href="#">
                  <Img src="images/img_grid.svg" alt="Category Grid" className="h-[16px] w-[16px]" />
                  <Text size="texts" as="p" className="self-end !text-[14px] !font-medium !text-gray-600">
                    Kategori
                  </Text>
                </a>
              </div>
              <Input
                size="xs"
                shape="round"
                name="Search Field"
                placeholder="Cari produk, jasa, atau vendor"
                value={searchBarValue}
                onChange={(e) => setSearchBarValue(e.target.value)}
                suffix={
                  searchBarValue?.length > 0 ? (
                    <CloseSVG onClick={() => setSearchBarValue("")} height={16} width={16} fillColor="#8f95b2ff" />
                  ) : (
                    <Img src="images/img_rewind.svg" alt="Rewind" className="h-[16px] w-[16px]" />
                  )
                }
                className="flex-grow gap-4 !text-blue_gray-300_01"
              />
            </div>
            <div className="flex gap-5">
              <Button shape="round" className="min-w-[84px] border border-solid border-cyan-700 font-medium">
                Masuk
              </Button>
              <Button color="cyan_700" shape="round" className="min-w-[84px] font-medium">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-px w-full rotate-[-180deg] self-stretch bg-gray-200" />
    </header>
  );
}
