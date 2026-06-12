import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ArrowRight, CheckCircle, Play } from "lucide-react"

const highlights = [
  "无需技术背景，7 天上线",
  "5 万+ 企业用户信赖",
  "专属顾问一对一服务",
]

export function Hero() {
  return (
    <section className="hero-dark-bg pt-32 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #1a6cf6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #0ea5e9 0%, transparent 40%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{ background: "linear-gradient(to top, #f8fafc, transparent)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <Badge
            className="mb-8 bg-blue-900/60 text-blue-300 border-blue-700/50 text-xs px-3 py-1"
          >
            <span className="inline-block size-1.5 rounded-full bg-blue-400 mr-2" />
            企业数字化首选平台
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-8">
            一站式企业<br />
            <span className="text-blue-400">数字化平台</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200 leading-tight text-balance mb-6">
            让业务快速上线
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-12 max-w-2xl text-pretty">
            立亭云整合私域商城、企业官网、教育系统、门店管理等核心产品，帮助中小企业低成本搭建完整线上业务体系，驱动业绩增长。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 shadow-lg shadow-blue-500/30")}
            >
              免费试用 14 天
              <ArrowRight className="size-4 ml-2" />
            </Link>
            <Link
              href="/cases"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-blue-300/40 text-white hover:bg-white/10 hover:text-white bg-transparent h-12 font-semibold")}
            >
              <Play className="size-4 mr-2" />
              查看成功案例
            </Link>
          </div>

          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300 font-medium">
                <CheckCircle className="size-5 text-blue-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero stats */}
        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "50,000+", label: "服务企业客户" },
            { value: "98%", label: "客户满意度" },
            { value: "7 天", label: "平均上线周期" },
            { value: "24/7", label: "技术支持" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
