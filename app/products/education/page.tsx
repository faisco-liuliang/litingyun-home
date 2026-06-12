import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, ArrowRight, Video, BookOpen, CreditCard, Users, Bell, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "教育系统 / 知识付费平台 - 在线课程、直播教学一体化",
  description:
    "立亭云教育系统，整合直播课堂、录播点播、报名缴费、学员管理，帮助教育机构和知识创业者快速搭建在线学校，实现知识变现。",
  keywords: ["知识付费", "在线教育系统", "直播上课", "教育 SaaS", "网络学校", "录播课程"],
}

const features = [
  { icon: Video, title: "直播课堂", desc: "稳定高清直播，互动弹幕、答题、抽奖，打造沉浸式在线课堂体验。" },
  { icon: BookOpen, title: "录播课程", desc: "上传视频课程，防录制防下载，学员随时回看，内容资产长期变现。" },
  { icon: CreditCard, title: "付费系统", desc: "课程单独定价、会员包月订阅、拼团特价，多种付费模式灵活配置。" },
  { icon: Users, title: "学员管理", desc: "学员档案、学习进度、作业批改、证书颁发，完整教务管理功能。" },
  { icon: Bell, title: "营销推广", desc: "邀请返佣、限时优惠、团购拼班，内置营销工具助力招生裂变。" },
  { icon: Star, title: "口碑系统", desc: "学员评价、学习成果展示、真实好评系统，提升课程可信度与转化率。" },
]

const plans = [
  { name: "入门版", price: "399", features: ["直播课堂 100 人", "录播视频 50G", "课程定价销售", "学员管理", "微信支付"] },
  { name: "专业版", price: "899", highlight: true, features: ["直播课堂 500 人", "录播视频 500G", "会员订阅系统", "邀请返佣裂变", "数据报表", "专属顾问"] },
  { name: "机构版", price: "1,699", features: ["直播课堂不限人数", "存储不限量", "多讲师协作", "API 对接", "专属 App 定制", "驻场服务"] },
]

export default function EducationPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section className="hero-dark-bg py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <Badge className="mb-5 bg-violet-900/60 text-violet-300 border-violet-700/50">知识付费解决方案</Badge>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 text-balance">
                教育系统 / 知识付费
                <br />
                <span className="text-violet-400">让知识持续变现</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl text-pretty">
                整合直播课堂、录播点播、付费订阅、学员管理，帮助教育机构和知识博主快速搭建属于自己的在线学校，实现知识稳定变现。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8" asChild>
                  <Link href="/contact">免费试用 14 天 <ArrowRight className="size-4 ml-2" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 bg-transparent h-12" asChild>
                  <Link href="/cases">查看教育案例</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">完整教育 SaaS 功能矩阵</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">从招生到授课，从收费到复购，全链路数字化管理</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <Card key={f.title} className="border-border card-hover">
                  <CardContent className="p-6">
                    <div className="size-11 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                      <f.icon className="size-5 text-violet-600" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 section-blue-bg">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">教育系统定价方案</h2>
              <p className="text-muted-foreground">按年付费享 8 折优惠</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.name} className={plan.highlight ? "border-primary shadow-lg shadow-primary/10" : "border-border"}>
                  <CardContent className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="font-bold text-foreground text-base">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 mt-2">
                        <span className="text-3xl font-bold text-foreground">¥{plan.price}</span>
                        <span className="text-sm text-muted-foreground">/月</span>
                      </div>
                    </div>
                    <Separator />
                    <ul className="flex flex-col gap-2">
                      {plan.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="size-4 text-primary shrink-0" />{feat}
                        </li>
                      ))}
                    </ul>
                    <Button className={plan.highlight ? "bg-primary text-primary-foreground" : ""} variant={plan.highlight ? "default" : "outline"} asChild>
                      <Link href="/contact">{plan.highlight ? "免费试用" : "立即开通"}</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-primary">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">开始搭建您的在线学校</h2>
            <p className="text-blue-100 mb-8">14 天免费试用，0 技术门槛快速上线</p>
            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 h-12 px-10" asChild>
              <Link href="/contact">立即免费试用 <ArrowRight className="size-4 ml-2" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
