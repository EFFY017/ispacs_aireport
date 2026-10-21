# iSPACS AIR 报告前端 Demo

基于 `product_requirements/AIR报告编辑与模板能力需求_v1.1.md` 与颅脑编辑界面图实现的纯前端演示项目。

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

项目包含 12 条患者假数据、12 条 AIR 快捷模板和 15 条 PACS 公共模板数据，以及患者查询、模板搜索、模板插入、所见/诊断关联高亮与非对称删除、一键阴性模板、撤销、整理报告、查看原始报告等演示交互。

AIR 与 PACS 报告编辑页支持两条独立路径：

- `返回 PACS 编辑`：返回 PACS 编辑界面并保留 PACS 原报告，不插入当前 AIR 内容。
- `引用到 PACS 报告`：直接返回 PACS 编辑界面，并将当前 AIR 影像所见、诊断意见同步至对应编辑框；引用不等于正式发布。
