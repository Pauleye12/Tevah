import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Herosection from "~/components/Homepage/Herosection";
import Mission from "~/components/Homepage/Mission";
import Impact from "~/components/Homepage/Impact";
import Involved from "~/components/Homepage/Involved";
import UpTo from "~/components/Homepage/UpTo";
import Partners from "~/components/Homepage/Partners";
import Footer from "~/components/Footer";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teevah Charity Foundation" },
    { name: "Teevah", content: "Welcome to Teevah Charity!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <Herosection />
      <Mission />
      <Impact />
      <Involved />
      <UpTo />
      <Partners />
      <Footer bgColor="#F8F8FA" />
    </div>
  );
}
