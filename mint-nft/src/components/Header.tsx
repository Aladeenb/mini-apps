"use client";

import { CloseOutlined } from "@ant-design/icons";
import { WalletSelector } from "./AptosWalletSelector";
import "@/src/styles/wallet-selector.css";
import NavTitlePNG from "@/public/assets/nav-title.png";
import { useRouter } from "next/navigation";
import { useWalletSelectorModelContext } from "../provider/WalletModelProvider";

export default function Header() {
  const router = useRouter();
  const { isModalOpen, setModalOpen } = useWalletSelectorModelContext();
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="fixed top-0 z-20 flex h-16 w-full items-center justify-between bg-black px-3 text-white">
      <div className="flex">
        <CloseOutlined onClick={handleGoBack} />
        <img src={NavTitlePNG.src} alt="" />
      </div>
      <WalletSelector isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}
