# 团队使用指南：用 GitHub + Codex 修改官网

这份文档给不熟悉代码的同学使用。目标是：每个子品牌有自己的 GitHub 仓库，团队成员把仓库导入 Codex，在 Codex 里用自然语言改官网内容，然后提交到 GitHub，再部署到对应域名。

## 一、整体规则

### 一个子品牌一个仓库

当前主站仓库：

```text
git@github.com:faisco-liuliang/litingyun-home.git
```

以后每个子品牌单独创建一个仓库，例如：

```text
git@github.com:faisco-liuliang/brand-a-home.git
git@github.com:faisco-liuliang/brand-b-home.git
```

这样做的好处：

- 每个品牌可以独立改价格、文案、文章、域名。
- 某个品牌改坏了，不影响其他品牌。
- 每个品牌可以单独部署到自己的域名。

### 飞书表格可以共用一个文档

可以共用一个飞书表格文档，不同子品牌用不同 sheet：

```text
立亭云
子品牌A
子品牌B
```

每个 sheet 的字段保持一致：

```text
标题 / slug / 摘要 / 分类 / 标签 / 作者 / 发布日期 / 阅读时长 / 正文 / SEO描述 / 状态 / 发布链接 / 发布时间
```

发布规则：

- `状态 = 待审核`：文章还不能发布
- `状态 = 已审核`：同步脚本会发布
- `状态 = 已发布`：脚本发布成功后自动改成这个状态

## 二、新同学第一次准备

### 1. 安装工具

需要安装：

- GitHub Desktop
- Codex 桌面版
- Node.js

如果不确定有没有 Node.js，在终端运行：

```bash
node --version
npm --version
```

能看到版本号就说明已安装。

### 2. 配置 GitHub SSH Key

先按 [GitHub SSH Key 配置教程](./github-ssh-key-setup.md) 配好 GitHub 权限。

如果没有配好，会出现类似错误：

```text
Permission to faisco-liuliang/litingyun-home.git denied
```

### 3. 登录 GitHub

用团队提供的 GitHub 账号登录 GitHub Desktop。

如果团队以后改成每个人自己的 GitHub 账号，也可以把个人账号加入仓库协作者。

## 三、把项目导入本地

### 方式 A：用 GitHub Desktop

1. 打开 GitHub Desktop
2. 点击 `File` -> `Clone repository`
3. 选择仓库，例如 `faisco-liuliang/litingyun-home`
4. 选择本地目录
5. 点击 `Clone`

### 方式 B：用命令行

```bash
git clone git@github.com:faisco-liuliang/litingyun-home.git
cd litingyun-home
npm install
npm run dev
```

浏览器打开：

```text
http://localhost:3000
```

如果 3000 被占用，Next 会提示新的端口，例如：

```text
http://localhost:3001
```

## 四、在 Codex 里修改官网

### 1. 打开项目

在 Codex 里选择项目文件夹，例如：

```text
litingyun-home
```

### 2. 用自然语言描述需求

可以这样说：

```text
把首页主标题改成“专注本地商家的数字化增长平台”
```

也可以这样说：

```text
把价格页的商城豪华版价格改成 2999 元/年，并同步修改促销说明
```

### 3. 修改后让 Codex 检查

每次修改后，让 Codex 运行：

```bash
npm exec tsc -- --noEmit
npm run build
```

只要这两个命令通过，说明代码基本可以部署。

## 五、常见修改位置

### 首页

```text
components/home/hero.tsx
components/home/products-grid.tsx
components/home/pricing-preview.tsx
components/home/blog-preview.tsx
components/home/home-faq.tsx
components/home/cta.tsx
```

### 价格页

```text
app/pricing/page.tsx
```

### 产品页

```text
app/products/page.tsx
app/products/mall/page.tsx
app/products/website/page.tsx
app/products/store/page.tsx
app/products/education/page.tsx
app/products/booking/page.tsx
app/products/tools/page.tsx
app/products/geo/page.tsx
```

### 博客文章

```text
lib/blog-data.ts
```

一般不建议手动改这个文件。文章最好从飞书表格同步。

### 网站 SEO 基础信息

```text
app/layout.tsx
app/sitemap.ts
app/robots.ts
components/seo/json-ld.tsx
```

## 六、提交修改到 GitHub

### 用 GitHub Desktop

1. 左下角填写 Summary，例如：

```text
update homepage copy
```

2. 点击 `Commit to main`
3. 点击 `Push origin`

### 用命令行

```bash
git status
git add .
git commit -m "update homepage copy"
git push origin main
```

## 七、建议的安全流程

小白同学建议不要直接改线上主仓库，可以按这个流程：

1. 从 `main` 创建自己的分支
2. 在分支里修改
3. 构建通过后再合并到 `main`

命令示例：

```bash
git checkout main
git pull
git checkout -b update-homepage-copy
npm run dev
```

修改完成后：

```bash
npm exec tsc -- --noEmit
npm run build
git add .
git commit -m "update homepage copy"
git push origin update-homepage-copy
```

然后在 GitHub 上创建 Pull Request。

## 八、从飞书同步文章

预演，不写入网站、不改飞书状态：

```bash
LARK_SHEET_URL="飞书表格链接" npm run sync:lark
```

正式同步：

```bash
LARK_SHEET_URL="飞书表格链接" npm run sync:lark -- --sheet-id "子品牌sheetId" --range "A1:M500" --write
```

同步后检查：

```bash
npm exec tsc -- --noEmit
npm run build
```

再提交：

```bash
git add lib/blog-data.ts
git commit -m "publish reviewed articles"
git push origin main
```

## 九、部署到线上域名

当前主域名：

```text
zjb2.fkw.com
```

服务器建议：

- 每个品牌一个目录
- 每个品牌一个端口
- Nginx 按域名转发到对应端口

示例：

```text
/srv/litingyun/brands/zjb2.fkw.com/repo
```

如果以后新增品牌，就创建：

```text
/srv/litingyun/brands/brand-a.com/repo
/srv/litingyun/brands/brand-b.com/repo
```

## 十、出问题怎么办

### 本地服务挂了

重新运行：

```bash
npm run dev
```

### 端口不是 3000

看终端提示，例如：

```text
Local: http://localhost:3001
```

浏览器打开提示的地址即可。

### 构建失败

把错误完整复制给 Codex，让 Codex 修。

### Git 推不上去

先检查当前仓库地址：

```bash
git remote -v
```

应该看到类似：

```text
origin git@github.com:faisco-liuliang/litingyun-home.git
```

如果不是这个，说明 remote 配错了。

### 飞书同步失败

先检查授权：

```bash
lark-cli auth status
```

如果提示 user missing 或 token 过期，需要重新授权。
