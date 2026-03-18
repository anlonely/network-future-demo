<div align="center">

# Network Future Demo

**网络架构与 AI 系统作品集演示项目**

一个基于 React + Vite 的展示型前端，用于呈现网络基础设施、自动化运维与 AI 场景的公开作品集。

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

</div>

---

## 📋 目录 / Table of Contents

- [项目说明](#-项目说明--overview)
- [展示内容](#-展示内容--showcase)
- [技术栈](#-技术栈--tech-stack)
- [快速开始](#-快速开始--quick-start)
- [项目结构](#-项目结构--project-structure)
- [设计方向](#-设计方向--design-direction)

---

## 🎯 项目说明 / Overview

这个仓库是一个**对外展示型作品集 Demo**，重点不是后台业务，而是通过精简、可公开的数据模型，展示以下方向：

- 网络架构设计
- 虚拟化与平台建设
- 零信任与身份访问
- 监控、AIOps 与自动化
- 服务运维与交付能力

仓库内容已经做过公开化处理，适合直接部署为演示站点或作为前端作品集模板继续演进。

---

## ✨ 展示内容 / Showcase

| 领域 | 说明 | Domain | Summary |
|------|------|--------|---------|
| Open Network Architecture | 多区域网络、弹性路由、可观测性 | Network | Multi-region design and observability |
| Virtualization Patterns | 集群迁移、VDI 调优、基础设施基线 | Virtualization | Cluster and endpoint modernization |
| Zero-Trust Foundations | 身份感知访问、设备信任、生命周期自动化 | Security | Access control and device trust |
| Monitoring & AIOps | 告警流水线、监控仪表板、AI 事件分析 | Monitoring | Alerts, dashboards and AI ops |
| Infrastructure Automation | 环境交付、声明式流程、平台复用 | Automation | Declarative provisioning and workflows |
| Service Operations | 工单减少、运行手册、平台支持案例 | Operations | Runbooks and service improvement |

---

## 🛠 技术栈 / Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build**: Vite 6
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React

适合用于：

- 个人技术作品集
- 网络 / 运维 / 平台工程展示页
- 演示型 Landing Page 或案例站

---

## 🚀 快速开始 / Quick Start

### 1. 安装依赖 / Install

```bash
npm install
```

### 2. 启动开发环境 / Start Dev Server

```bash
npm run dev
```

默认地址：

- `http://127.0.0.1:3000`

### 3. 构建生产版本 / Build

```bash
npm run build
```

### 4. 本地预览 / Preview

```bash
npm run preview
```

### 5. 类型检查 / Type Check

```bash
npm run lint
```

---

## 📂 项目结构 / Project Structure

```text
network-future-demo/
├── src/
│   ├── App.tsx              # 主页面 / Main page
│   ├── index.css            # 全局样式 / Global styles
│   ├── main.tsx             # 应用入口 / Entry point
│   └── components/
│       └── Card.tsx         # 卡片组件 / Reusable showcase card
├── index.html               # HTML 模板 / HTML shell
├── metadata.json            # 项目元数据 / Project metadata
├── package.json             # 脚本与依赖 / Scripts and dependencies
└── vite.config.ts           # Vite 配置 / Vite config
```

---

## 🎨 设计方向 / Design Direction

- 深色背景 + 高对比强调色
- 偏未来感的网络与 AI 视觉语义
- 轻量、静态、无后台依赖
- 支持桌面和移动端浏览

如果你只是想快速部署一个公开演示页，这个仓库可以直接作为起点。
