import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 hero-dark-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 text-balance">
          准备好开始您的
          <span className="text-blue-400">数字化之旅</span>了吗？
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto text-pretty leading-relaxed">
          立即免费试用，专属顾问将在 10 分钟内联系您，为您量身定制解决方案。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8 h-12 shadow-lg shadow-blue-500/25 w-full sm:w-auto"
            asChild
          >
            <Link href="/contact">
              免费试用 14 天
              <ArrowRight className="size-4 ml-2" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white bg-transparent h-12 text-base w-full sm:w-auto"
            asChild
          >
            <Link href="tel:400-000-0000">
              <Phone className="size-4 mr-2" />
              400-000-0000 咨询
            </Link>
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-slate-400">
          <MessageCircle className="size-4" />
          <span>或扫码添加微信顾问：litingyun</span>
        </div>
      </div>
    </section>
  )
}
