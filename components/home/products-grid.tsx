import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingCart, Globe, GraduationCap, CalendarCheck, Store, Zap, Wrench } from "lucide-react"

const products = [
  {
    name: "私域商城",
    tagline: "小程序 + 微商城",
    desc: "分销、拼团、直播带货，打造完整私域电商闭环，客户留存转化率提升 3 倍。",
    href: "/products/mall",
    icon: ShoppingCart,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    badge: "热门",
    badgeColor: "bg-blue-100 text-blue-700",
    features: ["小程序商城", "分销体系", "直播带货", "私域运营"],
  },
  {
    name: "企业官网",
    tagline: "SEO 建站",
    desc: "百度精准收录，搜索排名靠前，让客户主动找到你。内置 SEO 优化工具。",
    href: "/products/website",
    icon: Globe,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    badge: "SEO 必备",
    badgeColor: "bg-sky-100 text-sky-700",
    features: ["百度收录", "SEO 优化", "表单线索", "响应式设计"],
  },
  {
    name: "教育系统",
    tagline: "知识付费平台",
    desc: "直播上课、录播点播、报名缴费，完整教育 SaaS 方案，快速搭建在线学校。",
    href: "/products/education",
    icon: GraduationCap,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    badge: "新品",
    badgeColor: "bg-violet-100 text-violet-700",
    features: ["直播课堂", "录播视频", "付费课程", "学员管理"],
  },
  {
    name: "轻应用",
    tagline: "服务预约平台",
    desc: "门诊预约、家政服务、美业预订，轻量级服务管理系统，快速响应客户需求。",
    href: "/products/booking",
    icon: CalendarCheck,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    badge: "灵活定制",
    badgeColor: "bg-emerald-100 text-emerald-700",
    features: ["在线预约", "服务管理", "消息提醒", "评价体系"],
  },
  {
    name: "门店系统",
    tagline: "多门店管理",
    desc: "连锁门店统一管理，会员积分、优惠券、核销一体化，提升门店运营效率。",
    href: "/products/store",
    icon: Store,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    badge: "连锁推荐",
    badgeColor: "bg-orange-100 text-orange-700",
    features: ["多门店管理", "会员体系", "储值核销", "数据报表"],
  },
  {
    name: "GEO 优化系统",
    tagline: "AI 搜索时代",
    desc: "专为 AI 搜索（ChatGPT、Perplexity 等）优化的品牌内容投放系统，抢占 AI 推荐位。",
    href: "/products/geo",
    icon: Zap,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
    badge: "独家",
    badgeColor: "bg-amber-100 text-amber-700",
    features: ["AI 内容优化", "品牌曝光", "知识图谱", "舆情监控"],
  },
  {
    name: "其他工具",
    tagline: "营销工具箱",
    desc: "H5 营销页面、微传单、有奖活动、投票问卷，灵活组合，满足各类营销需求。",
    href: "/products/tools",
    icon: Wrench,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
    badge: "多合一",
    badgeColor: "bg-rose-100 text-rose-700",
    features: ["H5 活动页", "微传单", "投票问卷", "表单收集"],
  },
]

export function ProductsGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            产品中心
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            7 大产品线，覆盖企业全业务场景
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            无论您是实体门店、教育机构、服务业还是电商，立亭云都有匹配的解决方案。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <Link key={product.name} href={product.href}>
              <Card className="h-full border-border hover:border-primary/30 card-hover cursor-pointer bg-card">
                <CardContent className="p-5 flex flex-col gap-4 h-full">
                  <div className="flex items-start justify-between">
                    <div className={`size-11 rounded-xl flex items-center justify-center ${product.iconBg}`}>
                      <product.icon className={`size-5 ${product.iconColor}`} />
                    </div>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-foreground text-base">{product.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{product.tagline}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {product.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {product.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-sm font-medium text-primary gap-1 mt-auto pt-1">
                    了解详情
                    <ArrowRight className="size-3.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}

          {/* "View all" card for larger layout balance */}
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-1 hidden xl:flex">
            <Link href="/pricing" className="flex-1">
              <Card className="h-full border-dashed border-primary/30 bg-accent/40 hover:bg-accent card-hover cursor-pointer flex items-center justify-center">
                <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                  <div className="size-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">查看全部套餐</p>
                    <p className="text-xs text-muted-foreground mt-1">各产品详细定价方案</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
