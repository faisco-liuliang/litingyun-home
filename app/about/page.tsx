import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { defaultRegisterUrl } from "@/lib/product-links"
import { ArrowRight, Users, Target, Heart, Award, Mail, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "关于立亭云 - 企业官网建设与 GEO 内容承接服务",
  description:
    "立亭云面向企业客户提供官网建设、GEO 内容承接、产品展示、表单询盘和搜索内容布局服务，帮助企业搭建能展示品牌、承接咨询并持续获客的线上入口。",
  keywords: ["立亭云", "企业官网建设", "GEO 内容承接", "网站建设", "企业获客"],
  alternates: { canonical: "https://litingyun.fkw.com/about" },
  openGraph: {
    url: "https://litingyun.fkw.com/about",
    title: "关于立亭云 - 企业官网建设与 GEO 内容承接服务",
    description: "从官网建设到搜索获客，立亭云帮助企业把线上展示、咨询承接和后续内容布局放在一起规划。",
  },
}

const milestones = [
  { year: "2020", event: "明确企业官网建设与线上获客服务方向" },
  { year: "2021", event: "完善品牌展示、产品页和表单询盘建设方法" },
  { year: "2022", event: "服务制造业、服务型企业和传统行业客户" },
  { year: "2023", event: "将专题页、案例页和搜索内容布局纳入官网规划" },
  { year: "2024", event: "加入 GEO 内容承接，帮助品牌更容易被 AI 理解" },
  { year: "2025", event: "持续优化建站交付、服务器稳定性和安全保护" },
  { year: "2026", event: "形成官网建设、内容布局与咨询转化的一体化服务" },
]

const values = [
  { icon: Target, title: "先梳理再建设", desc: "围绕业务、产品、服务、客户和咨询路径梳理网站结构，让页面从一开始就服务于真实转化。" },
  { icon: Heart, title: "官网与获客一起规划", desc: "不只交付一个展示页面，也同步考虑表单询盘、专题内容、搜索曝光和后续 GEO 布局。" },
  { icon: Users, title: "一对一需求沟通", desc: "提供在线答疑和顾问式沟通，帮助企业把复杂需求拆成清晰、可执行的建设计划。" },
  { icon: Award, title: "稳定安全持续优化", desc: "支持个性化定制，重视服务器稳定、安全保护和多年开发优化，让官网可以长期使用和迭代。" },
]

const productOfferings = [
  {
    category: "企业官网",
    title: "立亭云——企业官网建设",
    desc: "围绕品牌介绍、产品展示、案例内容和表单询盘，搭建能被客户找到、看懂并咨询的企业官网。",
    price: "买三送三参考价格：198 元/年起",
    features: "功能覆盖：品牌展示、产品页、案例页、专题页、表单询盘与 SEO/GEO 内容布局",
    audience: "适合人群：制造业、服务型企业、传统行业，以及希望长期经营线上获客入口的企业。",
  },
  {
    category: "GEO 内容承接",
    title: "立亭云——GEO 内容优化服务",
    desc: "围绕行业关键词、用户问题和品牌资料，规划更容易被搜索引擎与 AI 理解、引用和推荐的内容。",
    price: "支持按企业需求定制方案",
    features: "功能覆盖：品牌信息梳理、问答内容、专题文章、搜索布局与持续内容优化",
    audience: "适合人群：希望提升搜索曝光、AI 问答可见度和品牌长期内容资产的企业。",
  },
  {
    category: "轻应用",
    title: "立亭云——预约与表单小程序",
    desc: "用于企业服务展示、在线预约、报名咨询和线索收集的轻量小程序，快速承接日常业务。",
    price: "参与买二送二活动：99 元/年起",
    features: "功能覆盖：服务展示、在线预约、报名表单、消息提醒与基础客户管理",
    audience: "适合人群：门店、生活服务、教育培训、咨询服务和需要快速承接线索的团队。",
  },
  {
    category: "私域商城",
    title: "立亭云——商城小程序系统",
    desc: "帮助企业在线展示商品、处理订单，并用会员和营销活动承接复购的商城小程序。",
    price: "支持按商品、会员和分销需求定制报价",
    features: "功能覆盖：商品管理、在线下单、订单处理、会员储值、优惠券与分销推广",
    audience: "适合人群：零售品牌、直营官网、轻电商团队和希望沉淀会员复购的企业。",
  },
]

