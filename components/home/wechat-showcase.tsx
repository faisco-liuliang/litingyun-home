import { MessageCircle } from "lucide-react"

export function WechatShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#f8f9ff] px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
      <div className="relative mx-auto max-w-7xl rounded-[28px] bg-gradient-to-br from-[#f0f4ff] via-white to-[#eef5ff] px-5 py-10 shadow-[0_20px_60px_-34px_rgba(37,99,235,0.4)] ring-1 ring-blue-100/80 sm:px-10 sm:py-12 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <MessageCircle className="size-4" />
            专属顾问咨询
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">选模板或开通有疑问？</h2>
          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">扫码添加客服，获取模板建议、套餐说明和上线协助。</p>
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center gap-8 rounded-[24px] bg-white px-7 py-8 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.45)] ring-1 ring-slate-100 sm:flex-row sm:justify-center sm:gap-14 sm:px-12 sm:py-10">
          <div className="text-center sm:text-left">
            <p className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              <span className="text-rose-500">右侧扫码</span> 添加客服咨询详情
            </p>
            <p className="mt-8 text-sm font-semibold text-primary">立亭云顾问</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">在线时间：周一至周五（9:30-18:00）</p>
            <p className="text-sm leading-6 text-slate-500">晚上、周末请留言</p>
          </div>
          <div className="shrink-0 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
            <img src="/contact-qr.png" alt="企业微信客服二维码" className="size-48 rounded-xl object-contain sm:size-52" />
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-slate-500">工作日 9:30-18:00，周末请留言</p>
      </div>
    </section>
  )
}
