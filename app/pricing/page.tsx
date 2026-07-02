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
  { label: "活动权益", value: "买 2 年送 2 年" },
  { label: "价格口径", value: "原价 + 优惠价" },
  { label: "上线陪跑", value: "顾问全程指导" },
]

const products = [
  {
    id: "website",
    name: "企业官网",
    icon: LayoutTemplate,
    summary: "AI 建站+SEO/GEO，官网内容自动增长。",
    startPrice: "¥349/年起",
    bestFor: "品牌展示 / 百度收录 / 表单获客",
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
    ],
  },
  {
    id: "mall",
    name: "私域商城",
    icon: ShoppingBag,
    summary: "AI 营销商城，小程序+会员+分销闭环。",
    startPrice: "¥799/年起",
    bestFor: "商品销售 / 会员运营 / 分销活动",
    plans: [
      {
        name: "商城标准版",
        originalPrice: "1,599",
        price: "799",
        note: "适合搭建在线商城和小程序",
        features: ["小程序商城 + 微商城", "商品与订单管理", "微信支付", "优惠券/新客有礼", "会员资料", "AI 商品文案"],
      },
      {
        name: "商城豪华版",
        originalPrice: "2,699",
        price: "1,349",
        note: "适合活动运营和分销增长",
        popular: true,
        features: ["标准版全部功能", "限时促销/优惠券", "推广员/分销商", "砍价/拼团", "会员积分", "超大空间"],
      },
      {
        name: "商城旗舰版",
        originalPrice: "4,999",
        price: "2,499",
        note: "适合多端渠道和复购经营",
        features: ["豪华版全部功能", "一站 3 端", "多端渠道铺货", "留存复购工具", "分享裂变", "N 元 M 件/礼品卡"],
      },
    ],
  },
  {
    id: "store",
    name: "门店系统",
    icon: Store,
    summary: "AI 经营分析，多门店会员一体化。",
    startPrice: "¥649/年起",
    bestFor: "门店收银 / 会员储值 / 连锁管理",
    plans: [
      {
        name: "门店初级版",
        originalPrice: "1,299",
        price: "649",
        note: "适合单店会员和收银起步",
        features: ["支持 1000 会员", "扫码点餐", "自有微信小程序", "小票/杯贴打印", "PC 端开单收银", "会员档案与动态"],
      },
      {
        name: "门店中级版",
        originalPrice: "2,299",
        price: "1,149",
        note: "适合门店预约和会员运营",
        popular: true,
        features: ["初级版全部功能", "支持 2000 会员", "每天 100 个预约服务", "会员标签", "到店次数统计", "小程序会员卡"],
      },
      {
        name: "门店高级版",
        originalPrice: "3,699",
        price: "1,849",
        note: "适合连锁营销和总部管理",
        features: ["中级版全部功能", "不限会员数量", "不限预约服务", "优惠券/进店有礼", "全民推广/员工分销", "积分商城与数据看板"],
      },
    ],
  },
  {
    id: "education",
    name: "教育系统",
    icon: GraduationCap,
    summary: "AI 题库+直播课+知识付费。",
    startPrice: "¥799/年起",
    bestFor: "课程销售 / 学员管理 / 直播录播",
    plans: [
      {
        name: "教育初级版",
        originalPrice: "1,599",
        price: "799",
        note: "适合课程与知识付费上线",
        features: ["H5 + 微信小程序", "电脑端 + 百度 SEO + 独立域名", "知识付费 + 线下课程", "基础答题 + 作业", "智能排课 + 扫码签到", "班级/学员管理"],
      },
      {
        name: "教育高级版",
        originalPrice: "2,999",
        price: "1,499",
        note: "适合机构招生和直播教学",
        popular: true,
        features: ["初级版全部功能", "抖音/百度小程序", "等级会员/付费会员", "3 万题库 + 批量录入", "直播教学", "拼团拼课 + 推广员"],
      },
      {
        name: "教育旗舰版",
        originalPrice: "4,999",
        price: "2,499",
        note: "适合课程矩阵和高阶运营",
        features: ["高级版全部功能", "老带新转介绍", "会员储值", "1T 超大容量", "20 万题目 + 高级刷题", "积分商城/实物商品"],
      },
    ],
  },
  {
    id: "booking",
    name: "轻应用",
    icon: CalendarDays,
    summary: "AI 表单/预约/内容发布小程序。",
    startPrice: "¥499/年起",
    bestFor: "预约排班 / 到店核销 / 服务订单",
    plans: [
      {
        name: "小程序初级版",
        originalPrice: "999",
        price: "499",
        note: "适合轻量服务预约和内容发布",
        features: ["精美模板", "5 个自定义页面", "400 个自定义模块", "200 个预约订单", "资源空间 100M", "AI 表单生成"],
      },
      {
        name: "小程序中级版",
        originalPrice: "1,699",
        price: "849",
        note: "适合预约转化和线索承接",
        popular: true,
        features: ["初级版全部功能", "微信客服", "搜索关键词优化", "1 万预约订单", "资源空间 1G", "万能表单/查询"],
      },
      {
        name: "小程序高级版",
        originalPrice: "2,999",
        price: "1,499",
        note: "适合复杂服务和多端发布",
        features: ["中级版全部功能", "1000 个页面", "1 万个模块", "资源空间 100G", "不限预约订单", "多端发布"],
      },
    ],
  },
  {
    id: "tools",
    name: "其他工具",
    icon: Wrench,
    summary: "AI 海报、短视频、H5 活动工具。",
    startPrice: "¥349/年起",
    bestFor: "活动获客 / 表单留资 / 私域增长",
    plans: [
      {
        name: "营销版",
        originalPrice: "699",
        price: "349",
        note: "适合日常活动和留资获客",
        features: ["500 个活动", "单游戏 2 万人参与", "强制关注", "H5 活动页", "投票/抽奖", "表单留资"],
      },
      {
        name: "支付版",
        originalPrice: "1,299",
        price: "649",
        note: "适合活动转化和私域裂变",
        popular: true,
        features: ["营销版全部功能", "微信支付", "单游戏 50 万人参与", "优惠券", "渠道码", "活动数据看板"],
      },
      {
        name: "旗舰版",
        originalPrice: "2,499",
        price: "1,249",
        note: "适合多活动和团队协作",
        features: ["最高活动权限", "微传单高级版权限", "参与人数不限", "云设计中级版", "多活动并行", "顾问策划"],
      },
    ],
  },
  {
    id: "geo",
    name: "GEO 优化",
    icon: SearchCheck,
    summary: "让 DeepSeek、豆包等大模型推荐品牌。",
    startPrice: "¥1,499/年起",
    bestFor: "AI 推荐 / 内容结构 / 品牌实体",
    plans: [
      {
        name: "诊断版",
        originalPrice: "2,999",
        price: "1,499",
        note: "明确优化方向",
        features: ["AI 可见度诊断", "竞品问答采样", "提问词挖掘", "AI 回答关键位诊断", "基础结构化建议", "优化报告"],
      },
      {
        name: "增长版",
        originalPrice: "5,999",
        price: "2,999",
        note: "持续内容优化",
        popular: true,
        features: ["诊断版全部内容", "精准布局 AI 回答", "专属品牌智库", "AI 内容创作", "官网内容优化", "月度追踪报告"],
      },
      {
        name: "托管版",
        originalPrice: "12,000",
        price: "6,000",
        note: "品牌长期占位",
        features: ["增长版全部内容", "全域覆盖品牌 AI 竞争力", "内容月更", "品牌百科建议", "行业专题页", "多渠道引用建设"],
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
                  <p className="mt-4 text-2xl font-semibold text-primary">买 2 年送 2 年，按优惠价开通到手 4 年</p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                    参考乔拓云的产品矩阵展示方式，按官网、商城、轻应用、教育、门店、营销工具和 GEO 优化拆分价格；版本规格参考凡科公开能力表和 OEM 价格页，立亭云在参考原价基础上给出活动优惠价。
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
                    <p className="mt-2 text-4xl font-bold">买 2 年送 2 年</p>
                    <p className="mt-4 text-sm leading-6 text-white/80">
                      例如商城豪华版参考原价 ¥2,699/年，立亭云优惠价 ¥1,349/年；按优惠价开 2 年，到账 4 年使用期。
                    </p>
                  </div>
                  <div className="mt-5 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-lg shadow-blue-900/10">
                    <p className="font-semibold text-foreground">版本规格清晰</p>
                    <div className="mt-4 space-y-3">
                      {["参考原价清晰标注", "优惠价直接展示", "功能清单逐项说明"].map((text) => (
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
                价格按年展示，参考原价用于对齐凡科/OEM版本，优惠价为立亭云当前活动价；实际开通可叠加活动年限、顾问服务和实施内容。
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
                              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                                <span className="rounded-full bg-primary/10 px-2 py-1 font-medium text-primary">立亭云优惠价</span>
                                <span className="text-muted-foreground">
                                  参考原价 <span className="line-through">¥{plan.originalPrice}/年</span>
                                </span>
                              </div>
                              <p className="mt-3 rounded-md bg-blue-50 px-3 py-2 text-xs font-medium leading-5 text-primary">
                                买 2 年送 2 年，按优惠价付 2 年，到手 4 年使用期
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
