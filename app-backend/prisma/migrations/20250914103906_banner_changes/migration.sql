/*
  Warnings:

  - Added the required column `expiresAt` to the `Banner` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Banner` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Banner" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expiresAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "validityDays" INTEGER NOT NULL DEFAULT 0;
