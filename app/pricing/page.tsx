import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle,
  Clock3,
  GraduationCap,
  LayoutTemplate,
  Megaphone,
  Phone,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "价格中心 - 立亭云全产品套餐",
  description:
    "立亭云价格中心，覆盖企业官网、私域商城、门店系统、教育系统、服务预约、营销工具、GEO 优化等产品套餐，开 2 年送 2 年，专属顾问协助上线。",
  keywords: ["立亭云价格", "建站费用", "商城小程序价格", "企业官网套餐", "门店系统价格"],
  alternates: { canonical: "https://litingyun.com/pricing" },
  openGraph: {
    url: "https://litingyun.com/pricing",
    title: "价格中心 - 立亭云全产品套餐",
    description: "多产品线清晰报价，开 2 年送 2 年，适合企业官网、商城、门店、教育和营销增长场景。",
  },
}

const promoStats = [
  { label: "活动权益", value: "开 2 年送 2 年" },
  { label: "试用支持", value: "7 天体验" },
  { label: "上线陪跑", value: "顾问全程指导" },
]

const products = [
  {
    id: "website",
    name: "企业官网",
    icon: LayoutTemplate,
    summary: "适合展示型官网、获客型官网、SEO 内容站。",
    startPrice: "¥698/年起",
    bestFor: "品牌展示 / 百度收录 / 表单获客",
    plans: [
      {
        name: "初级版",
        price: "698",
        note: "轻量官网快速上线",
        features: ["电脑 + 手机自适应", "独立域名绑定", "SSL 证书", "基础 SEO 设置", "表单线索收集"],
      },
      {
        name: "标准版",
        price: "1,298",
        note: "企业官网常用选择",
        popular: true,
        features: ["全部初级版功能", "栏目与页面不限", "新闻/案例管理", "关键词与描述配置", "访问数据统计", "顾问协助上线"],
      },
      {
        name: "高级版",
        price: "1,998",
        note: "搜索获客与内容运营",
        features: ["全部标准版功能", "SEO 结构化优化", "站点地图生成", "多语言扩展", "内容运营建议", "月度网站检查"],
      },
    ],
  },
  {
    id: "mall",
    name: "私域商城",
    icon: ShoppingBag,
    summary: "适合小程序商城、会员复购、分销裂变。",
    startPrice: "¥1,599/年起",
    bestFor: "商品销售 / 会员运营 / 分销活动",
    plans: [
      {
        name: "基础版",
        price: "1,599",
        note: "小程序商城起步",
        features: ["商品与订单管理", "微信支付", "优惠券", "会员资料", "基础数据报表"],
      },
      {
        name: "豪华版",
        price: "2,699",
        note: "活动运营主推版本",
        popular: true,
        features: ["全部基础版功能", "拼团/秒杀/砍价", "分销员体系", "会员积分", "直播带货入口", "运营顾问指导"],
      },
      {
        name: "旗舰版",
        price: "4,999",
        note: "多团队增长经营",
        features: ["全部豪华版功能", "多仓库存", "跨店分销", "API 对接", "私域活动方案", "专属上线培训"],
      },
    ],
  },
  {
    id: "store",
    name: "门店系统",
    icon: Store,
    summary: "适合单店、连锁店、会员储值和核销。",
    startPrice: "¥1,299/年起",
    bestFor: "门店收银 / 会员储值 / 连锁管理",
    plans: [
      {
        name: "单店版",
        price: "1,299",
        note: "单门店数字化经营",
        features: ["门店商品管理", "会员储值", "到店核销", "员工账号", "营业报表"],
      },
      {
        name: "连锁版",
        price: "2,299",
        note: "多门店统一运营",
        popular: true,
        features: ["全部单店版功能", "10 家门店", "跨店会员通用", "总部数据汇总", "门店独立权限", "活动配置"],
      },
      {
        name: "集团版",
        price: "3,699",
        note: "区域连锁与总部管控",
        features: ["全部连锁版功能", "门店数量不限", "区域权限", "API 对接 ERP", "经营看板", "专属实施服务"],
      },
    ],
  },
  {
    id: "education",
    name: "教育系统",
    icon: GraduationCap,
    summary: "适合知识付费、训练营、机构课程售卖。",
    startPrice: "¥1,599/年起",
    bestFor: "课程销售 / 学员管理 / 直播录播",
    plans: [
      {
        name: "入门版",
        price: "1,599",
        note: "课程售卖快速上线",
        features: ["图文/音视频课程", "课程订单", "学员管理", "微信支付", "学习记录"],
      },
      {
        name: "专业版",
        price: "2,999",
        note: "机构与训练营推荐",
        popular: true,
        features: ["全部入门版功能", "直播课程", "会员订阅", "邀请返佣", "作业打卡", "数据报表"],
      },
      {
        name: "机构版",
        price: "4,999",
        note: "多讲师课程矩阵",
        features: ["全部专业版功能", "多讲师协作", "班级管理", "课程分销", "API 对接", "专属培训"],
      },
    ],
  },
  {
    id: "booking",
    name: "服务预约",
    icon: CalendarDays,
    summary: "适合预约到店、上门服务、咨询排期。",
    startPrice: "¥999/年起",
    bestFor: "预约排班 / 到店核销 / 服务订单",
    plans: [
      {
        name: "轻量版",
        price: "999",
        note: "单业务预约",
        features: ["服务项目", "预约日历", "短信/微信提醒", "订单管理", "基础核销"],
      },
      {
        name: "标准版",
        price: "1,699",
        note: "多员工排班推荐",
        popular: true,
        features: ["全部轻量版功能", "员工排班", "预约定金", "会员优惠", "服务评价", "数据统计"],
      },
      {
        name: "高级版",
        price: "2,999",
        note: "多门店服务团队",
        features: ["全部标准版功能", "多门店预约", "资源占用规则", "服务套餐", "企业微信通知", "定制流程"],
      },
    ],
  },
  {
    id: "tools",
    name: "营销工具",
    icon: Wrench,
    summary: "适合裂变活动、留资页面、节日营销。",
    startPrice: "¥699/年起",
    bestFor: "活动获客 / 表单留资 / 私域增长",
    plans: [
      {
        name: "基础版",
        price: "699",
        note: "日常活动工具",
        features: ["营销落地页", "表单留资", "优惠券", "抽奖活动", "线索导出"],
      },
      {
        name: "增长版",
        price: "1,299",
        note: "私域裂变常用",
        popular: true,
        features: ["全部基础版功能", "分享裂变", "助力活动", "渠道码", "企微承接", "活动数据看板"],
      },
      {
        name: "矩阵版",
        price: "2,499",
        note: "多活动多团队协作",
        features: ["全部增长版功能", "多活动并行", "多账号权限", "客户标签", "活动复盘报告", "顾问策划"],
      },
    ],
  },
  {
    id: "geo",
    name: "GEO 优化",
    icon: SearchCheck,
    summary: "适合 AI 搜索曝光、品牌内容资产建设。",
    startPrice: "¥2,999/年起",
    bestFor: "AI 推荐 / 内容结构 / 品牌实体",
    plans: [
      {
        name: "诊断版",
        price: "2,999",
        note: "明确优化方向",
        features: ["品牌实体诊断", "竞品问答采样", "内容缺口分析", "基础结构化建议", "优化报告"],
      },
      {
        name: "增长版",
        price: "5,999",
        note: "持续内容优化",
        popular: true,
        features: ["全部诊断版内容", "问答内容库", "官网内容优化", "Schema 建议", "月度追踪报告", "顾问复盘"],
      },
      {
        name: "托管版",
        price: "12,000",
        note: "品牌长期占位",
        features: ["全部增长版内容", "内容月更", "品牌百科建议", "行业专题页", "多渠道引用建设", "专项运营会"],
      },
    ],
  },
]

