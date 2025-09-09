import { Section } from './types';
import DynamicEquilibriumViz from './components/visualizations/DynamicEquilibriumViz';
import PlatosCaveViz from './components/visualizations/PlatosCaveViz';
import TripartiteSoulViz from './components/visualizations/TripartiteSoulViz';
import FourNobleTruthsViz from './components/visualizations/FourNobleTruthsViz';
import PranaQiViz from './components/visualizations/PranaQiViz';
import PurusarthasViz from './components/visualizations/PurusarthasViz';
import EightfoldPathViz from './components/visualizations/EightfoldPathViz';
import SynthesisViz from './components/visualizations/SynthesisViz';
import AboutViz from './components/visualizations/AboutViz';

// New visualization imports
import TheWordViz from './components/visualizations/TheWordViz';
import ThreeComponentsViz from './components/visualizations/ThreeComponentsViz';
import SystemsTheoryLensViz from './components/visualizations/SystemsTheoryLensViz';
import ThreeDimensionsViz from './components/visualizations/ThreeDimensionsViz';
import AllegoricalJourneyViz from './components/visualizations/AllegoricalJourneyViz';
import WhatIsHomodynamicsViz from './components/visualizations/WhatIsHomodynamicsViz';
import OriginatorViz from './components/visualizations/OriginatorViz';
import SynthesisApproachViz from './components/visualizations/SynthesisApproachViz';
import InteractiveExplorationViz from './components/visualizations/InteractiveExplorationViz';
import MissionViz from './components/visualizations/MissionViz';
import DesignPhilosophyViz from './components/visualizations/DesignPhilosophyViz';


// Subsection visualization imports for Plato's Cave
import ShadowsViz from './components/visualizations/ShadowsViz';
import AscentViz from './components/visualizations/AscentViz';
import AttractorShiftViz from './components/visualizations/AttractorShiftViz';
import BalanceBeamViz from './components/visualizations/BalanceBeamViz';

// New Subsection visualization imports
import ReasonViz from './components/visualizations/ReasonViz';
import SpiritViz from './components/visualizations/SpiritViz';
import AppetiteViz from './components/visualizations/AppetiteViz';
import DukkhaViz from './components/visualizations/DukkhaViz';
import SamudayaViz from './components/visualizations/SamudayaViz';
import NirodhaViz from './components/visualizations/NirodhaViz';
import MaggaViz from './components/visualizations/MaggaViz';
import DharmaViz from './components/visualizations/DharmaViz';
import ArthaViz from './components/visualizations/ArthaViz';
import KamaViz from './components/visualizations/KamaViz';
import MokshaViz from './components/visualizations/MokshaViz';

// Imports for the newly created visualizations
import IntroductionLifeViz from './components/visualizations/IntroductionLifeViz';
import IntroductionMergeViz from './components/visualizations/IntroductionMergeViz';
import IntroductionFeedbackViz from './components/visualizations/IntroductionFeedbackViz';
import CoupledFeedbackLoopsViz from './components/visualizations/CoupledFeedbackLoopsViz';
import HarmonyBalanceViz from './components/visualizations/HarmonyBalanceViz';
import MultiAgentSystemsViz from './components/visualizations/MultiAgentSystemsViz';
import MaladaptiveStatesViz from './components/visualizations/MaladaptiveStatesViz';
import PositiveFeedbackViz from './components/visualizations/PositiveFeedbackViz';
import NegativeFeedbackViz from './components/visualizations/NegativeFeedbackViz';
import WisdomPillarViz from './components/visualizations/WisdomPillarViz';
import EthicalConductPillarViz from './components/visualizations/EthicalConductPillarViz';
import MentalDisciplinePillarViz from './components/visualizations/MentalDisciplinePillarViz';
import AdaptiveControlViz from './components/visualizations/AdaptiveControlViz';
import SystemModelsViz from './components/visualizations/SystemModelsViz';
import RefiningMechanismsViz from './components/visualizations/RefiningMechanismsViz';
import PranaBreathViz from './components/visualizations/PranaBreathViz';
import QiLifeForceViz from './components/visualizations/QiLifeForceViz';
import PranaTypesViz from './components/visualizations/PranaTypesViz';
import NonEquilibriumViz from './components/visualizations/NonEquilibriumViz';
import MultidimensionalOptimizationViz from './components/visualizations/MultidimensionalOptimizationViz';
import SustainableWellbeingViz from './components/visualizations/SustainableWellbeingViz';
import SystemsOptimizationViz from './components/visualizations/SystemsOptimizationViz';
import ContinuousRegulationViz from './components/visualizations/ContinuousRegulationViz';
import AdaptiveResponseViz from './components/visualizations/AdaptiveResponseViz';
import InteractingSystemsViz from './components/visualizations/InteractingSystemsViz';
import StockAndFlowViz from './components/visualizations/StockAndFlowViz';
import PhaseTransitionsViz from './components/visualizations/PhaseTransitionsViz';
import FreeEnergyMinimizationViz from './components/visualizations/FreeEnergyMinimizationViz';
import SelfOrganizingNetworkViz from './components/visualizations/SelfOrganizingNetworkViz';
import OrderAndChaosViz from './components/visualizations/OrderAndChaosViz';

