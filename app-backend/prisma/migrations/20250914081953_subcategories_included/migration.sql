/*
  Warnings:

  - You are about to drop the column `categoryImageId` on the `Category` table. All the data in the column will be lost.
  - Added the required column `description` to the `Banner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Category" DROP CONSTRAINT "Category_categoryImageId_fkey";

-- DropIndex
DROP INDEX "public"."Category_categoryImageId_key";

-- AlterTable
ALTER TABLE "public"."Banner" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "url" TEXT;

-- AlterTable
ALTER TABLE "public"."Category" DROP COLUMN "categoryImageId";

-- CreateTable
CREATE TABLE "public"."SubCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "categoryImageId" TEXT,

    CONSTRAINT "SubCategory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_categoryImageId_key" ON "public"."SubCategory"("categoryImageId");

-- AddForeignKey
ALTER TABLE "public"."SubCategory" ADD CONSTRAINT "SubCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SubCategory" ADD CONSTRAINT "SubCategory_categoryImageId_fkey" FOREIGN KEY ("categoryImageId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;
