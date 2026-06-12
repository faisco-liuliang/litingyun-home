import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { CheckCircle, X, ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "价格中心 - 透明定价，按需选择",
  description:
    "立亭云全产品定价方案，私域商城、企业官网、教育系统、门店管理等各产品线清晰定价，按年付费享 8 折优惠，含免费试用期。",
  keywords: ["立亭云价格", "建站费用", "SaaS 定价", "私域商城价格", "企业官网费用"],
}

const allProducts = [
  {
    id: "mall",
    name: "私域商城",
    plans: [
      { name: "入门版", price: "499", highlight: false, features: ["小程序商城", "商品 500 件", "订单管理", "基础会员", "微信支付"], noFeatures: ["分销系统", "直播带货", "数据报表"] },
      { name: "标准版", price: "999", highlight: true, features: ["小程序商城", "商品不限", "分销裂变", "拼团秒杀", "会员积分", "数据报表", "专属顾问"], noFeatures: ["直播带货", "API 对接"] },
      { name: "旗舰版", price: "1,999", highlight: false, features: ["全部标准版功能", "直播带货", "跨店分销", "API 对接", "定制开发", "驻场服务"], noFeatures: [] },
    ],
  },
  {
    id: "website",
    name: "企业官网",
    plans: [
      { name: "基础建站版", price: "299", highlight: false, features: ["模版 100+", "独立域名", "SSL 证书", "基础 SEO", "表单收集"], noFeatures: ["SEO 监控", "AI 内容", "GEO 优化"] },
      { name: "SEO 优化版", price: "699", highlight: true, features: ["模版不限", "关键词排名监控", "SEO 内容工具", "结构化数据", "流量分析", "专属 SEO 顾问"], noFeatures: ["GEO 优化", "AI 创作"] },
      { name: "全渠道版", price: "1,299", highlight: false, features: ["全部优化版功能", "GEO 内容优化", "AI 内容创作", "外链建设", "月度 SEO 报告", "驻场服务"], noFeatures: [] },
    ],
  },
  {
    id: "education",
    name: "教育系统",
    plans: [
      { name: "入门版", price: "399", highlight: false, features: ["直播 100 人", "录播 50G", "课程销售", "学员管理", "微信支付"], noFeatures: ["会员订阅", "裂变工具", "多讲师"] },
      { name: "专业版", price: "899", highlight: true, features: ["直播 500 人", "录播 500G", "会员订阅", "邀请返佣", "数据报表", "专属顾问"], noFeatures: ["App 定制", "API 对接"] },
      { name: "机构版", price: "1,699", highlight: false, features: ["直播不限人数", "存储不限", "多讲师协作", "API 对接", "专属 App", "驻场服务"], noFeatures: [] },
    ],
  },
  {
    id: "store",
    name: "门店系统",
    plans: [
      { name: "单店版", price: "299", highlight: false, features: ["单门店管理", "会员 5000 人", "储值核销", "基础报表", "微信通知"], noFeatures: ["多门店", "跨店储值", "API 对接"] },
      { name: "连锁版", price: "799", highlight: true, features: ["多门店 10 家", "会员不限", "跨店储值", "积分商城", "数据汇总", "专属顾问"], noFeatures: ["集团数据中台", "API 对接"] },
      { name: "集团版", price: "1,599", highlight: false, features: ["多门店不限", "集团数据中台", "API 对接 ERP", "自定义权限", "定制开发", "驻场培训"], noFeatures: [] },
    ],
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground border-primary/20">透明定价 · 无隐藏费用</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              清晰定价，按需选择
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
              所有套餐含 14 天免费试用期。按年付费享受 8 折优惠，专属顾问一对一免费咨询。
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8")}>
                免费试用 14 天 <ArrowRight className="size-4 ml-2" />
              </Link>
              <a href="tel:400-000-0000" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="size-4" />
                400-000-0000 电话咨询
              </a>
            </div>
          </div>
        </section>

        {/* Pricing Tabs */}
        <section className="py-16 px-4 sm:px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="mall">
              <div className="flex justify-center mb-10">
                <TabsList className="bg-secondary h-auto p-1.5 flex flex-wrap gap-1 rounded-xl">
                  {allProducts.map((p) => (
                    <TabsTrigger
                      key={p.id}
                      value={p.id}
                      className="rounded-lg text-sm px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      {p.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {allProducts.map((product) => (
                <TabsContent key={product.id} value={product.id}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {product.plans.map((plan) => (
                      <Card key={plan.name} className={plan.highlight ? "border-primary shadow-xl shadow-primary/10 relative" : "border-border"}>
                        {plan.highlight && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <Badge className="bg-primary text-primary-foreground px-4">最受欢迎</Badge>
                          </div>
                        )}
                        <CardHeader className="pb-4">
                          <CardTitle className="text-base">{plan.name}</CardTitle>
                          <div className="flex items-baseline gap-1 pt-1">
                            <span className="text-4xl font-bold text-foreground">¥{plan.price}</span>
                            <span className="text-sm text-muted-foreground">/月</span>
                          </div>
                          <p className="text-xs text-muted-foreground">按年付费 ¥{Math.round(parseInt(plan.price.replace(",", "")) * 12 * 0.8).toLocaleString()} 元/年（8 折）</p>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-5">
                          <Separator />
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">包含功能</p>
                            <ul className="flex flex-col gap-2">
                              {plan.features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                                  <CheckCircle className="size-4 text-primary shrink-0" />{f}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {plan.noFeatures.length > 0 && (
                            <div>
                              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">不含功能</p>
                              <ul className="flex flex-col gap-2">
                                {plan.noFeatures.map((f) => (
                                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <X className="size-4 text-muted-foreground/50 shrink-0" />{f}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <Link
                            href="/contact"
                            className={cn(
                              buttonVariants({ variant: plan.highlight ? "default" : "outline" }),
                              plan.highlight ? "bg-primary text-primary-foreground mt-auto" : "mt-auto"
                            )}
                          >
                            {plan.highlight ? "免费试用" : "立即开通"}
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 section-blue-bg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-10">常见价格问题</h2>
            <div className="flex flex-col gap-6">
              {[
                { q: "试用期结束后会自动扣费吗？", a: "不会。试用期到期后系统会提醒您，需要您主动选择套餐并完成付款，不会自动扣费。" },
                { q: "按月付费和按年付费有什么区别？", a: "按年付费享受 8 折优惠，相当于免费使用约 2.5 个月。我们建议稳定使用的客户选择年付方案，更划算。" },
                { q: "可以在套餐之间升级或降级吗？", a: "支持随时升级套餐，差价按天计算补缴。降级在当前套餐到期后生效，不强制中途降级。" },
                { q: "付款后如果不满意可以退款吗？", a: "开通后 7 天内如有质量问题，可申请全额退款。超过 7 天按剩余天数比例退款（年付方案）。" },
              ].map((faq) => (
                <div key={faq.q} className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 hero-dark-bg">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">还有疑问？联系我们</h2>
            <p className="text-slate-300 mb-8">专属顾问为您量身推荐最适合的方案</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-10")}>
                免费咨询顾问
              </Link>
              <a href="tel:400-000-0000" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                <Phone className="size-4" />400-000-0000
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
