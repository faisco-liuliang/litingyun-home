import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, User } from "lucide-react"

const featuredPosts = [
  {
    slug: "geo-optimization-guide-2024",
    title: "2024 年 GEO 优化完全指南：如何让 AI 推荐您的品牌",
    excerpt:
      "随着 ChatGPT、Perplexity 等 AI 搜索工具普及，生成式引擎优化（GEO）正在成为继 SEO 之后最重要的流量机会。本文详解核心原理与实操步骤。",
    category: "GEO 优化",
    author: "立亭云内容团队",
    date: "2024-11-20",
    readTime: "12 分钟",
  },
  {
    slug: "seo-local-business-guide",
    title: "本地商家 SEO 建站完整教程：从零开始稳定获取百度流量",
    excerpt:
      "详解本地企业如何通过 SEO 官网建站，稳定获取百度本地搜索流量，每月节省数万广告费，实现低成本持续获客。",
    category: "SEO 优化",
    author: "李老师",
    date: "2024-11-15",
    readTime: "8 分钟",
  },
  {
    slug: "private-domain-wechat-strategy",
    title: "微信私域流量运营：从公域到私域的完整转化链路",
    excerpt:
      "系统梳理企业如何将公众号、小程序、视频号流量转化为私域资产，实现用户长期留存和复购增长。",
    category: "私域运营",
    author: "王经理",
    date: "2024-11-10",
    readTime: "10 分钟",
  },
]

const categoryColors: Record<string, string> = {
  "GEO 优化": "bg-amber-100 text-amber-700 border-amber-200",
  "SEO 优化": "bg-green-100 text-green-700 border-green-200",
  私域运营: "bg-violet-100 text-violet-700 border-violet-200",
  产品教程: "bg-blue-100 text-blue-700 border-blue-200",
  行业洞察: "bg-rose-100 text-rose-700 border-rose-200",
}

export function BlogPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              干货博客
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              企业数字化增长实战指南
            </h2>
            <p className="text-muted-foreground mt-3 text-base max-w-xl text-pretty">
              SEO 建站、GEO 优化、私域运营……每周更新，帮助您掌握最新的数字化增长方法论。
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors shrink-0"
          >
            查看全部文章
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Article grid: first card spans full width on md+, remaining two in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Featured article */}
          <Link
            href={`/blog/${featuredPosts[0].slug}`}
            className="md:col-span-2 group"
          >
            <Card className="h-full border-border bg-card card-hover overflow-hidden">
              <CardContent className="p-8 flex flex-col gap-5 h-full">
                <Badge
                  className={`self-start text-xs border ${categoryColors[featuredPosts[0].category] ?? "bg-muted text-muted-foreground"}`}
                  variant="outline"
                >
                  {featuredPosts[0].category}
                </Badge>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground leading-snug text-balance mb-3 group-hover:text-primary transition-colors">
                    {featuredPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty line-clamp-3">
                    {featuredPosts[0].excerpt}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t border-border">
                  <span className="flex items-center gap-1.5">
                    <User className="size-3.5" />
                    {featuredPosts[0].author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {featuredPosts[0].readTime}阅读
                  </span>
                  <span className="ml-auto flex items-center gap-1 font-medium text-primary text-xs">
                    阅读全文 <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Two smaller articles stacked */}
          <div className="flex flex-col gap-6">
            {featuredPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex-1">
                <Card className="h-full border-border bg-card card-hover overflow-hidden">
                  <CardContent className="p-6 flex flex-col gap-4 h-full">
                    <Badge
                      className={`self-start text-xs border ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}
                      variant="outline"
                    >
                      {post.category}
                    </Badge>

                    <div className="flex-1">
                      <h3 className="text-base font-bold text-foreground leading-snug text-balance mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed text-pretty line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2 border-t border-border">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" />
                        {post.readTime}阅读
                      </span>
                      <span className="ml-auto flex items-center gap-1 font-medium text-primary text-xs">
                        阅读全文 <ArrowRight className="size-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
