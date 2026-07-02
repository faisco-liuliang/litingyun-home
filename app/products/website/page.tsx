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
import { CheckCircle, ArrowRight, Search, Globe, FileText, BarChart3, Link2, Smartphone, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "企业官网 AI 建站 - SEO/GEO 双引擎获客官网",
  description:
    "立亭云企业官网 AI 建站服务，支持 AI 辅助生成页面、栏目和内容，内置 SEO/GEO 优化工具，帮助企业官网获得搜索流量和 AI 推荐曝光。",
  keywords: ["企业官网", "AI 建站", "SEO 建站", "GEO 优化", "网站建设", "百度优化", "企业网站"],
}

const features = [
  { icon: Sparkles, title: "AI 建站与写作", desc: "支持 AI 建站、AI 智能写作、批量写作和文章配图，降低官网内容生产成本。" },
  { icon: Search, title: "AI 生成 TDK", desc: "可围绕全站、页面、文章、产品和图册生成标题、描述和关键词，提升搜索理解效率。" },
  { icon: Globe, title: "SEO/GEO 双优化", desc: "兼顾百度收录、传统搜索排名和 AI 搜索引用，让官网更容易被客户和大模型找到。" },
  { icon: FileText, title: "内容与文章系统", desc: "支持新闻、案例、服务介绍和问答内容沉淀，适合持续做行业关键词和长尾内容。" },
  { icon: Link2, title: "表单与线索收集", desc: "留言板、表单、在线查询和预约支付等能力，把官网访问转成可跟进的客户线索。" },
  { icon: BarChart3, title: "统计与经营看板", desc: "跟踪访问来源、页面表现和线索转化，方便持续判断哪些内容真正带来客户。" },
  { icon: Smartphone, title: "多端与安全适配", desc: "一键覆盖 PC、手机和微网站，支持 SSL、IPv6、安全防护和多语言扩展。" },
]

const plans = [
  {
    name: "网站标准版",
    price: "698",
    features: ["AI 建站", "电脑 + 手机 + 微网站", "独立域名绑定", "SSL 证书", "基础 SEO 工具", "留言/表单收集"],
  },
  {
    name: "网站推广版",
    price: "998",
    highlight: true,
    features: ["全部标准版功能", "AI 智能写作", "AI 生成页面 TDK", "新闻/案例管理", "基础数据导出", "顾问协助上线"],
  },
  {
    name: "网站商务版",
    price: "1,498",
    features: ["全部推广版功能", "SEO/GEO 结构化优化", "AI 文章配图", "站点地图生成", "多语言扩展", "月度网站检查"],
  },
]

const detailCapabilities = [
  { title: "AI 建站与全站 TDK", desc: "参考凡科建站 AI 系统能力，围绕行业、产品和关键词生成页面结构、文章标题描述和产品 TDK。" },
  { title: "PC + 手机 + 微网站", desc: "官网一次搭建，多端自适应，适合企业展示、案例沉淀、服务介绍和线索收集。" },
  { title: "SEO/GEO 内容增长", desc: "传统搜索做百度收录和关键词布局，AI 搜索做问答内容、品牌实体和可引用素材。" },
  { title: "表单、留言和在线查询", desc: "把官网从展示页升级成获客工具，咨询、报价、预约、资料下载都能沉淀为线索。" },
]

const detailScenarios = [
  { title: "刚起步的本地服务商", desc: "需要快速上线官网、绑定域名、做基础 SEO，让客户搜索时能找到可靠入口。" },
  { title: "想做内容获客的企业", desc: "适合持续发布案例、行业知识、解决方案，用文章和问答覆盖长尾搜索需求。" },
  { title: "需要 AI 搜索曝光的品牌", desc: "官网内容可以作为 GEO 的底层信源，让 DeepSeek、豆包等模型更容易理解和引用品牌。" },
]

export default function WebsitePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-sky-900/60 text-sky-300 border-sky-700/50">AI 建站 + SEO/GEO 解决方案</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                企业官网 AI 建站
                <br />
                <span className="text-sky-400">让客户主动找到你</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                AI 辅助生成页面、栏目和内容，内置专业 SEO/GEO 优化工具，帮助企业官网稳步提升搜索排名和 AI 搜索可见度。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8")}>
                  免费建站咨询 <ArrowRight className="size-4 ml-2" />
                </Link>
                <Link href="/cases" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12")}>
                  查看 SEO 案例
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ProductDetailSections
          tone="sky"
          eyebrow="官网建站活动"
          title="先把官网做成获客入口，再持续做 SEO/GEO 增长"
          description="官网产品页不只讲建站，而是把页面结构、内容生产、搜索收录、AI 引用和线索转化连起来。基础版本适合快速上线，推广/商务版本更适合持续做内容和搜索获客。"
          capabilities={detailCapabilities}
          scenarios={detailScenarios}
          promoNote="企业官网套餐参考凡科建站公开价格，活动折扣、域名/邮箱等赠送权益以顾问最终确认为准。"
        />

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">AI 建站 + SEO/GEO，全面提升搜索可见度</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从页面结构、内容生产到线索转化，每一个建站细节都围绕获客设计</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-sky-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-sky-600" />
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
              <h2 className="text-3xl font-bold text-foreground mb-3">企业官网定价方案</h2>
              <p className="text-muted-foreground">按年展示，官网套餐参考凡科建站公开价格，活动折扣和赠送权益以顾问确认为准</p>
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
                    <Link href="/contact" className={cn(buttonVariants({ variant: plan.highlight ? "default" : "outline" }), plan.highlight ? "bg-primary text-primary-foreground" : "")}>
                      {plan.highlight ? "免费咨询" : "立即开通"}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-balance">开始打造您的 AI 获客官网</h2>
            <p className="text-blue-100 mb-8">免费 SEO/GEO 诊断，专属顾问为您制定建站方案</p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "bg-white text-primary hover:bg-blue-50 h-12 px-10")}>
              免费 SEO 诊断 <ArrowRight className="size-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
