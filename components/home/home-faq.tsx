import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FaqJsonLd } from "@/components/seo/json-ld"

const faqs = [
  {
    question: "立亭云和自己找开发公司建站有什么区别？",
    answer:
      "立亭云是 SaaS 平台，开箱即用，无需开发，7 天上线，后续升级维护均由平台负责。自找开发公司通常周期 1-3 个月，费用高，后期维护需额外付费，且技术迭代慢。立亭云累计服务 5 万+ 企业，产品稳定性和功能完整度经过大规模验证。",
  },
  {
    question: "立亭云的企业官网对 SEO 有优化吗？",
    answer:
      "有。立亭云企业官网产品内置 SEO 基础配置，包括自定义 title/description/keywords、自动生成 sitemap、结构化数据标记（Schema.org）、静态页面输出、移动端适配以及页面加载速度优化。多数客户在上线 3 个月内可见百度自然搜索排名提升。",
  },
  {
    question: "什么是 GEO 优化？和 SEO 有什么不同？",
    answer:
      "SEO（搜索引擎优化）针对百度、Google 等传统搜索引擎。GEO（生成式引擎优化）针对 ChatGPT、Perplexity、百度文心一言等 AI 搜索工具，目标是让 AI 在回答用户问题时主动提及并推荐您的品牌。两者都需要高质量内容，但 GEO 更强调内容的权威性、结构化表达和实体覆盖度。",
  },
  {
    question: "私域商城小程序上线后，如何获取第一批用户？",
    answer:
      "立亭云私域商城内置多种裂变工具：分享有礼、邀请返佣、拼团砍价、限时秒杀。建议上线初期先通过现有客户微信群、公众号推送触达老用户，再借助分销裂变机制让老客带新客。我们的运营顾问会为您制定专属首月冷启动方案。",
  },
  {
    question: "立亭云支持多门店管理吗？",
    answer:
      "支持。立亭云门店系统支持总部统一管控 + 各门店独立运营的双模式，可实现商品库存统一管理、会员跨店通用积分、员工提成独立核算、营业数据实时汇总。目前最大客户管理门店数超过 200 家。",
  },
  {
    question: "价格怎么算？有没有隐藏收费？",
    answer:
      "立亭云按年订阅计费，年付享 8 折。产品套餐内功能全部包含，无按量计费项目，无隐藏收费。部分高级定制功能（如独立 API 对接、专属服务器）按需报价。免费试用 14 天，满意后再付款。",
  },
  {
    question: "技术支持如何？出问题找谁？",
    answer:
      "每位客户配备专属服务顾问，提供企业微信一对一沟通。工作日响应时间不超过 2 小时，节假日安排值班人员处理紧急问题。此外，立亭云提供完整的使用文档、视频教程和在线帮助中心，方便自助解决常见问题。",
  },
]

export function HomeFaq() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-muted/40">
      {/* Inject FAQ structured data for search engines */}
      <FaqJsonLd faqs={faqs} />

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            常见问题
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            企业主最关心的 7 个问题
          </h2>
          <p className="text-muted-foreground mt-4 text-base text-pretty">
            还有其他疑问？添加顾问微信，5 分钟内为您解答。
          </p>
        </div>

        <Accordion className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="border border-border rounded-xl bg-card px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground text-sm sm:text-base hover:no-underline hover:text-primary py-5 [&[data-state=open]]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