const team = [
  { name: "需", role: "需求梳理", bg: "bg-blue-100 text-blue-700", initial: "需", desc: "梳理企业业务、产品服务、目标客户和网站建设重点。" },
  { name: "内", role: "内容策略", bg: "bg-violet-100 text-violet-700", initial: "内", desc: "规划产品展示、专题页、案例页和 SEO/GEO 内容方向。" },
  { name: "技", role: "技术交付", bg: "bg-emerald-100 text-emerald-700", initial: "技", desc: "负责网站实现、个性化定制、服务器稳定和安全保护。" },
  { name: "服", role: "客户支持", bg: "bg-orange-100 text-orange-700", initial: "服", desc: "提供一对一沟通、在线答疑和上线后的持续优化支持。" },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-blue-900/60 text-blue-300 border-blue-700/50">关于立亭云</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                我们帮助企业搭建
                <br />
                <span className="text-blue-400">能展示也能获客的官网</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl text-pretty">
                立亭云是一款面向企业客户的官网建设与 GEO 内容承接服务工具，适合制造业、服务型企业、传统行业和有长期线上获客需求的客户。
              </p>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "官网 + GEO", label: "一体化规划" },
                { value: "1 对 1", label: "需求梳理与答疑" },
                { value: "可定制", label: "适配不同业务" },
                { value: "长期", label: "开发与内容优化" },
              ].map((s) => (
                <div key={s.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{s.value}</div>
                  <div className="text-xs text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">我们的使命</p>
                <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
                  让企业官网不只是展示，更能承接咨询和转化
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  立亭云围绕企业官网、服务内容梳理、产品展示、表单询盘、专题页和搜索内容布局进行规划，让网站不仅能展示品牌，也能承接咨询和转化。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  我们适合希望把官网建设和后续搜索获客一起规划的企业，提供一对一需求梳理、在线答疑、个性化定制、稳定服务器、安全保护和多年开发优化支持。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((v) => (
                  <div key={v.title} className="bg-secondary rounded-xl p-5">
                    <div className="size-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                      <v.icon className="size-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{v.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products and pricing */}
        <section className="bg-background px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="mb-14 max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">产品功能与价格</p>
              <h2 className="mb-4 text-3xl font-bold text-foreground text-balance sm:text-4xl">立亭云产品功能与价格</h2>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground">
                立亭云围绕企业官网、内容承接、小程序和商城等常见场景提供标准化产品。企业可以先从基础版本上线，再结合业务规模、流程和营销需求逐步升级。
              </p>
            </div>

            <div className="flex flex-col">
              {productOfferings.map((product, index) => (
                <div key={product.category} className="grid gap-6 md:grid-cols-[220px_minmax(0,1fr)] md:gap-10">
                  <div className="pt-1">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">{product.category}</h3>
                  </div>
                  <div className="relative border-l border-blue-200 pb-10 pl-8 last:pb-0">
                    <span className="absolute -left-[7px] top-1 size-3 rounded-full border-2 border-blue-200 bg-white shadow-[0_0_0_4px_rgba(219,234,254,0.65)]" />
                    <h4 className="text-lg font-bold text-foreground">{product.title}</h4>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{product.desc}</p>
                    <p className="mt-4 text-sm font-semibold text-foreground">{product.price}</p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.features}</p>
                    <p className="mt-1 text-sm leading-7 text-muted-foreground">{product.audience}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">发展历程</h2>
              <p className="text-muted-foreground">围绕企业官网与长期线上获客，持续打磨服务</p>
            </div>
            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="size-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1 mb-1 min-h-8" />}
                  </div>
                  <div className="pb-8 pt-2">
                    <span className="text-sm font-semibold text-primary">{m.year}</span>
                    <p className="text-sm text-foreground mt-0.5 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">服务能力</h2>
              <p className="text-muted-foreground">从需求梳理到上线后的持续优化</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card key={member.name} className="border-border text-center">
                  <CardContent className="p-6 flex flex-col items-center gap-3">
                    <div className={`size-16 rounded-full flex items-center justify-center text-2xl font-bold ${member.bg}`}>
                      {member.initial}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{member.name}</h3>
                      <p className="text-xs text-primary mt-0.5">{member.role}</p>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{member.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg" id="contact">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">联系我们</h2>
              <p className="text-muted-foreground">无论您有任何问题，我们都乐于解答</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Mail, label: "企业微信咨询", value: "扫码添加专属顾问", sub: "获取方案、报价和上线支持" },
                { icon: MapPin, label: "适合的企业", value: "制造业 / 服务业 / 传统行业", sub: "支持远程沟通与在线答疑" },
              ].map((contact) => (
                <Card key={contact.label} className="border-border">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="size-12 rounded-xl bg-accent flex items-center justify-center">
                      <contact.icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{contact.label}</p>
                      <p className="text-base font-bold text-primary mt-1">{contact.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{contact.sub}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 hero-dark-bg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">从官网建设开始，规划长期线上获客</h2>
            <p className="text-slate-300 mb-8">网站参与买三送三活动，小程序参与买二送二活动；建站低至 198 元/年起，小程序低至 99 元/年起</p>
            <a href={defaultRegisterUrl} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-10")}>
              立即咨询 <ArrowRight className="size-4 ml-2" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
