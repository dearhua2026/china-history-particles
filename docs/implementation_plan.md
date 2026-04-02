# 粒子背景与历史人物标签实现计划

我们将使用 `tsParticles` 库创建一个具有“神经元连接”或“知识图谱”效果的高端网页背景。每个粒子将显示一个中国历史人物的名字。

## 用户评审需求

1.  **人物名单**：初步选定：秦始皇、汉武帝、唐太宗、宋太祖、成吉思汗、康熙、孔子、老子、庄子、墨子、屈原、司马迁、曹操、诸葛亮、李白、杜甫、苏轼、辛弃疾、关羽、岳飞、郑和、戚继光、林则徐等。
2.  **视觉风格**：深色科技风，使用兰亭黑或类似现代字体。

## 拟议更改

### 前端开发

#### [NEW] [index.html](file:///c:/Users/Administrator/Documents/demo/web/index.html)
- 包含 `tsParticles` CDN 引入。
- 结构化的 HTML5 语义化标签。
- 主体容器用于渲染粒子效果。

#### [NEW] [style.css](file:///c:/Users/Administrator/Documents/demo/web/style.css)
- 定义全屏背景色（深色渐变）。
- 实现玻璃拟态（Glassmorphism）效果的 UI 组件，用于展示标题或简介。
- 现代字体配置（Google Fonts - Inter/Noto Sans SC）。

#### [NEW] [app.js](file:///c:/Users/Administrator/Documents/demo/web/app.js)
- 初始化 `tsParticles` 引擎。
- 配置粒子参数：
    - 形状：`text` 类型，配置历史人物名单。
    - 连线：`links` 开启，设置透明度和距离。
    - 交互：添加鼠标悬停排斥或吸引效果，点击分裂/合并。

## 验证计划

### 自动化测试
- 使用浏览器工具检查页面渲染情况。
- 确认粒子是否正确显示名字且连线正常。

### 手动验证
- 检查动画的流畅度和视觉冲击力。
- 确认响应式设计是否适配不同屏幕尺寸。
