import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ProductDetailSections } from "@/components/products/product-detail-sections"
import { cn } from "@/lib/utils"
import { CheckCircle, ArrowRight, CalendarCheck, Clock, Bell, Star, Map, MessageSquare, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "轻应用 / AI 表单与服务预约系统",
  description:
    "立亭云轻应用服务预约系统，支持 AI 表单、服务预约、内容发布、服务管理、会员体系和评价系统，适合美业、医疗、教培、家政等服务行业。",
  keywords: ["AI 表单", "服务预约系统", "在线预约", "轻应用", "美业预约", "预约管理", "服务管理系统"],
}

const features = [
  { icon: Sparkles, title: "AI 表单生成", desc: "根据行业和业务目标，快速生成报名、咨询、报价、预约等表单字段和提示文案。" },
  { icon: CalendarCheck, title: "服务预约", desc: "客户手机扫码即可预约，服务时间、项目、人员一键选择，适合门诊、美业、家政和咨询排期。" },
  { icon: Clock, title: "智能排班", desc: "员工排班管理、服务时段配置、超额自动拒绝，轻松应对高峰期预约压力。" },
  { icon: Bell, title: "自动提醒", desc: "预约成功、到店前 1 小时、服务完成后自动发送微信提醒，减少爽约率。" },
  { icon: Map, title: "多端发布", desc: "支持微信、百度、抖音、头条、支付宝、快手等多端小程序场景，内容一次配置多端展示。" },
  { icon: Star, title: "服务评价", desc: "服务完成后自动触发评价邀请，好评展示增强信任，差评及时内部处理。" },
  { icon: MessageSquare, title: "内容与支付", desc: "支持内容展示、表单收集、在线支付、内容付费和流量主广告，兼顾展示与转化。" },
]

const plans = [
  { name: "轻量版", price: "999", features: ["AI 表单生成", "预约管理", "服务项目 20 项", "微信通知", "内容展示", "基础数据"] },
  { name: "标准版", price: "1,699", highlight: true, features: ["全部轻量版功能", "万能表单", "员工排班", "在线支付", "会员优惠", "数据报表"] },
  { name: "高级版", price: "2,999", features: ["全部标准版功能", "多端发布", "多门店预约", "内容付费", "企业微信通知", "定制流程"] },
]

const detailCapabilities = [
  { title: "多端发布小程序", desc: "参考凡科轻站能力，内容一次配置，可覆盖微信、百度、抖音、头条、支付宝、快手等小程序场景。" },
  { title: "服务预约和排班", desc: "服务项目、人员、时段、门店和提醒统一配置，减少人工排班和反复沟通。" },
  { title: "万能表单和在线支付", desc: "报名、咨询、报价、预约、信息收集和在线支付都能通过轻应用快速完成。" },
  { title: "内容付费与流量变现", desc: "支持内容展示、知识付费、同城信息发布和流量主广告，适合服务型企业做轻量变现。" },
]

const detailScenarios = [
  { title: "预约型服务", desc: "美业、口腔、体检、家政、维修、摄影、咨询等需要客户选择时间和项目的业务。" },
  { title: "活动报名和线索收集", desc: "招生报名、展会预约、资料领取、报价计算、需求调研等轻量获客场景。" },
  { title: "内容展示型小程序", desc: "适合想快速做品牌介绍、案例展示、服务说明和内容付费的小团队。" },
]

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-emerald-900/60 text-emerald-300 border-emerald-700/50">AI 表单 + 服务预约解决方案</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                轻应用 / AI 表单
                <br />
                <span className="text-emerald-400">让预约管理更简单</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                专为美业、医疗、教培、家政等服务行业设计，AI 表单、在线预约、智能排班、自动提醒和线索摘要，帮助服务型企业提升运营效率与客户满意度。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8")}>
                  免费试用 14 天 <ArrowRight className="size-4 ml-2" />
                </Link>
                <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12")}>
                  查看价格
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductDetailSections
          tone="emerald"
          eyebrow="轻应用限时体验"
          title="不做复杂开发，也能快速上线预约、表单和内容小程序"
          description="轻应用的重点不是重商城，而是用更低门槛完成展示、预约、表单、支付和内容发布。适合服务行业先跑通获客流程，再逐步升级到商城或门店系统。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoNote="轻应用可先体验再选版本，公开入口价格和活动权益会随版本变化，最终以顾问确认为准。"
        />

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 表单 + 服务预约，提升运营效率</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从咨询留资、预约排班到回访复购，完整管理服务生命周期</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-emerald-600" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 section-blue-bg">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">轻应用定价方案</h2>
              <p className="text-muted-foreground">按年展示，轻应用公开入口价格低至 349 元，实际版本和权益以顾问确认为准</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.name} className={plan.highlight ? "border-primary shadow-lg shadow-primary/10" : "border-border"}>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-base">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-3xl font-bold text-foreground">¥{plan.price}</span>
                        <span className="text-sm text-muted-foreground">/年</span>
                      </div>
                    </div>
                    <Separator />
                    <ul className="flex flex-col gap-2">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="size-4 text-primary shrink-0" />{feat}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={cn(buttonVariants({ variant: plan.highlight ? "default" : "outline" }), plan.highlight ? "bg-primary text-primary-foreground" : "")}>
                      {plan.highlight ? "免费试用" : "立即开通"}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">让服务预约更专业</h2>
            <p className="text-blue-100 mb-8">14 天免费体验，无需技术背景即可上线</p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-blue-50 h-12 px-10")}>
              立即免费试用 <ArrowRight className="size-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
