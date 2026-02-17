export const data = [
  {
    featuredArticleId: 1,
    authors: [
      {
        id: 1,
        name: "Alice Johnson",
        job: "Freelance Writer",
        image: "/public/sample/authors/author-1.png",
        city: "New York, USA",
        description:
          "Alice is a passionate writer focusing on art, culture, and storytelling.",
        socials: {
          twitter: "https://twitter.com/alicejohnson",
          instagram: "https://instagram.com/alicejohnson",
          youtube: "https://youtube.com/alicejohnson",
        },
        articlesPodcasts: [1, 3],
      },
      {
        id: 2,
        name: "Mark Stevens",
        job: "Podcast Host",
        image: "/public/sample/authors/author-1.png",
        city: "Los Angeles, USA",
        description:
          "Mark hosts podcasts about tech, music, and creative industries.",
        socials: {
          twitter: "https://twitter.com/markstevens",
          instagram: "https://instagram.com/markstevens",
          youtube: "https://youtube.com/markstevens",
        },
        articlesPodcasts: [2, 4],
      },
    ],
    content: [
      {
        id: 1,
        type: "article",
        image: "/public/sample/articles/image-3.png",
        featured_image: "/public/sample/articles/hero-article-1.png",
        title: "10 Art Techniques to Try This Year",
        description:
          "A short guide to experimenting with new art styles and techniques.",
        textContent:
          "Full article content goes here, explaining 10 innovative art techniques...",
        duration: "5 min read",
        label: "art",
        authorId: 1,
      },
      {
        id: 2,
        type: "podcast",
        episode: "Episode 12: The Future of AI in Music",
        image: "/public/sample/podcasts/podcast-1.png",
        title: "AI Meets Music",
        description:
          "Exploring how artificial intelligence is transforming music creation.",
        textContent:
          "In this episode, Mark dives deep into AI tools in music production...",
        duration: "45 min",
        label: "technology",
        authorId: 2,
        links: {
          spotify: "https://spotify.com/episode/ai-music",
          apple: "https://apple.com/podcast/ai-music",
          soundcloud: "https://soundcloud.com/ai-music",
        },
      },
      {
        id: 3,
        type: "article",
        image: "/public/sample/articles/image-4.png",
        featured_image: "/public/sample/articles/hero-article-2.png",
        title: "Top Design Trends for 2026",
        description: "Discover what’s shaping the design world in 2026.",
        textContent:
          "This article dives into emerging trends in UI, graphic, and industrial design...",
        duration: "7 min read",
        label: "design",
        authorId: 1,
      },
      {
        id: 4,
        type: "podcast",
        episode: "Episode 7: The Art of Storytelling",
        image: "/public/sample/podcasts/podcast-2.png",
        title: "Storytelling Secrets",
        description: "How to captivate audiences with compelling stories.",
        textContent:
          "Mark and his guest discuss storytelling techniques in books, podcasts, and marketing...",
        duration: "60 min",
        label: "storytelling",
        authorId: 2,
        links: {
          spotify: "https://spotify.com/episode/storytelling",
          apple: "https://apple.com/podcast/storytelling",
          soundcloud: "https://soundcloud.com/storytelling",
        },
      },
    ],
  },
];
