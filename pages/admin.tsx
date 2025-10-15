import { AdminPage } from "@/pages/AdminPage";
import Head from "next/head";

export default function Admin() {
  return (
    <>
      <Head>
        <title>Admin - Bella Beauty</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <AdminPage />
    </>
  );
}
