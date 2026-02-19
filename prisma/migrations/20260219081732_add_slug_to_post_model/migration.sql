/*
  Warnings:

  - You are about to drop the column `TwitterLink` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `YoutubeLink` on the `Author` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" DROP COLUMN "TwitterLink",
DROP COLUMN "YoutubeLink",
ADD COLUMN     "twitterLink" TEXT,
ADD COLUMN     "youtubeLink" TEXT;

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");
