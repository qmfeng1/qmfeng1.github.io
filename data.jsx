/* data.jsx — bilingual portfolio content (exported to window.SITE) */

const SITE = {
  profile: {
    name: "Qimin Feng",
    cv: {
      en: "assets/Qimin_Feng_Robotics_Resume_EN.pdf",
      zh: "assets/Qimin_Feng_Robotics_Resume_ZH.pdf",
    },
    role: {
      en: "Mechanical Engineering Ph.D. Candidate · Iowa State University",
      zh: "爱荷华州立大学机械工程博士候选人",
    },
    headline: {
      en: ["I build robots that ", "move, sense, and learn", " in water."],
      zh: ["创造能在水中", "运动、感知与学习", "的机器人"],
    },
    text: {
      en: "I build end-to-end robotic systems across mechanism design, embedded control, multisensor perception, system integration, and underwater validation — turning concepts into controllable, measurable, experimentally verified hardware.",
      zh: "贯通机构设计、嵌入式控制、多传感器感知、整机集成与水下验证，将概念推进为可控、可测、可验证的实物机器人系统。",
    },
    stats: [
      { k: { en: "Robotics experience", zh: "机器人研发经验" }, v: "5+ yrs" },
      { k: { en: "Major projects", zh: "参与大型项目" }, v: "4+" },
      { k: { en: "Ph.D. expected", zh: "博士毕业年限" }, v: "Dec. 2027" },
    ],
  },

  about: {
    heading: {
      en: "From mechanism design to verified robotic systems.",
      zh: "从最初设计到可实验验证的机器人系统。",
    },
    p: {
      en: [
        "I am a Mechanical Engineering Ph.D. candidate in the Zhong Lab at Iowa State University, advised by Prof. Qiang Zhong. My research focuses on bio-inspired underwater and soft robotics, spanning robot architecture, mechanisms and actuators, embedded control, multimodal perception, and hydrodynamic validation.",
        "I work across the full hardware lifecycle: designing mechanisms and experimental fixtures, integrating motors and sensors, building multirate control and safety systems, synchronizing pressure measurements with PIV, and using learning-based models to reconstruct flow fields. I am pursuing robotics R&D roles in embedded control, multisensor perception, and mechatronic systems integration.",
      ],
      zh: [
        "我是爱荷华州立大学机械工程博士候选人，在 Zhong Lab 师从钟强教授。研究聚焦水下仿生与软体机器人，工作覆盖机器人总体方案、本体与执行器、嵌入式控制、多模态感知及水动力实验验证。",
        "我能够贯通实物系统的完整研发链路：设计机构与实验工装，集成电机和传感器，构建多频率控制与安全机制，同步压力测量与 PIV，并利用学习模型重建流场。当前求职方向为嵌入式控制、多传感器感知与机电系统集成方向的机器人研发岗位。",
      ],
    },
    facts: [
      { k: { en: "Current", zh: "当前" }, v: { en: "Ph.D. Candidate, Mechanical Engineering · Iowa State University", zh: "爱荷华州立大学 · 机械工程博士候选人" } },
      { k: { en: "Lab / Advisor", zh: "实验室 / 导师" }, v: { en: "Zhong Lab · Prof. Qiang Zhong", zh: "Zhong Lab · 钟强 教授" } },
      { k: { en: "Undergraduate", zh: "本科" }, v: { en: "B.Eng., Agricultural and Biological Systems Engineering · Zhejiang University, 2022", zh: "浙江大学 · 农业与生物系统工程学士，2022" } },
      { k: { en: "Research focus", zh: "研究方向" }, v: { en: "Bio-inspired & soft robotics · control · multimodal perception", zh: "水下仿生与软体机器人 · 控制 · 多模态感知" } },
      { k: { en: "Expected graduation", zh: "预计毕业" }, v: { en: "December 2027", zh: "2027 年 12 月" } },
    ],
  },

  research: {
    heading: { en: "Building robotic systems from mechanisms to perception", zh: "从机构、控制到感知的机器人系统" },
    sub: {
      en: "My work connects physical design, dependable control, synchronized sensing, and experimental validation in one end-to-end development loop.",
      zh: "我的工作把本体设计、可靠控制、同步感知与实验验证连接成一条完整研发链路。",
    },
    items: [
      {
        num: "01",
        title: { en: "Integrated underwater robot systems", zh: "水下机器人整机系统" },
        text: {
          en: "MARIS integrates actuation, sensing, stereo perception, operator control, state feedback, recording, and layered safety into one underwater-tested platform.",
          zh: "MARIS 将驱动、传感、双目感知、操作界面、状态回传、数据记录与多层安全机制集成为完成水下验证的整机平台。",
        },
        foot: { en: "Hardware · Firmware · Perception", zh: "硬件 · 固件 · 感知" },
      },
      {
        num: "02",
        title: { en: "Actuation, control, and passive mechanics", zh: "驱动、控制与被动力学" },
        text: {
          en: "Closed-loop voice-coil control provides precise active actuation; constrained-layer damping shapes a swimmer's impedance passively at the material level.",
          zh: "闭环音圈控制提供精确主动驱动；约束层阻尼则从材料层面被动调节游动机器人的阻抗。",
        },
        foot: { en: "PID · Experiment · CLD", zh: "PID · 实验 · CLD" },
      },
      {
        num: "03",
        title: { en: "Flow sensing and experimental hydrodynamics", zh: "流场感知与实验水动力学" },
        text: {
          en: "Synchronized pressure sensing, PIV, force measurement, and learning-based reconstruction connect sparse local measurements to full flow structure.",
          zh: "同步压力测量、PIV、力测量与学习重建，把稀疏局部测量连接到完整流场结构。",
        },
        foot: { en: "PIV · Sensor fusion · ML", zh: "PIV · 传感融合 · 机器学习" },
      },
    ],
  },

  projects: {
    heading: { en: "Selected work", zh: "代表项目" },
    sub: {
      en: "Four robotics systems first, followed by my research in experimental hydrodynamics. Each project is grounded in the supplied build notes, papers, and résumé.",
      zh: "我的研究展示——构建了四个机器人系统，实验水动力学研究，以及一些个人项目",
    },
    items: [
      {
        id: "maris",
        cat: { en: "Underwater robotics · Control & perception", zh: "水下机器人 · 控制与感知" },
        title: { en: "MARIS — Manta-Ray Underwater Robot", zh: "MARIS — 仿生蝠鲼水下机器人" },
        blurb: {
          en: "An end-to-end distributed robotics stack integrating 10+ actuation, sensing, perception, communication, and safety subsystems, with real-time Steam Deck control for underwater experiments.",
          zh: "一套端到端分布式机器人系统，集成 10+ 个驱动、传感、感知、通信与安全子系统，并通过 Steam Deck 对水下实验进行实时控制。",
        },
        metrics: [
          { v: "7 Hz", k: { en: "wing flapping", zh: "机翼扑动频率" } },
          { v: "10+", k: { en: "integrated subsystems", zh: "集成子系统" } },
        ],
        tags: ["Raspberry Pi 5", "MIT Motor", "Multi-sensor", "Steam Deck"],
        media: {
          ratio: "16 / 10",
          label: { en: "MARIS free-swimming tests", zh: "MARIS 自由游动测试" },
          sources: [
            { type: "video", src: "assets/media/maris-1.mp4", alt: "MARIS underwater robot during a free-swimming test" },
            { type: "video", src: "assets/media/maris-2.mp4", alt: "Second MARIS underwater swimming experiment" },
          ],
        },
        more: {
          en: [
            "Integrated 10+ onboard subsystems, including dual wing motors, fin servos, IMU, pressure/depth sensing, stereo cameras, lighting, state feedback, experiment recording, networking, and safety supervision.",
            "Built a Steam Deck operator interface for real-time motion control, live vehicle-state monitoring, parameter adjustment, and emergency-stop handling.",
            "Validated the complete system in free-swimming trials and underwater experiments at depths up to 3 m.",
          ],
          zh: [
            "集成 10+ 个板载子系统，包括双翼电机、鳍舵机、IMU、压力/深度传感、双目相机、灯光、状态回传、实验记录、网络通信与安全监控。",
            "开发 Steam Deck 操作界面，实现运动实时控制、机器人状态监测、参数调节与紧急停止。",
            "在自由游动测试和最深 3 m 的水下环境中完成整套系统实验验证。",
          ],
        },
      },
      {
        id: "vca",
        cat: { en: "Modular robotics · Embedded control", zh: "模块化机器人 · 嵌入式控制" },
        title: { en: "VCA Modular Bot", zh: "VCA 模块化机器人" },
        blurb: {
          en: "A dual-ESP32-C6 modular actuation system combining open-loop force adjustment with 500 Hz closed-loop angle control, acknowledged ESP-NOW communication, a browser interface, and layered safety interlocks.",
          zh: "双 ESP32-C6 模块化驱动系统：结合开环输出力调节与 500 Hz 闭环角度控制，并集成带确认机制的 ESP-NOW 通信、浏览器界面和多层安全保护。",
        },
        metrics: [
          { v: ">30 W", k: { en: "peak power", zh: "峰值功率" } },
          { v: "Linear", k: { en: "force response", zh: "力响应" } },
        ],
        tags: ["ESP32-C6", "VCA", "Magnet", "PID", "Multi-joint"],
        media: {
          ratio: "16 / 10",
          label: { en: "Closed-loop VCA bench", zh: "VCA 闭环控制台架" },
          sources: [
            { type: "video", src: "assets/media/vca-control.mp4", alt: "Voice-coil actuator closed-loop motion test" },
            { type: "image", src: "assets/media/vca-bench-1.jpg", alt: "Voice-coil actuator test rig in the water channel" },
          ],
        },
        more: {
          en: [
            "Built a Commander/Driver dual-ESP32-C6 architecture with local sensing and actuation on the Driver, plus acknowledged ESP-NOW commands, queued reception, state feedback, and a browser-based interface through the Commander.",
            "Implemented open-loop force adjustment and 500 Hz PID angle control: PWM commands produced a linear force response, while closed-loop control regulated the joint over ±45°.",
            "Validated the current single-module system and designed the architecture to expand into a multi-module robot.",
          ],
          zh: [
            "构建 Commander / Driver 双 ESP32-C6 架构，由 Driver 负责本地传感与执行器驱动，Commander 通过 ESP-NOW 完成指令转发与状态回传；加入消息确认、接收队列与浏览器控制界面。",
            "实现开环输出力调节与 500 Hz PID 闭环角度控制：PWM 指令与输出力呈线性关系，闭环控制支持 ±45° 关节角度调节。",
            "目前完成单模块系统验证，并将整体架构设计为未来可拓展到多模块机器人。",
          ],
        },
      },
      {
        id: "cld",
        cat: { en: "Soft robotics · Passive mechanics", zh: "软体机器人 · 被动力学" },
        title: { en: "Passive Impedance Shaping for Soft Swimmers", zh: "软体游动机器人的被动阻抗调制" },
        blurb: {
          en: "Constrained-layer damping passively rebalances a swimmer's bending impedance with frequency, improving burst performance without sensors, computation, or active stiffness control.",
          zh: "约束层阻尼随频率被动调节游动机器人的弯曲阻抗，无需传感、计算或主动刚度控制，即可提升爆发推进性能。",
        },
        metrics: [
          { v: "≈5×", k: { en: "peak acceleration", zh: "峰值加速度" } },
          { v: ">200%", k: { en: "thrust increase", zh: "推力提升" } },
        ],
        tags: ["CLD", "PIV", "Impedance", "Experimental design", "Soft robotics"],
        media: {
          ratio: "16 / 10",
          label: { en: "CLD swimmer acceleration test", zh: "CLD 游动机器人加速测试" },
          sources: [
            { type: "video", src: "assets/media/cld-swimmer.mp4", alt: "Soft robotic swimmer acceleration comparison with constrained-layer damping" },
          ],
        },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2603.03537" }],
        more: {
          en: [
            "Built an air-to-water validation workflow: 1–5 Hz bending tests in air for complex impedance, followed by water-tunnel propulsion tests at St = 0.2–0.8 with thrust measurement and phase-resolved PIV.",
            "At St = 0.8, the 66.7% CLD design produced 0.51 N thrust versus 0.16 N for the baseline and reached 0.291 m/s terminal velocity.",
            "Used virtual-mass trials to validate free-swimming acceleration, including an approximately fivefold increase in peak acceleration over the baseline.",
          ],
          zh: [
            "搭建从空气结构测试到水下推进验证的完整流程：在空气中开展 1–5 Hz 弯曲测试并表征复阻抗，再在水洞中完成 St = 0.2–0.8 推进实验、推力测量与相位分辨 PIV。",
            "在 St = 0.8 时，66.7% CLD 方案产生 0.51 N 推力，基线为 0.16 N；终端速度达到 0.291 m/s。",
            "通过虚拟质量方法验证自由游动加速性能，峰值加速度较基线提升约 5 倍。",
          ],
        },
      },
      {
        id: "flow-sensing",
        cat: { en: "Flow perception · Sensor fusion", zh: "流场感知 · 传感融合" },
        title: { en: "Flow Perception", zh: "流场感知" },
        blurb: {
          en: "A synchronized perception platform that pairs surface-pressure measurements with PIV flow fields, creating aligned multimodal experiments for learning-based full-field reconstruction.",
          zh: "同步流场感知平台：将表面压力测量与 PIV 流场配对，构建对齐的多模态实验数据，用于学习驱动的全场重建。",
        },
        metrics: [
          { v: "Synchronized", k: { en: "pressure + flow field", zh: "压力 + 流场" } },
          { v: "54 cases", k: { en: "experimental dataset", zh: "实验数据集" } },
        ],
        tags: ["Teensy", "PIV", "Synchronized","PyTorch","Sparse-sensing" ],
        media: {
          type: "diagram",
          ratio: "16 / 10",
          label: { en: "Synchronized acquisition architecture", zh: "同步采集架构" },
        },
        more: {
          en: [
            "Synchronized surface-pressure measurements with PIV flow fields through a shared hardware trigger and timing reference.",
            "Built a 54-case experimental dataset spanning multiple flow and geometry conditions for perception-model development and evaluation.",
            "Designed a learning-based framework that reconstructs full velocity and vorticity fields from sparse measurements with uncertainty-aware evaluation.",
          ],
          zh: [
            "通过共享硬件触发与时间基准，实现表面压力数据和 PIV 流场的同步采集。",
            "构建覆盖多组流动与几何工况的 54-case 实验数据集，用于感知模型开发和评估。",
            "设计学习驱动的重建框架，从稀疏测量恢复完整速度场与涡量场，并进行不确定度评估。",
          ],
        },
      },
      {
        id: "jfm-heaving-foil",
        cat: { en: "JFM manuscript · Experimental hydrodynamics", zh: "JFM 在审 · 实验水动力学" },
        title: { en: "Lift Reversal near a Free Surface", zh: "近自由表面振荡翼的升力反转" },
        blurb: {
          en: "Force measurements, PIV, and potential-flow simulations show how phase-shifted free-surface motion changes trailing-edge vortex pairing and reverses the mean vertical force on a heaving foil.",
          zh: "力测量、PIV 与势流模拟共同揭示：具有相位差的自由表面运动如何改变尾缘涡配对，并使振荡翼的平均垂向力发生反转。",
        },
        metrics: [
          { v: "840", k: { en: "experimental conditions", zh: "实验工况" } },
          { v: "PIV + force", k: { en: "validation", zh: "实验验证" } },
        ],
        tags: ["Free surface", "Hydrofoil", "PIV", "Potential flow"],
        media: {
          ratio: "4 / 3",
          label: { en: "Free-surface PIV experiment", zh: "自由表面 PIV 实验" },
          sources: [
            { type: "image", src: "assets/media/z-heaving.jpg", alt: "Heaving foil experiment beneath a laser-illuminated free surface" },
          ],
        },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2512.12485" }],
        more: {
          en: [
            "Found a systematic transition from repulsion to suction as the unsteady number increases at moderate-to-deep submergence.",
            "Linked the narrow reversal band to surface-induced vertical advection, changed trailing-edge vortex pairing, and redirected wake momentum flux.",
            "Decomposed the force into coordinated changes in quasi-steady pressure loading and wake-induced force; the manuscript is under review at Journal of Fluid Mechanics.",
          ],
          zh: [
            "在中等至较深浸没深度下，发现平均升力随非定常数增加由排斥系统性转为吸引。",
            "将狭窄反转区间与表面诱导垂向平流、尾缘涡配对变化及尾迹动量通量重定向联系起来。",
            "将反转分解为准定常压力载荷与尾迹诱导力的协同变化；论文目前在 Journal of Fluid Mechanics 审稿中。",
          ],
        },
      },
    ],
  },

  sideProjects: {
    heading: { en: "Side projects", zh: "Side Projects" },
    sub: {
      en: "Independent products and applied systems. use the arrow to reveal the collaboration project on the right.",
      zh: "独立产品与应用系统。点击右箭头查看更多。",
    },
    items: [
      {
        id: "bytetrail",
        cat: { en: "macOS · Local-first", zh: "macOS · 本地优先" },
        title: "ByteTrail",
        blurb: {
          en: "A SwiftUI storage analyzer that explains where files came from, how risky they are to clean, and why — with fail-closed rules, recoverable cleanup, and no cloud dependency.",
          zh: "SwiftUI 存储分析工具：解释文件来源、清理风险与判断依据，并采用 fail-closed 规则、可恢复清理和完全本地运行。",
        },
        meta: { en: "10 scanner types · 47 XCTest cases", zh: "10 类扫描器 · 47 项 XCTest" },
        src: "assets/media/bytetrail.png",
        type: "image",
        alt: "ByteTrail macOS storage overview",
        href: "https://github.com/LeMat11/ByteTrail",
        cta: { en: "View on GitHub", zh: "查看 GitHub" },
      },
      {
        id: "clearcoach",
        cat: { en: "Computer vision · Sports AI", zh: "计算机视觉 · 运动 AI" },
        title: "ClearCoach",
        blurb: {
          en: "A responsive AI badminton coach that turns a stroke video into phase-level analysis, technique diagnosis, professional-reference comparison, and focused training recommendations.",
          zh: "AI 羽毛球教练：把击球视频转化为分阶段分析、技术诊断、职业选手对比与针对性训练建议。",
        },
        meta: { en: "OpenCV · Multimodal LLM", zh: "OpenCV · 多模态大模型" },
        src: "assets/media/clearcoach.png",
        type: "image",
        alt: "ClearCoach landing page",
        href: "https://seer11.com",
        cta: { en: "Visit ClearCoach", zh: "访问 ClearCoach" },
      },
      {
        id: "ytmusic",
        cat: { en: "Automation · Recommender systems", zh: "自动化 · 推荐系统" },
        title: { en: "YouTube Music Daily Discovery", zh: "YouTube Music 每日推荐" },
        blurb: {
          en: "A multi-user Python pipeline that turns listening history, liked songs, and preference prompts into a refreshed daily playlist with LLM candidates, entity validation, and SQLite recommendation memory.",
          zh: "多用户 Python 推荐流水线：结合播放历史、收藏歌曲与偏好 Prompt，通过 LLM 候选、实体校验和 SQLite 推荐记忆每日刷新歌单。",
        },
        meta: { en: "ytmusicapi · Gemini · SQLite · launchd", zh: "ytmusicapi · Gemini · SQLite · launchd" },
        src: "assets/media/ytmusic-recommendation.png",
        type: "image",
        alt: "YouTube Music Daily Discovery playlist",
        href: "https://github.com/LeMat11/YTMusicRecommendation",
        cta: { en: "View on GitHub", zh: "查看 GitHub" },
      },
      {
        id: "john-deere",
        cat: { en: "Industry collaboration · Applied PIV", zh: "产业合作 · 应用 PIV" },
        title: { en: "John Deere PIV", zh: "John Deere PIV" },
        src: "assets/media/john-deere-piv.mp4",
        type: "video",
        alt: "Particle image velocimetry from the John Deere collaboration",
      },
    ],
  },

  publications: {
    heading: { en: "Publications & manuscripts", zh: "论文" },
    items: [
      {
        title: { en: "Passive Phase-Oriented Impedance Shaping for Rapid Acceleration in Soft Robotic Swimmers", zh: "面向软体游动机器人快速加速的被动相位阻抗调制" },
        authors: ["Qimin Feng", "Orion A. Roberts", "Qiang Zhong"],
        venue: { en: "IROS 2026 · Accepted · First author", zh: "IROS 2026 · 已接收 · 第一作者" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2603.03537" }],
      },
      {
        title: { en: "Lift Reversal from Vortex-Surface Phase Coupling in a Heaving Foil near a Free Surface", zh: "近自由表面振荡翼中由涡–表面相位耦合引起的升力反转" },
        authors: ["Qimin Feng", "Tianjun Han", "Qiang Zhong"],
        venue: { en: "Journal of Fluid Mechanics · Under review · First author", zh: "Journal of Fluid Mechanics · 在审 · 第一作者" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2512.12485" }],
      },
      {
        title: { en: "Inertial Effects on the Mechanical Efficiency of a Semi-Passive Oscillating Hydrofoil Energy Harvester", zh: "惯性效应对半被动振荡水翼能量采集器机械效率的影响" },
        authors: ["Z. Zhang", "Qimin Feng", "Y. Zhu", "Qiang Zhong"],
        venue: { en: "Renewable Energy · Under review · Second author", zh: "Renewable Energy · 在审 · 第二作者" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.11126" }],
      },
      {
        title: { en: "Wavenumber Affects the Lift of Ray-Inspired Fins near a Substrate", zh: "波数影响近壁面鳐鱼仿生鳍的升力" },
        authors: ["Yuanhang Zhu", "Leo Liu", "Tianjun Han", "Qimin Feng", "Keith W. Moored", "Qiang Zhong", "Daniel B. Quinn"],
        venue: { en: "Journal of the Royal Society Interface · 22:20250276 · Published 2025", zh: "Journal of the Royal Society Interface · 22:20250276 · 2025 年发表" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2504.00427" }, { label: "DOI", href: "https://doi.org/10.1098/rsif.2025.0276" }],
      },
    ],
  },

  contact: {
    heading: {
      en: "Let's build reliable robotic systems for difficult environments.",
      zh: "迫不及待去研究更复杂的机器人了！",
    },
    links: [
      { label: "Email", meta: "qmfeng11@iastate.edu", href: "mailto:qmfeng11@iastate.edu" },
      { label: "GitHub", meta: { en: "Code & independent projects", zh: "代码与独立项目" }, href: "https://github.com/LeMat11" },
      { label: "Google Scholar", meta: { en: "Papers & citations", zh: "论文与引用" }, href: "https://scholar.google.com/citations?user=qiWJZaoAAAAJ&hl=en" },
      {
        label: "CV (PDF)",
        meta: { en: "Download résumé", zh: "下载简历" },
        href: {
          en: "assets/Qimin_Feng_Robotics_Resume_EN.pdf",
          zh: "assets/Qimin_Feng_Robotics_Resume_ZH.pdf",
        },
        download: true,
      },
    ],
  },
};

window.SITE = SITE;
