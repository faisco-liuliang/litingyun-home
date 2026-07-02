import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { CheckCircle, ArrowRight, ShoppingCart, Users, TrendingUp, Smartphone, Share2, BarChart3, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "私域商城 - AI 营销商城，小程序+微商城一体化解决方案",
  description:
    "立亭云 AI 私域商城系统，集小程序、微商城、AI 商品文案、智能活动建议、分销裂变、直播带货于一体，帮助企业搭建私域电商闭环。",
  keywords: ["私域商城", "AI 商城", "小程序商城", "微商城", "分销系统", "私域电商"],
}

const features = [
  {
    icon: Sparkles,
    title: "AI 商品文案",
    desc: "根据商品卖点、目标人群和活动主题生成标题、详情页文案、直播话术和朋友圈素材。",
  },
  {
    icon: ShoppingCart,
    title: "1 站 3 端商城",
    desc: "小程序商城、手机微商城、电脑商城统一管理，多渠道流量铺货，消费者随时随地下单。",
  },
  {
    icon: Share2,
    title: "分销裂变",
    desc: "推广员、分销商、社群团购、拼团砍价、邀请有礼，利用老客带新客，低成本获客。",
  },
  {
    icon: Users,
    title: "会员运营",
    desc: "积分商城、等级会员、优惠券、专属价格，精细化运营提升 LTV。",
  },
  {
    icon: Smartphone,
    title: "直播与短视频导购",
    desc: "直播电商、短视频导购和社交活动组合引流，边种草边转化，提升成交效率。",
  },
  {
    icon: TrendingUp,
    title: "智能活动建议",
    desc: "结合商品、客单价和会员数据，推荐秒杀、满减、拼团、优惠券等更适合的促销玩法。",
  },
  {
    icon: BarChart3,
    title: "数据分析",
    desc: "订单、用户、商品多维度数据报表，实时掌握店铺经营状况。",
  },
]

const plans = [
  {
    name: "基础版",
    price: "1,599",
    features: ["1 站 3 端商城", "AI 商品文案", "商品与订单管理", "微信支付", "优惠券", "基础会员功能"],
  },
  {
    name: "豪华版",
    price: "2,699",
    highlight: true,
    features: ["全部基础版功能", "智能活动建议", "分销裂变系统", "拼团秒杀活动", "会员储值/积分", "专属顾问"],
  },
  {
    name: "旗舰版",
    price: "4,999",
    features: ["全部豪华版功能", "直播带货模块", "多商户入驻", "跨店分销", "API 对接", "专属上线培训"],
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
                AI 私域商城系统
                <br />
                <span className="text-blue-400">从获客到复购</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                整合 AI 商品文案、小程序商城、会员运营、分销裂变和直播带货，打造属于企业自己的私域电商阵地，让每一位用户都成为增长引擎。
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

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 赋能私域电商，开箱即用</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从商品上架、内容种草到活动转化，每个环节都有专业工具支撑</p>
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
              <p className="text-muted-foreground">按年展示，可参与买 2 年送 2 年活动，具体权益以顾问确认为准</p>
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
                          <CheckCircle className="size-4 text-primary shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={cn(buttonVariants({ variant: plan.highlight ? "default" : "outline" }), plan.highlight ? "bg-primary text-primary-foreground" : "")}
                    >
                      {plan.highlight ? "免费试用" : "立即开通"}
                    </Link>
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
