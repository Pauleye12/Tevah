import type { Route } from "./+types/home";

import Herosection from "~/components/Homepage/Herosection";
import Mission from "~/components/Homepage/Mission";
import Impact from "~/components/Homepage/Impact";
import Involved from "~/components/Homepage/Involved";
import UpTo from "~/components/Homepage/UpTo";
import Partners from "~/components/Homepage/Partners";
import Footer from "~/components/Footer";
import { useState } from "react";
import Donate from "~/components/PopUps/Donate";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teevah Charity Foundation" },
    { name: "Teevah", content: "Welcome to Teevah Charity!" },
  ];
}

export default function Home() {
  const [donate, setDonate] = useState(false);
  return (
    <div className="flex w-full flex-col overflow-x-hidden">
      <Herosection setDonate={setDonate} />
      <Mission />
      <Impact />
      <Involved />
      <UpTo />
      <Partners />
      {donate && <Donate setDonate={setDonate} />}
      <Footer bgColor="#F8F8FA" />
    </div>
  );
}
