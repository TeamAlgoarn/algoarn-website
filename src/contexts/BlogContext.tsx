//Sessionstorage version
// "use client";

// import { createContext, useContext, useState, ReactNode } from "react";

// // Types
// export interface BlogPost {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   content: string;
//   category: string;
//   date: string;
//   readTime: string;
//   author: string;
//   published: boolean;
// }

// interface BlogContextType {
//   posts: BlogPost[];
//   addPost: (post: BlogPost) => void;
//   updatePost: (id: string, post: BlogPost) => void;
//   deletePost: (id: string) => void;
//   togglePublish: (id: string) => void;
//   getPublishedPosts: () => BlogPost[];
//   getPostBySlug: (slug: string) => BlogPost | undefined;
// }

// // Initial blog posts data
// const initialPosts: BlogPost[] = [
//   {
//     id: "1",
//     title: "How SUCA Changes Academic Decision-Making",
//     slug: "suca-academic-decision-making",
//     excerpt:
//       "Discover how SUCA transforms scattered institutional data into actionable intelligence, enabling leadership to move from reactive management to proactive, data-driven academic strategy.",
//     content: `
// Academic institutions generate vast amounts of data—attendance records, assessment scores, faculty feedback, placement statistics, and engagement metrics. Yet most institutions struggle to convert this data deluge into clear, actionable intelligence.

// ## The Problem with Traditional Analytics

// Traditional academic dashboards present numbers and charts, but they don't answer the critical questions:

// - Which students are at risk of underperforming?
// - What interventions will have the highest impact?
// - How do we optimize resource allocation across departments?
// - Are we on track for accreditation milestones like NAAC and NBA?

// Leadership teams are left to manually interpret disparate reports, often making decisions based on incomplete or outdated information.

// ## From Data to Intelligence: The SUCA Approach

// SUCA (Smart University & College Analytics) fundamentally reimagines how institutions work with their academic data.

// ### 1. Predictive Risk Scoring

// Machine learning models analyze patterns across attendance, assessment performance, engagement metrics, and historical data to identify students who may need intervention—**before they fall behind**.

// ### 2. Outcome-Based Intelligence

// SUCA doesn't just show what happened; it predicts what's likely to happen next. Placement readiness scores, grade predictions, and competitive exam preparedness metrics give leadership a forward-looking view.

// ---

// *Ready to see how SUCA can transform your institution's decision-making? [Contact us](/contact) for a personalized demo.*
//     `,
//     category: "Product Insights",
//     date: "2024-11-15",
//     readTime: "6 min read",
//     author: "Algoarn Team",
//     published: true,
//   },
//   {
//     id: "2",
//     title: "Designing Privacy-First AI for Institutions",
//     slug: "privacy-first-ai-institutions",
//     excerpt:
//       "Privacy isn't optional—it's foundational. Learn how Algoarn architects AI systems that deliver powerful insights while maintaining strict data sovereignty and confidentiality for educational institutions.",
//     content: `
// At Algoarn, privacy isn't an afterthought—it's the foundation of everything we build. We operate on a strict no-screenshot, no-video, no-dashboard-sharing policy because we understand that student data and institutional intelligence are sacred.

// ## Core Privacy Principles

// ### 1. Data Sovereignty

// Your data lives in your infrastructure. Your insights stay with your team. Your competitive advantage remains yours. We provide the intelligence layer without ever compromising confidentiality.

// ### 2. No Public Showcases

// Demo access is granted only through direct, secure requests—never through public showcases. We believe in showing capabilities without exposing actual institutional data.

// ### 3. Role-Based Access Control

// Different stakeholders see only what they need to see, ensuring that sensitive information is protected at every level.

// ## Building Trust Through Technology

