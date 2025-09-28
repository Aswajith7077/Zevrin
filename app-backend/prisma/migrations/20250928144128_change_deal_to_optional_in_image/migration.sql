-- DropForeignKey
ALTER TABLE "public"."Image" DROP CONSTRAINT "Image_dealId_fkey";

-- AlterTable
ALTER TABLE "public"."Image" ALTER COLUMN "dealId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "public"."Deal"("id") ON DELETE SET NULL ON UPDATE CASCADE;
