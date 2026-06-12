import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, ShoppingCart, Globe, GraduationCap, CalendarCheck, Store, Zap, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "产品中心 - 7 大产品线，覆盖企业全业务场景",
  description:
    "立亭云产品中心，提供私域商城、企业官网 SEO 建站、教育系统、轻应用预约、门店管理、GEO 优化、营销工具等 7 大产品线，一站式满足中小企业数字化需求。",
  keywords: ["立亭云产品", "私域商城", "企业官网", "教育系统", "门店管理", "GEO 优化"],
}

const products = [
  {
    name: "私域商城",
    tagline: "小程序 + 微商城一体化",
    desc: "分销裂变、拼团秒杀、直播带货，打造完整私域电商闭环，客户留存转化率提升 3 倍。",
    href: "/products/mall",
    icon: ShoppingCart,
    color: "text-blue-600",
    bg: "bg-blue-50",
    badge: "热门",
    highlights: ["小程序商城", "分销裂变", "直播带货", "数据报表"],
    priceFrom: "499",
  },
  {
    name: "企业官网",
    tagline: "SEO 建站，精准引流",
    desc: "内置专业 SEO 优化工具，百度 / Google 双引擎精准收录，月均自然流量增长 200%+。",
    href: "/products/website",
    icon: Globe,
    color: "text-sky-600",
    bg: "bg-sky-50",
    badge: "SEO 必备",
    highlights: ["百度精准收录", "关键词排名", "表单线索收集", "响应式设计"],
    priceFrom: "299",
  },
  {
    name: "教育系统",
    tagline: "知识付费全平台",
    desc: "直播上课、录播点播、报名缴费、学员管理，完整教育 SaaS 方案，快速搭建在线学校。",
    href: "/products/education",
    icon: GraduationCap,
    color: "text-violet-600",
    bg: "bg-violet-50",
    badge: "新品",
    highlights: ["直播课堂", "录播视频", "付费订阅", "学员管理"],
    priceFrom: "399",
  },
  {
    name: "轻应用",
    tagline: "服务预约管理系统",
    desc: "门诊预约、美业预订、家政服务，智能排班、自动提醒，运营效率大幅提升。",
    href: "/products/booking",
    icon: CalendarCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    badge: "服务行业",
    highlights: ["在线预约", "智能排班", "自动提醒", "评价管理"],
    priceFrom: "199",
  },
  {
    name: "门店系统",
    tagline: "连锁多门店统一管理",
    desc: "连锁门店统一管理，会员积分储值、跨店通用、数据实时汇总，提升整体运营效率。",
    href: "/products/store",
    icon: Store,
    color: "text-orange-600",
    bg: "bg-orange-50",
    badge: "连锁推荐",
    highlights: ["多门店管理", "会员体系", "储值核销", "经营报表"],
    priceFrom: "299",
  },
  {
    name: "GEO 优化系统",
    tagline: "AI 搜索时代的流量入口",
    desc: "让 ChatGPT、Perplexity、Kimi 主动推荐您的品牌，抢占 AI 时代流量先机。",
    href: "/products/geo",
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50",
    badge: "独家",
    highlights: ["AI 曝光监控", "内容优化", "多平台分发", "竞品分析"],
    priceFrom: "799",
  },
  {
    name: "营销工具",
    tagline: "全场景营销工具箱",
    desc: "H5 活动页、微传单、投票抽奖、问卷调查，低成本高效完成各类营销推广活动。",
    href: "/products/tools",
    icon: Wrench,
    color: "text-rose-600",
    bg: "bg-rose-50",
    badge: "多合一",
    highlights: ["H5 活动页", "微传单", "有奖投票", "问卷调查"],
    priceFrom: "按需购买",
  },
]

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">产品中心</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              7 大产品线，覆盖企业全业务场景
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              无论您是实体门店、教育机构、电商品牌还是服务业，立亭云都有专属解决方案，帮助企业快速建立完整的线上业务体系。
            </p>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
              {products.map((product, index) => (
                <Card key={product.name} className="border-border card-hover overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
                      {/* Visual side */}
                      <div className={`lg:w-64 flex items-center justify-center p-12 ${product.bg} shrink-0`}>
                        <product.icon className={`size-16 ${product.color}`} />
                      </div>
                      {/* Content side */}
                      <div className="flex-1 p-8 flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
                          <Badge className="bg-accent text-accent-foreground text-xs">{product.badge}</Badge>
                          <span className="text-sm text-muted-foreground">{product.tagline}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{product.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {product.highlights.map((h) => (
                            <span key={h} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-md">
                              {h}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-6 mt-2">
                          <div>
                            <span className="text-xs text-muted-foreground">起售价</span>
                            <div className="flex items-baseline gap-1">
                              {product.priceFrom === "按需购买" ? (
                                <span className="text-lg font-bold text-foreground">按需购买</span>
                              ) : (
                                <>
                                  <span className="text-2xl font-bold text-primary">¥{product.priceFrom}</span>
                                  <span className="text-sm text-muted-foreground">/月</span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Link href={product.href} className={cn(buttonVariants())}>
                              了解详情 <ArrowRight className="size-4 ml-1.5" />
                            </Link>
                            <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }))}>
                              免费咨询
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 hero-dark-bg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">不确定选哪款产品？</h2>
            <p className="text-slate-300 mb-8">联系专属顾问，免费为您推荐最适合的解决方案</p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-10")}>
              免费顾问咨询 <ArrowRight className="size-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
