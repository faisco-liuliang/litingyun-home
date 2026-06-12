import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowRight, Zap, Bot, Globe, TrendingUp, Search, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "GEO 优化系统 - AI 搜索时代的品牌曝光优化",
  description:
    "立亭云 GEO（生成式引擎优化）系统，专为 ChatGPT、Perplexity、Gemini 等 AI 搜索引擎优化，帮助品牌抢占 AI 推荐位，实现 AI 时代的流量增长。",
  keywords: ["GEO 优化", "生成式引擎优化", "AI 搜索优化", "ChatGPT 曝光", "AI 品牌优化", "Perplexity SEO"],
}

const features = [
  { icon: Bot, title: "AI 内容生成", desc: "针对 AI 大模型训练数据特征，优化品牌内容结构，提升在 AI 回答中的引用概率。" },
  { icon: Search, title: "关键词覆盖", desc: "深度挖掘 AI 搜索高频问题场景，布局品牌相关答案内容，全面覆盖 AI 引用关键词。" },
  { icon: Globe, title: "多平台分发", desc: "内容一键分发至百度、知乎、头条等平台，扩大品牌在 AI 训练数据中的覆盖面。" },
  { icon: Eye, title: "曝光监控", desc: "实时监控品牌在 ChatGPT、Perplexity、Kimi 等主流 AI 工具中的出现频率和呈现方式。" },
  { icon: TrendingUp, title: "排名优化", desc: "持续跟踪优化效果，根据 AI 搜索趋势调整内容策略，保持长期曝光优势。" },
  { icon: Zap, title: "竞品分析", desc: "分析竞品在 AI 搜索中的表现，找到差距和机会点，针对性制定超越策略。" },
]

const plans = [
  { name: "入门版", price: "799", features: ["AI 曝光监控", "每月内容优化 10 篇", "3 个关键词追踪", "月度报告", "基础竞品分析"] },
  { name: "专业版", price: "1,999", highlight: true, features: ["AI 曝光监控（全平台）", "每月内容优化 50 篇", "20 个关键词追踪", "多平台内容分发", "竞品深度分析", "专属 GEO 顾问"] },
  { name: "企业版", price: "4,999", features: ["全部专业版功能", "内容优化不限量", "关键词不限", "定制化 AI 策略", "品牌知识图谱建设", "驻场服务"] },
]

export default function GeoPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-amber-900/60 text-amber-300 border-amber-700/50">
                <span className="inline-block size-1.5 rounded-full bg-amber-400 mr-2 animate-pulse" />
                AI 时代独家产品
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                GEO 优化系统
                <br />
                <span className="text-amber-400">抢占 AI 推荐位</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                当用户问 ChatGPT、Perplexity、Kimi 时，您的品牌会被推荐吗？GEO（生成式引擎优化）是 SEO 之后最重要的流量机会，立亭云帮您提前布局。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white h-12 px-8" asChild>
                  <Link href="/contact">免费 GEO 诊断 <ArrowRight className="size-4 ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12" asChild>
                  <Link href="/blog">了解 GEO 趋势</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What is GEO */}
        <section className="py-16 px-4 sm:px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">什么是 GEO（生成式引擎优化）？</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                传统 SEO 让您的网站出现在谷歌、百度的搜索结果页面。而 <strong className="text-foreground">GEO（Generative Engine Optimization）</strong> 则是优化您的品牌内容，让 ChatGPT、Perplexity、Gemini 等 AI 搜索引擎在回答用户问题时，主动推荐和引用您的品牌。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                随着 AI 搜索使用率快速增长，越来越多的用户开始直接向 AI 提问而非传统搜索引擎。<strong className="text-foreground">提前布局 GEO，就是抢占未来的流量入口。</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">GEO 优化系统核心功能</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">全方位提升品牌在 AI 搜索引擎中的曝光度</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-amber-600" />
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
              <h2 className="text-3xl font-bold text-foreground mb-3">GEO 优化系统定价</h2>
              <p className="text-muted-foreground">按年付费享 8 折优惠，含免费 GEO 现状诊断</p>
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
                          <CheckCircle className="size-4 text-primary shrink-0" />{feat}
                        </li>
                      ))}
                    </ul>
                    <Button className={plan.highlight ? "bg-primary text-primary-foreground" : ""} variant={plan.highlight ? "default" : "outline"} asChild>
                      <Link href="/contact">{plan.highlight ? "免费诊断" : "立即开通"}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">立即开始您的 GEO 布局</h2>
            <p className="text-blue-100 mb-8">免费诊断您的品牌在 AI 搜索中的现状，制定专属优化策略</p>
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 h-12 px-10" asChild>
              <Link href="/contact">免费 GEO 诊断 <ArrowRight className="size-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
