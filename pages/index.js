import Link from "next/dist/client/link";
import Layout from "../components/layout";

export default function Home() {

  const styles = [
    {

    }
  ]

  return (
    <>
      <Layout active='home'>
        <div className="min-h-[70vh] flex justify-center place-items-center ">
          <div className="h-full">
            <div className="text-3xl text-[#fff] font-[500]">Check Out <Link href='/feed/1' className="text-[#ffff2f]">Feed</Link></div>
          </div>
        </div>
      </Layout>
    </>
  )
}
