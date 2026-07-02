import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Calendar,
  CheckCircle,
  Globe,
  GraduationCap,
  Layers3,
  Megaphone,
  Share2,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
  Wrench,
} from "lucide-react"

const productLinks = [
  {
    href: "/products/mall",
    icon: ShoppingBag,
    title: "私域商城",
    tags: "AI 营销商城，小程序+会员+分销闭环",
  },
  {
    href: "/products/website",
    icon: Globe,
    title: "企业官网",
    tags: "AI 建站+SEO/GEO，官网内容自动增长",
  },
  {
    href: "/products/booking",
    icon: Calendar,
    title: "轻应用",
    tags: "AI 表单/预约/内容发布小程序",
  },
  {
    href: "/products/education",
    icon: GraduationCap,
    title: "教育系统",
    tags: "AI 题库+直播课+知识付费",
  },
  {
    href: "/products/store",
    icon: Store,
    title: "门店系统",
    tags: "AI 经营分析，多门店会员一体化",
  },
  {
    href: "/products/tools",
    icon: Wrench,
    title: "其他工具",
    tags: "AI 海报、短视频、H5 活动工具",
  },
  {
    href: "/products/geo",
    icon: Sparkles,
    title: "GEO 优化系统",
    tags: "让 DeepSeek、豆包等大模型推荐品牌",
  },
]

const serviceProofs = [
  {
    icon: BadgeCheck,
    title: "包教包会使用",
    desc: "从试用到付费，全流程顾问指导",
  },
  {
    icon: BarChart3,
    title: "价格透明公开",
    desc: "产品套餐清晰，提前说明第三方成本",
  },
  {
    icon: Layers3,
    title: "多产品一站式",
    desc: "官网、商城、预约、教育、门店统一规划",
  },
]

