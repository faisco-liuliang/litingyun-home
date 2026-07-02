import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CheckCircle, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "官网标准版",
    price: "698",
    unit: "元/年起",
    desc: "适合品牌展示和线索收集",
    features: ["AI 建站", "电脑 + 手机 + 微网站", "独立域名绑定", "基础 SEO 工具", "表单收集"],
    cta: "立即开通",
    href: "/pricing",
    highlight: false,
  },
  {
    name: "商城豪华版",
    price: "2,699",
    unit: "元/年起",
    desc: "适合私域电商和活动运营",
    badge: "最受欢迎",
    features: [
      "1 站 3 端商城",
      "会员储值/积分",
      "分销裂变工具",
      "拼团秒杀活动",
      "直播与短视频导购",
      "专属顾问服务",
    ],
    cta: "免费试用 14 天",
    href: "/contact",
    highlight: true,
  },
  {
    name: "GEO 增长版",
    price: "5,999",
    unit: "元/年起",
    desc: "适合抢占 AI 搜索曝光",
    features: [
      "AI 可见度诊断",
      "专属品牌智库",
      "AI 内容创作",
      "官网内容优化",
      "月度追踪报告",
      "顾问复盘",
    ],
    cta: "联系销售",
    href: "/contact",
    highlight: false,
  },
]

export function PricingPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 section-blue-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            价格方案
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            AI 赋能套餐，按需选择
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            从 AI 建站、私域商城到 GEO 优化，不同阶段都有匹配套餐，满意再付款，零风险起步。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.highlight
                  ? "border-primary shadow-lg shadow-primary/10 relative bg-card"
                  : "border-border bg-card"
              }
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-3 py-1 text-xs">
                    {plan.badge}
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-base font-bold">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.desc}</p>
                <div className="flex items-baseline gap-1 pt-2">
                  <span className="text-3xl font-bold text-foreground">¥{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.unit}</span>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="size-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={cn(
                    buttonVariants({ variant: plan.highlight ? "default" : "outline" }),
                    plan.highlight
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                      : "w-full"
                  )}
                >
                  {plan.cta}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            查看完整价格对比表
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
