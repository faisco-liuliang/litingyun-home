import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/home/hero"
import { ProductsGrid } from "@/components/home/products-grid"
import { Advantages } from "@/components/home/advantages"
import { CasesPreview } from "@/components/home/cases-preview"
import { BlogPreview } from "@/components/home/blog-preview"
import { HomeFaq } from "@/components/home/home-faq"
import { PricingPreview } from "@/components/home/pricing-preview"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "立亭云 - AI 时代一站式企业数字化建站与营销工具平台",
  description:
    "立亭云提供 AI 建站、私域商城、AI 题库教育系统、门店管理、GEO 优化、AI 营销工具等一站式企业数字化解决方案。5 万+ 企业客户信赖。",
  alternates: { canonical: "https://litingyun.com" },
  openGraph: {
    url: "https://litingyun.com",
    title: "立亭云 - AI 时代一站式企业数字化建站与营销工具平台",
    description: "5 万+ 企业信赖的 AI 数字化平台，AI 建站、私域商城、教育系统、门店管理、GEO 优化，7 天快速上线。",
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
        <BlogPreview />
        <HomeFaq />
        <PricingPreview />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