const heroSlides = [
  {
    eyebrow: "198 元做小程序 · 买 2 年送 2 年",
    title: "198 元做小程序",
    accent: "低至 99 元/年",
    subtitle: "门店、预约、表单、会员，小团队也能低成本上线",
    desc: "适合先把门店展示、预约留资、服务项目和基础会员沉淀起来。买 2 年送 2 年后折算低至 99 元/年，再叠加渠道特惠更划算。",
    primary: "领取 198 元方案",
    secondary: "查看小程序价格",
    href: "/contact",
    secondaryHref: "/pricing#store",
    proofs: [
      { icon: Calendar, title: "预约表单", desc: "服务预约、报名咨询、线索收集" },
      { icon: Store, title: "门店展示", desc: "项目、地址、活动一页展示" },
      { icon: BadgeCheck, title: "买 2 送 2", desc: "4 年使用期，年均更低" },
    ],
  },
  {
    eyebrow: "企业数字化与 AI 增长平台",
    title: "立亭云",
    accent: "AI 智能建站",
    subtitle: "多产品矩阵，总有一款适合您",
    desc: "整合官网、商城、小程序、教育、门店、营销和 GEO 优化，帮助中小企业低成本完成上线、获客和复购。",
    primary: "立即咨询",
    secondary: "查看价格",
    href: "/contact",
    secondaryHref: "/pricing",
    proofs: serviceProofs,
  },
  {
    eyebrow: "商城小程序 · 会员分销 · 私域复购",
    title: "私域商城",
    accent: "买 2 送 2",
    subtitle: "把商品、会员、直播和分销放进同一套系统",
    desc: "适合有商品、有复购、有社群资源的商家，用商城小程序承接内容流量，再通过会员、优惠券、拼团和分销持续转化。",
    primary: "咨询商城方案",
    secondary: "查看商城功能",
    href: "/contact",
    secondaryHref: "/products/mall",
    proofs: [
      { icon: ShoppingBag, title: "一站多端", desc: "小程序、微商城、PC 统一管理" },
      { icon: Users, title: "会员复购", desc: "积分、储值、等级和优惠券" },
      { icon: Share2, title: "分销裂变", desc: "推广员、拼团、社群团购" },
    ],
  },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] pt-16">
      <style>
        {`
          @keyframes litingyunHeroSlide {
            0%, 29% { opacity: 1; transform: translateY(0); pointer-events: auto; }
            33%, 96% { opacity: 0; transform: translateY(14px); pointer-events: none; }
            100% { opacity: 1; transform: translateY(0); pointer-events: auto; }
          }
        `}
      </style>
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
        <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-stretch">
          <aside className="rounded-lg bg-primary p-4 text-primary-foreground shadow-xl shadow-primary/15">
            <div className="mb-3 flex items-center gap-2 px-1 text-sm font-semibold text-white/80">
              <Megaphone className="size-4" />
              产品中心
            </div>
            <nav className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
              {productLinks.map(({ href, icon: Icon, title, tags }) => (
                <Link
                  key={title}
                  href={href}
                  className="group flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-white/12"
                >
                  <Icon className="mt-0.5 size-4 shrink-0 text-white" />
                  <span className="min-w-0">
                    <span className="block text-base font-bold tracking-tight">{title}</span>
                    <span className="mt-0.5 block text-xs font-medium leading-5 text-blue-100/85">{tags}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </aside>

          <div className="relative overflow-hidden rounded-lg bg-white/75 shadow-sm ring-1 ring-blue-100 backdrop-blur">
            <div className="grid h-full xl:grid-cols-[minmax(0,1fr)_360px]">
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
                <div className="relative min-h-[560px] sm:min-h-[520px]">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={slide.eyebrow}
                      className="absolute inset-0 flex flex-col justify-center opacity-0"
                      style={{ animation: "litingyunHeroSlide 15s infinite", animationDelay: `${index * 5}s` }}
                    >
                      <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                        <span className="size-2 rounded-full bg-primary" />
                        {slide.eyebrow}
                      </div>

                      <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl xl:text-[56px]">
                        {slide.title}
                        <span className="text-primary"> {slide.accent}</span>
                      </h1>
                      <p className="mt-3 text-xl font-semibold text-slate-500 sm:text-2xl">{slide.subtitle}</p>
                      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{slide.desc}</p>

                      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={slide.href}
                          className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90")}
                        >
                          {slide.primary}
                          <ArrowRight className="ml-2 size-5" />
                        </Link>
                        <Link
                          href={slide.secondaryHref}
                          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-full border-primary/30 bg-white px-8 text-primary hover:bg-primary/5")}
                        >
                          {slide.secondary}
                        </Link>
                      </div>

                      <div className="mt-10 grid gap-3 sm:grid-cols-3">
                        {slide.proofs.map(({ icon: Icon, title, desc }) => (
                          <div key={title} className="flex gap-3 rounded-lg bg-white/65 p-3 ring-1 ring-blue-100">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-primary">
                              <Icon className="size-4" />
                            </div>
                            <div>
                              <p className="font-semibold text-slate-900">{title}</p>
                              <p className="mt-1 text-sm leading-5 text-slate-500">{desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-0 flex gap-2">
                    {heroSlides.map((slide, index) => (
                      <span key={slide.eyebrow} className={cn("h-1.5 rounded-full bg-primary/25", index === 0 ? "w-10 bg-primary" : "w-5")} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative hidden overflow-hidden bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_100%)] xl:block">
                <div className="absolute right-8 top-12 h-52 w-64 rotate-3 rounded-2xl border border-white/70 bg-white/75 p-5 shadow-2xl shadow-blue-900/10">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="size-3 rounded-full bg-red-300" />
                    <span className="size-3 rounded-full bg-yellow-300" />
                    <span className="size-3 rounded-full bg-green-300" />
                    <span className="ml-2 h-3 flex-1 rounded-full bg-blue-100" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-8 rounded-md bg-primary/90" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-md bg-blue-100" />
                      <div className="h-16 rounded-md bg-sky-100" />
                      <div className="h-16 rounded-md bg-indigo-100" />
                    </div>
                    <div className="h-3 w-4/5 rounded-full bg-blue-100" />
                    <div className="h-3 w-2/3 rounded-full bg-blue-100" />
                  </div>
                </div>

                <div className="absolute bottom-10 right-14 w-60 rounded-2xl border border-white/70 bg-white/85 p-5 shadow-2xl shadow-blue-900/10">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-900">AI 获客看板</p>
                    <CheckCircle className="size-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-md bg-blue-50 p-3 text-sm">
                      <span className="text-slate-600">搜索收录</span>
                      <span className="font-bold text-primary">+62%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-sky-50 p-3 text-sm">
                      <span className="text-slate-600">表单线索</span>
                      <span className="font-bold text-primary">+38%</span>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-indigo-50 p-3 text-sm">
                      <span className="text-slate-600">AI 曝光</span>
                      <span className="font-bold text-primary">+24%</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