// Newly created visualization imports
import StaticVsDynamicModelsViz from './components/visualizations/StaticVsDynamicModelsViz';
import NeuroscientificCorrelatesViz from './components/visualizations/NeuroscientificCorrelatesViz';
import FivePhaseCycleViz from './components/visualizations/FivePhaseCycleViz';
import ThreePillarsViz from './components/visualizations/ThreePillarsViz';
import NeuralEnergeticsViz from './components/visualizations/NeuralEnergeticsViz';
import NeuromodulationViz from './components/visualizations/NeuromodulationViz';

const DummyViz = () => null;

export const contentData: Section[] = [
  {
    id: "about",
    title: "About Homodynamics",
    shortTitle: "About",
    component: AboutViz,
    subSections: [
      {
        id: "about-what",
        title: "From Philosophical Inquiry to a Modern Framework",
        content: [
          "Homodynamics is a framework for understanding the nature of human flourishing. It begins with a simple but profound observation: living systems are not static machines. They are dynamic, ever-changing processes that maintain stability precisely *through* change, not in spite of it.",
          "This website translates that core idea into an explorable journey. By synthesizing ancient wisdom from traditions like Platonism and Buddhism with modern scientific principles from systems theory and neurobiology, Homodynamics offers a unified lens to examine the patterns that govern our inner lives."
        ],
        component: WhatIsHomodynamicsViz,
      },
      {
        id: "about-originator",
        title: "A Vision by Amit Srivastava",
        content: [
          "Amit Srivastava, the originator of Homodynamics, envisioned a new way to engage with life's deepest questions. Frustrated by the gap between the timeless insights of philosophy and the empirical rigor of science, he sought to create a bridge.",
          "Homodynamics is the result of that vision: a framework that is both intellectually robust and deeply practical. It is a tool for thought, designed to help us navigate the complexities of our own consciousness with greater clarity, purpose, and balance."
        ],
        component: OriginatorViz,
      },
      {
        id: "about-synthesis",
        title: "A Bridge Between Worlds",
        content: [
          "The power of Homodynamics lies in its synthesis. It doesn't treat ancient wisdom and modern science as separate domains, but as complementary languages describing the same fundamental reality.",
          `<ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 0.5em;"><strong>Ancient Wisdom:</strong> We draw from the deep insights of Plato's Tripartite Soul, the Buddhist Eightfold Path, Vedic concepts of Prāṇa, and more.</li>
            <li style="margin-bottom: 0.5em;"><strong>Modern Science:</strong> We apply the lens of thermodynamics, control theory, network science, and neurobiology to give these ancient ideas a concrete foundation.</li>
           </ul>`,
           "Through this integration, abstract concepts become tangible principles for living a more coherent and fulfilling life."
        ],
        component: SynthesisApproachViz,
      },
      {
        id: "about-interactive",
        title: "Philosophy in Motion",
        content: [
          "Ideas are most powerful when they are experienced. This website is built on the principle of interactive exploration. Instead of static text, Homodynamics uses dynamic visualizations as a core part of its narrative.",
          "Each visualization is a 'thought experiment' you can engage with directly. They are designed to transform abstract theories into intuitive, felt experiences, allowing you to see the patterns of your own mind reflected in the principles on the screen."
        ],
        component: InteractiveExplorationViz,
      },
       {
        id: "about-mission",
        title: "Our Mission",
        content: [
          "Our mission is to make deep, integrative thinking accessible to everyone. We aim to:",
          `<ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 0.5em;"><strong>Demystify Complexity:</strong> To break down the complex dynamics of human consciousness into clear, understandable principles.</li>
            <li style="margin-bottom: 0.5em;"><strong>Foster Self-Awareness:</strong> To provide tools that encourage personal reflection and a deeper understanding of one's own inner world.</li>
            <li style="margin-bottom: 0.5em;"><strong>Promote Balance:</strong> To offer a path toward navigating the competing demands of life with greater wisdom and less internal friction.</li>
          </ul>`,
          `<blockquote style="border-left: 2px solid #C1C1C1; padding-left: 1rem; margin: 1rem 0; font-style: italic;">"Homodynamics is an invitation to become a more skillful participant in the dynamic process of your own life."
          <br/>— Amit Srivastava</blockquote>`
        ],
        component: MissionViz,
      },
       {
        id: "about-design",
        title: "The Aesthetic of Contemplation",
        content: [
          "The design of this website is intentional, crafted to support its philosophical purpose. Every element is chosen to create an environment of focused contemplation:",
          `<ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 0.5em;"><strong>Classical Typography:</strong> The use of Georgia serif font evokes the timeless nature of philosophical inquiry.</li>
            <li style="margin-bottom: 0.5em;"><strong>Muted Palette:</strong> The calm, earthy colors are designed to minimize distraction and encourage focus.</li>
            <li style="margin-bottom: 0.5em;"><strong>Minimalist Layout:</strong> A clean, uncluttered aesthetic prioritizes the content and the ideas it conveys.</li>
          </ul>`
        ],
        component: DesignPhilosophyViz,
      },
    ]
  },
  {
    id: "introduction",
    title: "Introduction: The Genesis of Homodynamics",
    shortTitle: "Introduction",
    component: DynamicEquilibriumViz,
    subSections: [
      {
        id: "intro-definition",
        title: "From Static Homeostasis to Dynamic Equilibrium",
        content: [
          "For centuries, we've viewed health and stability through the lens of **homeostasis**—a state of rigid, unchanging balance. This idea, borrowed from 19th-century physics, suggests that an ideal system is one at rest, a machine that resists deviation. But life is not a machine at rest; it is a process in motion.",
          "<strong>Homodynamics</strong> offers a new paradigm. It posits that living systems—from a single cell to a human mind—achieve stability not by resisting change, but by skillfully navigating it. This is the principle of **dynamic equilibrium**, or <u>allostasis</u>. Health is not the absence of stress, but the capacity to adapt to it. Flourishing is not a static state to be achieved, but a continuous, adaptive dance."
        ],
        component: IntroductionLifeViz,
      },
      {
        id: "intro-static-models",
        title: "The Limitations of a Clockwork View",
        content: [
          "The old, static models of human development have profound and often detrimental consequences. When we treat ourselves like machines, we pathologize natural variation and suppress symptoms rather than building adaptive capacity.",
          "This mechanistic view leads to:",
          "<p><strong>Brittle Systems:</strong> In personal development and organizational management, a focus on rigid goals and predictable outcomes creates systems that shatter under unexpected pressure.</p>",
          "<p><strong>Symptom Suppression:</strong> In psychology and medicine, treating stress signals as errors to be silenced leads to interventions that mask underlying issues instead of enhancing the system's regulatory strength.</p>",
          "<p><strong>One-Size-Fits-All Solutions:</strong> In education and training, standardized approaches ignore the natural, dynamic rhythms of individual learning and growth.</p>"
        ],
        component: StaticVsDynamicModelsViz,
      },
      {
        id: "intro-alternative",
        title: "A New Paradigm for Flourishing",
        content: [
          "Homodynamics provides a process-oriented alternative. It reframes our approach to well-being by viewing stability as an emergent property of a well-regulated dynamic system. Instead of fighting variation, we learn to work with it.",
          "This shift in perspective changes everything:",
          "<p><strong>From Symptoms to Signals:</strong> Difficulties are no longer problems to be eliminated, but valuable information about the system's dynamics. They are signals pointing toward leverage points for growth.</p>",
          "<p><strong>From Optimization to Coherence:</strong> Instead of maximizing a single metric (like productivity or happiness), the goal becomes achieving a coherent state that satisfies multiple constraints while preserving flexibility.</p>",
          "<p><strong>From Isolation to Integration:</strong> Personal growth becomes inseparable from our environment. Sustainable change requires aligning our internal capacities with the systems that support us.</p>"
        ],
        component: IntroductionFeedbackViz,
      },
    ]
  },
  {
    id: "part-1-header",
    type: 'header',
    title: "Part I: Philosophical Origins and Ancient Wisdom",
    shortTitle: "Part I",
    component: DummyViz,
    subSections: []
  },
  {
    id: "tripartite-soul",
    title: "Plato's Tripartite Soul: The First Systems Model of Human Nature",
    shortTitle: "Tripartite Soul",
    component: TripartiteSoulViz,
    subSections: [
      {
        id: "soul-intro",
        title: "",
        content: ["The philosophical foundations of Homodynamics begin with <strong>Plato's Republic</strong> and its revolutionary conception of the human psyche as a dynamic system of interacting components rather than a unified, indivisible essence. This insight, articulated around 380 BCE, anticipated by over two millennia many principles that would later emerge in systems theory, cybernetics, and complex adaptive systems research."],
        component: TripartiteSoulViz,
      },
      {
        id: "soul-components",
        title: "The Three Components",
        content: ["Plato identified three fundamental aspects of human nature:",
        "<p><strong>Reason (Logistikon):</strong> The rational, calculating element responsible for long-term planning, abstract thought, and moral judgment.</p>",
        "<p><strong>Spirit (Thymoeides):</strong> The emotional, assertive force characterized by motivation, courage, and the drive for honor.</p>",
        "<p><strong>Appetite (Epithymetikon):</strong> The desire-driven component encompassing basic physiological needs, sensual pleasures, and material wants.</p>"
      ],
        component: ThreeComponentsViz,
      },
      {
        id: "soul-dynamics",
        title: "Dynamic Relationships and Justice",
        content: [
          "Crucially, Plato understood that <strong>psychological health emerges from the dynamic relationships among these components</strong> rather than the dominance of any single element. Justice in the soul occurs when:",
          "<ul><li><strong>Reason provides direction</strong>, establishing goals aligned with long-term wellbeing.</li><li><strong>Spirit supplies energy</strong>, pursuing these goals with persistence and courage.</li><li><strong>Appetite offers feedback</strong>, signaling immediate needs and opportunities.</li></ul>",
          "A healthy soul is a well-regulated system characterized by distributed control, hierarchical organization, and dynamic balance, where dysfunction arises from disconnection or improper dominance of one part."
        ],
        component: HarmonyBalanceViz,
      },
      {
        id: "soul-correlates",
        title: "Modern Neuroscientific Correlates",
        content: [
          "Contemporary neuroscience has largely vindicated Plato's insights through the identification of brain networks that correspond remarkably well to his tripartite model:",
          "<p><strong>Prefrontal Cortex (Reason):</strong> Governs executive functions like planning, working memory, and inhibitory control.</p>",
          "<p><strong>Anterior Cingulate Cortex & Amygdala (Spirit):</strong> Regulates motivation, effort allocation, and emotional responses like pride and anger.</p>",
          "<p><strong>Limbic & Subcortical Systems (Appetite):</strong> Manages reward processing, basic drives, and homeostatic regulation.</p>",
          "Modern research confirms that optimal performance requires coordination among these systems, not just top-down control by the 'rational' prefrontal cortex."
        ],
        component: NeuroscientificCorrelatesViz,
      },
      {
        id: "soul-implications",
        title: "Homodynamic Implications",
        content: [
          "Plato's model provides crucial insights for Homodynamic theory, highlighting the importance of <strong>Energy Management</strong> (fueling the system), <strong>Adaptive Regulation</strong> (adjusting the balance between parts based on context), and a view of development not as suppression, but as a gradual <strong>Integration</strong> of all three components."
        ],
        component: CoupledFeedbackLoopsViz,
      }
    ]
  },
  {
    id: "four-noble-truths",
    title: "Buddhist Four Noble Truths: A Systems Analysis of Suffering",
    shortTitle: "Four Noble Truths",
    component: FourNobleTruthsViz,
    subSections: [
        {
          id: "truths-intro",
          title: "",
          content: ["Buddhism's <strong>Four Noble Truths</strong>, formulated by the Buddha around 500 BCE, represent perhaps history's most systematic analysis of how dynamic systems fall into dysfunctional patterns and the precise mechanisms by which they can be restored to optimal functioning. Viewed through the lens of systems theory, the Four Noble Truths provide a complete diagnostic and therapeutic framework for understanding human suffering as a systems phenomenon."],
          component: FourNobleTruthsViz,
        },
        {
          id: "truths-dukkha", title: "First Noble Truth: Dukkha (Systemic Dysfunction)",
          content: [
            "The <strong>First Noble Truth</strong> identifies <em>dukkha</em>—often translated as \"suffering\" but more accurately understood as \"unsatisfactoriness\" or \"instability\"—as the fundamental problem of human existence. From a systems perspective, dukkha represents the inherent instability that arises when a dynamic system attempts to maintain fixed states in a constantly changing environment.",
            "From a control theory perspective, dukkha represents the error signal generated when a system's internal models fail to accurately predict environmental changes. The system expends increasing energy trying to maintain outdated patterns, leading to:",
            "<ul><li>Prediction Error Accumulation</li><li>Resource Depletion</li><li>Reduced Adaptability</li><li>Cascade Effects</li></ul>"
          ],
          component: DukkhaViz
        },
        {
          id: "truths-tanha", title: "Second Noble Truth: Tanha (The Origins of Dysfunction)",
          content: [
            "The <strong>Second Noble Truth</strong> identifies <em>tanha</em> (craving or attachment) as the fundamental mechanism that generates and sustains dukkha. In systems terms, craving represents <strong>positive feedback loops</strong> that amplify deviations rather than correcting them, leading to runaway dynamics that destabilize the entire system.",
            "Craving functions as a <strong>destabilizing control system</strong> that amplifies discrepancy, creates recursive loops, depletes regulatory resources, and narrows the behavioral repertoire."
          ],
          component: SamudayaViz
        },
        {
          id: "truths-nirodha", title: "Third Noble Truth: Nirodha (Optimal Function)",
          content: [
            "The <strong>Third Noble Truth</strong> asserts that <em>nirodha</em>—the cessation of suffering—is achievable through the elimination of craving-based control systems. In systems language, nirodha represents a <strong>stable attractor state</strong> characterized by responsive flexibility rather than reactive rigidity.",
            "Nirodha represents the attainment of <strong>optimal control</strong>: accurate state estimation, appropriate response selection, efficient resource allocation, and recursive improvement."
          ],
          component: NirodhaViz
        },
        {
          id: "truths-magga", title: "Fourth Noble Truth: Magga (The Path to Optimal Function)",
          content: ["The <strong>Fourth Noble Truth</strong> presents the <em>Magga</em> (Noble Eightfold Path) as a comprehensive <strong>control protocol</strong> for transforming dysfunctional craving-based systems into optimally functioning responsive systems. The path provides specific techniques for reconfiguring the system's architecture at multiple levels simultaneously."],
          component: MaggaViz
        },
        {
            id: "truths-integration",
            title: "Homodynamic Integration",
            content: [
                "The Four Noble Truths provide essential insights for Homodynamic theory:",
                "<p><strong>Diagnostic Framework:</strong> Dysfunction can be understood as the result of inappropriate feedback loops rather than inherent pathology, pointing toward system reconfiguration rather than symptom suppression.</p>",
                "<p><strong>Process Orientation:</strong> Health is characterized by appropriate responsiveness to changing conditions rather than the maintenance of fixed states.</p>",
                "<p><strong>Holistic Integration:</strong> Effective change requires simultaneous work at multiple system levels (cognitive, behavioral, environmental, and regulatory).</p>",
                "<p><strong>Recursive Development:</strong> The path itself strengthens the capacities needed to walk the path, creating positive feedback loops that support continued growth.</p>"
            ],
            component: MaladaptiveStatesViz
        }
    ]
  },
  {
    id: "prana-qi",
    title: "Vedic Prāṇa and Chinese Qì: The Energetics of Living Systems",
    shortTitle: "Prāṇa & Qì",
    component: PranaQiViz,
    subSections: [
        {
          id: "prana-intro",
          title: "Vedic Prāṇa: The Energetics of Living Systems",
          content: [
            "The <strong>Vedic concept of prāṇa</strong>, developed in the Upanishads around 800-200 BCE, represents one of humanity's earliest sophisticated theories of <strong>bioenergetics</strong>. Far from being a mystical concept, prāṇa describes observable phenomena related to metabolism, circulation, neural activity, and the coordination of physiological processes.",
            "The Upanishads present prāṇa not as a substance but as a <strong>dynamic process</strong>—the organizing principle that maintains living systems far from thermodynamic equilibrium through continuous energy transformation. This describes what modern physics calls <strong>dissipative structures</strong>."
          ],
          component: PranaBreathViz,
        },
        {
            id: "prana-types",
            title: "The Five Prāṇas: Functional Decomposition",
            content: [
                "Traditional texts enumerate <strong>five primary prāṇas</strong> (*pañca-vāyu*), each governing specific aspects of physiological regulation:",
                "<ul><li><strong>Prāṇa (Respiratory):</strong> Breathing, circulation.</li><li><strong>Apāna (Eliminative):</strong> Excretion, reproduction.</li><li><strong>Samāna (Metabolic):</strong> Digestion, metabolism.</li><li><strong>Udāna (Expressive):</strong> Speech, expression, cognitive functions.</li><li><strong>Vyāna (Distributive):</strong> Systemic coordination and network integration.</li></ul>",
                "Vedic physiology understood that health depends on the balanced flow and coordination of these five prāṇas. Disease arises when flow becomes blocked, distribution is uneven, or coordination breaks down."
            ],
            component: PranaTypesViz
        },
        {
            id: "qi-intro",
            title: "Chinese Qì: Dynamic Balance in Natural Systems",
            content: [
                "The <strong>Chinese concept of qì</strong> (氣), developed across millennia, provides another sophisticated framework for understanding dynamic balance. Like prāṇa, qì represents not a substance but a <strong>process</strong>—the fundamental activity through which all phenomena arise, transform, and dissolve.",
                "The <strong>yin-yang symbol</strong> represents the fundamental insight that all phenomena arise from the dynamic interaction of complementary processes (receptive/active, rest/performance) rather than conflict between opposing forces."
            ],
            component: QiLifeForceViz
        },
        {
            id: "qi-five-phases",
            title: "Five Phase Theory: Cyclical Transformation",
            content: [
                "<strong>Wu Xing</strong> (Five Phase theory) describes how qì transforms through five basic patterns, each associated with different qualities, seasons, and organ systems: Wood (growth), Fire (maturation), Earth (stability), Metal (contraction), and Water (storage).",
                "This framework, much like modern complexity science, emphasizes emergence, nonlinearity, self-organization, and the existence of adaptive cycles."
            ],
            component: FivePhaseCycleViz
        },
        {
            id: "prana-qi-homodynamics",
            title: "Homodynamic Applications",
            content: [
                "These energetic models contribute several key insights to Homodynamic theory:",
                "<p><strong>Energy as Process:</strong> Emphasizing flow, circulation, and transformation as the basis of vitality, resonating with non-equilibrium thermodynamics.</p>",
                "<p><strong>Systemic Integration:</strong> Health emerges from coordination among subsystems rather than the optimization of isolated functions.</p>",
                "<p><strong>Rhythmic Regulation:</strong> Natural rhythms and cycles provide the temporal structure within which optimal function can emerge.</p>",
                "<p><strong>Conscious Participation:</strong> Deliberate practices (like Prāṇāyāma and Qìgōng) can influence physiological processes, providing leverage points for system optimization.</p>"
            ],
            component: NonEquilibriumViz
        }
    ]
  },
  {
    id: "purusarthas",
    title: "Hindu Puruṣārthas: Multi-Objective Life Design",
    shortTitle: "Puruṣārthas",
    component: PurusarthasViz,
    subSections: [
      {
        id: "pur-intro",
        title: "",
        content: ["The <strong>four puruṣārthas</strong> of Hindu philosophy represent perhaps the ancient world's most sophisticated framework for <strong>multi-objective optimization</strong> in human life design. Rather than prioritizing any single goal or value, the system recognizes that sustainable wellbeing requires balancing multiple legitimate aims across different life phases and circumstances."],
        component: PurusarthasViz,
      },
      {
        id: "pur-aims",
        title: "The Four Aims",
        content: [
          "<ul><li><strong>Dharma (Righteousness/Order):</strong> Values-based living and ethical behavior.</li><li><strong>Artha (Material Security/Resources):</strong> Financial security and career development.</li><li><strong>Kāma (Pleasure/Fulfillment):</strong> Recreation, relationships, and aesthetic experience.</li><li><strong>Mokṣa (Liberation/Transcendence):</strong> Self-actualization and meaning-making.</li></ul>",
          "The genius of the puruṣārtha system lies in recognizing that these four aims are <strong>interdependent</strong> rather than competitive, providing mutual constraints and a regulatory framework for a balanced life."
        ],
        component: MultidimensionalOptimizationViz,
      },
      {
        id: "pur-systems-analysis",
        title: "Systems Analysis of the Puruṣārthas",
        content: [
          "From a control theory perspective, the puruṣārthas function as a <strong>multi-objective optimization system</strong> that prevents getting stuck in local optima, provides mutual constraints to prevent runaway dynamics, enables dynamic rebalancing, and creates positive feedback loops where success in one area supports others.",
          "Modern research in psychology and organizational behavior has largely confirmed these insights, reflected in concepts like work-life balance, motivation theory, and well-being research."
        ],
        component: SystemsOptimizationViz,
      },
    ]
  },
  {
    id: "eightfold-path",
    title: "The Noble Eightfold Path: A Systematic Framework for Optimal Function",
    shortTitle: "Eightfold Path",
    component: EightfoldPathViz,
    subSections: [
      {
        id: "path-intro",
        title: "",
        content: ["The <strong>Noble Eightfold Path</strong> represents Buddhism's systematic methodology for transforming dysfunctional craving-based systems into optimally functioning responsive systems. From a control theory perspective, the path provides a comprehensive <strong>protocol</strong> for reconfiguring system architecture at multiple levels simultaneously."],
        component: EightfoldPathViz,
      },
      {
        id: "path-pillars",
        title: "The Three Pillars",
        content: [
            "The eight factors of the path are organized into three core pillars, which function as an integrated control system:",
            "<p><strong>Wisdom Group (System Architecture):</strong> Right View and Right Intention establish accurate models of reality and align motivations.</p>",
            "<p><strong>Ethical Conduct Group (Environmental Interface):</strong> Right Speech, Action, and Livelihood create a stable environment that reduces system noise.</p>",
            "<p><strong>Mental Discipline Group (Internal Regulation):</strong> Right Effort, Mindfulness, and Concentration refine the system's internal regulatory capacity.</p>"
        ],
        component: ThreePillarsViz,
        subSections: [
            { id: "path-pillar-wisdom", title: "Pillar 1: Wisdom", content: ["This pillar focuses on designing the system's architecture through <strong>Right View</strong> (accurate mental models of reality) and <strong>Right Intention</strong> (values clarification and purpose alignment). It is equivalent to systems thinking and having evidence-based worldviews."], component: WisdomPillarViz },
            { id: "path-pillar-conduct", title: "Pillar 2: Ethical Conduct", content: ["This pillar designs the system's environmental interface through <strong>Right Speech</strong>, <strong>Right Action</strong>, and <strong>Right Livelihood</strong>. It is about creating stable life conditions that reduce system entropy and support mental development."], component: EthicalConductPillarViz },
            { id: "path-pillar-discipline", title: "Pillar 3: Mental Discipline", content: ["This pillar designs the internal regulation systems through <strong>Right Effort</strong>, <strong>Right Mindfulness</strong>, and <strong>Right Concentration</strong>. It focuses on self-regulation, energy management, and developing deep work capacity and flow states."], component: MentalDisciplinePillarViz }
        ]
      },
      {
        id: "path-integration",
        title: "Systematic Integration and Mutual Reinforcement",
        content: ["The eight path factors are designed to be <strong>mutually reinforcing</strong> rather than sequential: Wisdom informs Practice, Ethics support Concentration, and Concentration enables Wisdom. The path involves progressive refinement rather than a binary achievement, creating a positive feedback loop where direct experience validates and deepens intellectual understanding."],
        component: AdaptiveControlViz,
      }
    ]
  },
  {
    id: "platos-cave",
    title: "Plato's Allegory of the Cave: From Reactive Living to Predictive Processing",
    shortTitle: "Plato's Cave",
    component: PlatosCaveViz,
    subSections: [
        {
          id: "cave-intro",
          title: "The Cave: Low-Information System States",
          content: [
            "<strong>Plato's Allegory of the Cave</strong> provides a powerful metaphor for the journey from unconscious, reactive living to conscious, responsive engagement with reality. The <strong>prisoners chained in the cave</strong> represent individuals operating with limited and distorted information about reality, mistaking shadows for the real world.",
            "From a systems analysis perspective, the cave represents a <strong>local minimum</strong> in the system's fitness landscape—a stable but suboptimal configuration that requires energy input to escape. The prisoners have adapted to their constraints but remain unaware of possibilities beyond their immediate experience."
          ],
          component: ShadowsViz
        },
        {
          id: "cave-ascent",
          title: "The Ascent: Progressive Model Refinement",
          content: [
            "The <strong>journey from cave to sunlight</strong> represents the gradual refinement of internal models through exposure to increasingly accurate information sources. Liberation represents a <strong>phase transition</strong>—a qualitative change in system organization triggered by sufficient energy input to escape the local minimum and explore new regions of the fitness landscape.",
            "The ascent represents <strong>hierarchical learning</strong>—each stage provides more complete and accurate information than the previous one, enabling more sophisticated prediction and response capabilities."
          ],
          component: AscentViz
        },
        {
          id: "cave-return",
          title: "The Return: Integration and Service",
          content: [
            "The <strong>philosopher's return to the cave</strong> represents the integration of new understanding with previous context and the service of supporting others' development. This represents <strong>system integration</strong>—the process of incorporating new capacities into existing social and environmental contexts without losing the gains of development.",
            "The allegory provides crucial insights for understanding human development as a <strong>dynamic process</strong>, where perturbation acts as a catalyst for growth and higher-level understanding must be integrated with practical life."
          ],
          component: BalanceBeamViz
        }
    ]
  },
  {
    id: "part-2-header",
    type: 'header',
    title: "Part II: Scientific and Mathematical Foundations",
    shortTitle: "Part II",
    component: DummyViz,
    subSections: []
  },
  {
    id: "thermodynamics",
    title: "Thermodynamics and Dissipative Structures",
    shortTitle: "Thermodynamics",
    component: NonEquilibriumViz,
    subSections: [
        {
            id: "thermo-intro",
            title: "The Physics of Life",
            content: ["The resolution of the apparent paradox between the Second Law of Thermodynamics (entropy increases in isolated systems) and the existence of complex life came from <strong>Ilya Prigogine's work on dissipative structures</strong>. This provides the foundational physics for understanding how living systems maintain organization through continuous change.", "Prigogine studied systems maintained <strong>far from thermodynamic equilibrium</strong> by external energy gradients. Under these conditions, structure emerges from continuous energy flow, and stability is maintained through instability. Living organisms exemplify dissipative structures, from metabolic networks to cardiac rhythms."]
        }
    ]
  },
  {
    id: "cybernetics",
    title: "Cybernetics and Control Theory",
    shortTitle: "Cybernetics",
    component: AdaptiveControlViz,
    subSections: [
        {
            id: "cybernetics-intro",
            title: "The Science of Regulation",
            content: ["<strong>Cybernetics</strong>, developed by Norbert Wiener, is the scientific study of <strong>communication and control</strong> in biological and artificial systems. It provides the tools for understanding how complex systems maintain goal-directed behavior through feedback.", "The fundamental cybernetic system consists of a control loop with a reference input, a controller, the system (plant), a sensor, and a comparator that computes error. Healthy biological systems require both <strong>negative feedback</strong> for stability and <strong>positive feedback</strong> for learning and adaptation."]
        }
    ]
  },
  {
    id: "information-theory",
    title: "Information Theory",
    shortTitle: "Info Theory",
    component: FreeEnergyMinimizationViz,
    subSections: [
        {
            id: "info-intro",
            title: "Quantifying Uncertainty and Communication",
            content: ["<strong>Claude Shannon's Mathematical Theory of Communication</strong> provided rigorous methods for quantifying <strong>information, uncertainty, and communication capacity</strong>. These insights are essential for understanding how living systems process information, make decisions, and adapt.", "Information is defined as the reduction of uncertainty (entropy). Learning can be understood as updating probability distributions based on new information. Homodynamic systems regulate entropy, optimize their signal-to-noise ratio, and improve predictive efficiency to adapt effectively."]
        }
    ]
  },
  {
    id: "dynamical-systems",
    title: "Dynamical Systems Theory",
    shortTitle: "Dynamical Systems",
    component: PhaseTransitionsViz,
    subSections: [
        {
            id: "dyn-intro",
            title: "Attractors, Bifurcations, and Phase Transitions",
            content: ["<strong>Dynamical systems theory</strong> provides mathematical tools for understanding how systems evolve over time, focusing on <strong>qualitative behavior</strong>. Long-term system behavior is characterized by <strong>attractors</strong> (fixed points, limit cycles, strange attractors).", "<strong>Bifurcations</strong> occur when small changes in system parameters cause qualitative changes in the attractor structure. This helps explain phenomena like skill acquisition, stage transitions in development, and mood disorders as shifts between different attractor states."]
        }
    ]
  },
  {
    id: "complex-adaptive-systems",
    title: "Complex Adaptive Systems",
    shortTitle: "CAS",
    component: SelfOrganizingNetworkViz,
    subSections: [
        {
            id: "cas-intro",
            title: "Emergence, Self-Organization, and Network Effects",
            content: ["<strong>Complex Adaptive Systems (CAS)</strong> are networks of interacting agents that exhibit <strong>emergent behaviors</strong>, adapt to changing conditions, and self-organize without central control. This framework is essential for understanding human systems from individuals to societies.", "Key characteristics include distributed control, emergent properties, adaptation, self-organization, and nonlinearity. Many such systems operate near <strong>critical points</strong>, boundaries between order and chaos where they are maximally sensitive to inputs and can process information most efficiently."]
        }
    ]
  },
  {
    id: "part-3-header",
    type: 'header',
    title: "Part III: Neuroscience and Neurobiology",
    shortTitle: "Part III",
    component: DummyViz,
    subSections: []
  },
  {
    id: "neural-energetics",
    title: "Neural Energetics and Metabolic Coupling",
    shortTitle: "Neural Energetics",
    component: NeuralEnergeticsViz,
    subSections: [
        {
            id: "ne-intro",
            title: "",
            content: ["The <strong>energetic basis of neural function</strong> provides the physiological foundation for homodynamic regulation. The brain consumes ~20% of total metabolic energy, requiring sophisticated mechanisms for coupling energy supply with computational demand.", "The <strong>Astrocyte-Neuron Lactate Shuttle (ANLS)</strong> model shows how astrocytes play a crucial role in supplying metabolic fuel (lactate) to active neurons. Cognitive performance, emotional regulation, and behavioral flexibility all depend on adequate energy availability, making energy management a primary consideration for optimal function."]
        }
    ]
  },
  {
    id: "neuromodulation",
    title: "Neuromodulatory Systems",
    shortTitle: "Neuromodulation",
    component: NeuromodulationViz,
    subSections: [
        {
            id: "nm-intro",
            title: "Chemical Basis of State Regulation",
            content: ["<strong>Neuromodulatory systems</strong> provide the chemical basis for brain state regulation, enabling rapid reconfiguration of neural networks to match environmental demands. They operate through diffuse release of neurotransmitters that influence large populations of neurons.", "Key systems include: <ul><li><strong>Cholinergic System:</strong> Attention and Learning</li><li><strong>Dopaminergic System:</strong> Motivation and Reward Processing</li><li><strong>Serotonergic System:</strong> Mood and Behavioral Flexibility</li><li><strong>Noradrenergic System:</strong> Arousal and Stress Response</li></ul> These systems interact to create distinct brain states optimal for different activities."]
        }
    ]
  },
  {
    id: "homeostatic-plasticity",
    title: "Homeostatic Plasticity",
    shortTitle: "Homeostatic Plasticity",
    component: BalanceBeamViz,
    subSections: [
        {
            id: "hp-intro",
            title: "Stability Through Adaptive Change",
            content: ["<strong>Homeostatic plasticity</strong> is the brain's capacity to maintain stable function while continuously adapting. Unlike Hebbian plasticity (which strengthens active connections), it involves regulatory mechanisms that prevent networks from becoming over- or under-active.", "Mechanisms like <strong>synaptic scaling</strong> and changes in <strong>intrinsic neuronal excitability</strong> ensure that new learning doesn't disrupt existing memories while maintaining capacity for future adaptation. This is the essence of homodynamic regulation at the neural level."]
        }
    ]
  },
  {
    id: "stress-response",
    title: "Stress Response Systems and Allostatic Load",
    shortTitle: "Stress & Allostasis",
    component: AdaptiveResponseViz,
    subSections: [
        {
            id: "sr-intro",
            title: "",
            content: ["The <strong>stress response system</strong> exemplifies homodynamic principles by mobilizing resources to meet challenges. The concept of <strong>allostatic load</strong> quantifies the cumulative cost of these adaptive responses, explaining how acute adaptations can become chronic liabilities.", "The <strong>Hypothalamic-Pituitary-Adrenal (HPA) axis</strong> and <strong>Sympathetic-Adrenal-Medullary (SAM) system</strong> coordinate the body's response. Allostatic load theory distinguishes between <strong>allostasis</strong> (achieving stability through change) and <strong>allostatic overload</strong> (when adaptive systems become overwhelmed or dysregulated)."]
        }
    ]
  },
  {
    id: "attractor-landscapes",
    title: "Attractor Landscapes in Neural Dynamics",
    shortTitle: "Attractor Landscapes",
    component: AttractorShiftViz,
    subSections: [
        {
            id: "al-intro",
            title: "",
            content: ["<strong>Neural attractor landscapes</strong> provide a mathematical framework for understanding how brain states emerge, persist, and transition. Cognitive and emotional patterns arise from the collective dynamics of neural networks.", "The dynamics can be visualized as movement on an energy landscape where valleys are stable attractor states. Cognitive functions like memory, decision making, and emotional states can be modeled as different types of attractors. The <strong>Criticality Hypothesis</strong> suggests that brain networks operate near critical phase transitions (the edge of chaos) to maximize information processing capacity."]
        }
    ]
  },
  {
    id: "part-4-header",
    type: 'header',
    title: "Part IV: Synthesis & Conclusion",
    shortTitle: "Part IV",
    component: DummyViz,
    subSections: []
  },
  {
    id: "synthesis",
    title: "Synthesis and Integration: The Complete Homodynamic Framework",
    shortTitle: "Synthesis",
    component: SynthesisViz,
    subSections: [
      {
        id: "syn-principles",
        title: "Convergent Principles Across Domains",
        content: [
            "The exploration of philosophical, scientific, and neurobiological foundations reveals remarkable convergence around key principles:",
            "<ul><li><strong>Stability Through Change as Universal Principle:</strong> From Plato's Cave to dissipative structures and homeostatic plasticity.</li><li><strong>Multi-Level Integration and Hierarchical Organization:</strong> From the Tripartite Soul to control hierarchies and network organization in the brain.</li><li><strong>Temporal Sensitivity and Rhythmic Organization:</strong> From Chinese medicine to chronobiology and neural oscillations.</li></ul>"
        ],
        component: InteractingSystemsViz,
      },
      {
        id: "syn-domains",
        title: "The Three-Domain Architecture: Energy, Space, Time",
        content: [
            "These convergent insights crystallize around three fundamental domains of homodynamic regulation:",
            "<p><strong>Energy Domain:</strong> Resource management and vitality. The capacity for sustained, directed action toward meaningful goals.</p>",
            "<p><strong>Space Domain:</strong> Environmental awareness and adaptive regulation. The quality of present-moment awareness and responsive adaptation.</p>",
            "<p><strong>Time Domain:</strong> Learning, integration, and developmental trajectory. The capacity for learning, growth, and purposeful development.</p>"
        ],
        component: ThreeDimensionsViz,
      }
    ]
  },
  {
    id: "conclusion",
    title: "Conclusion: Implications and Future Directions",
    shortTitle: "Conclusion",
    component: OrderAndChaosViz,
    subSections: [
        {
            id: "conc-intro",
            title: "Theoretical Contributions and Significance",
            content: ["Homodynamics reveals a fundamental pattern of organization that emerges consistently across scales, disciplines, and cultural contexts. Its most significant contribution is bridging ancient wisdom and modern science, providing a meta-theoretical framework that unifies psychology, medicine, education, and organizational management.", "The framework reframes health and wellbeing from a focus on disease to a focus on enhancing adaptive capacity, from an individual to a systemic view, and from a static to a dynamic understanding of optimal function."]
        },
        {
            id: "conc-final",
            title: "Broader Implications for Human Flourishing",
            content: ["The ultimate significance of this theoretical development may lie not in any particular insight or application, but in its demonstration that <strong>ancient wisdom and modern science can inform and enrich each other</strong> in service of human flourishing.", "As we face unprecedented global challenges requiring both individual resilience and collective wisdom, theoretical frameworks like Homodynamics may provide essential tools for navigating complexity while maintaining focus on what ultimately matters: the flourishing of conscious life in all its diverse manifestations."]
        }
    ]
  }
];