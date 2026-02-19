/*
  Warnings:

  - You are about to drop the column `location` on the `Author` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Author` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `city` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Author` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Author" DROP COLUMN "location",
ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Author_slug_key" ON "Author"("slug");

-- CreateIndex
CREATE INDEX "Post_type_createdAt_idx" ON "Post"("type", "createdAt");
