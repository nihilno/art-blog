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