const comparisonRows = [
  ["建站与装修", "模板装修", "高级页面", "定制页面/专题"],
  ["营销能力", "基础活动", "裂变活动", "组合活动策划"],
  ["数据分析", "基础报表", "经营看板", "专项复盘报告"],
  ["服务支持", "在线客服", "顾问协助上线", "专属实施与培训"],
  ["适合阶段", "刚上线", "稳定经营", "多团队增长"],
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16 bg-background">
        <section className="border-b border-border bg-[linear-gradient(180deg,#f8fafc_0%,#eef6ff_100%)] px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge className="mb-5 border-primary/20 bg-white text-primary shadow-sm">
                <Sparkles className="size-3" />
                限时活动 · 多产品线可参与
              </Badge>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                立亭云全产品套餐价格
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                参考成熟建站平台的套餐结构，按企业官网、商城、门店、教育、预约、营销和 GEO 优化拆分版本。现在开通 2 年直接送 2 年，适合一次性把线上业务体系搭起来。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "h-12 bg-primary px-8 text-primary-foreground hover:bg-primary/90")}
                >
                  领取套餐报价
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <a
                  href="tel:400-000-0000"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-white px-6 text-sm font-medium text-foreground shadow-sm transition-colors hover:text-primary"
                >
                  <Phone className="size-4" />
                  400-000-0000
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-white p-5 shadow-xl shadow-primary/10">
              <div className="rounded-xl bg-primary p-5 text-primary-foreground">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/75">当前优惠</p>
                    <p className="mt-1 text-3xl font-bold">买 2 年送 2 年</p>
                  </div>
                  <Badge className="bg-white text-primary">限时</Badge>
                </div>
                <p className="mt-4 text-sm leading-6 text-white/80">
                  例如商城豪华版按 2 年付费，合计 ¥5,398，可获得 4 年使用期。企业官网初级版是否参与活动，以顾问最终确认为准。
                </p>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {promoStats.map((item) => (
                  <div key={item.label} className="rounded-xl border border-border bg-muted/40 p-4">
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">产品线总览</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">先选业务类型，再选版本</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                价格按年展示，实际开通可叠加活动年限、顾问服务和实施内容。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {products.map(({ id, icon: Icon, name, startPrice, bestFor }) => (
                <Card key={name} className="rounded-lg border-border bg-card shadow-sm">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <Link href={`#${id}`} className="font-semibold text-foreground transition-colors hover:text-primary">
                        {name}
                      </Link>
                      <p className="mt-1 text-lg font-bold text-primary">{startPrice}</p>
                      <p className="mt-2 text-xs leading-5 text-muted-foreground">{bestFor}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 rounded-lg border border-border bg-white p-3 shadow-sm">
              <div className="flex flex-wrap gap-2">
                {products.map(({ id, name, icon: Icon }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="inline-flex h-10 items-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="size-4" />
                    {name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              {products.map((product) => {
                const Icon = product.icon
                return (
                  <section key={product.id} id={product.id} className="scroll-mt-24">
                    <div className="mb-5 flex flex-col gap-4 rounded-lg border border-border bg-muted/40 p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-3">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">{product.name}</h2>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{product.summary}</p>
                        </div>
                      </div>
                      <div className="rounded-lg border border-primary/15 bg-white px-4 py-3">
                        <p className="text-xs text-muted-foreground">起步价格</p>
                        <p className="mt-1 text-lg font-bold text-primary">{product.startPrice}</p>
                      </div>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-3">
                      {product.plans.map((plan) => (
                        <Card
                          key={plan.name}
                          className={cn(
                            "relative rounded-lg border-border bg-card shadow-sm",
                            plan.popular && "border-primary shadow-xl shadow-primary/10"
                          )}
                        >
                          {plan.popular && (
                            <div className="absolute right-4 top-4">
                              <Badge className="bg-primary text-primary-foreground">推荐</Badge>
                            </div>
                          )}
                          <CardHeader className="pb-3 pr-20">
                            <CardTitle className="text-lg">{plan.name}</CardTitle>
                            <p className="text-sm text-muted-foreground">{plan.note}</p>
                          </CardHeader>
                          <CardContent className="flex flex-1 flex-col gap-5">
                            <div>
                              <div className="flex items-end gap-1">
                                <span className="text-4xl font-bold tracking-tight text-foreground">¥{plan.price}</span>
                                <span className="pb-1 text-sm text-muted-foreground">/年</span>
                              </div>
                              <p className="mt-2 text-xs text-muted-foreground">开 2 年送 2 年，到手 4 年使用期</p>
                            </div>
                            <Separator />
                            <ul className="flex flex-col gap-2.5">
                              {plan.features.map((feature) => (
                                <li key={feature} className="flex gap-2 text-sm leading-5 text-foreground">
                                  <CheckCircle className="mt-0.5 size-4 shrink-0 text-primary" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href="/contact"
                              className={cn(
                                buttonVariants({ variant: plan.popular ? "default" : "outline" }),
                                "mt-auto w-full"
                              )}
                            >
                              咨询此套餐
                            </Link>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-primary">版本权益</p>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">三档版本怎么选</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                大多数企业从中间档开始最稳：功能够用、活动完整、顾问能协助上线。
              </p>
            </div>
            <div className="overflow-x-auto rounded-lg border border-border">
              <div className="min-w-[720px]">
                <div className="grid grid-cols-4 bg-muted text-sm font-semibold text-foreground">
                  <div className="p-4">能力项</div>
                  <div className="p-4">基础档</div>
                  <div className="p-4">推荐档</div>
                  <div className="p-4">高级档</div>
                </div>
                {comparisonRows.map(([label, basic, pro, top]) => (
                  <div key={label} className="grid grid-cols-4 border-t border-border text-sm">
                    <div className="p-4 font-medium text-foreground">{label}</div>
                    <div className="p-4 text-muted-foreground">{basic}</div>
                    <div className="p-4 font-medium text-primary">{pro}</div>
                    <div className="p-4 text-muted-foreground">{top}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "无隐藏收费", text: "套餐内功能清晰列出，支付、短信、域名等第三方成本会提前说明。" },
              { icon: Clock3, title: "上线有人带", text: "从资料整理、页面搭建到基础配置，顾问按步骤陪跑，不让你自己摸索。" },
              { icon: BadgeCheck, title: "可升级可续费", text: "业务增长后可升级版本，已付年限和活动权益会由顾问协助核算。" },
            ].map(({ icon: Icon, title, text }) => (
              <Card key={title} className="rounded-lg border-border bg-card">
                <CardContent className="p-6">
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="hero-dark-bg px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 bg-white text-primary">顾问报价更准确</Badge>
            <h2 className="text-3xl font-bold text-white">不知道选哪个版本？</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
              告诉我们你的业务类型、门店数量、是否需要商城/小程序/SEO，我们会给你推荐最合适的版本和活动年限。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "h-12 bg-primary px-10 text-primary-foreground hover:bg-primary/90")}>
                免费获取方案
              </Link>
              <a href="tel:400-000-0000" className="inline-flex h-12 items-center gap-2 text-sm font-medium text-slate-200 hover:text-white">
                <Phone className="size-4" />
                400-000-0000
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
