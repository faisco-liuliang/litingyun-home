import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, BadgeCheck, CheckCircle, Clock3, Gift } from "lucide-react"

type ProductDetailSectionsProps = {
  tone?: "blue" | "sky" | "emerald" | "violet" | "orange" | "amber" | "rose"
  eyebrow: string
  title: string
  description: string
  capabilities: Array<{ title: string; desc: string }>
  scenarios: Array<{ title: string; desc: string }>
  promoNote?: string
}

const toneClass = {
  blue: "text-blue-600 bg-blue-50 border-blue-100",
  sky: "text-sky-600 bg-sky-50 border-sky-100",
  emerald: "text-emerald-600 bg-emerald-50 border-emerald-100",
  violet: "text-violet-600 bg-violet-50 border-violet-100",
  orange: "text-orange-600 bg-orange-50 border-orange-100",
  amber: "text-amber-600 bg-amber-50 border-amber-100",
  rose: "text-rose-600 bg-rose-50 border-rose-100",
}

export function ProductDetailSections({
  tone = "blue",
  eyebrow,
  title,
  description,
  capabilities,
  scenarios,
  promoNote = "限时活动：开通 2 年送 2 年，部分基础版本是否参与以顾问确认为准。",
}: ProductDetailSectionsProps) {
  return (
    <section className="border-b border-border bg-white px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-stretch">
          <div className="rounded-lg border border-border bg-muted/30 p-6 sm:p-8">
            <Badge className={cn("mb-5 border", toneClass[tone])}>
              <Gift className="size-3" />
              {eyebrow}
            </Badge>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">{description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className={cn(buttonVariants(), "bg-primary text-primary-foreground hover:bg-primary/90")}>
                领取活动方案
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link href="/pricing" className={cn(buttonVariants({ variant: "outline" }))}>
                查看价格中心
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-primary/15 bg-primary p-6 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-lg bg-white/15">
                <BadgeCheck className="size-5" />
              </div>
              <div>
                <p className="text-sm text-white/70">当前促销</p>
                <p className="text-2xl font-bold">买 2 年送 2 年</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/78">{promoNote}</p>
            <div className="mt-5 grid gap-3">
              {[
                ["7 天体验", "先试用，再决定版本"],
                ["顾问陪跑", "从资料整理到上线配置"],
                ["价格透明", "功能、活动和第三方成本提前说明"],
              ].map(([label, text]) => (
                <div key={label} className="flex gap-3 rounded-lg bg-white/10 p-3">
                  <Clock3 className="mt-0.5 size-4 shrink-0 text-white" />
                  <p className="text-sm leading-5">
                    <span className="font-semibold">{label}</span>
                    <span className="text-white/70"> · {text}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="mb-5">
              <p className="text-sm font-semibold text-primary">核心功能</p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">把产品能力拆成可落地的经营动作</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map((item) => (
                <Card key={item.title} className="rounded-lg border-border bg-card">
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle className="size-4 text-primary" />
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5">
              <p className="text-sm font-semibold text-primary">适用场景</p>
              <h3 className="mt-2 text-2xl font-bold text-foreground">哪些企业适合优先上</h3>
            </div>
            <div className="grid gap-4">
              {scenarios.map((item) => (
                <div key={item.title} className="rounded-lg border border-border bg-white p-5">
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
