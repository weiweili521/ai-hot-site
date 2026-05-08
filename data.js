// AI热点资讯 - 2026年5月8日更新
// GitHub: weiweili521/aihot

const aiNews = [
  {
    id: 1,
    title: "OpenAI发布GPT-Realtime-2实时语音模型，首次将GPT-5级推理能力注入语音交互",
    summary: "OpenAI于5月8日凌晨发布GPT-Realtime-2实时语音模型，支持边说边推理、中途打断无缝衔接，体验接近真人对话。同时发布GPT-Realtime-Translate（支持70种语言零延迟同声传译）和GPT-Realtime-Whisper（极致低延迟流式转录）。语音交互正式从\"机械指令时代\"迈入\"真人级实时协作时代\"。",
    category: "大模型",
    date: "2026-05-08",
    source: "科技追风社",
    url: "http://m.toutiao.com/group/7637319387342570036/"
  },
  {
    id: 2,
    title: "马斯克官宣解散xAI并入SpaceX，22万张GPU全部租给Anthropic",
    summary: "5月6日马斯克正式宣布xAI不再作为独立公司运营，整体并入SpaceX，旗下Grok及相关AI业务统一整合为\"SpaceXAI\"。SpaceX将旗下Colossus 1超算集群（22万块英伟达GPU、300兆瓦算力）全部租赁给Anthropic用于Claude系列模型推理。xAI解散原因是创始团队11人于1-3月间全部离职，Grok在企业市场缺乏竞争力。",
    category: "大模型",
    date: "2026-05-08",
    source: "AI日报",
    url: "http://m.toutiao.com/group/7637321719862116914/"
  },
  {
    id: 3,
    title: "Kimi完成136亿元D轮融资，投后估值超1362亿元创国内大模型纪录",
    summary: "月之暗面（Kimi）完成约136亿元D轮融资，成为中国大模型迄今最大单笔融资，投后估值超1362亿元，累计融资接近300亿元。月之暗面还申请注册了多枚\"KimiClaw\"商标，涵盖科学仪器、网站服务及通讯服务等领域，业界猜测其正在布局AI硬件产品线。",
    category: "大模型",
    date: "2026-05-08",
    source: "AI日报",
    url: "http://m.toutiao.com/group/7637321719862116914/"
  },
  {
    id: 4,
    title: "Anthropic承诺五年向谷歌云支出2000亿美元，算力合作深化",
    summary: "Anthropic已承诺五年内向谷歌云支出总计2000亿美元，这一数字占谷歌收入积压的40%以上。目前OpenAI和Anthropic合同总额已占四大云服务商2万亿美元未履约收入的一半。在拿到xAI超算算力后，Anthropic算力布局大幅加强，正在从算法和算力两端同步扩张。",
    category: "大模型",
    date: "2026-05-08",
    source: "AI日报",
    url: "http://m.toutiao.com/group/7637321719862116914/"
  },
  {
    id: 5,
    title: "字节跳动发布全模态大模型Doubao-Seed-2.0-lite，支持GUI界面操作",
    summary: "字节跳动旗下火山引擎推出豆包大模型家族首款全模态理解模型Doubao-Seed-2.0-lite，打破单一模态限制，实现视频、图像、音频与文本的原生统一理解，支持19种语言转写及14种语言互译，首次实现GUI图形界面理解与执行一体化。该模型已在电竞复盘、在线教育、跨境电商等领域落地应用。",
    category: "大模型",
    date: "2026-05-08",
    source: "AI日报",
    url: "http://m.toutiao.com/group/7637321719862116914/"
  },
  {
    id: 6,
    title: "谷歌预热Gemini 2.5 Pro I/O，AI编程能力大幅升级",
    summary: "谷歌在Google I/O 2026（定于5月19日举行）预热期间发布Gemini 2.5 Pro I/O，该模型在AI编程领域表现突出，单条文本提示即可完成复杂界面开发任务，能自动匹配用户界面组件的视觉风格，支持将YouTube视频快速转换为互动学习应用，几乎无需手动编写CSS。谷歌还同步发布Gemma4的多Token预测起草器，推理速度最高提升3倍。",
    category: "大模型",
    date: "2026-05-08",
    source: "AI日报",
    url: "http://m.toutiao.com/group/7637321719862116914/"
  },
  {
    id: 7,
    title: "Anthropic推出\"Dreaming做梦\"功能，AI代理实现自我进化",
    summary: "Anthropic向Claude Managed Agents推出三项新功能：一是\"做梦\"功能（Dream），Agent在空闲时自动整理和优化自身记忆；二是成果评估功能，自动化检查任务完成质量；三是多Agent协作功能，将复杂任务拆分给多个子Agent协同完成。Anthropic CEO透露公司2026年Q1年化营收和使用量增长了80倍。",
    category: "应用",
    date: "2026-05-08",
    source: "AI新闻周报",
    url: "http://m.toutiao.com/group/7637320008300790291/"
  },
  {
    id: 8,
    title: "SSA新架构算力减少千倍，Transformer主导地位遭遇正面挑战",
    summary: "美国迈阿密13人公司Subquadratic发布基于SSA（Subquadratic State Architecture）架构的SubQ模型，支持1200万Token超长上下文，计算量较Transformer架构减少千倍，成本仅为Claude Opus的5%。这是继Mamba等架构之后，又一次对Transformer主导地位的正面挑战。",
    category: "学术",
    date: "2026-05-08",
    source: "AI日报",
    url: "http://m.toutiao.com/group/7637321719862116914/"
  },
  {
    id: 9,
    title: "Meta发布ProgramBench测试集，9款顶级AI模型完整通过率均为0%",
    summary: "Meta联合斯坦福大学、哈佛大学发布ProgramBench测试集，要求AI从零重写200个真实软件项目。结果令人震惊：包括GPT、Claude、Gemini等9款顶级AI模型，完整通过率均为0%，最佳模型的平均通过率仅有51.2%。这一结果提醒行业，当前AI在复杂软件工程任务上仍存在巨大鸿沟。",
    category: "学术",
    date: "2026-05-08",
    source: "AI日报",
    url: "http://m.toutiao.com/group/7637321719862116914/"
  },
  {
    id: 10,
    title: "无问芯穹完成超7亿元融资，日均Token调用量增长20倍",
    summary: "清华背景的AGI基础设施公司无问芯穹完成超7亿元融资，成为国内最大原生AGI基础设施融资项目。截至2026年4月，平台日均Token调用量较去年底增长超20倍。同类赛道热度持续升温，魔形智能也完成数亿元Pre-A轮融资，加速建设\"Token超级工厂\"。",
    category: "大模型",
    date: "2026-05-08",
    source: "AI日报",
    url: "http://m.toutiao.com/group/7637321719862116914/"
  },
  {
    id: 11,
    title: "Hugging Face上线机器人应用商店，被称为\"机器人界的App Store\"",
    summary: "Hugging Face为Reachy Mini机器人推出了开源应用商店，已收录200多个社区构建的应用程序。Reachy Mini用户可以免费下载使用这些应用，涵盖从家庭助手到教育工具等场景。这被媒体称为\"机器人界的App Store\"。",
    category: "产品",
    date: "2026-05-08",
    source: "AI新闻周报",
    url: "http://m.toutiao.com/group/7637320008300790291/"
  },
  {
    id: 12,
    title: "微软Agent 365正式上线，应对企业影子AI威胁",
    summary: "微软将Agent 365从预览正式转为正式上线。该产品定位为企业统一的AI代理控制面，让IT和安全团队能够观察、治理和保护所有AI代理的运行——无论是在微软生态内部，还是在AWS Bedrock、Google Cloud等第三方平台上。Shadow AI（影子AI）已成为企业面临的新安全威胁。",
    category: "产品",
    date: "2026-05-08",
    source: "AI新闻周报",
    url: "http://m.toutiao.com/group/7637320008300790291/"
  }
];

