import "server-only";

import { prisma } from "@/lib/prisma";

export async function getAuthors() {
  const authors = await prisma.author.findMany({
    orderBy: { createdAt: "desc" },
  });
  return authors;
}
