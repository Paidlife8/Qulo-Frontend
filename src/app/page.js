import HomeContents from "@/components/homeComps/HomeContents";
import HomeWrapper from "@/components/homeComps/HomeWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeWrapper>
        <HomeContents />
      </HomeWrapper>
    </>
  );
}
