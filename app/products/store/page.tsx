import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowRight, Store, Users, CreditCard, BarChart3, Gift, Smartphone } from "lucide-react"

export const metadata: Metadata = {
  title: "门店系统 - 多门店统一管理、会员体系一体化",
  description:
    "立亭云门店管理系统，支持连锁多门店统一管理，会员积分、储值卡、优惠券核销、数据报表，帮助零售和服务连锁企业提升运营效率。",
  keywords: ["门店管理系统", "多门店管理", "会员系统", "连锁管理", "收银系统", "储值卡管理"],
}

const features = [
  { icon: Store, title: "多门店管理", desc: "总部统一配置，各门店独立运营，实时数据汇总，轻松管理 1~100 家连锁门店。" },
  { icon: Users, title: "会员体系", desc: "等级会员、积分商城、生日权益，精细化运营提升会员消费频次和客单价。" },
  { icon: CreditCard, title: "储值核销", desc: "储值充值、余额消费、跨店通用，支持微信/支付宝/现金多种收款方式。" },
  { icon: Gift, title: "优惠券管理", desc: "满减券、折扣券、品类券灵活配置，精准发放，促进消费转化。" },
  { icon: BarChart3, title: "经营报表", desc: "门店营收、会员增长、商品销量多维度数据看板，实时掌握经营健康度。" },
  { icon: Smartphone, title: "员工管理", desc: "员工账号权限分级、提成核算、考勤记录，高效管理门店人员团队。" },
]

const plans = [
  { name: "单店版", price: "299", features: ["单门店管理", "会员管理 5000 人", "储值卡核销", "基础报表", "微信通知"] },
  { name: "连锁版", price: "799", highlight: true, features: ["多门店管理 10 家", "会员管理不限", "跨店通用储值", "积分商城", "营业数据汇总", "专属顾问"] },
  { name: "集团版", price: "1,599", features: ["多门店不限", "集团数据中台", "API 对接 ERP", "自定义角色权限", "定制开发支持", "驻场培训"] },
]

export default function StorePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-orange-900/60 text-orange-300 border-orange-700/50">门店管理解决方案</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                门店系统 / 连锁管理
                <br />
                <span className="text-orange-400">统一管理，高效运营</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                专为连锁零售和服务企业设计，多门店统一管理、会员积分储值、数据实时汇总，帮助连锁品牌提升整体运营效率和客户粘性。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8" asChild>
                  <Link href="/contact">免费试用 14 天 <ArrowRight className="size-4 ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12" asChild>
                  <Link href="/cases">查看案例</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">完整连锁管理功能，开箱即用</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从单店到集团，可扩展的门店数字化管理平台</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-orange-600" />
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
              <h2 className="text-3xl font-bold text-foreground mb-3">门店系统定价方案</h2>
              <p className="text-muted-foreground">按年付费享 8 折优惠，支持免费迁移数据</p>
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
                    <Button className={plan.highlight ? "bg-primary text-primary-foreground" : ""} variant={plan.highlight ? "default" : "outline"} asChild>
                      <Link href="/contact">{plan.highlight ? "免费试用" : "立即开通"}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">开始管理您的连锁门店</h2>
            <p className="text-blue-100 mb-8">免费数据迁移，7 天快速上线</p>
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 h-12 px-10" asChild>
              <Link href="/contact">免费试用 <ArrowRight className="size-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
