import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Clock, User, Tag, Search } from "lucide-react"

export const metadata: Metadata = {
  title: "博客 - 企业数字化增长干货资讯",
  description:
    "立亭云博客，分享 SEO 建站技巧、GEO 优化方法、私域运营策略、数字化转型案例等实战干货，帮助中小企业掌握数字化增长方法论。",
  keywords: ["SEO 教程", "GEO 优化", "私域运营", "企业数字化", "建站教程", "营销干货"],
}

const categories = ["全部", "SEO 优化", "GEO 优化", "私域运营", "产品教程", "行业洞察", "客户故事"]

const featuredPost = {
  slug: "geo-optimization-guide-2024",
  title: "2024 年 GEO 优化完全指南：如何让 ChatGPT 推荐您的品牌",
  excerpt:
    "随着 AI 搜索工具的普及，生成式引擎优化（GEO）正在成为继 SEO 之后最重要的流量机会。本文详细介绍 GEO 的核心原理、优化策略和实操步骤，帮助您的品牌抢占 AI 推荐位。",
  category: "GEO 优化",
  author: "立亭云内容团队",
  date: "2024-11-20",
  readTime: "12 分钟",
  tags: ["GEO", "AI 搜索", "ChatGPT", "品牌曝光"],
}

const posts = [
  {
    slug: "seo-local-business-guide",
    title: "本地商家 SEO 建站完整教程：从零开始获取百度流量",
    excerpt: "详解本地企业如何通过 SEO 优化官网，稳定获取百度本地搜索流量，每月节省数万广告费。",
    category: "SEO 优化",
    author: "李老师",
    date: "2024-11-15",
    readTime: "8 分钟",
    tags: ["SEO", "本地搜索", "百度优化"],
  },
  {
    slug: "private-domain-wechat-strategy",
    title: "微信私域流量运营：从公域到私域的完整转化链路",
    excerpt: "系统梳理企业如何将公众号、小程序、视频号流量转化为私域资产，实现用户长期留存和复购。",
    category: "私域运营",
    author: "王经理",
    date: "2024-11-10",
    readTime: "10 分钟",
    tags: ["私域流量", "微信运营", "用户留存"],
  },
  {
    slug: "ecommerce-mini-program-guide",
    title: "微信小程序商城搭建实战：7 天完成店铺从零到上线",
    excerpt: "手把手教你用立亭云私域商城搭建专业小程序店铺，包括装修、商品上架、支付配置全流程。",
    category: "产品教程",
    author: "产品团队",
    date: "2024-11-05",
    readTime: "15 分钟",
    tags: ["小程序", "商城搭建", "教程"],
  },
  {
    slug: "restaurant-digital-transformation",
    title: "餐饮连锁数字化转型：从收银到会员的完整解决方案",
    excerpt: "分析 2024 年餐饮连锁企业数字化转型的核心需求，以及如何用门店系统实现高效管理。",
    category: "行业洞察",
    author: "行业研究组",
    date: "2024-10-28",
    readTime: "9 分钟",
    tags: ["餐饮", "连锁管理", "数字化"],
  },
  {
    slug: "education-saas-online-school",
    title: "知识付费变现指南：如何用教育系统搭建在线学校",
    excerpt: "从课程定价到招生推广，完整解析知识博主和教育机构如何通过直播+录播实现稳定收入。",
    category: "产品教程",
    author: "产品团队",
    date: "2024-10-20",
    readTime: "11 分钟",
    tags: ["知识付费", "在线教育", "教育系统"],
  },
  {
    slug: "ai-search-seo-difference",
    title: "SEO vs GEO：传统搜索优化与 AI 搜索优化有什么区别",
    excerpt: "深入对比 SEO 和 GEO 的底层逻辑、优化方法和效果衡量指标，帮助企业制定合理的搜索流量策略。",
    category: "GEO 优化",
    author: "技术团队",
    date: "2024-10-15",
    readTime: "7 分钟",
    tags: ["GEO", "SEO", "AI 搜索", "对比分析"],
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 px-4 sm:px-6 section-blue-bg border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">立亭云博客</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                企业数字化增长干货
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
                SEO 建站、GEO 优化、私域运营……每周更新实战干货，助力企业掌握数字化增长方法论。
              </p>
            </div>

            {/* Search bar */}
            <div className="relative max-w-lg mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="搜索文章..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className={`text-sm px-4 py-1.5 rounded-full cursor-pointer transition-colors ${
                    cat === "全部"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Featured Post */}
            <div className="mb-10">
              <Link href={`/blog/${featuredPost.slug}`}>
                <Card className="border-primary/20 bg-gradient-to-br from-accent/60 to-card card-hover overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className="bg-primary text-primary-foreground">精选推荐</Badge>
                      <Badge variant="outline" className="text-primary border-primary/30">{featuredPost.category}</Badge>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 text-balance hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-5 max-w-3xl text-pretty">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-5">
                      <span className="flex items-center gap-1.5"><User className="size-3.5" />{featuredPost.author}</span>
                      <span className="flex items-center gap-1.5"><Clock className="size-3.5" />{featuredPost.readTime}阅读</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md">
                          <Tag className="size-3" />{tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full border-border card-hover">
                    <CardContent className="p-6 flex flex-col gap-4 h-full">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 leading-snug hover:text-primary transition-colors text-balance">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><User className="size-3" />{post.author}</span>
                        <span className="flex items-center gap-1.5"><Clock className="size-3" />{post.readTime}阅读</span>
                      </div>
                      <div className="flex items-center text-sm font-medium text-primary gap-1">
                        阅读全文 <ArrowRight className="size-3.5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load more */}
            <div className="text-center mt-12">
              <button className="px-8 py-3 rounded-xl border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors">
                加载更多文章
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 px-4 sm:px-6 section-blue-bg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">订阅每周干货</h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              每周一篇精选文章，SEO、GEO、私域运营实战干货，直接发送到您的邮箱。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                立即订阅
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">不发垃圾邮件，随时可取消订阅</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
