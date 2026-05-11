const newsData = [
  {
    id: 1,
    title: "百度文心大模型5.1正式发布：登顶国内第一、全球第四",
    summary: "文心大模型5.1采用自研'多维弹性预训练'技术，仅以业界同规模模型约6%的预训练成本实现基础效果领先，登上LMArena搜索榜国内第一、全球第四，成为唯一上榜国产模型。",
    category: "大模型",
    time: "2026-05-11",
    source: "钛媒体/总台环球资讯",
    url: "http://m.toutiao.com/group/7638431317884928552/"
  },
  {
    id: 2,
    title: "中国牵头联合国AI国际合作：全球60%AI专利来自中国",
    summary: "中国、赞比亚常驻联合国代表团与中国科学技术协会在纽约联合国总部联合召开'人工智能能力建设国际合作之友小组会议'。中国代表强调AI发展必须坚守多边主义，数据显示中国已成为全球AI专利最大产出国，专利总量占世界六成。",
    category: "应用",
    time: "2026-05-11",
    source: "总台环球资讯",
    url: "http://m.toutiao.com/group/7638442301014753828/"
  },
  {
    id: 3,
    title: "DeepSeek拟融资500亿元，梁文锋200亿元领投",
    summary: "中国AI大模型明星企业DeepSeek正寻求首轮融资，募资最高达500亿元人民币(约73.5亿美元)，若成功将创中国AI公司单轮融资最高纪录。DeepSeek创始人梁文锋将自掏200亿元领投，融资后估值或达450亿美元。",
    category: "应用",
    time: "2026-05-11",
    source: "犀利琛AI日报",
    url: "http://m.toutiao.com/group/7638296531976438322/"
  },
  {
    id: 4,
    title: "智谱AI开源千亿级视觉模型：国内首个开源千亿参数多模态模型",
    summary: "智谱AI发布国内首个开源千亿参数多模态视觉大模型，支持图文理解、视频分析与具身智能，面向开发者免费商用。",
    category: "学术",
    time: "2026-05-11",
    source: "河湾里穿梭的游鱼",
    url: "http://m.toutiao.com/group/7638431317884928552/"
  },
  {
    id: 5,
    title: "OpenAI连发三款实时语音模型：GPT Realtime-2系列发布",
    summary: "OpenAI发布GPT Realtime-2系列实时语音模型，具备GPT-5级推理能力，128K上下文，支持并行工具调用与实时打断，延迟低于200ms，将显著提升语音交互体验。",
    category: "大模型",
    time: "2026-05-11",
    source: "河湾里穿梭的游鱼",
    url: "http://m.toutiao.com/group/7638431317884928552/"
  },
  {
    id: 6,
    title: "Anthropic年化营收破300亿美元，估值冲击9000亿",
    summary: "Anthropic以300亿美元年化营收超越OpenAI，证实聚焦策略的商业价值。公司正以9000亿美元估值推进新一轮融资，若完成将超过OpenAI最新估值，成为全球最具价值的AI公司。",
    category: "应用",
    time: "2026-05-11",
    source: "犀利琛AI日报",
    url: "http://m.toutiao.com/group/7638296531976438322/"
  },
  {
    id: 7,
    title: "国产端侧AI芯片量产：功耗压至0.5W，可离线运行13B模型",
    summary: "国产端侧AI芯片实现重大突破，功耗压至0.5W，可离线运行130亿参数大模型，手机、车机、物联网设备规模化落地加速。",
    category: "产品",
    time: "2026-05-11",
    source: "河湾里穿梭的游鱼",
    url: "http://m.toutiao.com/group/7638431317884928552/"
  },
  {
    id: 8,
    title: "谷歌Gemini 2.5 Ultra内测：视频理解达4K/60fps",
    summary: "谷歌Gemini 2.5 Ultra正在进行内测，视频理解能力达4K/60fps，支持长视频摘要与事件推理，多模态能力直追GPT-5.5。",
    category: "大模型",
    time: "2026-05-11",
    source: "河湾里穿梭的游鱼",
    url: "http://m.toutiao.com/group/7638431317884928552/"
  },
  {
    id: 9,
    title: "豆包月活3.45亿：字节考虑推出付费订阅服务",
    summary: "字节跳动旗下豆包大模型月活已达3.45亿，但算力成本持续攀升，公司正考虑推出付费订阅服务以缓解财务压力，标志着国产大模型'免费狂欢'时代接近尾声。",
    category: "产品",
    time: "2026-05-11",
    source: "犀利琛AI日报",
    url: "http://m.toutiao.com/group/7638296531976438322/"
  },
  {
    id: 10,
    title: "工信部启动人工智能科技伦理审查与服务先导计划",
    summary: "工信部正式印发通知，启动人工智能科技伦理审查与服务先导计划，将依托国家AI产业创新应用先导区所在省份，率先探索AI伦理审查与服务的落地路径，标志着国内AI伦理治理进入实操阶段。",
    category: "应用",
    time: "2026-05-11",
    source: "金台资讯/新华社",
    url: "http://m.toutiao.com/group/7638088511736611371/"
  },
  {
    id: 11,
    title: "Anthropic Claude数学推理突破IMO级难题：正确率超80%",
    summary: "Anthropic Claude 3.5在IMO竞赛级数学难题上正确率超80%，获菲尔兹奖得主点赞，被称为首个可靠解决博士级数学问题的大模型。",
    category: "学术",
    time: "2026-05-11",
    source: "河湾里穿梭的游鱼",
    url: "http://m.toutiao.com/group/7638431317884928552/"
  },
  {
    id: 12,
    title: "英伟达H200全球限价：亚洲客户交付周期延至6个月",
    summary: "为应对出口管制，英伟达H200实行配额制，亚洲客户交付周期延至6个月。消息刺激下，国产昇腾、寒武纪订单激增，国产AI芯片市场份额持续提升。",
    category: "产品",
    time: "2026-05-11",
    source: "河湾里穿梭的游鱼",
    url: "http://m.toutiao.com/group/7638431317884928552/"
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = newsData;
}
