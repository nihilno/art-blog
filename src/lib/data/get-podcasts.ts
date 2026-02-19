import "server-only";

import { prisma } from "@/lib/prisma";

export async function getLatestPodcasts() {
  const podcasts = await prisma.post.findMany({
    where: { type: "PODCAST" },
    orderBy: { createdAt: "desc" },
    take: 3,
  });
  return podcasts;
}

export async function getAllPodcasts() {
  const articles = await prisma.post.findMany({
    where: { type: "PODCAST" },
    orderBy: { createdAt: "desc" },
  });
  return articles;
}
