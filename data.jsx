/* data.jsx — bilingual portfolio content (exported to window.SITE) */

const SITE = {
  profile: {
    name: "Qimin Feng",
    role: {
      en: "Robotics Ph.D. Candidate · Iowa State University",
      zh: "爱荷华州立大学机器人方向机械工程博士候选人",
    },
    headline: {
      en: ["I build robots that ", "move, sense, and learn", " in water."],
      zh: ["我构建能在水中", "运动、感知与学习", "的机器人。"],
    },
    text: {
      en: "My work connects embedded control, mechatronics, experimental hydrodynamics, and data-driven flow sensing — from calibrated hardware and safety logic to water-channel validation.",
      zh: "我的工作连接嵌入式控制、机电系统、实验水动力学与数据驱动流场感知——从硬件标定和安全逻辑，一直到水槽实验验证。",
    },
    stats: [
      { k: { en: "Robotics experience", zh: "机器人研发经验" }, v: "5+ yrs" },
      { k: { en: "Major projects", zh: "参与大型项目" }, v: "4+" },
      { k: { en: "Ph.D. expected", zh: "博士预计毕业" }, v: "Dec. 2027" },
    ],
  },

  about: {
    heading: {
      en: "Across hardware, fluids, and intelligent systems.",
      zh: "连接硬件、流体与智能系统。",
    },
    p: {
      en: [
        "I am a Mechanical Engineering Ph.D. candidate in the Zhong Lab at Iowa State University, advised by Prof. Qiang Zhong. I develop bio-inspired underwater robots, embedded control systems, soft robotic actuators, and flow-sensing methods for aquatic autonomy.",
        "I work best on systems that cross disciplinary boundaries: calibrating a magnetic encoder, writing real-time control and safety logic, synchronizing sensors with PIV, and then using the resulting data to understand or reconstruct the flow. I am interested in robotics R&D roles spanning controls, perception, and experimental systems.",
      ],
      zh: [
        "我是爱荷华州立大学机械工程博士候选人，在 Zhong Lab 师从 Qiang Zhong 教授。我的研究聚焦仿生水下机器人、嵌入式控制、软体机器人驱动，以及面向水下自主系统的流场感知。",
        "我擅长需要跨越多学科边界的系统：标定磁编码器、编写实时控制与安全逻辑、同步压力传感器与 PIV，再利用实验数据理解或重建流场。我正在关注控制、感知与实验系统方向的机器人研发岗位。",
      ],
    },
    facts: [
      { k: { en: "Current", zh: "当前" }, v: { en: "Ph.D. Candidate, Mechanical Engineering · Iowa State University", zh: "爱荷华州立大学 · 机械工程博士候选人" } },
      { k: { en: "Lab / Advisor", zh: "实验室 / 导师" }, v: { en: "Zhong Lab · Prof. Qiang Zhong", zh: "Zhong Lab · Qiang Zhong 教授" } },
      { k: { en: "Undergraduate", zh: "本科" }, v: { en: "B.S., Agricultural & Biosystems Engineering · Zhejiang University, 2022", zh: "浙江大学 · 农业工程学士，2022" } },
      { k: { en: "Research focus", zh: "研究方向" }, v: { en: "Underwater robotics · embedded control · flow sensing", zh: "水下机器人 · 嵌入式控制 · 流场感知" } },
      { k: { en: "Expected graduation", zh: "预计毕业" }, v: { en: "December 2027", zh: "2027 年 12 月" } },
    ],
  },

  research: {
    heading: { en: "One loop from mechanism to autonomy", zh: "从机构到自主系统的一条闭环" },
    sub: {
      en: "I build the mechanism, make its sensing and control dependable, and use experiments and models to understand the surrounding flow.",
      zh: "我构建机构，让感知与控制可靠运行，再通过实验和模型理解机器人周围的流动。",
    },
    items: [
      {
        num: "01",
        title: { en: "Integrated underwater robot systems", zh: "水下机器人整机系统" },
        text: {
          en: "MARIS brings actuation, sensing, stereo perception, operator control, telemetry, recording, and layered safety into one field-ready platform.",
          zh: "MARIS 将驱动、传感、双目感知、操作界面、遥测、记录与多层安全机制集成为可下水验证的平台。",
        },
        foot: { en: "Hardware · Firmware · Perception", zh: "硬件 · 固件 · 感知" },
      },
      {
        num: "02",
        title: { en: "Actuation, control, and material intelligence", zh: "驱动、控制与材料智能" },
        text: {
          en: "Closed-loop voice-coil control provides precise active actuation; constrained-layer damping shapes a swimmer's impedance passively at the material level.",
          zh: "闭环音圈控制提供精确主动驱动；约束层阻尼则从材料层面被动调节游动机器人的阻抗。",
        },
        foot: { en: "PID · Calibration · CLD", zh: "PID · 标定 · CLD" },
      },
      {
        num: "03",
        title: { en: "Flow sensing and experimental hydrodynamics", zh: "流场感知与实验水动力学" },
        text: {
          en: "Synchronized pressure sensing, PIV, force measurement, reduced-order models, and learning-based reconstruction connect local measurements to full flow structure.",
          zh: "同步压力测量、PIV、力测量、降阶模型与学习重建，把局部测量连接到完整流场结构。",
        },
        foot: { en: "PIV · Sensor fusion · ML", zh: "PIV · 传感融合 · 机器学习" },
      },
    ],
  },

  projects: {
    heading: { en: "Selected work", zh: "代表项目" },
    sub: {
      en: "Four robotics systems first, followed by my submitted JFM study in experimental hydrodynamics. Each project is grounded in the supplied build notes, paper, and résumé.",
      zh: "优先展示四个机器人系统，随后是已投稿 JFM 的实验水动力学研究。所有描述均以项目材料、论文和简历为依据。",
    },
    items: [
      {
        id: "maris",
        cat: { en: "Underwater robotics · Control & perception", zh: "水下机器人 · 控制与感知" },
        title: { en: "MARIS — Manta-Ray Underwater Robot", zh: "MARIS — 蝠鲼仿生水下机器人" },
        blurb: {
          en: "An end-to-end distributed robotics stack integrating 10+ actuation, sensing, perception, communication, and safety subsystems, with real-time Steam Deck control for underwater experiments.",
          zh: "一套端到端分布式机器人系统，集成 10+ 个驱动、传感、感知、通信与安全子系统，并通过 Steam Deck 对水下实验进行实时控制。",
        },
        metrics: [
          { v: "7 Hz", k: { en: "wing flapping", zh: "机翼扑动频率" } },
          { v: "10+", k: { en: "integrated subsystems", zh: "集成子系统" } },
        ],
        tags: ["Raspberry Pi 5", "CAN", "PySide6/QML", "OpenCV", "Safety"],
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
            "Integrated 10+ onboard subsystems, including dual wing motors, fin servos, IMU, pressure/depth sensing, stereo cameras, lighting, telemetry, experiment recording, networking, and safety supervision.",
            "Built a Steam Deck operator interface for real-time motion control, live vehicle-state monitoring, parameter adjustment, and emergency-stop handling.",
            "Validated the complete system in free-swimming trials and underwater experiments at depths up to 3 m.",
          ],
          zh: [
            "集成 10+ 个板载子系统，包括双翼电机、鳍舵机、IMU、压力/深度传感、双目相机、灯光、遥测、实验记录、网络通信与安全监控。",
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
          en: "A dual-ESP32-C6 modular actuation system combining open-loop force control with 500 Hz closed-loop angle control, plus ESP-NOW commands, telemetry, a browser interface, and layered safety interlocks.",
          zh: "双 ESP32-C6 模块化驱动系统：结合开环力控制与 500 Hz 闭环角度控制，并集成 ESP-NOW 指令、遥测、浏览器界面和多层安全保护。",
        },
        metrics: [
          { v: ">30 W", k: { en: "peak power", zh: "峰值功率" } },
          { v: "Linear", k: { en: "force response", zh: "力响应" } },
        ],
        tags: ["ESP32-C6", "PI control", "AS5600L", "ESP-NOW", "FreeRTOS"],
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
            "Built a Commander/Driver dual-ESP32-C6 architecture with 500 Hz PI control, 50 Hz telemetry, message acknowledgements, receive queues, and a browser-based control interface.",
            "Implemented two control modes: open-loop PWM produces a linear force response and directly controls force magnitude, while closed-loop control regulates joint angle.",
            "Validated the current single-module system and designed the architecture to expand into a multi-module robot.",
          ],
          zh: [
            "构建 Commander / Driver 双 ESP32-C6 架构，实现 500 Hz PI 控制、50 Hz 遥测、消息确认、接收队列及浏览器控制界面。",
            "实现两种控制模式：开环 PWM 输出与力呈线性响应，可直接控制力的大小；闭环控制则实现关节角度调节。",
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
        tags: ["CLD", "PIV", "Impedance", "MuJoCo", "RL"],
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
            "Characterized complex bending impedance over 0–5 Hz using dry bender tests, torque sensing, and lock-in harmonic regression.",
            "At St = 0.8, the 66.7% CLD design produced 0.51 N thrust versus 0.16 N for the baseline and reached 0.291 m/s terminal velocity.",
            "Extended the work toward a MuJoCo/Gymnasium RL framework with frequency and amplitude as a compact two-parameter action space.",
          ],
          zh: [
            "通过干态弯曲测试、扭矩测量与锁相谐波回归，表征 0–5 Hz 范围内的复弯曲阻抗。",
            "在 St = 0.8 时，66.7% CLD 方案产生 0.51 N 推力，基线为 0.16 N；终端速度达到 0.291 m/s。",
            "进一步设计 MuJoCo/Gymnasium 强化学习框架，以频率与振幅构成紧凑的二维动作空间。",
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
        tags: ["Teensy", "I²C", "TTL", "PIV", "PyTorch"],
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
        cat: { en: "JFM submission · Experimental hydrodynamics", zh: "JFM 投稿 · 实验水动力学" },
        title: { en: "Lift Reversal near a Free Surface", zh: "近自由表面振荡翼的升力反转" },
        blurb: {
          en: "Force measurements, PIV, and potential-flow simulations show how phase-shifted free-surface motion changes trailing-edge vortex pairing and reverses the mean vertical force on a heaving foil.",
          zh: "力测量、PIV 与势流模拟共同揭示：具有相位差的自由表面运动如何改变尾缘涡配对，并使振荡翼的平均垂向力发生反转。",
        },
        metrics: [
          { v: "840", k: { en: "experimental conditions", zh: "实验工况" } },
          { v: "PIV + force", k: { en: "validation", zh: "实验验证" } },
        ],
        tags: ["Free surface", "Heaving foil", "PIV", "Potential flow"],
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
            "Decomposed the force into coordinated changes in quasi-steady pressure loading and wake-induced force; submitted to Journal of Fluid Mechanics.",
          ],
          zh: [
            "在中等至较深浸没深度下，发现平均升力随非定常数增加由排斥系统性转为吸引。",
            "将狭窄反转区间与表面诱导垂向平流、尾缘涡配对变化及尾迹动量通量重定向联系起来。",
            "将反转分解为准定常压力载荷与尾迹诱导力的协同变化；论文已投稿 Journal of Fluid Mechanics。",
          ],
        },
      },
    ],
  },

  sideProjects: {
    heading: { en: "Side projects", zh: "Side Projects" },
    sub: {
      en: "Independent products and applied systems. Three are shown first; use the arrow to reveal the collaboration project on the right.",
      zh: "独立产品与应用系统。默认并列展示前三个，点击右箭头查看右侧的合作项目。",
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
          zh: "响应式 AI 羽毛球教练：把击球视频转化为分阶段分析、技术诊断、职业选手对比与针对性训练建议。",
        },
        meta: { en: "OpenCV · Multimodal LLM · 72 tests", zh: "OpenCV · 多模态大模型 · 72 项测试" },
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
    heading: { en: "Publications & manuscripts", zh: "论文与手稿" },
    items: [
      {
        title: { en: "Passive Phase-Oriented Impedance Shaping for Rapid Acceleration in Soft Robotic Swimmers", zh: "面向软体游动机器人快速加速的被动相位阻抗调制" },
        authors: ["Qimin Feng", "Orion A. Roberts", "Qiang Zhong"],
        venue: { en: "arXiv:2603.03537 · Submitted to IROS 2026", zh: "arXiv:2603.03537 · 投稿 IROS 2026" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2603.03537" }],
      },
      {
        title: { en: "Lift reversal from vortex-surface phase coupling in a heaving foil near a free surface", zh: "近自由表面振荡翼中由涡–表面相位耦合引起的升力反转" },
        authors: ["Qimin Feng", "Tianjun Han", "Qiang Zhong"],
        venue: { en: "arXiv:2512.12485 · 2025 · Submitted to Journal of Fluid Mechanics", zh: "arXiv:2512.12485 · 2025 · 投稿 Journal of Fluid Mechanics" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2512.12485" }],
      },
      {
        title: { en: "Wavenumber affects the lift of ray-inspired fins near a substrate", zh: "波数影响近壁面鳐鱼仿生鳍的升力" },
        authors: ["Yuanhang Zhu", "Leo Liu", "Tianjun Han", "Qimin Feng", "Keith W. Moored", "Qiang Zhong", "Daniel B. Quinn"],
        venue: { en: "Journal of the Royal Society Interface · 22:20250276 · 2025", zh: "Journal of the Royal Society Interface · 22:20250276 · 2025" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2504.00427" }, { label: "DOI", href: "https://doi.org/10.1098/rsif.2025.0276" }],
      },
      {
        title: { en: "Mantabot Swimming Performance", zh: "Mantabot 游动性能" },
        authors: ["Qimin Feng", "Qiang Zhong"],
        venue: { en: "Manuscript in preparation", zh: "手稿撰写中" },
        links: [],
      },
    ],
  },

  contact: {
    heading: {
      en: "Let's build reliable robots for difficult environments.",
      zh: "一起为复杂环境构建可靠的机器人。",
    },
    links: [
      { label: "Email", meta: "qmfeng11@iastate.edu", href: "mailto:qmfeng11@iastate.edu" },
      { label: "GitHub", meta: { en: "Code & independent projects", zh: "代码与独立项目" }, href: "https://github.com/LeMat11" },
      { label: "Google Scholar", meta: { en: "Papers & citations", zh: "论文与引用" }, href: "https://scholar.google.com/citations?user=qiWJZaoAAAAJ&hl=en" },
      { label: "CV (PDF)", meta: { en: "Download résumé", zh: "下载简历" }, href: "assets/Qimin_Feng_CV.pdf" },
    ],
  },
};

window.SITE = SITE;
