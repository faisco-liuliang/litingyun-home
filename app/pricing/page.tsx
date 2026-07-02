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
} from "lucide-react"

export const metadata: Metadata = {
  title: "价格中心 - 立亭云 AI 赋能全产品套餐",
  description:
    "立亭云价格中心，覆盖 AI 建站、私域商城、门店系统、AI 题库教育系统、服务预约、AI 营销工具、GEO 优化等产品套餐。",
  keywords: ["立亭云价格", "AI 建站价格", "商城小程序价格", "企业官网套餐", "GEO 优化价格", "门店系统价格"],
  alternates: { canonical: "https://litingyun.com/pricing" },
  openGraph: {
    url: "https://litingyun.com/pricing",
    title: "价格中心 - 立亭云 AI 赋能全产品套餐",
    description: "多产品线清晰报价，开 2 年送 2 年，适合 AI 建站、商城、门店、教育和营销增长场景。",
  },
}

const promoStats = [
  { label: "官网建站", value: "买 3 年送 3 年" },
  { label: "经营系统", value: "买 2 年送 2 年" },
  { label: "报价口径", value: "对齐凡科版本" },
]

const products = [
  {
    id: "website",
    name: "企业官网",
    icon: LayoutTemplate,
    summary: "AI 建站、SEO/GEO 双优化、品牌官网与外贸站。",
    startPrice: "¥349/年起",
    bestFor: "品牌展示 / 百度收录 / 表单获客",
    promo: "买 3 年送 3 年",
    source: "参考凡科建站版本",
    sourceUrl: "https://jz.fkw.com/proFunc.html",
    plans: [
      {
        name: "网站标准版",
        originalPrice: "698",
        price: "349",
        note: "适合展示型官网快速上线",
        features: ["免费版全部功能", "支持 SEO", "不限流量", "第三方代码支持", "资源库 10G 空间", "电脑 + 手机 + 微网站"],
      },
      {
        name: "网站推广版",
        originalPrice: "998",
        price: "499",
        note: "适合百度收录与内容获客",
        popular: true,
        features: ["标准版全部功能", "百度优化系统", "百度不收录可协助复盘", "AI 智能写作", "多语言与网站统计", "资源库 50G 空间"],
      },
      {
        name: "网站皇冠版",
        originalPrice: "1,498",
        price: "749",
        note: "适合内容、支付和 GEO 增长",
        features: ["推广版全部功能", "支持在线支付", "SEO + GEO 双优化", "知识付费系统", "AI 文章配图与 TDK", "资源库 2T 空间"],
      },
      {
        name: "网站海外版",
        originalPrice: "2,998",
        price: "1,499",
        note: "适合外贸展示和跨境询盘",
        features: ["皇冠版全部功能", "全球 CDN 动态加速", "50 种语言版本", "AI 翻译 10 万 AI 豆", "PayPal 支付/产品询盘", "保证谷歌收录"],
      },
    ],
  },
  {
    id: "mall",
    name: "私域商城",
    icon: ShoppingBag,
    summary: "单商户/多商户商城，交易、会员、分销和高阶营销玩法。",
    startPrice: "¥999/年起",
    bestFor: "商品销售 / 会员运营 / 分销活动",
    promo: "买 2 年送 2 年",
    source: "参考凡科商城版本",
    sourceUrl: "https://mall.fkw.com/proFunc.html",
    plans: [
      {
        name: "商城基础版",
        originalPrice: "1,998",
        price: "999",
        note: "适合品牌展示与核心交易",
        features: ["免费版全部功能", "品牌展示 + 核心交易", "多种支付方式", "物流信息跟踪", "会员/订单一体化管理", "10G 资源空间"],
      },
      {
        name: "商城旗舰版",
        originalPrice: "3,998",
        price: "1,999",
        note: "适合渠道拓展和社交营销",
        popular: true,
        features: ["基础版全部功能", "会员储值", "分销推广", "1.5T 超大容量", "砍价/拼团等社交玩法", "私域直播/短视频导购"],
      },
      {
        name: "商城至尊版",
        originalPrice: "5,998",
        price: "2,999",
        note: "适合一站 3 端和高阶玩法",
        features: ["旗舰版全部功能", "一站 3 端多端铺货", "推广获客/成交转化/复购", "N 元 M 件/礼品卡", "2T 资源空间", "AI 试衣/AI 销售按需扩展"],
      },
    ],
  },
  {
    id: "store",
    name: "门店系统",
    icon: Store,
    summary: "门店通会员、预约、收银、营销和多端小程序经营。",
    startPrice: "¥0/年起",
    bestFor: "门店收银 / 会员储值 / 连锁管理",
    promo: "买 2 年送 2 年",
    source: "参考凡科门店通版本",
    sourceUrl: "https://yk.fkw.com/product.html",
    plans: [
      {
        name: "门店基础版",
        originalPrice: "0",
        price: "0",
        note: "适合零门槛开启数字化",
        features: ["海量模板 3 分钟建店", "20 个产品/服务", "在线预约与销售", "进销存/开单收银/记账", "支持 10 位会员", "AI 店推助手"],
      },
      {
        name: "门店商业版",
        originalPrice: "2,998",
        price: "1,499",
        note: "适合会员营销和预约增长",
        popular: true,
        features: ["基础版全部功能", "会员数 5000 位", "日预约 1000 个", "会员标签 1000 个", "进店有礼/优惠券/发券宝", "微信通知触达员工和会员"],
      },
      {
        name: "门店旗舰版",
        originalPrice: "3,998",
        price: "1,999",
        note: "适合全域引流和私域裂变",
        features: ["商业版全部功能", "会员/商品/预约容量全开放", "抖音小程序/美团团购核销", "全民推广/员工分销/拼团", "付费券包/第二件半价", "AI 美业测评/换发型"],
      },
    ],
  },
  {
    id: "education",
    name: "教育系统",
    icon: GraduationCap,
    summary: "三站合一教育系统，课程、教务、题库、招生和直播教学。",
    startPrice: "¥999/年起",
    bestFor: "课程销售 / 学员管理 / 直播录播",
    promo: "买 2 年送 2 年",
    source: "参考凡科教育版本",
    sourceUrl: "https://edu.fkw.com/proFunc.html",
    plans: [
      {
        name: "教育标准版",
        originalPrice: "1,998",
        price: "999",
        note: "适合课程服务和基础教务",
        features: ["微官网 H5 + 微信小程序", "电脑端 + 百度 SEO + 独立域名", "知识付费 + 线下课程", "基础答题/作业/家校互评", "智能排课 + 扫码签到", "班级/学员/预约上课"],
      },
      {
        name: "教育专业版",
        originalPrice: "2,998",
        price: "1,499",
        note: "适合全渠道招生和助学互动",
        popular: true,
        features: ["标准版全部功能", "抖音小程序 + 百度小程序", "会员标签/等级/付费会员", "3 万题目 + 智能批量录入", "闯关打卡 + 证书颁发", "直播教学 + 推广员分销"],
      },
      {
        name: "教育旗舰版",
        originalPrice: "3,998",
        price: "1,999",
        note: "适合精细化运营和实物售卖",
        features: ["专业版全部功能", "老带新转介绍", "会员储值 + 赠送金额", "1T 容量/单文件 5G", "20 万题库 + 高级刷题", "学习积分/积分商城/实物商品"],
      },
    ],
  },
  {
    id: "booking",
    name: "轻应用",
    icon: CalendarDays,
    summary: "微信/百度/抖音/快手多端小程序，预约、表单、会员和同城信息。",
    startPrice: "¥349/年起",
    bestFor: "预约排班 / 到店核销 / 服务订单",
    promo: "买 2 年送 2 年",
    source: "参考凡科轻站小程序版本",
    sourceUrl: "https://qz.fkw.com/proFunc.html",
    plans: [
      {
        name: "小程序标准版",
        originalPrice: "698",
        price: "349",
        note: "适合基础展示和信息收集",
        features: ["免费版全部功能", "微信/百度端", "访客不限", "服务预约", "万能表单", "资源空间 1G"],
      },
      {
        name: "小程序推广版",
        originalPrice: "1,198",
        price: "599",
        note: "适合品牌展示和流量加持",
        popular: true,
        features: ["标准版全部功能", "抖音/快手等 6 端合一", "隐藏制作信息", "24 种流量/商机转化", "视频号/抖音直播间跳转", "资源空间 100G"],
      },
      {
        name: "小程序商务版",
        originalPrice: "1,998",
        price: "999",
        note: "适合行业营销和支付预约",
        features: ["推广版全部功能", "会员等级", "微信支付（表单/服务预约）", "推广员", "集 Call/督学", "查询缴费/计算报价/1T 空间"],
      },
    ],
  },
  {
    id: "geo",
    name: "GEO 优化",
    icon: SearchCheck,
    summary: "AI 可见度诊断、品牌监控、内容创作和多平台自动发文。",
    startPrice: "¥1,998/年起",
    bestFor: "AI 推荐 / 内容结构 / 品牌实体",
    promo: "按点数与权益报价",
    source: "参考凡科极鸥 GEO 版本",
    sourceUrl: "https://geo.fkw.com/proFunc.html",
    plans: [
      {
        name: "GEO 基础版",
        originalPrice: "3,996",
        price: "1,998",
        note: "适合精准布局 AI 回答关键位",
        features: ["20 万点数/年", "最多 50 份可见度报告", "每份报告 30 个提问词", "1 个品牌监控", "最多创作 5000 篇文章", "20 个自媒体账号"],
      },
      {
        name: "GEO 专业版",
        originalPrice: "7,996",
        price: "3,998",
        note: "适合全域覆盖品牌 AI 竞争力",
        popular: true,
        features: ["40 万点数/年", "最多 100 份可见度报告", "每份报告 50 个提问词", "3 个品牌监控", "最多创作 10000 篇文章", "50 个自媒体账号"],
      },
      {
        name: "GEO 旗舰版",
        originalPrice: "10,996",
        price: "5,998",
        note: "适合锁定品牌 AI 声量领先位",
        features: ["80 万点数/年", "最多 200 份可见度报告", "最多 5 个品牌监控", "竞品追踪最多 20 个", "最多创作 20000 篇文章", "200 个自媒体账号"],
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
        <section className="border-b border-border bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] px-4 py-8 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="rounded-lg bg-primary p-4 text-primary-foreground shadow-xl shadow-primary/15">
              <div className="mb-3 flex items-center gap-2 px-1 text-sm font-semibold text-white/80">
                <Megaphone className="size-4" />
                产品价格
              </div>
              <nav className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-1">
                {products.map(({ id, name, summary, icon: Icon }) => (
                  <Link
                    key={id}
                    href={`#${id}`}
                    className="group flex items-start gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-white/12"
                  >
                    <Icon className="mt-0.5 size-4 shrink-0 text-white" />
                    <span className="min-w-0">
                      <span className="block text-base font-bold tracking-tight">{name}</span>
                      <span className="mt-0.5 block text-xs font-medium leading-5 text-blue-100/85">{summary}</span>
                    </span>
                  </Link>
                ))}
              </nav>
            </aside>

            <div className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm">
              <div className="grid min-h-[440px] lg:grid-cols-[minmax(0,1fr)_360px]">
                <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
                  <Badge className="mb-5 w-fit border-primary/20 bg-white text-primary shadow-sm">
                    <Sparkles className="size-3" />
                    限时活动 · 多产品线可参与
                  </Badge>
                  <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    价格中心
                  </h1>
                  <p className="mt-4 text-2xl font-semibold text-primary">官网买 3 送 3，经营系统买 2 送 2</p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    价格和功能按业务产品对齐凡科官方版本：企业官网参考凡科建站，商城参考凡科商城，轻应用参考轻站小程序，教育参考凡科教育，门店参考门店通，GEO 参考凡科极鸥。
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href="/contact"
                      className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90")}
                    >
                      领取套餐报价
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                    <a
                      href="tel:400-000-0000"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-primary/25 bg-white px-6 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/5"
                    >
                      <Phone className="size-4" />
                      400-000-0000
                    </a>
                  </div>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    {promoStats.map((item) => (
                      <div key={item.label} className="rounded-lg border border-blue-100 bg-blue-50/60 p-4">
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden bg-[linear-gradient(135deg,#eff6ff_0%,#dbeafe_100%)] p-8 lg:block">
                  <div className="rounded-2xl bg-primary p-6 text-primary-foreground shadow-xl shadow-primary/20">
                    <p className="text-sm text-white/75">当前优惠</p>
                    <p className="mt-2 text-4xl font-bold">买 2 送 2 / 买 3 送 3</p>
                    <p className="mt-4 text-sm leading-6 text-white/80">
                      官网建站按凡科建站买 3 送 3口径展示；商城、轻应用、教育和门店按买 2 送 2口径展示。GEO 以点数、报告和发文权益报价。
                    </p>
                  </div>
                  <div className="mt-5 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-blue-900/10">
                    <p className="font-semibold text-foreground">版本规格对齐官方</p>
                    <div className="mt-4 space-y-3">
                      {["价格对齐凡科公开版本", "活动按业务产品区分", "功能清单按版本整理"].map((text) => (
                        <div key={text} className="flex items-center gap-3 rounded-lg bg-blue-50 px-3 py-2 text-sm text-slate-700">
                          <CheckCircle className="size-4 text-primary" />
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
                页面显示参考原价和活动折算价。官网类支持买三送三，经营类产品支持买二送二，最终开通年限和权益以顾问确认为准。
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

                    <div className={cn("grid gap-5", product.plans.length > 3 ? "lg:grid-cols-2 xl:grid-cols-4" : "lg:grid-cols-3")}>
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
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                                <span className="rounded-full bg-primary/10 px-2 py-1 font-medium text-primary">活动折算价</span>
                                {plan.originalPrice !== "0" ? (
                                  <span className="text-muted-foreground">
                                    参考原价 <span className="line-through">¥{plan.originalPrice}/年</span>
                                  </span>
                                ) : (
                                  <span className="text-muted-foreground">永久免费起步</span>
                                )}
                              </div>
                              <p className="mt-3 rounded-md bg-blue-50 px-3 py-2 text-xs font-medium leading-5 text-primary">
                                {product.promo} · {product.source}
                              </p>
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
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-white px-4 py-3 text-xs text-muted-foreground">
                      <span>功能与价格参考：{product.source}</span>
                      <a href={product.sourceUrl} target="_blank" rel="noreferrer" className="font-medium text-primary hover:underline">
                        查看官方版本说明
                      </a>
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
