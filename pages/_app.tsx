import "../styles/globals.css";
import "../styles/modern-admin.css";
import type { AppProps } from "next/app";
import { TinaProvider } from "@/contexts/TinaContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TinaProvider>
      <div className="text-stone-500 text-[15px] not-italic normal-nums font-light accent-auto bg-white bg-no-repeat box-border caret-transparent block tracking-[normal] leading-[21.75px] list-outside list-disc break-words overflow-x-hidden overflow-y-auto pointer-events-auto text-left indent-[0px] normal-case visible bg-center border-separate font-karla_local md:text-lg md:leading-[26.1px]">
        <Component {...pageProps} />
      </div>
    </TinaProvider>
  );
}
