/* data.jsx — bilingual site content (exported to window.SITE) */

const SITE = {
  profile: {
    name: "Qimin Feng",
    role: {
      en: "Ph.D. Candidate, Mechanical Engineering · Iowa State University",
      zh: "爱荷华州立大学 机械工程博士候选人",
    },
    headline: {
      en: ["Robots that swim, sense, and ", "adapt", " to the water around them."],
      zh: ["会游动、会感知、会自适应水流的", "机器人", "。"],
    },
    text: {
      en: "I build bio-inspired underwater robots end to end — embedded control, soft actuation, hydrodynamic experiments, and machine-learning perception. I like systems I can defend down to the firmware and up to the flow physics.",
      zh: "我从头到尾构建仿生水下机器人——嵌入式控制、软体驱动、水动力实验，以及机器学习感知。我喜欢能从固件一直讲到流场物理的系统。",
    },
    stats: [
      { k: { en: "Built robot", zh: "整机系统" }, v: "MantaBot" },
      { k: { en: "Publications", zh: "论文" }, v: "5+" },
      { k: { en: "Peak accel. gain", zh: "峰值加速" }, v: "≈5×" },
      { k: { en: "Grad.", zh: "预计毕业" }, v: "2027" },
    ],
  },

  about: {
    p: {
      en: [
        "I'm a Ph.D. candidate in the Zhong Lab at Iowa State University, advised by Prof. Qiang Zhong. My work sits where hardware, fluids, and intelligence meet: bio-inspired underwater robots, soft robotic propulsion, embedded control, and sparse flow sensing for autonomous systems.",
        "I'm most useful on problems that need someone comfortable across the whole stack — debugging firmware in the field one day, running PIV and reduced-order models the next. I'm looking for robotics R&D roles in perception, controls, and underwater systems.",
      ],
      zh: [
        "我是爱荷华州立大学 Zhong Lab 的机械工程博士候选人，导师为 Qiang Zhong 教授。我的研究处于硬件、流体与智能的交叉点：仿生水下机器人、软体推进、嵌入式控制，以及面向自主系统的稀疏流场感知。",
        "我擅长需要打通整条技术栈的问题——前一天在现场调试固件，后一天跑 PIV 和降阶模型。我正在寻找感知、控制与水下系统方向的机器人研发岗位。",
      ],
    },
    facts: [
      { k: { en: "Institution", zh: "机构" }, v: { en: "Iowa State University", zh: "爱荷华州立大学" } },
      { k: { en: "Lab / Advisor", zh: "实验室 / 导师" }, v: { en: "Zhong Lab · Prof. Qiang Zhong", zh: "Zhong Lab · Qiang Zhong 教授" } },
      { k: { en: "Focus", zh: "方向" }, v: { en: "Underwater robotics · controls · perception", zh: "水下机器人 · 控制 · 感知" } },
      { k: { en: "Expected graduation", zh: "预计毕业" }, v: { en: "December 2027", zh: "2027 年 12 月" } },
      { k: { en: "Status", zh: "状态" }, v: { en: "Open to industry R&D roles", zh: "正在寻找业界研发岗位" } },
    ],
  },

  research: {
    heading: { en: "Three connected directions", zh: "三个相互连接的方向" },
    sub: {
      en: "Every project below maps back to one of these. Together they form a loop: build the robot, understand the flow, feed it back into control.",
      zh: "下面每个项目都对应其中之一。它们构成一个闭环：构建机器人、理解流场、再反馈到控制。",
    },
    items: [
      {
        num: "01",
        title: { en: "Bio-inspired underwater robot systems", zh: "仿生水下机器人系统" },
        text: {
          en: "MantaBot and actuator-control work — embedded software, sensor-actuator integration, field debugging, and free-swimming experimental validation.",
          zh: "以 MantaBot 和驱动控制为核心——嵌入式软件、传感器-执行器集成、现场调试，以及自由游动实验验证。",
        },
        foot: { en: "Hardware · Firmware · Field", zh: "硬件 · 固件 · 现场" },
      },
      {
        num: "02",
        title: { en: "Soft materials & passive impedance", zh: "软体材料与被动阻抗" },
        text: {
          en: "Constrained-layer damping that shapes impedance at the material level to improve burst acceleration — no sensing, computation, or active stiffness control.",
          zh: "利用 constrained-layer damping 在材料层面调制阻抗，从而提升爆发加速——无需传感、计算或主动刚度控制。",
        },
        foot: { en: "Materials · Mechanics", zh: "材料 · 力学" },
      },
      {
        num: "03",
        title: { en: "Flow-aware sensing & experimental hydrodynamics", zh: "流场感知与实验水动力学" },
        text: {
          en: "PIV, force measurement, reduced-order modeling, and physics-informed ML that connect flow structure to robot behavior.",
          zh: "结合 PIV、力测量、降阶建模和物理约束机器学习，把流场结构和机器人行为联系起来。",
        },
        foot: { en: "PIV · ROM · ML", zh: "PIV · 降阶 · 机器学习" },
      },
    ],
  },

  projects: {
    heading: { en: "Selected work", zh: "代表工作" },
    sub: {
      en: "Systems I know well enough to defend in an interview — from the solder joints to the flow physics. Media coming soon; the slots are reserved.",
      zh: "我足够熟悉、能在面试中逐层展开的系统——从焊点到流场物理。媒体即将上传，位置已预留。",
    },
    items: [
      {
        id: "mantabot",
        cat: { en: "Robotics · Embedded control", zh: "机器人 · 嵌入式控制" },
        title: "MantaBot",
        blurb: {
          en: "A manta-ray-inspired underwater robot control stack: gamepad teleop, CAN motors, PWM servos, IMU, pressure sensing, live telemetry, and the real-time field debugging that makes a robot actually swim.",
          zh: "面向蝠鲼仿生水下机器人的控制系统：手柄遥操、CAN 电机、PWM 舵机、IMU、压力传感、实时遥测，以及让机器人真正游起来的现场调试。",
        },
        metrics: [
          { v: "6+", k: { en: "subsystems", zh: "子系统" } },
          { v: "Validated", k: { en: "free-swim", zh: "自由游动" } },
        ],
        tags: ["Python", "Raspberry Pi", "CAN", "FastAPI", "IMU"],
        media: { type: "video", ratio: "16 / 10", label: { en: "Free-swim clip", zh: "自由游动片段" }, note: "mantabot_swim.mp4" },
        more: {
          en: ["Integrated gamepad teleoperation with CAN-bus brushless motors and PWM fin servos.", "Onboard IMU + pressure sensing with live telemetry over a FastAPI link.", "Built the field-debug workflow that turned bench tests into validated free-swimming."],
          zh: ["将手柄遥操与 CAN 总线无刷电机、PWM 鳍舵机集成。", "板载 IMU 与压力传感，通过 FastAPI 链路实时遥测。", "搭建现场调试流程，把台架测试推进到验证级别的自由游动。"],
        },
      },
      {
        id: "vca",
        cat: { en: "Soft robotics · Actuation", zh: "软体机器人 · 驱动" },
        title: { en: "Voice-Coil Actuator Control", zh: "音圈驱动器控制" },
        blurb: {
          en: "Dual-VCA firmware and Python tooling for coordinated soft-robotic actuation — serial command protocol, PWM drive, encoder-ready wiring, and a wireless ESP-NOW architecture.",
          zh: "用于软体机器人协调驱动的双 VCA 固件与 Python 工具——串口命令协议、PWM 驱动、编码器接口，以及 ESP-NOW 无线架构。",
        },
        metrics: [
          { v: "2×", k: { en: "coordinated VCAs", zh: "协调音圈" } },
          { v: "Wireless", k: { en: "ESP-NOW link", zh: "ESP-NOW" } },
        ],
        tags: ["ESP32", "C/C++", "Python", "PWM"],
        media: { type: "image", ratio: "4 / 3", label: { en: "Bench + wiring", zh: "台架与接线" }, note: "vca_rig.jpg" },
        more: {
          en: ["Wrote dual-channel firmware for synchronized voice-coil actuation.", "Python host tools for serial command, tuning, and logging.", "Designed an ESP-NOW wireless path for untethered operation."],
          zh: ["编写双通道固件实现音圈同步驱动。", "Python 上位机用于串口命令、调参与记录。", "设计 ESP-NOW 无线链路，实现无缆操作。"],
        },
      },
      {
        id: "cld",
        cat: { en: "Soft propulsion · Materials", zh: "软体推进 · 材料" },
        title: { en: "CLD Passive Impedance Shaping", zh: "CLD 被动阻抗调制" },
        blurb: {
          en: "Constrained-layer damping structures that passively rebalance bending impedance — improving a soft swimmer's peak acceleration by ≈5× and terminal velocity by ≈3×, with no added sensing or control.",
          zh: "利用 constrained-layer damping 被动调节弯曲阻抗——在不增加传感与控制的情况下，使软体推进器峰值加速度提升约 5 倍、终端速度提升约 3 倍。",
        },
        metrics: [
          { v: "≈5×", k: { en: "peak accel.", zh: "峰值加速" } },
          { v: "≈3×", k: { en: "terminal vel.", zh: "终端速度" } },
        ],
        tags: ["CLD", "PIV", "Impedance", "MuJoCo"],
        media: { type: "image", ratio: "16 / 10", label: { en: "PIV + accel. figure", zh: "PIV 与加速图" }, note: "cld_piv.png" },
        more: {
          en: ["Showed material-level impedance shaping can replace active stiffness control for bursts.", "Validated with PIV and force measurement; modeled in MuJoCo.", "Submitted to IROS 2026 (arXiv:2603.03537)."],
          zh: ["证明材料层面的阻抗调制可在爆发推进中替代主动刚度控制。", "通过 PIV 与力测量验证，并在 MuJoCo 中建模。", "已投稿 IROS 2026（arXiv:2603.03537）。"],
        },
      },
      {
        id: "flow",
        cat: { en: "Perception · Machine learning", zh: "感知 · 机器学习" },
        title: { en: "Flow Sensing from Sparse Measurements", zh: "稀疏测量的流场感知" },
        blurb: {
          en: "PyTorch models and active-learning experiment design that reconstruct velocity and vorticity structure from sparse PIV and pressure measurements — flow perception a robot could actually carry.",
          zh: "基于 PyTorch 与主动学习的实验设计，从稀疏 PIV 与压力测量重建速度场与涡量结构——机器人可真正搭载的流场感知。",
        },
        metrics: [
          { v: "Attention", k: { en: "reconstruction", zh: "重建" } },
          { v: "POD", k: { en: "reduced order", zh: "降阶" } },
        ],
        tags: ["PyTorch", "Attention", "Uncertainty", "POD"],
        media: { type: "image", ratio: "4 / 3", label: { en: "Reconstructed vorticity", zh: "重建涡量场" }, note: "flow_recon.png" },
        more: {
          en: ["Attention-based reconstruction from sparse sensors with uncertainty estimates.", "Active-learning loop to choose the most informative measurements.", "POD / reduced-order grounding for physical consistency."],
          zh: ["基于注意力的稀疏传感重建，并给出不确定度估计。", "主动学习闭环，选择信息量最大的测量点。", "以 POD/降阶模型保证物理一致性。"],
        },
      },
      {
        id: "foil",
        cat: { en: "Experimental hydrodynamics", zh: "实验水动力学" },
        title: { en: "Heaving Foil Near a Free Surface", zh: "近自由表面的振荡翼" },
        blurb: {
          en: "Force sensing, PIV, potential-flow modeling, and wave theory that together explain lift reversal through vortex–surface phase coupling near a free surface.",
          zh: "结合力测量、PIV、势流模型与波理论，解释近自由表面处由 vortex–surface phase coupling 引起的 lift reversal。",
        },
        metrics: [
          { v: "Reversal", k: { en: "lift explained", zh: "升力反转" } },
          { v: "PIV", k: { en: "+ force", zh: "+ 力测量" } },
        ],
        tags: ["PIV", "Force sensing", "Python", "MATLAB"],
        media: { type: "image", ratio: "16 / 10", label: { en: "Vortex–surface PIV", zh: "涡–表面 PIV" }, note: "foil_piv.png" },
        more: {
          en: ["Coupled experiments with potential-flow and wave-theory models.", "Identified vortex–surface phase coupling as the mechanism for lift reversal.", "Published as arXiv:2512.12485 (2025)."],
          zh: ["将实验与势流、波理论模型耦合。", "识别 vortex–surface phase coupling 为 lift reversal 的机制。", "发表为 arXiv:2512.12485（2025）。"],
        },
      },
      {
        id: "clearcoach",
        cat: { en: "Applied · Side systems", zh: "应用 · 其他系统" },
        title: { en: "John Deere PIV + ClearCoach", zh: "John Deere PIV 与 ClearCoach" },
        blurb: {
          en: "Applied PIV collaboration for industrial flow diagnostics, plus ClearCoach — a deployed Flask / OpenCV / LLM-vision system that breaks down badminton strokes into phases automatically.",
          zh: "面向工业流动诊断的 John Deere PIV 协作，以及 ClearCoach——一个已部署的 Flask / OpenCV / LLM 视觉系统，可自动将羽毛球击球拆解为阶段。",
        },
        metrics: [
          { v: "Deployed", k: { en: "live app", zh: "已上线" } },
          { v: "Vision", k: { en: "LLM stroke phases", zh: "击球阶段" } },
        ],
        tags: ["PIV", "Flask", "OpenCV", "LLM vision"],
        media: { type: "image", ratio: "4 / 3", label: { en: "App screenshot", zh: "应用截图" }, note: "clearcoach_ui.png" },
        more: {
          en: ["Industrial PIV diagnostics in collaboration with John Deere.", "ClearCoach: automated stroke-phase analysis from video.", "Full deploy on Flask with OpenCV + LLM-vision pipeline."],
          zh: ["与 John Deere 合作的工业 PIV 诊断。", "ClearCoach：基于视频的击球阶段自动分析。", "基于 Flask 全栈部署，结合 OpenCV 与 LLM 视觉流水线。"],
        },
      },
    ],
  },

  publications: {
    heading: { en: "Publications & manuscripts", zh: "论文与手稿" },
    items: [
      {
        title: { en: "Passive Phase-Oriented Impedance Shaping for Rapid Acceleration in Soft Robotic Swimmers", zh: "面向软体游动机器人快速加速的被动相位阻抗调制" },
        authors: ["Qimin Feng", "Orion A. Roberts", "Qiang Zhong"],
        venue: { en: "arXiv:2603.03537 · submitted to IROS 2026", zh: "arXiv:2603.03537 · 投稿 IROS 2026" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2603.03537" }],
      },
      {
        title: { en: "Lift reversal from vortex-surface phase coupling in a heaving foil near a free surface", zh: "近自由表面振荡翼中由涡–表面相位耦合引起的升力反转" },
        authors: ["Qimin Feng", "Tianjun Han", "Qiang Zhong"],
        venue: { en: "arXiv:2512.12485 · 2025", zh: "arXiv:2512.12485 · 2025" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2512.12485" }],
      },
      {
        title: { en: "Wavenumber affects the lift of ray-inspired fins near a substrate", zh: "波数影响近壁面鳐鱼仿生鳍的升力" },
        authors: ["Yuanhang Zhu", "Leo Liu", "Tianjun Han", "Qimin Feng", "Keith W. Moored", "Qiang Zhong", "Daniel B. Quinn"],
        venue: { en: "Journal of the Royal Society Interface · 2025", zh: "Journal of the Royal Society Interface · 2025" },
        links: [{ label: "arXiv", href: "https://arxiv.org/abs/2504.00427" }, { label: "DOI", href: "https://doi.org/10.1098/rsif.2025.0276" }],
      },
      {
        title: { en: "MantaBot Swimming Performance", zh: "MantaBot 游动性能" },
        authors: ["Qimin Feng", "Qiang Zhong"],
        venue: { en: "Manuscript in preparation", zh: "手稿撰写中" },
        links: [],
      },
    ],
  },

  contact: {
    heading: {
      en: "Let's talk robotics R&D — perception, controls, and underwater systems.",
      zh: "聊聊机器人研发——感知、控制与水下系统。",
    },
    links: [
      { label: "Email", meta: "qmfeng11@iastate.edu", href: "mailto:qmfeng11@iastate.edu" },
      { label: "Google Scholar", meta: { en: "Citations & papers", zh: "引用与论文" }, href: "https://scholar.google.com/citations?user=qiWJZaoAAAAJ&hl=en" },
      { label: "GitHub", meta: { en: "Code & firmware", zh: "代码与固件" }, href: "https://github.com/your-github-username" },
      { label: "CV (PDF)", meta: { en: "Download résumé", zh: "下载简历" }, href: "assets/Qimin_Feng_CV.pdf" },
    ],
  },
};

window.SITE = SITE;