// Privacy-first AI means making architectural decisions that prioritize data protection from day one, not retrofitting security measures after the fact.
//     `,
//     category: "Technical",
//     date: "2024-11-10",
//     readTime: "8 min read",
//     author: "Algoarn Team",
//     published: true,
//   },
//   {
//     id: "3",
//     title: "From Dashboards to Intelligence: The Algoarn Approach",
//     slug: "dashboards-to-intelligence",
//     excerpt:
//       "Most analytics platforms stop at visualization. We explain why true academic intelligence requires going beyond dashboards to deliver predictive insights, risk scoring, and automated interventions.",
//     content: `
// Dashboards are everywhere in educational technology. But visualization alone doesn't create intelligence—it creates more work for decision-makers who still need to interpret and act on the data.

// ## Beyond Visualization

// True intelligence systems don't just show data—they provide:

// - **Predictive insights** that anticipate problems before they occur
// - **Risk scoring** that prioritizes where to focus attention
// - **Automated recommendations** for interventions
// - **Outcome tracking** to measure impact

// ## The Algoarn Difference

// We build systems that transform raw data into clear, actionable decisions—reducing cognitive load on leadership while improving outcomes for students.
//     `,
//     category: "Thought Leadership",
//     date: "2024-11-05",
//     readTime: "7 min read",
//     author: "Algoarn Team",
//     published: true,
//   },
//   {
//     id: "4",
//     title: "The Future of AI in Educational Analytics",
//     slug: "ai-educational-analytics-2025",
//     excerpt:
//       "Explore emerging trends in AI-powered education: from real-time learning path optimization to privacy-preserved cross-institutional benchmarking and the rise of intervention recommendation engines.",
//     content: `
// The educational AI landscape is evolving rapidly. Here's what we see on the horizon for 2025 and beyond.

// ## Emerging Trends

// ### Real-Time Learning Path Optimization

// AI systems will continuously adjust learning paths based on student performance, engagement, and comprehension patterns—delivering truly personalized education at scale.

// ### Privacy-Preserved Benchmarking

// New cryptographic techniques will enable institutions to benchmark performance against peers without exposing sensitive data.

// ### Intervention Recommendation Engines

// Moving beyond risk identification to proactive intervention suggestions, backed by evidence of what works for similar student profiles.

// ## Preparing for the Future

// Institutions that invest in AI infrastructure today will have a significant advantage in adapting to these emerging capabilities.
//     `,
//     category: "Industry Trends",
//     date: "2024-10-28",
//     readTime: "9 min read",
//     author: "Algoarn Team",
//     published: true,
//   },
//   {
//     id: "5",
//     title: "Implementing SUCA: A Case Study Approach",
//     slug: "implementing-suca-case-study",
//     excerpt:
//       "Walk through a real-world implementation journey—how one engineering college used SUCA to identify at-risk students early, improve placement outcomes, and streamline NAAC accreditation processes.",
//     content: `
// This case study examines how a mid-sized engineering college transformed their academic operations using SUCA.

// ## The Challenge

// The institution faced three critical challenges:
// - High student dropout rates in first year
// - Difficulty tracking NAAC metrics
// - Limited visibility into placement readiness

// ## The Solution

// By implementing SUCA, they gained:

// ### Early Warning System

// Predictive models identified at-risk students with 85% accuracy, enabling timely interventions.

// ### Automated Accreditation Tracking

// Real-time dashboards showed progress on all NAAC criteria, reducing preparation time by 40%.

// ### Placement Intelligence

// TPO gained visibility into industry-readiness metrics, improving placement rates by 25%.

// ## Results

// - **30% reduction** in first-year dropouts
// - **40% faster** NAAC preparation
// - **25% improvement** in placement outcomes

// ## Key Takeaways

// Success requires commitment to data quality, stakeholder training, and iterative refinement of insights.
//     `,
//     category: "Case Study",
//     date: "2024-10-20",
//     readTime: "10 min read",
//     author: "Algoarn Team",
//     published: true,
//   },
//   {
//     id: "6",
//     title: "Predictive AI for Student Success",
//     slug: "predictive-ai-student-success",
//     excerpt:
//       "Learn how machine learning models analyze patterns in attendance, assessment performance, and engagement to predict student outcomes—and how institutions can intervene before it's too late.",
//     content: `
// Predictive AI is transforming how institutions support student success. Here's how the technology works and what it means for educational outcomes.

// ## Understanding Predictive Models

