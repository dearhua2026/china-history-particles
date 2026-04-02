# 项目目录结构优化计划

为了保持项目的整洁，我们将目前的扁平化结构调整为分层结构。这将确保 GitHub 仓库中只包含上线所需的必要文件，同时保留所有的开发过程文档。

## 目录方案建议

我们将采用以下结构：
- **`public/`**：存放上线生产环境的所有文件（核心代码、样式、脚本、成果报告）。
- **`docs/`**：存放所有内部开发文档、任务清单、实施计划及离线测试记录。

### 详细目录树
```text
/
├── public/                 # 生产目录 (同步至 Cloudflare)
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── project_report.md
├── docs/                   # 内部开发文档
│   ├── implementation_plan.md
│   ├── task.md
│   ├── walkthrough.md
│   ├── implementation_plan_deploy.md
│   └── implementation_plan_git.md
└── .gitignore              # 根目录配置
```

## 用户评审需求

> [!IMPORTANT]
> **Cloudflare 配置更新**：
> 在我完成文件移动后，您需要登录 Cloudflare 控制台，进入 **Settings** -> **Build & deployments** -> **Configure build settings**，将 **Build output directory** 从 `./` 修改为 `public`。这样 Cloudflare 才会正确找到网页文件。

## 拟议操作步骤

1.  **创建文件夹**：创建 `public` 和 `docs` 目录。
2.  **移动生产文件**：将 `index.html`, `style.css`, `app.js`, `project_report.md` 移动到 `public/`。
3.  **移动开发文件**：将所有的 `.md` 实施计划、任务列表和演示文稿移动到 `docs/`。
4.  **更新 Git 记录**：由于大范围移动文件，需要执行一次 `git add -A` 并提交。
5.  **提供指令**：指导用户执行最终的 `git push` 以同步到 GitHub。

## 开放性问题
- 您是否满意 `public` 和 `docs` 这两个文件夹命名？（也可以叫 `src` / `internal` 等）
