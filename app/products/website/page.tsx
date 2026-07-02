import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { CheckCircle, ArrowRight, Search, Globe, FileText, BarChart3, Link2, Smartphone, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "企业官网 AI 建站 - SEO/GEO 双引擎获客官网",
  description:
    "立亭云企业官网 AI 建站服务，支持 AI 辅助生成页面、栏目和内容，内置 SEO/GEO 优化工具，帮助企业官网获得搜索流量和 AI 推荐曝光。",
  keywords: ["企业官网", "AI 建站", "SEO 建站", "GEO 优化", "网站建设", "百度优化", "企业网站"],
}

const features = [
  { icon: Sparkles, title: "AI 建站助手", desc: "根据行业、产品和目标客户，辅助生成网站栏目、首页文案、服务介绍和行动按钮。" },
  { icon: Search, title: "SEO 内置工具", desc: "自动生成 sitemap、结构化数据标记、关键词密度分析，让搜索引擎更好地理解您的网站。" },
  { icon: Globe, title: "百度 + Google 双优化", desc: "针对百度和 Google 的差异化 SEO 策略，国内国际市场双线布局，流量全覆盖。" },
  { icon: FileText, title: "SEO/GEO 内容增长", desc: "AI 辅助文章创作、关键词布局和问答内容补全，兼顾搜索排名与大模型引用。" },
  { icon: Link2, title: "外链建设支持", desc: "专业外链资源整合，提升网站权重，加速搜索排名爬升。" },
  { icon: BarChart3, title: "流量数据监控", desc: "实时查看关键词排名、页面收录情况、流量来源分析，精准指导优化方向。" },
  { icon: Smartphone, title: "响应式全端适配", desc: "自动适配手机、平板、PC，移动端体验满分，Google 移动优先索引高分通过。" },
]

const plans = [
  {
    name: "基础建站版",
    price: "299",
    features: ["AI 首页文案", "专业官网模版 100+", "独立域名绑定", "SSL 证书", "基础 SEO 工具", "表单收集"],
  },
  {
    name: "SEO 优化版",
    price: "699",
    highlight: true,
    features: ["全部基础版功能", "AI 内容工具", "关键词排名监控", "结构化数据", "流量分析报表", "专属 SEO 顾问"],
  },
  {
    name: "全渠道版",
    price: "1,299",
    features: ["全部优化版功能", "GEO 内容优化", "AI 内容创作", "外链建设资源", "月度 SEO 报告", "驻场服务"],
  },
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
              <p className="text-muted-foreground">按年付费享 8 折优惠，含免费域名注册</p>
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
