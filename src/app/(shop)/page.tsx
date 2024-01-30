import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Arde papi uff que calor!!!</h1>
      <h1 className={titleFont.className}>Arde papi uff que calor!!!</h1>
    </div>
  );
}
