import "server-only";

import { prisma } from "@/lib/prisma";

export async function getLatestArticles() {
  const articles = await prisma.post.findMany({
    where: { type: "ARTICLE" },
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    take: 6,
  });
  return articles;
}

export async function getAllArticles() {
  const articles = await prisma.post.findMany({
    where: { type: "ARTICLE" },
    orderBy: { createdAt: "desc" },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return articles;
}

export async function getArticleBySlug(slug: string) {
  const article = await prisma.post.findUnique({
    where: { slug },
    include: {
      author: {
        select: {
          name: true,
          imageUrl: true,
        },
      },
    },
  });
  return article;
}
