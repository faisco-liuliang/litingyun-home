import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, CheckCircle, Play, ShoppingBag, Globe, GraduationCap, Store, Calendar, Sparkles, Wrench } from "lucide-react"

const highlights = [
  "无需技术背景，7 天上线",
  "5 万+ 企业用户信赖",
  "专属顾问一对一服务",
]

const stats = [
  { value: "50,000+", label: "服务企业客户" },
  { value: "98%", label: "客户满意度" },
  { value: "7 天", label: "平均上线周期" },
  { value: "24/7", label: "技术支持" },
]

const productCards = [
  { icon: ShoppingBag, name: "私域商城", color: "bg-blue-500" },
  { icon: Globe, name: "企业官网", color: "bg-sky-500" },
  { icon: GraduationCap, name: "教育系统", color: "bg-indigo-500" },
  { icon: Calendar, name: "服务预约", color: "bg-violet-500" },
  { icon: Store, name: "门店管理", color: "bg-cyan-500" },
  { icon: Sparkles, name: "GEO 优化", color: "bg-amber-500" },
  { icon: Wrench, name: "营销工具", color: "bg-blue-400" },
]

export function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1e3a8a 0%, #1d4ed8 45%, #2563eb 100%)",
      }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Top highlight */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-0 relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="size-1.5 rounded-full bg-blue-300 animate-pulse" />
              <span className="text-xs font-medium text-blue-100 tracking-wide">企业数字化首选平台</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.15] tracking-tight mb-5">
              一站式企业<br />
              <span className="text-blue-200">数字化解决方案</span>
            </h1>

            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed mb-10 max-w-lg">
              整合私域商城、企业官网、教育系统、门店管理等核心产品，帮助中小企业低成本快速搭建完整线上业务体系，驱动业绩增长。
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 h-12 shadow-xl shadow-black/20"
                )}
              >
                免费试用 14 天
                <ArrowRight className="size-4 ml-2" />
              </Link>
              <Link
                href="/cases"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent h-12 font-medium"
                )}
              >
                <Play className="size-4 mr-2" />
                查看成功案例
              </Link>
            </div>

            <ul className="flex flex-col sm:flex-row gap-3 sm:gap-7">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-blue-100/90">
                  <CheckCircle className="size-4 text-blue-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: product cards visual */}
          <div className="hidden lg:flex items-end justify-center pb-0">
            <div
              className="relative w-full max-w-[420px] rounded-t-2xl overflow-hidden shadow-2xl"
              style={{ background: "linear-gradient(180deg, #1e40af 0%, #1e3a8a 100%)" }}
            >
              {/* Mock browser bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-white/10 border-b border-white/10">
                <span className="size-2.5 rounded-full bg-red-400/70" />
                <span className="size-2.5 rounded-full bg-yellow-400/70" />
                <span className="size-2.5 rounded-full bg-green-400/70" />
                <div className="ml-3 flex-1 bg-white/10 rounded-full px-3 py-0.5 text-xs text-white/50">
                  litingyun.com
                </div>
              </div>

              {/* Product grid inside mock */}
              <div className="p-6">
                <p className="text-xs text-white/50 font-medium uppercase tracking-widest mb-4">产品中心</p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {productCards.map(({ icon: Icon, name, color }) => (
                    <div
                      key={name}
                      className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/8 hover:bg-white/15 transition-colors cursor-default border border-white/10"
                    >
                      <div className={cn("size-9 rounded-lg flex items-center justify-center", color, "bg-opacity-80")}>
                        <Icon className="size-4 text-white" />
                      </div>
                      <span className="text-[11px] text-white/80 font-medium text-center leading-tight">{name}</span>
                    </div>
                  ))}
                </div>

                {/* Mini stats row */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="bg-white/8 rounded-xl p-3 border border-white/10">
                    <div className="text-xl font-bold text-white">50,000+</div>
                    <div className="text-[11px] text-white/50 mt-0.5">服务企业客户</div>
                  </div>
                  <div className="bg-white/8 rounded-xl p-3 border border-white/10">
                    <div className="text-xl font-bold text-white">98%</div>
                    <div className="text-[11px] text-white/50 mt-0.5">客户满意度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip — sits on top of the transition */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10 border-t border-white/10">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-blue-200/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