// 分类统计
const categories = {
  "大模型": aiNews.filter(n => n.category === "大模型").length,
  "应用": aiNews.filter(n => n.category === "应用").length,
  "学术": aiNews.filter(n => n.category === "学术").length,
  "产品": aiNews.filter(n => n.category === "产品").length
};

console.log(`✅ AI热点资讯数据已加载
📅 更新日期: 2026-05-08
📰 新闻总数: ${aiNews.length}条
📊 分类统计: 大模型${categories["大模型"]}条 | 应用${categories["应用"]}条 | 学术${categories["学术"]}条 | 产品${categories["产品"]}条
`);
const newsByDate = {
    "2026-05-07": [
        {
            "title": "OpenAI 发布 GPT-4o 多模态大模型",
            "summary": "OpenAI 发布最新一代多模态大模型 GPT-4o，支持文本、图像、音频输入输出，响应速度提升5倍，视觉理解能力大幅增强。",
            "category": "大模型",
            "time": "10:30",
            "source": "OpenAI",
            "url": "https://openai.com/index/hello-gpt-4o/"
        },
        {
            "title": "Claude 3.5 Sonnet 代码能力跃升",
            "summary": "Anthropic 推出 Claude 3.5 Sonnet，在代码生成和推理测试中超越 GPT-4o，价格仅为前代模型的一半。",
            "category": "大模型",
            "time": "09:15",
            "source": "Anthropic",
            "url": "https://www.anthropic.com/news/claude-3-5-sonnet"
        },
        {
            "title": "腾讯混元登顶 OpenRouter 周调用量榜首",
            "summary": "国产大模型周调用量达7.94万亿，环比激增81.7%，首次超越美国模型占据榜首。",
            "category": "大模型",
            "time": "08:30",
            "source": "36氪",
            "url": "https://36kr.com"
        },
        {
            "title": "英伟达 B200 全球断货",
            "summary": "AI 芯片供应链持续紧张，英伟达 B200 全球范围断货，X 平台热度暴涨625%。",
            "category": "产品",
            "time": "07:45",
            "source": "机器之心",
            "url": "https://www.jiqizhixin.com"
        }
    ],
    "2026-05-06": [
        {
            "title": "字节跳动发布豆包4.0 多模态模型",
            "summary": "字节跳动正式发布豆包4.0，支持100万字超长上下文，多模态理解能力达到国内领先水平。",
            "category": "产品",
            "time": "18:00",
            "source": "36氪",
            "url": "https://www.doubao.com"
        },
        {
            "title": "Google Gemini 1.5 Pro 开放 API",
            "summary": "Google 正式开放 Gemini 1.5 Pro API 接口，支持100万token上下文，开发者可直接调用。",
            "category": "大模型",
            "time": "14:30",
            "source": "Google",
            "url": "https://ai.google.dev/"
        },
        {
            "title": "国家大基金计划投资 DeepSeek",
            "summary": "国家大基金正洽谈领投 DeepSeek 首轮融资，若达成其估值将超450亿美元。",
            "category": "大模型",
            "time": "11:20",
            "source": "虎嗅",
            "url": "https://www.huxiu.com"
        },
        {
            "title": "Anthropic 一周获两笔重磅投资",
            "summary": "谷歌400亿美元入股 Anthropic，估值达3800亿美元，成为全球估值最高的AI初创公司。",
            "category": "大模型",
            "time": "09:15",
            "source": "新浪科技",
            "url": "https://tech.sina.com.cn"
        }
    ],
    "2026-05-05": [
        {
            "title": "AI 编程工具 Cursor 用户突破100万",
            "summary": "AI 代码编辑器 Cursor 宣布月活用户突破100万，成为开发者最受欢迎的 AI 编程工具之一。",
            "category": "应用",
            "time": "16:45",
            "source": "InfoQ",
            "url": "https://cursor.sh/"
        },
        {
            "title": "豆包正式开启付费模式",
            "summary": "字节跳动豆包正式宣布开启付费订阅模式，标志着AI免费时代宣告终结。",
            "category": "产品",
            "time": "14:30",
            "source": "36氪",
            "url": "https://www.doubao.com"
        },
        {
            "title": "国产AI芯片份额首破41%",
            "summary": "寒武纪营收暴涨159%，英伟达市场份额骤降，国产AI芯片实现历史性突破。",
            "category": "产品",
            "time": "11:20",
            "source": "财新",
            "url": "https://www.caixin.com"
        },
        {
            "title": "苹果将开放第三方AI权限",
            "summary": "iOS 27将于秋季上线，苹果生态围墙出现裂痕，允许第三方AI应用接入系统级权限。",
            "category": "应用",
            "time": "09:00",
            "source": "彭博社",
            "url": "https://www.bloomberg.com"
        }
    ],
    "2026-05-04": [
        {
            "title": "欧盟 AI 法案正式生效",
            "summary": "欧盟 AI 法案正式生效，成为全球首部综合性 AI 监管法规，对全球AI产业发展产生深远影响。",
            "category": "学术",
            "time": "15:30",
            "source": "欧盟委员会",
            "url": "https://digital-strategy.ec.europa.eu"
        },
        {
            "title": "DeepSeek 估值飙升至450亿美元",
            "summary": "DeepSeek 估值数周内从200亿美元跃升至450亿美元，本轮融资由国家大基金领投。",
            "category": "大模型",
            "time": "13:20",
            "source": "Berryxia.AI",
            "url": "https://x.com/berryxia"
        },
        {
            "title": "斯坦福揭示 AI「锯齿前沿」现象",
            "summary": "斯坦福研究发现 AI 能拿奥赛金牌却看不懂时钟，揭示大模型能力发展的不平衡现象。",
            "category": "学术",
            "time": "10:15",
            "source": "斯坦福HAI",
            "url": "https://hai.stanford.edu"
        }
    ],
    "2026-05-03": [
        {
            "title": "Midjourney v6 图像质量再升级",
            "summary": "Midjourney 发布 v6 版本更新，文本渲染能力和图像细节质量显著提升。",
            "category": "产品",
            "time": "17:30",
            "source": "Midjourney",
            "url": "https://www.midjourney.com/"
        },
        {
            "title": "Amp 发布新版 CLI 工具 Neo",
            "summary": "Amp 发布 CLI 工具 Neo，引领 Coding Agent 向长链路转型，核心是减少人工介入支持随处运行。",
            "category": "应用",
            "time": "14:20",
            "source": "meng shao",
            "url": "https://x.com/shao__meng"
        },
        {
            "title": "AI Agent 装进口袋",
            "summary": "字节推出的 TRAE SOLO AI Agent 工具现已向全量用户开放 App、Web 和桌面三端。",
            "category": "应用",
            "time": "11:45",
            "source": "向阳乔木",
            "url": "https://x.com/vista8"
        }
    ],
    "2026-05-02": [
        {
            "title": "Open Slide 让 AI 写你的 PPT 代码",
            "summary": "开源项目 Open Slide 基于 React 框架构建 PPT，工作流专为 AI Agent 设计。",
            "category": "应用",
            "time": "16:00",
            "source": "向阳乔木",
            "url": "https://x.com/vista8"
        },
        {
            "title": "姚老师开源百个提示词合集",
            "summary": "姚老师将其编写的约100个提示词整理开源，覆盖AI方法、工作、学习、生活等9类场景。",
            "category": "应用",
            "time": "13:30",
            "source": "姚老师",
            "url": "https://github.com"
        }
    ],
    "2026-05-01": [
        {
            "title": "GPT-5.5-Cyber 安全模型发布",
            "summary": "OpenAI 发布 GPT-5.5-Cyber 安全模型，专注网络安全领域。",
            "category": "大模型",
            "time": "15:00",
            "source": "OpenAI",
            "url": "https://openai.com"
        },
        {
            "title": "OpenAI 通过 MPC 解锁大规模 AI 训练网络",
            "summary": "OpenAI 发布 MPC 新型超级计算机网络协议，支持数千GPU间多路径连接。",
            "category": "学术",
            "time": "12:20",
            "source": "OpenAI",
            "url": "https://openai.com/index/mrc-supercomputer-networking"
        }
    ],
    "2026-04-30": [
        {
            "title": "百度文心助手接入 DeepSeek-V4",
            "summary": "百度文心助手宣布接入 DeepSeek-V4 大模型，强强联合提升AI能力。",
            "category": "大模型",
            "time": "16:30",
            "source": "百度",
            "url": "https://yiyan.baidu.com"
        },
        {
            "title": "腾讯混元3预览版登顶 OpenRouter",
            "summary": "Hy3预览版以3.66T处理量在OpenRouter周榜位列第一，周环比增长298%。",
            "category": "大模型",
            "time": "13:45",
            "source": "腾讯",
            "url": "https://hunyuan.tencent.com"
        }
    ],
    "2026-04-29": [
        {
            "title": "谷歌 Gemini 3 登顶推理测试",
            "summary": "谷歌发布 Gemini 3 在多项推理测试中登顶，推理能力达到新的里程碑。",
            "category": "大模型",
            "time": "14:20",
            "source": "Google",
            "url": "https://deepmind.google"
        },
        {
            "title": "首届连接代码与文化的AI创意大会",
            "summary": "Replit 宣布首届 AI 创意大会将于6月登陆纽约。",
            "category": "应用",
            "time": "10:30",
            "source": "Replit",
            "url": "https://replit.com"
        }
    ],
    "2026-04-28": [
        {
            "title": "DeepSeek V4 与 Kimi K2.6 跻身全球TOP2",
            "summary": "国产大模型 DeepSeek V4 与 Kimi K2.6 在多项评测中跻身全球TOP2。",
            "category": "大模型",
            "time": "15:15",
            "source": "机器之心",
            "url": "https://www.jiqizhixin.com"
        },
        {
            "title": "OpenAI 与微软结束独家云合作",
            "summary": "OpenAI 宣布与微软结束独家云合作关系，开启多云战略。",
            "category": "大模型",
            "time": "11:00",
            "source": "The Verge",
            "url": "https://www.theverge.com"
        }
    ]
};

// 把所有新闻展平成一个数组（最新的在最前面）
function flattenNews() {
    const allNews = [];
    // 按日期从新到旧排序
    const dates = Object.keys(newsByDate).sort((a, b) => new Date(b) - new Date(a));
    
    dates.forEach(date => {
        newsByDate[date].forEach(news => {
            allNews.push({
                ...news,
                time: date.slice(5) + " " + news.time
            });
        });
    });
    
    return allNews;
}

const allNews = flattenNews();
