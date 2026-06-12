"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  ShoppingCart,
  Globe,
  GraduationCap,
  CalendarCheck,
  Store,
  Zap,
  Wrench,
  ChevronDown,
  Menu,
  X,
  Phone,
} from "lucide-react"

const products = [
  {
    name: "私域商城",
    desc: "小程序+微商城，私域电商闭环",
    href: "/products/mall",
    icon: ShoppingCart,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "企业官网",
    desc: "SEO 优化建站，百度精准引流",
    href: "/products/website",
    icon: Globe,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    name: "教育系统",
    desc: "直播上课、知识付费一体化",
    href: "/products/education",
    icon: GraduationCap,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    name: "轻应用",
    desc: "服务预约、内容管理、社交功能",
    href: "/products/booking",
    icon: CalendarCheck,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "门店系统",
    desc: "多门店统一管理、会员体系",
    href: "/products/store",
    icon: Store,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    name: "GEO 优化系统",
    desc: "AI 搜索时代的品牌曝光优化",
    href: "/products/geo",
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    name: "其他工具",
    desc: "营销 H5、微传单、活动工具",
    href: "/products/tools",
    icon: Wrench,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
]

const navLinks = [
  { name: "首页", href: "/" },
  { name: "产品中心", href: "/products", hasDropdown: true },
  { name: "价格中心", href: "/pricing" },
  { name: "成功案例", href: "/cases" },
  { name: "博客", href: "/blog" },
  { name: "关于我们", href: "/about" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-white border-b border-border"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">立</span>
            </div>
            <span className="font-bold text-lg text-foreground tracking-tight">
              立亭云
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname.startsWith("/products")
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    )}
                  >
                    {link.name}
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200",
                        dropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[640px] bg-white border border-border rounded-xl shadow-xl p-4 grid grid-cols-2 gap-2">
                      {products.map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors group"
                        >
                          <div className={cn("size-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5", product.bg)}>
                            <product.icon className={cn("size-4", product.color)} />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {product.name}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                              {product.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-primary bg-accent"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:400-000-0000"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="size-3.5" />
              400-000-0000
            </a>
            <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
              查看价格
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ size: "sm" }), "bg-primary hover:bg-primary/90 text-primary-foreground")}>
              免费试用
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-accent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "关闭菜单" : "打���菜单"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href || (link.hasDropdown && pathname.startsWith("/products"))
                    ? "text-primary bg-accent"
                    : "text-foreground hover:text-primary hover:bg-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Link href="/pricing" className={cn(buttonVariants({ variant: "outline" }), "w-full justify-center")}>
                查看价格
              </Link>
              <Link href="/contact" className={cn(buttonVariants(), "bg-primary hover:bg-primary/90 text-primary-foreground w-full justify-center")}>
                免费试用
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
