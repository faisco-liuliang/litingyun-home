import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { CheckCircle, ArrowRight } from "lucide-react"

const plans = [
  {
    name: "基础版",
    price: "299",
    unit: "元/月",
    desc: "适合个人创业者和微小企业",
    features: ["企业官网 1 个", "独立域名绑定", "模版 50+", "基础 SEO 工具", "表单收集"],
    cta: "立即开通",
    href: "/pricing",
    highlight: false,
  },
  {
    name: "专业版",
    price: "699",
    unit: "元/月",
    desc: "适合成长期中小企业",
    badge: "最受欢迎",
    features: [
      "全功能商城 + 官网",
      "会员管理系统",
      "分销裂变工具",
      "SEO 高级优化",
      "数据分析报表",
      "专属顾问服务",
    ],
    cta: "免费试用 14 天",
    href: "/contact",
    highlight: true,
  },
  {
    name: "旗舰版",
    price: "1,499",
    unit: "元/月",
    desc: "适合快速扩张的成熟企业",
    features: [
      "所有专业版功能",
      "GEO 优化系统",
      "多平台同步运营",
      "API 接口对接",
      "定制化开发支持",
      "驻场培训服务",
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
            透明定价，按需选择
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto text-pretty">
            所有套餐均含免费试用期，满意再付款，零风险起步。
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
