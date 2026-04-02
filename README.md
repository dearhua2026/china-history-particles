# 华夏时空脉络 (China History Particles) - 项目全景手册

本文件为项目状态快照，旨在方便后续操作或新的 AI 会话快速接管。

## 1. 项目简介
- **目标**：仿 `learn-anything.xyz` 风格，通过神经元连接特效展示中国历史人物。
- **技术栈**：HTML, Vanilla CSS, JavaScript, `tsParticles` 引擎。
- **核心逻辑**：
    - 粒子形状：`text` 类型，配置约 50 位核心历史人物姓名。
    - 交互：支持 `grab` (建立连线) 和 `push` (注入新节点)。

## 2. 基础设施与环境
### 线上部署
- **托管平台**：Cloudflare Pages
- **部署地址**：[https://china-history-particles.pages.dev/](https://china-history-particles.pages.dev/)
- **同步方式**：GitHub 自动集成 (Git Integration)。

### 代码仓库
- **GitHub 地址**：[https://github.com/dearhua2026/china-history-particles.git](https://github.com/dearhua2026/china-history-particles.git)
- **主分支**：`main`

### 本地环境 (Windows)
- **Git**：已初始化并关联远程仓库。
- **GitHub CLI (gh)**：已安装，路径为 `C:\Program Files\GitHub CLI\gh.exe`。账户 `dearhua2026` 已授权。
- **Node.js (LTS)**：已安装，路径为 `C:\Program Files\nodejs\node.exe`。
- **Cloudflare Wrangler**：已安装并完成授权。

## 3. 目录结构说明
```text
/
├── public/                 # 线上同步核心目录
│   ├── index.html          # 主页面结构
│   ├── style.css           # 玻璃拟态风格定义
│   ├── app.js              # 粒子引擎逻辑与人物名单
│   └── project_report.md   # 生产环境报告
├── docs/                   # 研发文档与记录
│   ├── walkthrough.md      # 功能演示与截图
│   ├── task.md             # 任务进度踪迹
│   └── implementation_plan_*.md  # 各阶段技术实施计划方案
├── README.md               # 您当前正在阅读的项目全景手册
└── .gitignore              # Git 忽略配置
```

## 4. 自动化运维指令
若需更新网站，只需执行以下标准的“AI-到-生产”流程：
1. 修改 `public/` 下的代码。
2. 运行 `git add .`
3. 运行 `git commit -m "描述修改内容"`
4. 运行 `git push`
5. **部署成功**：Cloudflare 会在一分钟内自动捕捉更新并上线。

---
*本手册由 Antigravity AI 助理于 2026-04-02 编写，用于项目状态持久化。*
