import { Type } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.post.deleteMany();
  await prisma.author.deleteMany();

  const authors = await prisma.author.createMany({
    data: [
      {
        name: "Daniel Mercer",
        occupation: "Software Architect",
        location: "Berlin, Germany",
        description:
          "Daniel writes about scalable backend systems, distributed architecture, and pragmatic software engineering.",
        content:
          "With over 12 years of experience building high-scale SaaS platforms, Daniel focuses on clean architecture and long-term maintainability.",
        instagramLink: "https://instagram.com/danielcodes",
        TwitterLink: "https://twitter.com/danielmercer",
        YoutubeLink: "https://youtube.com/@danielmercer",
      },
      {
        name: "Sophia Alvarez",
        occupation: "Product Strategist",
        location: "Barcelona, Spain",
        description:
          "Sophia explores product design, user psychology, and growth strategy.",
        content:
          "She has helped multiple startups refine product-market fit and design scalable product systems.",
        instagramLink: "https://instagram.com/sophiaproduct",
        TwitterLink: "https://twitter.com/sophiaalvarez",
        YoutubeLink: null,
      },
      {
        name: "Marcus Lee",
        occupation: "Startup Founder & Podcast Host",
        location: "Toronto, Canada",
        description:
          "Marcus interviews founders and investors about building resilient companies.",
        content:
          "Founder of two venture-backed startups and host of 'The Builder’s Mindset' podcast.",
        instagramLink: "https://instagram.com/marcusbuilds",
        TwitterLink: "https://twitter.com/marcuslee",
        YoutubeLink: "https://youtube.com/@marcuslee",
      },
    ],
  });

  const allAuthors = await prisma.author.findMany();

  const daniel = allAuthors[0];
  const sophia = allAuthors[1];
  const marcus = allAuthors[2];

  const articlesData = [
    {
      title: "Designing Scalable Backend Systems in 2026",
      description:
        "A deep dive into modern distributed architectures and how to avoid common scaling pitfalls.",
      durationInMinutes: 12,
      label: "Architecture",
      imageUrl: "public/sample/articles/image-1.png",
      authorId: daniel.id,
    },
    {
      title: "From Monolith to Modular: When to Refactor",
      description:
        "Understanding the right time to decompose a growing application.",
      durationInMinutes: 8,
      label: "Engineering",
      imageUrl: "public/sample/articles/image-2.png",
      authorId: daniel.id,
    },
    {
      title: "The Psychology Behind Product Adoption",
      description:
        "Why users embrace some products instantly and ignore others.",
      durationInMinutes: 10,
      label: "Product",
      imageUrl: "public/sample/articles/image-3.png",
      authorId: sophia.id,
    },
    {
      title: "Growth Loops vs Growth Hacks",
      description:
        "Why sustainable growth beats short-term acquisition spikes.",
      durationInMinutes: 7,
      label: "Growth",
      imageUrl: "public/sample/articles/image-4.png",
      authorId: sophia.id,
    },
    {
      title: "Founder Burnout: The Hidden Cost of Ambition",
      description:
        "Recognizing and preventing burnout in high-growth environments.",
      durationInMinutes: 9,
      label: "Startups",
      imageUrl: "public/sample/articles/image-5.png",
      authorId: marcus.id,
    },
    {
      title: "Raising Your First Seed Round",
      description: "What early-stage investors actually look for in 2026.",
      durationInMinutes: 11,
      label: "Funding",
      imageUrl: "public/sample/articles/image-6.png",
      authorId: marcus.id,
    },
  ];

  for (const article of articlesData) {
    await prisma.post.create({
      data: {
        type: Type.ARTICLE,
        ...article,
      },
    });
  }

  const podcastsData = [
    {
      title: "Building a SaaS That Survives 10 Years",
      description:
        "Daniel discusses technical longevity and sustainable engineering decisions.",
      durationInMinutes: 42,
      label: "Engineering",
      episodeNumber: 1,
      spotifyLink: "https://open.spotify.com/episode/sample1",
      applePodcastLink: "https://podcasts.apple.com/sample1",
      soundCloudLink: "https://soundcloud.com/sample1",
      imageUrl: "public/sample/podcasts/podcast-1.png",
      authorId: daniel.id,
    },
    {
      title: "Product-Market Fit: Myth or Milestone?",
      description:
        "Sophia breaks down how to recognize real product-market fit.",
      durationInMinutes: 38,
      label: "Product",
      episodeNumber: 2,
      spotifyLink: "https://open.spotify.com/episode/sample2",
      applePodcastLink: "https://podcasts.apple.com/sample2",
      soundCloudLink: null,
      imageUrl: "public/sample/podcasts/podcast-2.png",
      authorId: sophia.id,
    },
    {
      title: "Inside a VC Investment Committee",
      description: "Marcus interviews a partner at a top-tier VC firm.",
      durationInMinutes: 51,
      label: "Venture",
      episodeNumber: 3,
      spotifyLink: "https://open.spotify.com/episode/sample3",
      applePodcastLink: "https://podcasts.apple.com/sample3",
      soundCloudLink: "https://soundcloud.com/sample3",
      imageUrl: "public/sample/podcasts/podcast-3.png",
      authorId: marcus.id,
    },
    {
      title: "Why Most Startups Fail After Series A",
      description: "A candid discussion on scaling challenges post-funding.",
      durationInMinutes: 47,
      label: "Startups",
      episodeNumber: 4,
      spotifyLink: "https://open.spotify.com/episode/sample4",
      applePodcastLink: "https://podcasts.apple.com/sample4",
      soundCloudLink: null,
      imageUrl: "public/sample/podcasts/podcast-4.png",
      authorId: marcus.id,
    },
  ];

  for (const podcast of podcastsData) {
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
