import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { ProductsGrid } from "@/components/home/products-grid"
import { Advantages } from "@/components/home/advantages"
import { CasesPreview } from "@/components/home/cases-preview"
import { PricingPreview } from "@/components/home/pricing-preview"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "立亭云 - 一站式企业数字化建站与营销工具平台",
  description:
    "立亭云提供私域商城、企业官网 SEO 建站、教育系统、门店管理等一站式企业数字化解决方案。5 万+ 企业客户信赖，专属顾问一对一服务，7 天快速上线。",
  alternates: { canonical: "https://litingyun.com" },
  openGraph: {
    url: "https://litingyun.com",
    title: "立亭云 - 一站式企业数字化建站与营销工具平台",
    description: "5 万+ 企业信赖的数字化平台，私域商城、SEO 建站、教育系统、门店管理，7 天快速上线。",
  },
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductsGrid />
        <Advantages />
        <CasesPreview />
        <PricingPreview />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
