import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { CheckCircle, ArrowRight, CalendarCheck, Clock, Bell, Star, Map, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "轻应用 / 服务预约系统 - 在线预约、服务管理一体化",
  description:
    "立亭云轻应用服务预约系统，适合美业、医疗、教培、家政等各类服务行业，在线预约、服务管理、会员体系、评价系统一体化解决方案。",
  keywords: ["服务预约系统", "在线预约", "轻应用", "美业预约", "预约管理", "服务管理系统"],
}

const features = [
  { icon: CalendarCheck, title: "在线预约", desc: "客户手机扫码即可预约，服务时间、项目、人员一键选择，极简预约体验。" },
  { icon: Clock, title: "智能排班", desc: "员工排班管理、服务时段配置、超额自动拒绝，轻松应对高峰期预约压力。" },
  { icon: Bell, title: "自动提醒", desc: "预约成功、到店前 1 小时、服务完成后自动发送微信提醒，减少爽约率。" },
  { icon: Map, title: "多门店支持", desc: "连锁门店统一管理，客户可选择就近门店预约，总部数据实时汇总查看。" },
  { icon: Star, title: "服务评价", desc: "服务完成后自动触发评价邀请，好评展示增强信任，差评及时内部处理。" },
  { icon: MessageSquare, title: "私信沟通", desc: "商家与用户在线沟通，需求确认、服务变更实时处理，提升服务满意度。" },
]

const plans = [
  { name: "轻量版", price: "199", features: ["预约管理", "员工管理 5 人", "服务项目 20 项", "微信通知", "基础数据"] },
  { name: "标准版", price: "499", highlight: true, features: ["全部轻量版功能", "员工管理不限", "服务项目不限", "多门店管理 3 家", "会员体系", "数据报表"] },
  { name: "连锁版", price: "999", features: ["全部标准版功能", "多门店不限", "总部统一管理", "API 对接", "自定义表单", "专属顾问"] },
]

export default function BookingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-emerald-900/60 text-emerald-300 border-emerald-700/50">服务预约解决方案</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                轻应用 / 服务预约
                <br />
                <span className="text-emerald-400">让预约管理更简单</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                专为美业、医疗、教培、家政等服务行业设计，在线预约、智能排班、自动提醒、评价管理，帮助服务型企业提升运营效率与客户满意度。
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

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">专业服务预约功能，提升运营效率</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从预约到回访，完整的服务生命周期管理</p>
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
              <p className="text-muted-foreground">按年付费享 8 折优惠</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.name} className={plan.highlight ? "border-primary shadow-lg shadow-primary/10" : "border-border"}>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-base">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-3xl font-bold text-foreground">¥{plan.price}</span>
                        <span className="text-sm text-muted-foreground">/月</span>
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
