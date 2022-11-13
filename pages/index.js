import Link from "next/dist/client/link";
import SearchPage from "../components/home/SearchPage";
import Layout from "../components/layout";

export default function Home() {

  return (
    <>
      <Layout active='home'>
        <SearchPage />
      </Layout>
    </>
  )
}
