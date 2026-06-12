import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, FileText, Vote, Megaphone, QrCode, ClipboardList, ImageIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "营销工具 - H5 活动页、微传单、投票问卷等营销工具",
  description:
    "立亭云营销工具箱，提供 H5 营销活动页、微传单、有奖投票、问卷调查等多种灵活营销工具，低成本策划高转化率营销活动。",
  keywords: ["H5 营销", "微传单", "活动策划", "投票问卷", "营销工具", "小程序活动"],
}

const tools = [
  { icon: FileText, name: "H5 活动页", desc: "拖拽设计，支持动效、音乐、视频，一键分享微信朋友圈，快速传播。", badge: "热门", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: ImageIcon, name: "微传单", desc: "电子单页设计，替代纸质传单，扫码即达，支持留资表单，精准收集线索。", badge: "实用", color: "text-sky-600", bg: "bg-sky-50" },
  { icon: Vote, name: "有奖投票", desc: "微信投票活动，支持拉票、防刷票、奖品核销，简单有效的互动营销。", badge: "", color: "text-violet-600", bg: "bg-violet-50" },
  { icon: ClipboardList, name: "问卷调查", desc: "多题型问卷，满意度调研、市场调研、需求收集，数据自动汇总分析。", badge: "", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Megaphone, name: "抽奖活动", desc: "大转盘、刮刮卡、红包封面，节日营销、周年庆活动一键搞定。", badge: "新品", color: "text-orange-600", bg: "bg-orange-50" },
  { icon: QrCode, name: "活码管理", desc: "微信活码统一管理，渠道追踪、防封号、自动备份，私域引流必备工具。", badge: "", color: "text-rose-600", bg: "bg-rose-50" },
]

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-rose-900/60 text-rose-300 border-rose-700/50">营销工具箱</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                营销工具全家桶
                <br />
                <span className="text-rose-400">低成本高效营销</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                H5 活动页、微传单、投票活动、问卷调查……立亭云营销工具箱满足各类营销场景，无需技术，快速创作，轻松实现品牌传播与线索收集。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8")}>
                  免费试用 <ArrowRight className="size-4 ml-2" />
                </Link>
                <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12")}>
                  查看价格
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">6 大营销工具，覆盖全场景需求</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从拉新到留存，每个营销环节都有专业工具支持</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tools.map((tool) => (
                <Card key={tool.name} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`size-11 rounded-xl flex items-center justify-center ${tool.bg}`}>
                        <tool.icon className={`size-5 ${tool.color}`} />
                      </div>
                      {tool.badge && (
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {tool.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{tool.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">开启您的营销工具之旅</h2>
            <p className="text-blue-100 mb-8">营销工具按需购买，无需整套购入，灵活实惠</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-blue-50 h-12 px-10")}>
                免费咨询 <ArrowRight className="size-4 ml-2" />
              </Link>
              <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white text-white hover:bg-white/10 bg-transparent h-12 px-8")}>
                查看完整价格
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
