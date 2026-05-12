// AI热点资讯 - 更新于 2026年5月12日
const newsData = [
  {
    id: 1,
    title: "OpenAI发布GPT-5.5双模型，幻觉率降低52.5%",
    summary: "5月6日，OpenAI正式发布GPT-5.5 Ultra+Instant，在医疗、金融、法律等高危场景实现零乱答。速度较前代提升40%，支持百万字长上下文，标志AI从"聊天玩具"升级为职场全能助理。",
    category: "大模型",
    time: "2026-05-06",
    source: "OpenAI / 硅基第六感",
    url: "https://juejin.cn/post/7637011261793501222",
    hot: 98
  },
  {
    id: 2,
    title: "历史性时刻：中国AI周调用量7.94万亿Token，首超美国",
    summary: "4月27日至5月3日，国内大模型周调用量环比激增81.7%，连续两周超越美国。前五名中四款来自中国厂商——MiniMax M2.5、Kimi K2.5、智谱GLM-5、DeepSeek V3.2，合计贡献85.7%。",
    category: "行业",
    time: "2026-05-07",
    source: "CSDN / LLM Timeline",
    url: "https://blog.csdn.net/ccl00757/article/details/160857324",
    hot: 96
  },
  {
    id: 3,
    title: "谷歌拟向Anthropic追加投资400亿美元，估值破万亿",
    summary: "Anthropic年化收入突破300亿美元，正式超越OpenAI约250亿美元。Claude Code表现亮眼，Q1实际增长达"规划预期的10倍，实际达到80倍"。融资估值冲破1万亿美元大关，成为全球估值最高的AI公司。",
    category: "行业",
    time: "2026-05-08",
    source: "稀土掘金 / The Paper",
    url: "http://m.toutiao.com/group/7638462161660035635/",
    hot: 95
  },
  {
    id: 4,
    title: "DeepSeek多模态论文发布，识图功能开启灰度测试",
    summary: "五一假期DeepSeek发布多模态论文后连夜删除，但识图功能灰度测试已悄然开启。华为宣布昇腾全系列产品及华为云完成对DeepSeek-V4全面支持，多模态版本预计5月内推出。",
    category: "大模型",
    time: "2026-05-01",
    source: "CSDN",
    url: "https://blog.csdn.net/ccl00757/article/details/160857324",
    hot: 92
  },
  {
    id: 5,
    title: "智元机器人万台量产，具身智能迈入实战阶段",
    summary: "5月5日，智元机器人第10000台通用具身机器人"远征A3"正式下线，15个月实现量产规模十倍跨越。已成功部署在汽车制造、3C电子装配、物流仓储等真实工业场景，实现24小时不间断稳定作业。",
    category: "产品",
    time: "2026-05-05",
    source: "CSDN / 硅基第六感",
    url: "https://blog.csdn.net/weixin_56622231/article/details/160501725",
    hot: 90
  },
  {
    id: 6,
    title: "Claude Code 51万行源码泄露，Anthropic遭遇重大安全事故",
    summary: "Anthropic Claude Code模型51万行核心源代码被泄露，暴露了其KAIROS原生智能体架构。泄露代码可能包含未公开的安全机制和模型脆弱性，被业界称为"AI领域的切尔诺贝利时刻"。",
    category: "安全",
    time: "2026-05-10",
    source: "CSDN",
    url: "https://blog.csdn.net/weixin_56622231/article/details/160501725",
    hot: 88
  },
  {
    id: 7,
    title: "哈佛实锤：AI急诊诊断准确率82%首超人类医生79%",
    summary: "5月1日，哈佛医学院在《科学》期刊发表重磅研究：OpenAI o1模型在急诊分诊中准确率达82%，首次超越人类医生(79%)。初始信息匮乏时AI准确率67%碾压人类医生(50%-55%)。",
    category: "学术",
    time: "2026-05-01",
    source: "硅基第六感",
    url: "http://m.toutiao.com/group/7636652259861955107/",
    hot: 87
  },
  {
    id: 8,
    title: "英伟达开源全球首个量子AI模型ISING",
    summary: "4月14日，英伟达发布全球首个开源量子AI模型ISING，量子纠错解码速度最高提升2.5倍，准确率提升3倍，量子处理器校准时间从数天缩短至数小时。开源路径降低量子AI准入门槛。",
    category: "学术",
    time: "2026-04-14",
    source: "CSDN",
    url: "https://blog.csdn.net/m0_53299663/article/details/160158162",
    hot: 85
  },
  {
    id: 9,
    title: "豆包官宣付费套餐，AI免费时代正式终结",
    summary: "5月6日，字节跳动旗下豆包正式上线付费增值服务：标准版68元/月、加强版200元/月、专业版500元/月。基础功能永久免费，高阶创作、深度分析、专业算力等场景全面收费。",
    category: "产品",
    time: "2026-05-06",
    source: "硅基第六感",
    url: "http://m.toutiao.com/group/7636652259861955107/",
    hot: 83
  },
  {
    id: 10,
    title: "国产AI芯片市场份额首破41%，集体盈利打破垄断",
    summary: "5月5日，国产算力传来史诗级利好：寒武纪一季度营收28.85亿元，同比暴涨159.56%，上市以来首次现金流为正。国产AI芯片中国市场份额首破41%，英伟达份额从95%骤降至55%。",
    category: "行业",
    time: "2026-05-05",
    source: "硅基第六感",
    url: "http://m.toutiao.com/group/7636652259861955107/",
    hot: 81
  },
  {
    id: 11,
    title: "Anthropic与SpaceX达成战略合作，获300兆瓦算力支持",
    summary: "5月7日，Anthropic宣布与SpaceX达成战略合作，获得Colossus 1数据中心全部超过300兆瓦的算力支持。借此大幅上调Claude Code使用限额，并预告下一代Claude模型将具备更强复杂任务处理能力。",
    category: "行业",
    time: "2026-05-07",
    source: "稀土掘金",
    url: "http://m.toutiao.com/group/7638462161660035635/",
    hot: 80
  },
  {
    id: 12,
    title: "马斯克庭审查认xAI蒸馏OpenAI模型，行业伦理争议升温",
    summary: "马斯克诉OpenAI案庭审进入第四天，马斯克公开承认"所有AI公司都在蒸馏模型来训练"，xAI"部分蒸馏了OpenAI来训练"。这番表态将模型蒸馏的行业潜规则推到公众面前，或加速相关监管框架建立。",
    category: "行业",
    time: "2026-05-09",
    source: "CSDN",
    url: "https://blog.csdn.net/ccl00757/article/details/160857324",
    hot: 78
  }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = newsData;
}
