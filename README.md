# Todo List App

一个使用React Native和Expo开发的待办事项应用。

## 功能特点

- 展示待办事项列表
- 添加新的待办事项（通过模态框）
- 标记待办事项为已完成
- 左滑删除待办事项

## 技术栈

- React Native
- Expo
- React Native Gesture Handler（用于滑动删除功能）

## 运行项目

1. 首先安装依赖：
```bash
npm install
# 或
yarn install
```

2. 启动开发服务器：
```bash
npm start
# 或
yarn start
```

3. 使用Expo Go应用扫描二维码在手机上运行，或者按照终端提示在模拟器中运行。

## 项目结构

```
todo-list-app/
├── App.js              # 应用入口文件
├── components/         # 组件目录
│   ├── TodoItem.js    # 待办事项组件
│   └── AddTodoModal.js # 添加待办事项的模态框组件
├── package.json       # 项目配置文件
└── README.md         # 项目说明文档
``` 