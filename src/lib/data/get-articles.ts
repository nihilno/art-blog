import "server-only";

import { prisma } from "@/lib/prisma";

export async function getArticles() {
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
