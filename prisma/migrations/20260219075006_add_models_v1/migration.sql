/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Type" AS ENUM ('ARTICLE', 'PODCAST');

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "type" "Type" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "durationInMinutes" INTEGER NOT NULL,
    "label" TEXT NOT NULL,
    "instagramLink" TEXT,
    "twitterLink" TEXT,
    "youtubeLink" TEXT,
    "spotifyLink" TEXT,
    "applePodcastLink" TEXT,
    "soundCloudLink" TEXT,
    "episodeNumber" INTEGER,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "instagramLink" TEXT,
    "TwitterLink" TEXT,
    "YoutubeLink" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;
