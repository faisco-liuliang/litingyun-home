import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowRight, ShoppingCart, Users, TrendingUp, Smartphone, Share2, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "私域商城 - 小程序+微商城一体化解决方案",
  description:
    "立亭云私域商城系统，集小程序、微商城、分销裂变、直播带货于一体，帮助企业快速搭建私域电商闭环，提升用户留存与复购率。",
  keywords: ["私域商城", "小程序商城", "微商城", "分销系统", "私域电商"],
}

const features = [
  {
    icon: ShoppingCart,
    title: "多端商城",
    desc: "小程序 + H5 + PC 三端同步，消费者随时随地下单，零门槛购物体验。",
  },
  {
    icon: Share2,
    title: "分销裂变",
    desc: "二级分销、拼团、砍价、邀请有礼，利用老客带新客，低成本获客。",
  },
  {
    icon: Users,
    title: "会员运营",
    desc: "积分商城、等级会员、优惠券、专属价格，精细化运营提升 LTV。",
  },
  {
    icon: Smartphone,
    title: "直播带货",
    desc: "微信直播间一键导流商品，边播边买，实时互动提升转化率。",
  },
  {
    icon: TrendingUp,
    title: "营销工具",
    desc: "限时秒杀、满减优惠、包邮活动，多种促销玩法一键配置。",
  },
  {
    icon: BarChart3,
    title: "数据分析",
    desc: "订单、用户、商品多维度数据报表，实时掌握店铺经营状况。",
  },
]

const plans = [
  {
    name: "入门版",
    price: "499",
    features: ["小程序商城", "商品管理 500 件", "订单管理", "基础会员功能", "微信支付"],
  },
  {
    name: "标准版",
    price: "999",
    highlight: true,
    features: ["全部入门版功能", "分销裂变系统", "拼团秒杀活动", "会员积分体系", "数据报表", "专属顾问"],
  },
  {
    name: "旗舰版",
    price: "1,999",
    features: ["全部标准版功能", "直播带货模块", "跨店分销", "API 对接", "定制开发", "驻场服务"],
  },
]

export default function MallPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-blue-900/60 text-blue-300 border-blue-700/50">
                私域电商解决方案
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                私域商城系统
                <br />
                <span className="text-blue-400">从流量到留量</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                整合小程序、微商城、分销、直播带货，打造属于企业自己的私域电商阵地，让每一位用户都成为您的增长引擎。
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

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">全套私域电商功能，开箱即用</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从建店到运营，每个环节都有专业工具支撑</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-blue-600" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">私域商城定价方案</h2>
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
                          <CheckCircle className="size-4 text-primary shrink-0" />
                          {feat}
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

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">
              立即开启您的私域商城之旅
            </h2>
            <p className="text-blue-100 mb-8">14 天免费试用，专属顾问全程陪跑</p>
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
