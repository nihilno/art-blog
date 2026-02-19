import "server-only";

import { prisma } from "@/lib/prisma";

export async function getPodcasts() {
  const podcasts = await prisma.post.findMany({
    where: { type: "PODCAST" },
    orderBy: { createdAt: "desc" },
  });
  return podcasts;
}
