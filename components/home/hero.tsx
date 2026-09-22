"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ContactQrButton } from "@/components/contact/contact-qr-button"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Calendar,
  Globe,
  GraduationCap,
  Layers3,
  Share2,
  ShoppingBag,
  Sparkles,
  Store,
  Users,
} from "lucide-react"

const productLinks = [
  {
    href: "/products/website",
    icon: Globe,
    title: "企业官网",
    tags: "网站建设 + SEO/GEO，官网持续获客",
    featured: true,
  },
  {
    href: "/products/geo",
    icon: Sparkles,
    title: "GEO 优化系统",
    tags: "让 DeepSeek、豆包等大模型推荐品牌",
    featured: true,
    badge: "新品上线",
  },
  {
    href: "/products/mall",
    icon: ShoppingBag,
    title: "私域商城",
    tags: "AI 营销商城，小程序+会员+分销闭环",
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
]

const serviceProofs = [
  {
    icon: BadgeCheck,
    title: "顾问式梳理",
    desc: "先梳理业务、关键词和转化路径",
  },
  {
    icon: BarChart3,
    title: "搜索与 AI 曝光",
    desc: "兼顾百度收录和 AI 问答引用",
  },
  {
    icon: Layers3,
    title: "获客闭环",
    desc: "官网、小程序、内容和咨询承接",
  },
]

const heroSlides = [
  {
    eyebrow: "10分钟轻松做网站 · 30 天启动 GEO 内容布局",
    title: "官网建设",
    accent: "从上线到持续获客",
    subtitle: "先搭建能承接咨询的官网，再让内容持续带来曝光",
    desc: "适合预算有限但希望长期获客的企业：先上线基础官网、核心产品页、案例页和 FAQ，再围绕行业关键词持续布局 SEO/GEO 文章和专题内容。",
    primary: "立即注册",
    secondary: "咨询客服",
    registerHref: "https://jz.fkw.com/model//?_ta=9808",
    proofs: [
      { icon: Globe, title: "营销型官网", desc: "产品页、案例页、FAQ 和表单承接" },
      { icon: BarChart3, title: "内容布局", desc: "关键词、专题页和 GEO 文章规划" },
      { icon: BadgeCheck, title: "30 天启动", desc: "从上线到内容曝光逐步推进" },
    ],
  },
  {
    eyebrow: "AI 搜索品牌曝光 · SEO 与 GEO 双引擎",
    title: "GEO 优化",
    accent: "让品牌更容易被 AI 推荐",
    subtitle: "围绕豆包、元宝、DeepSeek 等问答场景布局品牌内容",
    desc: "从品牌信息、产品资料到行业专题和问答内容，建立更容易被搜索引擎和大模型理解、引用与推荐的内容资产。",
    primary: "立即注册",
    secondary: "咨询客服",
    registerHref: "https://geo.fkw.com/?_ta=9808",
    proofs: [
      { icon: Sparkles, title: "AI 可见度", desc: "提升品牌在 AI 问答中的出现机会" },
      { icon: BarChart3, title: "内容策略", desc: "围绕行业词和用户问题持续布局" },
      { icon: BadgeCheck, title: "品牌智库", desc: "沉淀可复用的品牌与产品资料" },
    ],
  },
  {
    eyebrow: "轻应用 · 预约表单 · 门店服务",
    title: "小程序建设",
    accent: "轻量上线，灵活承接业务",
    subtitle: "门店、预约、表单、会员等场景都能快速搭建",
    desc: "适合先把门店展示、预约留资、服务项目和基础会员沉淀起来，用一个轻量小程序承接客户咨询与日常服务。",
    primary: "立即注册",
    secondary: "咨询客服",
    registerHref: "https://qz.fkw.com/model/?_ta=9808",
    proofs: [
      { icon: Calendar, title: "预约表单", desc: "服务预约、报名咨询、线索收集" },
      { icon: Store, title: "门店展示", desc: "项目、地址、活动一页展示" },
      { icon: BadgeCheck, title: "灵活扩展", desc: "后续可接入会员、支付和营销能力" },
    ],
  },
  {
    eyebrow: "商城小程序 · 会员分销 · 私域复购",
    title: "私域商城",
    accent: "把一次成交变成持续复购",
    subtitle: "把商品、会员、直播和分销放进同一套系统",
    desc: "适合有商品、有复购、有社群资源的商家，用商城小程序承接内容流量，再通过会员、优惠券、拼团和分销持续转化。",
    primary: "立即注册",
    secondary: "咨询客服",
    registerHref: "https://mall.fkw.com/model/?_ta=9808",
    proofs: [
      { icon: ShoppingBag, title: "一站多端", desc: "小程序、微商城、PC 统一管理" },
      { icon: Users, title: "会员复购", desc: "积分、储值、等级和优惠券" },
      { icon: Share2, title: "分销裂变", desc: "推广员、拼团、社群团购" },
    ],
  },
  {
    eyebrow: "官网 + 小程序 + GEO 获客解决方案",
    title: "立亭云",
    accent: "让企业线上入口真正带来客户",
    subtitle: "不只搭建页面，更帮企业被搜索、被 AI 推荐、被客户找到",
    desc: "立亭云为中小企业提供官网建设、小程序搭建、SEO/GEO 内容布局和私域转化方案，帮助品牌在百度、豆包、元宝、DeepSeek 等搜索与 AI 问答场景中获得更多曝光。",
    primary: "立即注册",
    secondary: "咨询客服",
    registerHref: "https://mall.fkw.com/model/1/?_ta=9808",
    proofs: serviceProofs,
  },
]

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  const slide = heroSlides[activeSlide]

  return (
    <section className="relative overflow-hidden bg-[#f5f9ff] pt-14 sm:pt-16">
      <style>
        {`
          @keyframes litingyunHeroSlide {
            0%, 21% { opacity: 1; transform: translateY(0); pointer-events: auto; }
            25%, 96% { opacity: 0; transform: translateY(14px); pointer-events: none; }
            100% { opacity: 1; transform: translateY(0); pointer-events: auto; }
          }
          @keyframes litingyunHeroFade {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 10%, rgba(88,153,255,0.22), transparent 27%), radial-gradient(circle at 92% 12%, rgba(36,108,246,0.12), transparent 25%), linear-gradient(rgba(37,99,235,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.045) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 56px 56px, 56px 56px",
        }}
      />
      <div className="absolute -right-32 top-24 size-96 rounded-full bg-blue-300/15 blur-3xl" />
      <div className="absolute -left-40 bottom-0 size-[28rem] rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[292px_minmax(0,1fr)] lg:items-stretch">
          <aside className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(150deg,#2476f7_0%,#1459d8_58%,#0f45b5_100%)] p-4 text-primary-foreground shadow-[0_24px_60px_-24px_rgba(15,75,190,0.65)] ring-1 ring-white/20 sm:p-5">
            <div className="pointer-events-none absolute -right-16 -top-20 size-52 rounded-full bg-white/15 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 size-52 rounded-full bg-cyan-300/15 blur-2xl" />
            <div className="relative mb-4 flex items-center justify-between px-2 pt-1">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100/80">产品矩阵</span>
              <span className="size-2 rounded-full bg-cyan-200 shadow-[0_0_0_5px_rgba(165,243,252,0.12)]" />
            </div>
            <nav className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
              {productLinks.map(({ href, icon: Icon, title, tags, badge, featured }) => (
                <Link
                  key={title}
                  href={href}
                  className={cn(
                    "group flex items-start gap-3 rounded-2xl px-3.5 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/12",
                    featured && "bg-white/14 ring-1 ring-white/25 shadow-[0_8px_24px_rgba(7,49,135,0.18)] hover:bg-white/20",
                  )}
                >
                  <Icon className={cn("mt-0.5 size-4 shrink-0 text-white", featured && "size-[18px]")} />
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-center gap-2 text-base font-bold tracking-tight">
                      {title}
                      {featured && <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-primary">重点</span>}
                      {badge && <span className="rounded-full bg-white/18 px-2 py-0.5 text-[10px] font-semibold text-white">{badge}</span>}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium leading-5 text-blue-100/85">{tags}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </aside>

          <div className="relative overflow-hidden rounded-[28px] bg-white/90 shadow-[0_24px_70px_-30px_rgba(31,91,180,0.42)] ring-1 ring-white/80 backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/80 to-transparent" />
            <div className="h-full">
              <div className="flex flex-col justify-center px-7 py-11 sm:px-12 sm:py-14 lg:px-20 lg:py-16">
                <div className="relative min-h-[590px] sm:min-h-[550px]">
                    <div
                      key={slide.eyebrow}
                      className="flex h-full flex-col justify-center"
                      style={{ animation: "litingyunHeroFade 420ms ease-out" }}
                    >
                      <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50/70 px-4 py-2 text-sm font-semibold text-primary shadow-[0_6px_18px_rgba(37,99,235,0.08)]">
                        <span className="size-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(37,99,235,0.12)]" />
                        {slide.eyebrow}
                      </div>

                      <h1 className="max-w-5xl text-[2.45rem] font-bold leading-[1.22] tracking-[-0.045em] text-slate-950 sm:text-5xl xl:text-[58px]">
                        {slide.title}
                        <span className="ml-2 text-primary sm:ml-3">{slide.accent}</span>
                      </h1>
                      <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 tracking-tight text-slate-500 sm:text-2xl sm:leading-9">{slide.subtitle}</p>
                      <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">{slide.desc}</p>

                      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={slide.registerHref}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full bg-primary px-8 text-primary-foreground shadow-[0_10px_22px_rgba(26,108,246,0.2)] hover:bg-primary/90")}
                        >
                          {slide.primary}
                          <ArrowRight className="ml-2 size-5" />
                        </Link>
                        <ContactQrButton
                          variant="outline"
                          size="lg"
                          className="h-12 rounded-full border-blue-200 bg-white/80 px-8 text-primary shadow-sm hover:border-primary/40 hover:bg-blue-50"
                        >
                          {slide.secondary}
                        </ContactQrButton>
                      </div>

                      <div className="mt-12 grid gap-4 sm:grid-cols-3">
                        {slide.proofs.map(({ icon: Icon, title, desc }) => (
                          <div key={title} className="group flex gap-3 rounded-2xl bg-gradient-to-br from-white to-blue-50/60 p-3.5 shadow-[0_8px_24px_rgba(39,96,180,0.06)] ring-1 ring-blue-100/80 transition-transform duration-200 hover:-translate-y-1">
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-100/70 text-primary shadow-inner shadow-white">
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
                  <div className="absolute bottom-0 left-0 flex items-center gap-2 rounded-full bg-blue-50/70 px-2 py-2 ring-1 ring-blue-100/80">
                    {heroSlides.map((item, index) => (
                      <button
                        key={item.eyebrow}
                        type="button"
                        aria-label={`切换到第 ${index + 1} 个内容`}
                        aria-current={index === activeSlide ? "true" : undefined}
                        onClick={() => setActiveSlide(index)}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
                          index === activeSlide ? "w-10 bg-primary" : "w-5 bg-primary/25 hover:bg-primary/50",
                        )}
                      />
                    ))}
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
