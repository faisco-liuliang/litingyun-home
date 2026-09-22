import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function TemplateShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9ff] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-32 top-0 size-80 rounded-full bg-violet-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 size-96 rounded-full bg-orange-100/45 blur-3xl" />

      <div className="relative mx-auto max-w-7xl text-center">
        <div className="text-left">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-primary">
              <Sparkles className="size-4" />
              免费模板库
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">免费注册，挑选适合你的模板</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-500 sm:text-lg">
              覆盖展示、预约、门店与服务等常用场景，注册后即可在线查看模板并开始搭建。
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <TemplateCard
            eyebrow="企业官网模板"
            title="建站模板"
            description="精选营销型官网和企业网站模板，快速搭建专业线上门面。"
            image="/website-template-showcase.jpg"
            alt="建站模板库展示"
            href="https://jz.fkw.com/model//?_ta=9808"
          />
          <TemplateCard
            eyebrow="轻应用模板"
            title="小程序模板"
            description="覆盖门店、服务、预约和电商等场景，选择模板即可快速上线。"
            image="/miniapp-template-showcase.jpg"
            alt="小程序模板库展示"
            href="https://qz.fkw.com/model/?_ta=9808"
          />
        </div>
      </div>
    </section>
  )
}

function TemplateCard({
  eyebrow,
  title,
  description,
  image,
  alt,
  href,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
  alt: string
  href: string
}) {
  return (
    <div className="rounded-[28px] bg-white p-5 text-left shadow-[0_24px_70px_-34px_rgba(56,74,140,0.38)] ring-1 ring-white/80 sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-primary">{eyebrow}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>
        </div>
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 shrink-0 rounded-full bg-[#4d6ff3] px-6 text-base font-bold text-white shadow-[0_10px_22px_rgba(77,111,243,0.3)] ring-2 ring-blue-100/80 transition-all hover:-translate-y-0.5 hover:bg-[#3f61e5] hover:shadow-[0_14px_28px_rgba(77,111,243,0.38)]",
          )}
        >
          立即注册
          <ArrowRight className="ml-1.5 size-4" />
        </Link>
      </div>
      <Link href={href} target="_blank" rel="noreferrer" className="group mt-6 block overflow-hidden rounded-2xl bg-[#f8f9ff] ring-1 ring-slate-100">
        <img src={image} alt={alt} className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
      </Link>
    </div>
  )
}
