import "server-only";

import { prisma } from "@/lib/prisma";

export async function getLatestAuthors() {
  const authors = await prisma.author.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });
  return authors;
}

export async function getAllAuthors() {
  const authors = await prisma.author.findMany({
    orderBy: { name: "asc" },
  });
  return authors;
}
