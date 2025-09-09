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
        title: "What is Homodynamics?",
        content: [
          "Homodynamics is a philosophical framework that synthesizes ancient wisdom traditions with modern scientific understanding to explore the fundamental dynamics of human consciousness and experience.",
          "At its core, Homodynamics examines how human beings navigate the complex interplay between biological drives, rational thought, and spiritual aspiration—what Plato called the \"tripartite soul.\" Through interactive visualizations, the framework bridges Eastern and Western philosophical traditions, revealing universal patterns in human development and consciousness."
        ],
        component: WhatIsHomodynamicsViz,
      },
      {
        id: "about-originator",
        title: "The Originator: Amit Srivastava",
        content: [
          "Amit Srivastava is the originator and creator of the Homodynamics framework. Drawing from extensive study of philosophy, psychology, and systems theory, Amit developed Homodynamics as a bridge between ancient wisdom and contemporary challenges. His vision was to create an accessible, interactive exploration of human consciousness that transcends traditional academic boundaries and speaks directly to the human experience.",
          "Through Homodynamics, Amit seeks to illuminate the hidden patterns that shape our lives, offering both intellectual understanding and practical wisdom for navigating the complexities of modern existence."
        ],
        component: OriginatorViz,
      },
      {
        id: "about-synthesis",
        title: "The Synthesis Approach",
        content: [
          "Homodynamics draws from multiple philosophical and scientific traditions, presenting them not as competing worldviews, but as interconnected lenses that together form a more complete understanding of human potential.",
          `<ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 0.5em;"><strong>Ancient Wisdom:</strong> Plato's Allegory of the Cave, Buddhist Eightfold Path, Vedic Purusharthas, Taoist energy flow (Qì/Prāṇa)</li>
            <li style="margin-bottom: 0.5em;"><strong>Modern Science:</strong> Systems theory, cognitive science, physics, and complexity theory</li>
            <li style="margin-bottom: 0.5em;"><strong>Human Experience:</strong> Psychology, ethics, and the search for meaning in an increasingly complex world</li>
           </ul>`
        ],
        component: SynthesisApproachViz,
      },
      {
        id: "about-interactive",
        title: "Interactive Exploration",
        content: [
          "Unlike traditional philosophical texts, Homodynamics uses dynamic visualizations to make abstract concepts tangible and explorable. Each visualization serves as both:",
          `<ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 0.5em;">A teaching tool that illuminates philosophical principles</li>
            <li style="margin-bottom: 0.5em;">An experiential interface that invites personal reflection and insight</li>
          </ul>`
        ],
        component: InteractiveExplorationViz,
      },
      {
        id: "about-journey",
        title: "The Allegorical Journey",
        content: [
          "The website guides visitors through a transformative journey of philosophical discovery:",
          `<ol style="list-style-position: inside; padding-left: 0;">
              <li style="margin-bottom: 0.5em;"><strong>The Cave:</strong> Recognizing the limitations of current perception and the shadows that shape our understanding</li>
              <li style="margin-bottom: 0.5em;"><strong>The Ascent:</strong> Discovering the tripartite nature: biological drives, logical reasoning, and intellectual aspiration</li>
              <li style="margin-bottom: 0.5em;"><strong>The World Outside:</strong> Experiencing life through the fundamental dimensions of energy, space, and time</li>
              <li style="margin-bottom: 0.5em;"><strong>Exploration:</strong> Understanding life goals (Puruṣārthas) and navigating ethical frameworks</li>
              <li style="margin-bottom: 0.5em;"><strong>The Practice:</strong> Applying balance tools (Eight Limbs of Yoga) for harmonious living</li>
              <li style="margin-bottom: 0.5em;"><strong>The Return:</strong> Integrating philosophical insights into modern life and relationships</li>
          </ol>`
        ],
        component: AllegoricalJourneyViz,
      },
      {
        id: "about-mission",
        title: "Purpose and Mission",
        content: [
          "Homodynamics exists to:",
          `<ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 0.5em;">Bridge ancient and modern wisdom for contemporary challenges</li>
            <li style="margin-bottom: 0.5em;">Make philosophy accessible through visual and interactive experiences</li>
            <li style="margin-bottom: 0.5em;">Foster personal growth by connecting individual experience with universal patterns</li>
            <li style="margin-bottom: 0.5em;">Promote integrative thinking in an era of increasing specialization</li>
          </ul>`,
          `<blockquote style="border-left: 2px solid #C1C1C1; padding-left: 1rem; margin: 1rem 0; font-style: italic;">"Homodynamics is not just a website—it's an invitation to explore the hidden patterns that shape human experience, bridging the wisdom of the past with the challenges of the present."
          <br/>— Amit Srivastava, Originator of Homodynamics</blockquote>`
        ],
        component: MissionViz,
      },
       {
        id: "about-design",
        title: "Design Philosophy",
        content: [
          "The website's design reflects its content:",
          `<ul style="list-style-type: disc; padding-left: 20px;">
            <li style="margin-bottom: 0.5em;"><strong>Georgia serif typography</strong> evokes classical philosophical texts</li>
            <li style="margin-bottom: 0.5em;"><strong>Muted color palette</strong> encourages contemplation and focus</li>
            <li style="margin-bottom: 0.5em;"><strong>Clean, academic aesthetic</strong> prioritizes content over distraction</li>
            <li style="margin-bottom: 0.5em;"><strong>Responsive design</strong> ensures accessibility across all devices</li>
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
        title: "Foundational Definition and Scope",
        content: [
          "<strong>Homodynamics</strong> represents a theoretical synthesis that emerged from the recognition that traditional approaches to human development, performance, and wellbeing have been constrained by static, mechanistic models borrowed from 19th-century physics. The term itself derives from the Greek <em>homos</em> (same, uniform) and <em>dynamis</em> (power, force), but paradoxically describes systems that maintain their identity precisely through continuous change—a concept that bridges ancient wisdom traditions with cutting-edge complexity science.",
          "At its core, Homodynamics posits that <strong>living systems achieve stability through regulated change rather than rigid homeostasis</strong>. This principle applies across scales from cellular metabolism to psychological resilience to social organization. Unlike traditional homeostatic models that seek fixed setpoints, homodynamic systems operate within <strong>dynamic ranges</strong> that shift based on context, history, and anticipated future demands.",
          "The scope of Homodynamics encompasses:",
          "<p><strong>Individual Level Applications:</strong></p><ul><li>Cognitive performance optimization through attention regulation and energy management</li><li>Emotional resilience through adaptive stress response and recovery protocols</li><li>Physical health through metabolic flexibility and circadian rhythm optimization</li><li>Learning and skill acquisition through optimal challenge-recovery cycles</li></ul>",
          "<p><strong>Systems Level Applications:</strong></p><ul><li>Organizational design for adaptive capacity and innovation</li><li>Educational environments that support natural learning rhythms</li><li>Healthcare approaches that strengthen regulatory capacity rather than suppress symptoms</li><li>Social systems that maintain cohesion while enabling individual expression</li></ul>",
          "<p><strong>Theoretical Contributions:</strong></p><ul><li>Integration of ancient contemplative insights with modern scientific findings</li><li>Mathematical frameworks for modeling human development and change</li><li>Practical methodologies for assessing and enhancing adaptive capacity</li><li>Bridge between Eastern and Western approaches to human optimization</li></ul>"
        ],
        component: IntroductionLifeViz,
      },
      {
        id: "intro-static-models",
        title: "The Problem of Static Models",
        content: [
          "Traditional approaches to human development have been dominated by <strong>equilibrium-seeking models</strong> that view health as the absence of perturbation and optimal function as the maintenance of stable states. This mechanistic paradigm, while useful for understanding simple physical systems, proves inadequate for comprehending the dynamic nature of living organisms and conscious beings.",
          "The limitations of static models become apparent in several domains:",
          "<p><strong>Clinical Psychology:</strong> Diagnostic categories that pathologize natural variation and responses to environmental stressors, leading to interventions that suppress symptoms rather than enhance adaptive capacity.</p>",
          "<p><strong>Education:</strong> Standardized approaches that ignore individual learning rhythms and developmental trajectories, resulting in one-size-fits-all solutions that optimize for average rather than individual potential.</p>",
          "<p><strong>Organizational Management:</strong> Command-and-control structures that prioritize predictability over innovation, creating brittle systems that fail when faced with novel challenges.</p>",
          "<p><strong>Personal Development:</strong> Goal-setting paradigms that emphasize fixed outcomes rather than adaptive processes, leading to either rigid pursuit of predetermined objectives or paralysis when circumstances change.</p>"
        ],
        component: DummyViz,
      },
      {
        id: "intro-alternative",
        title: "The Homodynamic Alternative",
        content: [
          "Homodynamics offers a <strong>process-oriented alternative</strong> that views stability as an emergent property of well-regulated dynamic systems. Rather than seeking to eliminate variation, homodynamic approaches work with natural rhythms and cycles to enhance the system's ability to maintain coherent function across diverse conditions.",
          "This shift in perspective has profound implications:",
          "<p><strong>From Homeostasis to Allostasis:</strong> Instead of maintaining fixed internal states, organisms anticipate future demands and adjust their regulatory parameters accordingly—\"stability through change\" rather than \"stability despite change.\"</p>",
          "<p><strong>From Symptoms to Signals:</strong> Apparent problems become information about system dynamics, pointing toward leverage points for sustainable improvement rather than targets for suppression.</p>",
          "<p><strong>From Optimization to Satisficing:</strong> Rather than maximizing any single metric, homodynamic systems seek configurations that satisfy multiple constraints simultaneously while maintaining flexibility for future adaptation.</p>",
          "<p><strong>From Individual to Systemic:</strong> Personal development becomes inseparable from environmental design, recognizing that sustainable change requires alignment between individual capacities and contextual support.</p>"
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
        "<p><strong>Reason (Logistikon):</strong> The rational, calculating element responsible for:</p><ul><li>Long-term planning and strategic thinking</li><li>Abstract reasoning and logical analysis</li><li>Goal setting and priority evaluation</li><li>Integration of information from multiple sources</li><li>Moral reasoning and ethical judgment</li></ul>",
        "<p><strong>Spirit (Thymoeides):</strong> The emotional, assertive force characterized by:</p><ul><li>Motivation and drive toward objectives</li><li>Courage in facing challenges and obstacles</li><li>Pride and self-respect in achievements</li><li>Anger at injustice or interference</li><li>Energy for sustained effort and perseverance</li></ul>",
        "<p><strong>Appetite (Epithymetikon):</strong> The desire-driven component encompassing:</p><ul><li>Basic physiological needs (food, shelter, safety)</li><li>Sensual pleasures and immediate gratification</li><li>Material acquisition and resource accumulation</li><li>Comfort-seeking and pain-avoidance behaviors</li><li>Reproductive and social bonding drives</li></ul>"
      ],
        component: ThreeComponentsViz,
      },
      {
        id: "soul-dynamics",
        title: "Dynamic Relationships and Justice",
        content: [
          "Crucially, Plato understood that <strong>psychological health emerges from the dynamic relationships among these components</strong> rather than the dominance of any single element. Justice in the soul occurs when:",
          "<ul><li><strong>Reason provides direction</strong> by establishing goals aligned with long-term wellbeing</li><li><strong>Spirit supplies energy</strong> for pursuing these goals with persistence and courage</li><li><strong>Appetite offers feedback</strong> about immediate needs and environmental opportunities</li><li><strong>All three cooperate</strong> in a coordinated response to life's challenges</li></ul>",
          "This model anticipates several key insights of modern systems theory:",
          "<p><strong>Distributed Control:</strong> No single component controls the entire system; optimal function emerges from coordination among specialized subsystems.</p><p><strong>Hierarchical Organization:</strong> Reason operates at a higher level of abstraction, setting contexts within which spirit and appetite function, but depends on these lower levels for implementation and feedback.</p><p><strong>Dynamic Balance:</strong> Health requires active regulation rather than static equilibrium; the relative influence of each component must adjust based on situational demands.</p><p><strong>Failure Modes:</strong> Dysfunction occurs when components become disconnected (reason without energy, spirit without direction, appetite without regulation) or when one dominates inappropriately.</p>"
        ],
        component: HarmonyBalanceViz,
      },
      {
        id: "soul-correlates",
        title: "Modern Neuroscientific Correlates",
        content: [
          "Contemporary neuroscience has largely vindicated Plato's insights through the identification of brain networks that correspond remarkably well to his tripartite model:",
          "<p><strong>Prefrontal Cortex (Reason):</strong> Executive functions including working memory, cognitive flexibility, inhibitory control, and abstract reasoning—precisely the capacities Plato attributed to the rational soul.</p>",
          "<p><strong>Anterior Cingulate Cortex (Spirit):</strong> Conflict monitoring, effort allocation, motivation, and emotional regulation—functions that align with Plato's spirited element as the executive coordinator between reason and appetite.</p>",
          "<p><strong>Limbic and Subcortical Systems (Appetite):</strong> Reward processing, basic drives, emotional responses, and homeostatic regulation—the physiological and hedonic functions that Plato recognized as the appetitive foundation of behavior.</p>",
          "Modern research on <strong>executive function</strong>, <strong>emotional regulation</strong>, and <strong>motivation</strong> consistently demonstrates that optimal performance requires coordination among these systems rather than the dominance of \"rational\" prefrontal areas over \"emotional\" limbic regions."
        ],
        component: DummyViz,
      },
      {
        id: "soul-implications",
        title: "Homodynamic Implications",
        content: [
          "Plato's tripartite model provides crucial insights for Homodynamic theory:",
          "<p><strong>Energy Management:</strong> The system requires adequate resources (appetite) to fuel sustained effort (spirit) in service of meaningful goals (reason). Energy depletion at any level compromises the entire system.</p>",
          "<p><strong>Adaptive Regulation:</strong> Different situations call for different balances among the three components. Crisis situations may require spirit to take temporary precedence, while complex planning tasks demand greater influence from reason.</p>",
          "<p><strong>Developmental Trajectories:</strong> Healthy development involves not the suppression of appetite or spirit by reason, but the gradual integration of all three components into increasingly sophisticated patterns of coordination.</p>",
          "<p><strong>Intervention Strategies:</strong> Effective change requires addressing all three levels simultaneously rather than trying to modify one component in isolation.</p>"
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
                "The qì framework anticipates several insights from contemporary complexity science, including emergence, nonlinearity, self-organization, and adaptive cycles."
            ],
            component: DummyViz
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
            "<p><strong>Wisdom Group (System Architecture):</strong></p><ul><li><strong>Right View:</strong> Accurate models of reality and causation.</li><li><strong>Right Intention:</strong> Appropriate goal specification and motivation.</li></ul>",
            "<p><strong>Ethical Conduct Group (Environmental Interface):</strong></p><ul><li><strong>Right Speech:</strong> Communication that reduces system noise.</li><li><strong>Right Action:</strong> Behaviors that support system stability.</li><li><strong>Right Livelihood:</strong> Resource acquisition aligned with long-term health.</li></ul>",
            "<p><strong>Mental Discipline Group (Internal Regulation):</strong></p><ul><li><strong>Right Effort:</strong> Appropriate energy allocation and pacing.</li><li><strong>Right Mindfulness:</strong> Accurate, real-time monitoring of system states.</li><li><strong>Right Concentration:</strong> Stable attention and focused information processing.</li></ul>"
        ],
        component: DummyViz,
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
    component: DummyViz,
    subSections: [
        {
            id: "ne-intro",
            title: "",
            content: ["The <strong>energetic basis of neural function</strong> provides the physiological foundation for homodynamic regulation. The brain consumes ~20% of total metabolic energy, requiring sophisticated mechanisms for coupling energy supply with computational demand.", "The <strong>Astrocyte-Neuron Lactate Shuttle (ANLS)</strong> model shows how astrocytes supply metabolic fuel (lactate) to active neurons. Cognitive performance, emotional regulation, and behavioral flexibility all depend on adequate energy availability, making energy management a primary consideration for optimal function."]
        }
    ]
  },
  {
    id: "neuromodulation",
    title: "Neuromodulatory Systems",
    shortTitle: "Neuromodulation",
    component: DummyViz,
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