// Machine learning models analyze multiple data streams:

// - **Attendance patterns** - Frequency, timing, and consistency
// - **Assessment performance** - Scores, trends, and topic mastery
// - **Engagement metrics** - Participation, resource usage, and interaction patterns
// - **Historical data** - Past cohort outcomes and intervention effectiveness

// ## From Prediction to Action

// The goal isn't just to predict—it's to enable intervention:

// ### Risk Scoring

// Students receive risk scores that indicate likelihood of underperformance, enabling prioritized outreach.

// ### Intervention Recommendations

// System suggests evidence-based interventions based on similar student profiles and past success rates.

// ### Outcome Tracking

// Monitor intervention effectiveness to continuously improve the model.

// ## Ethical Considerations

// Predictive systems must be transparent, auditable, and focused on supporting students—never punishing them for risk factors beyond their control.

// ## The Impact

// Institutions using predictive AI see significant improvements in student retention, engagement, and outcomes.
//     `,
//     category: "Technical",
//     date: "2024-10-12",
//     readTime: "7 min read",
//     author: "Algoarn Team",
//     published: true,
//   },
// ];

// const BlogContext = createContext<BlogContextType | undefined>(undefined);

// export function BlogProvider({ children }: { children: ReactNode }) {
//   const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

//   const addPost = (post: BlogPost) => {
//     setPosts([post, ...posts]);
//   };

//   const updatePost = (id: string, updatedPost: BlogPost) => {
//     setPosts(posts.map((p) => (p.id === id ? updatedPost : p)));
//   };

//   const deletePost = (id: string) => {
//     setPosts(posts.filter((p) => p.id !== id));
//   };

//   const togglePublish = (id: string) => {
//     setPosts(
//       posts.map((p) => (p.id === id ? { ...p, published: !p.published } : p))
//     );
//   };

//   const getPublishedPosts = () => {
//     return posts.filter((p) => p.published).sort((a, b) => 
//       new Date(b.date).getTime() - new Date(a.date).getTime()
//     );
//   };

//   const getPostBySlug = (slug: string) => {
//     return posts.find((p) => p.slug === slug && p.published);
//   };

//   return (
//     <BlogContext.Provider
//       value={{
//         posts,
//         addPost,
//         updatePost,
//         deletePost,
//         togglePublish,
//         getPublishedPosts,
//         getPostBySlug,
//       }}
//     >
//       {children}
//     </BlogContext.Provider>
//   );
// }

// export function useBlog() {
//   const context = useContext(BlogContext);
//   if (context === undefined) {
//     throw new Error("useBlog must be used within a BlogProvider");
//   }
//   return context;
// }



//localstorage version
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  published: boolean;
}

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
  updatePost: (id: string, post: BlogPost) => void;
  deletePost: (id: string) => void;
  togglePublish: (id: string) => void;
  getPublishedPosts: () => BlogPost[];
  getPostBySlug: (slug: string) => BlogPost | undefined;
}

