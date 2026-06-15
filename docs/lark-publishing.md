# 飞书文章同步发布

这个项目的博客文章统一维护在 `lib/blog-data.ts`。页面会自动读取这个数据源：

- `/blog`：文章列表
- `/blog/[slug]`：文章详情
- 首页博客预览：最新 3 篇文章

## 飞书表格字段

建议飞书表格第一行使用以下字段名：

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| 标题 | 是 | 文章标题 |
| slug | 否 | URL 路径，不填时脚本会按标题生成 |
| 摘要 | 否 | 列表页摘要，不填时从正文截取 |
| 分类 | 否 | 如 SEO 优化、GEO 优化、私域运营 |
| 标签 | 否 | 用逗号、顿号或换行分隔 |
| 作者 | 否 | 默认：立亭云内容团队 |
| 发布日期 | 否 | 默认当天，格式建议 YYYY-MM-DD |
| 阅读时长 | 否 | 默认按正文长度估算 |
| 正文 | 是 | Markdown 正文，支持 `##`、`###` 标题 |
| SEO描述 | 否 | 页面 description，不填时使用摘要 |
| 状态 | 是 | `已审核` 的文章会进入发布队列 |
| 发布链接 | 否 | 发布后脚本会回写 |
| 发布时间 | 否 | 发布后脚本会回写 |

## 本地预演

默认不会写入项目，也不会改飞书状态：

```bash
LARK_SHEET_URL="https://example.feishu.cn/sheets/xxxx" npm run sync:lark
```

如果表格有多个工作表，指定 `sheet-id`：

```bash
npm run sync:lark -- --sheet-url "https://example.feishu.cn/sheets/xxxx" --sheet-id "xxxxxx" --range "A1:M500"
```

## 正式发布

加 `--write` 后会：

1. 读取 `状态 = 已审核` 的文章
2. 合并写入 `lib/blog-data.ts`
3. 将飞书表格状态改成 `已发布`
4. 回写 `发布链接` 和 `发布时间`（如果表格有这些列）

```bash
npm run sync:lark -- --sheet-url "https://example.feishu.cn/sheets/xxxx" --range "A1:M500" --write
npm exec tsc -- --noEmit
npm run build
git add lib/blog-data.ts
git commit -m "chore: publish reviewed articles"
git push origin main
```

## 自动任务建议

每天定时任务可以跑：

```bash
cd /srv/litingyun/brands/litingyun.com/repo
git pull --ff-only
LARK_SHEET_URL="https://example.feishu.cn/sheets/xxxx" npm run sync:lark -- --write
npm exec tsc -- --noEmit
npm run build
git diff --quiet || {
  git add lib/blog-data.ts
  git commit -m "chore: publish reviewed articles"
  git push origin main
}
```

如果希望发布后不是改成 `已发布`，可以用环境变量覆盖：

```bash
LARK_PUBLISHED_STATUS="已审核" npm run sync:lark -- --write
```

但推荐使用 `已发布`，否则下次同步会重复发布同一行。
