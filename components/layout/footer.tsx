import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import {
  ShoppingCart,
  Globe,
  GraduationCap,
  CalendarCheck,
  Store,
  Zap,
  Wrench,
} from "lucide-react"

const productLinks = [
  { name: "私域商城", href: "/products/mall", icon: ShoppingCart },
  { name: "企业官网 SEO 建站", href: "/products/website", icon: Globe },
  { name: "教育系统 / 知识付费", href: "/products/education", icon: GraduationCap },
  { name: "轻应用 / 服务预约", href: "/products/booking", icon: CalendarCheck },
  { name: "门店系统", href: "/products/store", icon: Store },
  { name: "GEO 优化系统", href: "/products/geo", icon: Zap },
  { name: "其他营销工具", href: "/products/tools", icon: Wrench },
]

const supportLinks = [
  { name: "价格中心", href: "/pricing" },
  { name: "成功案例", href: "/cases" },
  { name: "帮助文档", href: "/docs" },
  { name: "博客资讯", href: "/blog" },
]

const aboutLinks = [
  { name: "关于立亭云", href: "/about" },
  { name: "加入我们", href: "/about#join" },
  { name: "代理合作", href: "/about#partner" },
  { name: "联系我们", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-3">
                <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">立</span>
                </div>
                <span className="font-bold text-lg text-white">立亭云</span>
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                专注企业数字化建站与营销工具，帮助中小企业快速搭建私域流量阵地，实现线上业绩增长。
              </p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              产品中心
            </h3>
            <ul className="flex flex-col gap-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <link.icon className="size-3.5 shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              支持与资源
            </h3>
            <ul className="flex flex-col gap-2.5">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-white mt-8 mb-4 text-sm uppercase tracking-wide">
              关于我们
            </h3>
            <ul className="flex flex-col gap-2.5">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QR / WeChat */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              扫码咨询
            </h3>
            <div className="size-32 rounded-xl bg-white p-2 flex items-center justify-center mb-3 shadow-sm">
              <img
                src="/contact-qr.png"
                alt="微信客服二维码"
                className="h-full w-full rounded-lg object-contain"
              />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              微信扫码，专属顾问<br />为您一对一解答
            </p>

            <div className="mt-6 p-3 bg-slate-800 rounded-lg">
              <p className="text-xs text-slate-400 mb-1 font-medium">工作时间</p>
              <p className="text-xs text-slate-500">周一至周六 09:00–18:00</p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-slate-800" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2024 立亭云. 保留所有权利.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              隐私政策
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              服务条款
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              网站地图
            </Link>
            <span>粤ICP备XXXXXXXX号</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
