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
import { CheckCircle, ArrowRight, Store, Users, CreditCard, BarChart3, Gift, Smartphone, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "门店系统 - AI 辅助经营，多门店会员体系一体化",
  description:
    "立亭云门店管理系统，支持 AI 经营分析、连锁多门店统一管理、会员积分、储值卡、优惠券核销、数据报表，帮助连锁企业提升运营效率。",
  keywords: ["AI 门店经营", "门店管理系统", "多门店管理", "会员系统", "连锁管理", "收银系统", "储值卡管理"],
}

const features = [
  { icon: Sparkles, title: "AI 经营分析", desc: "自动解读营收、客单价、复购率和会员增长变化，帮老板更快发现经营问题。" },
  { icon: Store, title: "多门店管理", desc: "总部统一配置，各门店独立运营，实时数据汇总，轻松管理 1~100 家连锁门店。" },
  { icon: Users, title: "会员分层运营", desc: "按消费频次、客单价、活跃度自动分层，配合积分、生日权益和专属优惠提升复购。" },
  { icon: CreditCard, title: "储值核销", desc: "储值充值、余额消费、跨店通用，支持微信/支付宝/现金多种收款方式。" },
  { icon: Gift, title: "智能活动建议", desc: "结合门店库存、节日节点和会员画像，推荐满减、折扣、储值赠送等活动方案。" },
  { icon: BarChart3, title: "经营报表", desc: "门店营收、会员增长、商品销量多维度数据看板，实时掌握经营健康度。" },
  { icon: Smartphone, title: "员工管理", desc: "员工账号权限分级、提成核算、考勤记录，高效管理门店人员团队。" },
]

const plans = [
  { name: "单店版", price: "1,299", features: ["AI 经营分析", "单门店管理", "会员储值", "到店核销", "员工账号", "营业报表"] },
  { name: "连锁版", price: "2,299", highlight: true, features: ["全部单店版功能", "会员分层运营", "10 家门店", "跨店会员通用", "总部数据汇总", "活动配置"] },
  { name: "集团版", price: "3,699", features: ["全部连锁版功能", "门店数量不限", "区域权限", "API 对接 ERP", "经营看板", "专属实施服务"] },
]

const detailCapabilities = [
  { title: "多门店统一管理", desc: "总部统一商品、员工、会员和活动配置，各门店独立运营，总部实时看数据。" },
  { title: "会员储值和跨店核销", desc: "储值卡、次卡、积分、优惠券和跨店核销，帮助门店把客户沉淀到自己的会员体系。" },
  { title: "经营报表和 AI 分析", desc: "围绕营收、客单价、复购率、会员增长和商品销量做经营解读，帮助老板更快决策。" },
  { title: "线上预约和到店转化", desc: "与轻应用/预约能力组合，完成线上留资、预约、到店核销和二次复购。" },
]

const detailScenarios = [
  { title: "单店数字化起步", desc: "适合先解决会员、储值、核销、活动和基础报表问题。" },
  { title: "多门店统一运营", desc: "适合美业、餐饮、零售、生活服务等需要总部管控和门店执行的连锁品牌。" },
  { title: "线下转私域", desc: "适合有线下客流，但客户信息分散、复购触达弱的门店。" },
]

export default function StorePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-orange-900/60 text-orange-300 border-orange-700/50">AI 辅助门店经营解决方案</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                门店系统 / AI 经营
                <br />
                <span className="text-orange-400">统一管理，高效运营</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                专为连锁零售和服务企业设计，AI 经营分析、多门店统一管理、会员分层、储值核销和数据实时汇总，帮助连锁品牌提升运营效率和客户粘性。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8")}>
                  免费试用 14 天 <ArrowRight className="size-4 ml-2" />
                </Link>
                <Link href="/cases" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12")}>
                  查看案例
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductDetailSections
          tone="orange"
          eyebrow="门店系统活动"
          title="先统一会员和门店数据，再做储值、复购和连锁管理"
          description="门店系统的重点是把线下经营动作数字化：会员沉淀、储值核销、员工权限、门店活动、总部报表和 AI 经营分析，适合线下门店从单店走向连锁。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoNote="门店系统可参与买 2 年送 2 年活动，数据迁移、门店数量和实施范围以实际方案确认为准。"
        />

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 经营分析 + 连锁管理，开箱即用</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从单店到集团，可扩展、可复盘的门店数字化管理平台</p>
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
              <p className="text-muted-foreground">按年展示，可参与买 2 年送 2 年活动，支持免费迁移数据</p>
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">开始管理您的连锁门店</h2>
            <p className="text-blue-100 mb-8">免费数据迁移，7 天快速上线</p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-blue-50 h-12 px-10")}>
              免费试用 <ArrowRight className="size-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
