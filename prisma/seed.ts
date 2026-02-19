import { Type } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.post.deleteMany();
  await prisma.author.deleteMany();

  // ----------------------------
  // AUTHORS
  // ----------------------------

  const authors = await Promise.all([
    prisma.author.create({
      data: {
        name: "Daniel Mercer",
        slug: "daniel-mercer",
        imageUrl: "/sample/authors/author-1.png",
        occupation: "Software Architect",
        city: "Berlin",
        description:
          "Daniel is a software architect specializing in scalable backend systems and distributed infrastructure. Over the past decade, he has led engineering teams building high-availability SaaS platforms. His work focuses on long-term maintainability, performance optimization, and clean architectural boundaries. He regularly writes about pragmatic engineering trade-offs and system design patterns. Daniel believes great software is built through clarity, discipline, and thoughtful iteration.",
        content:
          "With more than twelve years in the industry, Daniel has designed and implemented systems handling millions of monthly users. He has experience across fintech, developer tooling, and enterprise SaaS. His approach emphasizes domain-driven design, observability, and strong engineering culture. Outside of work, he mentors early-stage founders on technical strategy and scaling infrastructure responsibly.",
        instagramLink: "https://instagram.com/danielcodes",
        twitterLink: "https://twitter.com/danielmercer",
        youtubeLink: "https://youtube.com/@danielmercer",
      },
    }),

    prisma.author.create({
      data: {
        name: "Sophia Alvarez",
        slug: "sophia-alvarez",
        imageUrl: "/sample/authors/author-1.png",
        occupation: "Product Strategist",
        city: "Barcelona",
        description:
          "Sophia is a product strategist focused on user psychology and growth systems. She has helped multiple startups refine product-market fit and design scalable product organizations. Her work bridges design, analytics, and behavioral science. She writes about experimentation frameworks, retention mechanics, and long-term growth architecture. Sophia believes product success comes from disciplined iteration and deep customer empathy.",
        content:
          "Over the last eight years, Sophia has advised both seed-stage founders and post-Series B companies on product execution. She specializes in activation optimization, lifecycle design, and sustainable growth loops. Her philosophy centers on building products that solve meaningful problems while maintaining operational simplicity. She frequently speaks at product conferences across Europe.",
        instagramLink: "https://instagram.com/sophiaproduct",
        twitterLink: "https://twitter.com/sophiaalvarez",
        youtubeLink: null,
      },
    }),

    prisma.author.create({
      data: {
        name: "Marcus Lee",
        slug: "marcus-lee",
        imageUrl: "/sample/authors/author-1.png",
        occupation: "Founder & Podcast Host",
        city: "Toronto",
        description:
          "Marcus is a repeat founder and podcast host covering startup resilience and venture capital. He has built and exited two venture-backed companies in the SaaS space. Through his podcast, he interviews founders and investors about long-term company building. His writing explores leadership, capital strategy, and execution under uncertainty. Marcus focuses on practical lessons learned from real operating experience.",
        content:
          "Marcus began his career in product engineering before transitioning into entrepreneurship. His ventures have raised capital from global venture firms and angel networks. Today, he combines operational insight with investor perspective to provide balanced startup advice. He is passionate about helping early-stage founders avoid common scaling mistakes.",
        instagramLink: "https://instagram.com/marcusbuilds",
        twitterLink: "https://twitter.com/marcuslee",
        youtubeLink: "https://youtube.com/@marcuslee",
      },
    }),
  ]);

  const [daniel, sophia, marcus] = authors;

  // ----------------------------
  // ARTICLES
  // ----------------------------

  const articles = [
    {
      title: "Designing Scalable Backend Systems in 2026",
      slug: "designing-scalable-backend-systems-2026",
      description:
        "Modern backend systems must balance scalability, reliability, and development velocity. This article explores architectural trade-offs between monoliths and distributed systems. It outlines strategies for managing technical debt while scaling infrastructure. Readers will learn how to align engineering decisions with business growth stages. The focus remains on pragmatic system evolution rather than premature complexity.",
      imageUrl: "/sample/articles/image-1.png",
      durationInMinutes: 12,
      label: "Architecture",
      authorId: daniel.id,
    },
    {
      title: "From Monolith to Modular: When to Refactor",
      slug: "from-monolith-to-modular-when-to-refactor",
      description:
        "Refactoring a monolith is often more about timing than architecture. This piece examines signals that indicate your system has outgrown its original structure. It discusses incremental decomposition strategies and risk mitigation techniques. Real-world case studies demonstrate how teams can evolve safely. The article emphasizes disciplined transitions over dramatic rewrites.",
      imageUrl: "/sample/articles/image-2.png",
      durationInMinutes: 8,
      label: "Engineering",
      authorId: daniel.id,
    },
    {
      title: "The Psychology Behind Product Adoption",
      slug: "psychology-behind-product-adoption",
      description:
        "User adoption is driven by cognitive triggers and emotional resonance. This article explores behavioral principles that influence product engagement. It covers onboarding psychology, habit formation, and perceived value. Practical frameworks help product teams test and refine their assumptions. Sustainable growth begins with understanding why users return.",
      imageUrl: "/sample/articles/image-3.png",
      durationInMinutes: 10,
      label: "Product",
      authorId: sophia.id,
    },
    {
      title: "Growth Loops vs Growth Hacks",
      slug: "growth-loops-vs-growth-hacks",
      description:
        "Short-term growth hacks often fail to create durable traction. This article contrasts tactical acquisition spikes with sustainable growth loops. It explains how compounding mechanisms drive long-term scalability. Examples illustrate how to embed growth directly into product experience. The goal is repeatable expansion rather than temporary visibility.",
      imageUrl: "/sample/articles/image-4.png",
      durationInMinutes: 7,
      label: "Growth",
      authorId: sophia.id,
    },
    {
      title: "Founder Burnout: The Hidden Cost of Ambition",
      slug: "founder-burnout-hidden-cost-of-ambition",
      description:
        "High-growth startups demand relentless execution and resilience. This piece explores the psychological and operational causes of founder burnout. It discusses sustainable leadership habits and delegation strategies. Interviews with experienced operators provide grounded perspective. Long-term success requires energy management, not just ambition.",
      imageUrl: "/sample/articles/image-5.png",
      durationInMinutes: 9,
      label: "Startups",
      authorId: marcus.id,
    },
    {
      title: "Raising Your First Seed Round",
      slug: "raising-your-first-seed-round",
      description:
        "Securing a seed round requires clarity of vision and credible execution. This article outlines how investors evaluate early-stage startups. It discusses traction metrics, narrative positioning, and founder-market fit. Practical tips help founders prepare for due diligence conversations. Capital is not the goal — sustainable growth is.",
      imageUrl: "/sample/articles/image-6.png",
      durationInMinutes: 11,
      label: "Funding",
      authorId: marcus.id,
    },
  ];

  for (const article of articles) {
    await prisma.post.create({
      data: {
        type: Type.ARTICLE,
        ...article,
      },
    });
  }

  // ----------------------------
  // PODCASTS
  // ----------------------------

  const podcasts = [
    {
      title: "Building a SaaS That Survives 10 Years",
      slug: "building-saas-that-survives-10-years",
      description:
        "Longevity in SaaS demands disciplined technical and product decisions. In this episode, Daniel discusses architectural durability and scaling trade-offs. The conversation covers operational debt and long-term roadmap alignment. Listeners gain insight into avoiding short-term engineering shortcuts. Sustainable companies prioritize foundations over hype.",
      imageUrl: "/sample/podcasts/podcast-1.png",
      durationInMinutes: 42,
      label: "Engineering",
      episodeNumber: 1,
      spotifyLink: "https://open.spotify.com/episode/sample1",
      applePodcastLink: "https://podcasts.apple.com/sample1",
      soundCloudLink: "https://soundcloud.com/sample1",
      authorId: daniel.id,
    },
    {
      title: "Product-Market Fit: Myth or Milestone?",
      slug: "product-market-fit-myth-or-milestone",
      description:
        "Product-market fit is often misunderstood in startup circles. Sophia explains how to recognize real demand signals. The discussion explores retention metrics and qualitative feedback loops. Founders learn how to test alignment before aggressive scaling. True product-market fit is measurable and repeatable.",
      imageUrl: "/sample/podcasts/podcast-2.png",
      durationInMinutes: 38,
      label: "Product",
      episodeNumber: 2,
      spotifyLink: "https://open.spotify.com/episode/sample2",
      applePodcastLink: "https://podcasts.apple.com/sample2",
      authorId: sophia.id,
    },
    {
      title: "Inside a VC Investment Committee",
      slug: "inside-vc-investment-committee",
      description:
        "Venture capital decisions are driven by pattern recognition and risk assessment. Marcus interviews a partner from a global VC firm. The episode explores deal evaluation frameworks and portfolio strategy. Listeners gain transparency into how investment committees think. Understanding investor logic improves founder positioning.",
      imageUrl: "/sample/podcasts/podcast-3.png",
      durationInMinutes: 51,
      label: "Venture",
      episodeNumber: 3,
      spotifyLink: "https://open.spotify.com/episode/sample3",
      applePodcastLink: "https://podcasts.apple.com/sample3",
      soundCloudLink: "https://soundcloud.com/sample3",
      authorId: marcus.id,
    },
    {
      title: "Why Most Startups Fail After Series A",
      slug: "why-startups-fail-after-series-a",
      description:
        "Post-Series A growth introduces operational complexity. This episode analyzes common scaling failures. It discusses hiring velocity, capital allocation, and product drift. Real examples highlight preventable mistakes. The focus is disciplined execution beyond fundraising milestones.",
      imageUrl: "/sample/podcasts/podcast-4.png",
      durationInMinutes: 47,
      label: "Startups",
      episodeNumber: 4,
      spotifyLink: "https://open.spotify.com/episode/sample4",
      applePodcastLink: "https://podcasts.apple.com/sample4",
      authorId: marcus.id,
    },
  ];

  for (const podcast of podcasts) {
    await prisma.post.create({
      data: {
        type: Type.PODCAST,
        ...podcast,
      },
    });
  }

  console.log("🌱 Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
