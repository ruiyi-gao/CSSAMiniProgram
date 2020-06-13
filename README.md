# CSSAMiniProgram

# Pages结构
- homePage: 主页面 内容见主页面设计
- CSSA_home: CSSA主页面 内容为CSSA简介和每个部门的button
- CSSA：储存所有CSSA page的文件夹
  - ZhuXiTuan: 主席团主页面
  - JiShuBu： 技术部主页面
  - QiHuaBu：企划部主页面
  - ZhiYeBu：职业部主页面
  - NeiLianBu：内联部主页面
  - WaiLianBu：外联部主页面
  - CaiWuBu：财务部主页面
  - XuanChuanBu：宣传部主页面
- freshman_manual_home: 新生手册主页面
- freshman_manual：储存所有新生手册page的文件夹
  - XiaoYuanZhouBian：校园周边主页面
  - ZhuSu：住宿主页面
  - BaoXian：保险主页面
  - XuanKe：选课主页面
  - JieJi：接机主页面
  - YinHang：银行主页面

# UI Cheat Sheet
app.wxss可调用内容
- view
  - bg_wrap: 每页最外面的view 设定页面宽度和margin
- text
  - title：标题文字class
  - basic: body文字class
其他可能有帮助的tips
- 颜色
  - 需要设计方案里三种颜色的话可以直接用“bg-blue”/"bg-pink"/"bg-black"
  - 或者可以查看设计方案里的rgb value
 
# 关于Color UI
- 什么是Color UI？
  - Color UI是我们可以调用的一个wxss库 
  - github: https://github.com/weilanwl/ColorUI
- 如何调用？
  - Option 1：colorui -> components -> main.wxss
    找到你需要的UI component之后填写相应parameter
  - Option 2：微信搜索Color UI小程序 找到你想要的组件
    之后在Github里或用方法一找到对应的code并修改
  - Option 3: clone Color UI的github并用微信开发助手打开
    找到你想要的组件及对应的code并修改
  - Note: 
    Color UI组件库已经import到app.wxss里了 
    不需要复制粘贴对应wxss代码 只需要js和wxml即可

# 关于设计方案
- 配色：Ａ
  - 黑色RGB：(41, 40, 53)
  - 粉色RGB：(255, 156, 166)
  - 蓝色RGB：(103, 140, 255)

主界面 
- 参照原来的模板和主界面A＋E
  - 最上方活动宣传/滚动图片
  - 粉色和蓝色两个block (新生手册和CSSA)
  - 黑框背景 四个button (校园周边 二手物品 接机 选课)
  - 最下面参照E(#9)往期活动宣传(白色背景)
  - Tab bar (主页 论坛 交易信息 我的)

cssa 主界面
- 主界面B
  - 顶部写CSSA宗旨及简单介绍
  - 下面分区部分给各个部门(8个button)
    - 主席团 技术部 企划部 宣传部 内联部 外联部 职业部 财务部

部门页面
- 参照CSSA官网设计以及成团推文
  - 部门简介
  - 图片
  - 成员名单

主页面UI框架
- 主View (白色背景)
  - 信息View
    - Swiper/Image(活动介绍)
      - 调用Color UI “全屏或卡片轮播”
    - 蓝色/粉色button(CSSA及新生手册)
      - 调用Color UI “按钮-块状按钮”
    - 黑色背景图
    - 四个button(校园周边 二手物品 接机 选课)
      - 调用Color UI “列表-宫格列表”
  - 卡片View
    - 卡片(往期活动图文)
      - 调用Color UI “卡片-案例类卡片/文章类卡片”
- Tab Bar
  - 图标来自阿里巴巴矢图网(可用Color UI图标代替)
