import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: '立亭云 - 专业企业数字化建站与营销工具平台',
    template: '%s | 立亭云',
  },
  description:
    '立亭云提供私域商城、企业官网、教育系统、门店管理、服务预约等一站式企业数字化解决方案，助力中小企业快速搭建线上业务，实现业绩增长。',
  keywords: ['立亭云', '企业建站', '私域商城', '小程序建站', '凡科代理', 'SEO建站', '知识付费', '门店管理系统'],
  authors: [{ name: '立亭云' }],
  creator: '立亭云',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://litingyun.com',
    siteName: '立亭云',
    title: '立亭云 - 专业企业数字化建站与营销工具平台',
    description: '一站式企业数字化解决方案，私域商城、企业官网、教育系统、门店管理，助力中小企业高速增长。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
