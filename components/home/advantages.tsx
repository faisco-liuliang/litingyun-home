import { CheckCircle, Shield, Headphones, TrendingUp, Users, Clock } from "lucide-react"

const advantages = [
  {
    icon: Shield,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    title: "凡科官方技术支撑",
    desc: "底层基于凡科十余年 SaaS 技术积累，99.9% 可用性保障，企业数据安全存储，无后顾之忧。",
  },
  {
    icon: TrendingUp,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
    title: "SEO & GEO 双引擎",
    desc: "传统 SEO 与 AI 搜索（GEO）双重优化，百度、Google、ChatGPT 等渠道全覆盖，流量持续增长。",
  },
  {
    icon: Headphones,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50",
    title: "专属顾问一对一服务",
    desc: "每位客户配备专属客户成功经理，从建站到推广全程陪跑，7×12 小时响应。",
  },
  {
    icon: Clock,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-50",
    title: "极速上线，无需技术",
    desc: "最快 1 天建站上线，拖拽式编辑器，数百套行业模版，零代码快速搭建专业网站。",
  },
  {
    icon: Users,
    iconColor: "text-rose-600",
    iconBg: "bg-rose-50",
    title: "完整私域流量体系",
    desc: "公众号、小程序、视频号、企业微信无缝联动，将公域流量沉淀为私域资产。",
  },
  {
    icon: CheckCircle,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50",
    title: "按需付费，灵活扩展",
    desc: "从个人版到旗舰版，按实际需求选择，随时升级，不多付一分冤枉钱。",
  },
]

export function Advantages() {
  return (
    <section className="py-24 px-4 sm:px-6 section-blue-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            为什么选择立亭云
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            专业服务，让您的数字化投入真正产生价值
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            我们不只是工具提供商，更是您企业数字化增长的长期合作伙伴。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className={`size-11 rounded-xl flex items-center justify-center ${item.iconBg} mb-4`}>
                <item.icon className={`size-5 ${item.iconColor}`} />
              </div>
              <h3 className="font-bold text-foreground text-base mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