// Initial blog posts data
const initialPosts: BlogPost[] = [
  {
    id: "1",
    title: "How SUCA Changes Academic Decision-Making",
    slug: "suca-academic-decision-making",
    excerpt:
      "Discover how SUCA transforms scattered institutional data into actionable intelligence, enabling leadership to move from reactive management to proactive, data-driven academic strategy.",
    content: `
Academic institutions generate vast amounts of data—attendance records, assessment scores, faculty feedback, placement statistics, and engagement metrics. Yet most institutions struggle to convert this data deluge into clear, actionable intelligence.

## The Problem with Traditional Analytics

Traditional academic dashboards present numbers and charts, but they don't answer the critical questions:

- Which students are at risk of underperforming?
- What interventions will have the highest impact?
- How do we optimize resource allocation across departments?
- Are we on track for accreditation milestones like NAAC and NBA?

Leadership teams are left to manually interpret disparate reports, often making decisions based on incomplete or outdated information.

## From Data to Intelligence: The SUCA Approach

SUCA (Smart University & College Analytics) fundamentally reimagines how institutions work with their academic data.

### 1. Predictive Risk Scoring

Machine learning models analyze patterns across attendance, assessment performance, engagement metrics, and historical data to identify students who may need intervention—**before they fall behind**.

### 2. Outcome-Based Intelligence

SUCA doesn't just show what happened; it predicts what's likely to happen next. Placement readiness scores, grade predictions, and competitive exam preparedness metrics give leadership a forward-looking view.

---

*Ready to see how SUCA can transform your institution's decision-making? [Contact us](/contact) for a personalized demo.*
    `,
    category: "Product Insights",
    date: "2024-11-15",
    readTime: "6 min read",
    author: "Algoarn Team",
    published: true,
  },
  {
    id: "2",
    title: "Designing Privacy-First AI for Institutions",
    slug: "privacy-first-ai-institutions",
    excerpt:
      "Privacy isn't optional—it's foundational. Learn how Algoarn architects AI systems that deliver powerful insights while maintaining strict data sovereignty and confidentiality for educational institutions.",
    content: `
At Algoarn, privacy isn't an afterthought—it's the foundation of everything we build. We operate on a strict no-screenshot, no-video, no-dashboard-sharing policy because we understand that student data and institutional intelligence are sacred.

## Core Privacy Principles

### 1. Data Sovereignty

Your data lives in your infrastructure. Your insights stay with your team. Your competitive advantage remains yours. We provide the intelligence layer without ever compromising confidentiality.

### 2. No Public Showcases

Demo access is granted only through direct, secure requests—never through public showcases. We believe in showing capabilities without exposing actual institutional data.

### 3. Role-Based Access Control

Different stakeholders see only what they need to see, ensuring that sensitive information is protected at every level.

## Building Trust Through Technology

Privacy-first AI means making architectural decisions that prioritize data protection from day one, not retrofitting security measures after the fact.
    `,
    category: "Technical",
    date: "2024-11-10",
    readTime: "8 min read",
    author: "Algoarn Team",
    published: true,
  },
  {
    id: "3",
    title: "From Dashboards to Intelligence: The Algoarn Approach",
    slug: "dashboards-to-intelligence",
    excerpt:
      "Most analytics platforms stop at visualization. We explain why true academic intelligence requires going beyond dashboards to deliver predictive insights, risk scoring, and automated interventions.",
    content: `
Dashboards are everywhere in educational technology. But visualization alone doesn't create intelligence—it creates more work for decision-makers who still need to interpret and act on the data.

## Beyond Visualization

True intelligence systems don't just show data—they provide:

- **Predictive insights** that anticipate problems before they occur
- **Risk scoring** that prioritizes where to focus attention
- **Automated recommendations** for interventions
- **Outcome tracking** to measure impact

## The Algoarn Difference

We build systems that transform raw data into clear, actionable decisions—reducing cognitive load on leadership while improving outcomes for students.
    `,
    category: "Thought Leadership",
    date: "2024-11-05",
    readTime: "7 min read",
    author: "Algoarn Team",
    published: true,
  },
  {
    id: "4",
    title: "The Future of AI in Educational Analytics",
    slug: "ai-educational-analytics-2025",
    excerpt:
      "Explore emerging trends in AI-powered education: from real-time learning path optimization to privacy-preserved cross-institutional benchmarking and the rise of intervention recommendation engines.",
    content: `
The educational AI landscape is evolving rapidly. Here's what we see on the horizon for 2025 and beyond.

## Emerging Trends

### Real-Time Learning Path Optimization

AI systems will continuously adjust learning paths based on student performance, engagement, and comprehension patterns—delivering truly personalized education at scale.

### Privacy-Preserved Benchmarking

New cryptographic techniques will enable institutions to benchmark performance against peers without exposing sensitive data.

### Intervention Recommendation Engines

Moving beyond risk identification to proactive intervention suggestions, backed by evidence of what works for similar student profiles.

## Preparing for the Future

Institutions that invest in AI infrastructure today will have a significant advantage in adapting to these emerging capabilities.
    `,
    category: "Industry Trends",
    date: "2024-10-28",
    readTime: "9 min read",
    author: "Algoarn Team",
    published: true,
  },
  {
    id: "5",
    title: "Implementing SUCA: A Case Study Approach",
    slug: "implementing-suca-case-study",
    excerpt:
      "Walk through a real-world implementation journey—how one engineering college used SUCA to identify at-risk students early, improve placement outcomes, and streamline NAAC accreditation processes.",
    content: `
This case study examines how a mid-sized engineering college transformed their academic operations using SUCA.

## The Challenge

The institution faced three critical challenges:
- High student dropout rates in first year
- Difficulty tracking NAAC metrics
- Limited visibility into placement readiness

## The Solution

By implementing SUCA, they gained:

### Early Warning System

Predictive models identified at-risk students with 85% accuracy, enabling timely interventions.

### Automated Accreditation Tracking

Real-time dashboards showed progress on all NAAC criteria, reducing preparation time by 40%.

### Placement Intelligence

TPO gained visibility into industry-readiness metrics, improving placement rates by 25%.

## Results

- **30% reduction** in first-year dropouts
- **40% faster** NAAC preparation
- **25% improvement** in placement outcomes

## Key Takeaways

Success requires commitment to data quality, stakeholder training, and iterative refinement of insights.
    `,
    category: "Case Study",
    date: "2024-10-20",
    readTime: "10 min read",
    author: "Algoarn Team",
    published: true,
  },
  {
    id: "6",
    title: "Predictive AI for Student Success",
    slug: "predictive-ai-student-success",
    excerpt:
      "Learn how machine learning models analyze patterns in attendance, assessment performance, and engagement to predict student outcomes—and how institutions can intervene before it's too late.",
    content: `
Predictive AI is transforming how institutions support student success. Here's how the technology works and what it means for educational outcomes.

## Understanding Predictive Models

Machine learning models analyze multiple data streams:

- **Attendance patterns** - Frequency, timing, and consistency
- **Assessment performance** - Scores, trends, and topic mastery
- **Engagement metrics** - Participation, resource usage, and interaction patterns
- **Historical data** - Past cohort outcomes and intervention effectiveness

## From Prediction to Action

The goal isn't just to predict—it's to enable intervention:

### Risk Scoring

Students receive risk scores that indicate likelihood of underperformance, enabling prioritized outreach.

### Intervention Recommendations

System suggests evidence-based interventions based on similar student profiles and past success rates.

### Outcome Tracking

Monitor intervention effectiveness to continuously improve the model.

## Ethical Considerations

Predictive systems must be transparent, auditable, and focused on supporting students—never punishing them for risk factors beyond their control.

## The Impact

Institutions using predictive AI see significant improvements in student retention, engagement, and outcomes.
    `,
    category: "Technical",
    date: "2024-10-12",
    readTime: "7 min read",
    author: "Algoarn Team",
    published: true,
  },
];

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export function BlogProvider({ children }: { children: ReactNode }) {
  // Always start with initial posts on server
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage after hydration
  useEffect(() => {
    const stored = localStorage.getItem("algoarn_blog_posts");
    if (stored) {
      try {
        setPosts(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse blog posts from localStorage", e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage whenever posts change (but only after hydration)
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("algoarn_blog_posts", JSON.stringify(posts));
    }
  }, [posts, isHydrated]);

  const addPost = (post: BlogPost) => {
    setPosts([post, ...posts]);
  };

  const updatePost = (id: string, updatedPost: BlogPost) => {
    setPosts(posts.map((p) => (p.id === id ? updatedPost : p)));
  };

  const deletePost = (id: string) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  const togglePublish = (id: string) => {
    setPosts(
      posts.map((p) => (p.id === id ? { ...p, published: !p.published } : p))
    );
  };

  const getPublishedPosts = () => {
    return posts.filter((p) => p.published).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  };

  const getPostBySlug = (slug: string) => {
    return posts.find((p) => p.slug === slug && p.published);
  };

  return (
    <BlogContext.Provider
      value={{
        posts,
        addPost,
        updatePost,
        deletePost,
        togglePublish,
        getPublishedPosts,
        getPostBySlug,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
}