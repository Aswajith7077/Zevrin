-- CreateEnum
CREATE TYPE "public"."SubscriptionPlanEnum" AS ENUM ('FREE', 'PRO', 'PREMIUM', 'BASIC', 'PLATINUM');

-- CreateEnum
CREATE TYPE "public"."ProcedureStepStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'WAITING', 'COMPLETED', 'BLOCKED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "public"."PaymentMethodEnum" AS ENUM ('BANK_ACCOUNT_TRANSFER', 'UPI', 'CREDIT_CARD', 'CRYPTO_CURRENCY', 'STOCKS');

-- CreateEnum
CREATE TYPE "public"."PaymentContextEnum" AS ENUM ('DEALS', 'SUBSCRIPTIONS');

-- CreateEnum
CREATE TYPE "public"."CreditEventTypeEnum" AS ENUM ('BAD_SIGNER_REVIEW', 'BETTER_SIGNER_REVIEW');

-- CreateEnum
CREATE TYPE "public"."DealStatusEnum" AS ENUM ('DRAFT', 'ACTIVE', 'INACTIVE', 'REJECTED', 'EXPIRED', 'COMPLETED');

-- CreateEnum
CREATE TYPE "public"."CurrencyEnum" AS ENUM ('USD', 'INR');

-- CreateEnum
CREATE TYPE "public"."TagEnum" AS ENUM ('FLEET', 'YATCH', 'PERFUME', 'ATHAR', 'IDOLS', 'PRODUCTIVITY', 'NOTEBOOKS', 'BOOKS', 'LAMPS', 'STUDY_LAMPS', 'DECORATIONS', 'MEN', 'WOMEN', 'WATCHES', 'BELTS', 'TIES', 'LUXURY', 'BULKY', 'CLASSY', 'MODERN', 'VINTAGE');

-- CreateEnum
CREATE TYPE "public"."UserRoleEnum" AS ENUM ('TRADER', 'DEALER', 'ADMIN', 'STAFF');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isPhoneVerfied" BOOLEAN NOT NULL DEFAULT false,
    "isEmailVerfied" BOOLEAN NOT NULL DEFAULT false,
    "bio" TEXT NOT NULL,
    "avatarId" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "officeAddressId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastLoginDate" TIMESTAMP(3) NOT NULL,
    "role" "public"."UserRoleEnum" NOT NULL DEFAULT 'TRADER',
    "metadata" JSONB NOT NULL,
    "receiverId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Connections" (
    "id" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "destinationId" TEXT NOT NULL,
    "relationShip" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "Connections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Deal" (
    "id" TEXT NOT NULL,
    "dealerId" TEXT NOT NULL,
    "signerId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dealLocationId" TEXT,
    "isVirtual" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "validityDays" INTEGER NOT NULL DEFAULT 0,
    "expectedArrivalDays" INTEGER NOT NULL,
    "expectedArrivalTime" TIMESTAMP(3),
    "signedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "status" "public"."DealStatusEnum" NOT NULL,
    "signerRatings" DOUBLE PRECISION NOT NULL,
    "dealerCredits" DOUBLE PRECISION NOT NULL,
    "signerCredits" DOUBLE PRECISION NOT NULL,
    "feedback" TEXT NOT NULL,
    "views" INTEGER NOT NULL,
    "metadata" JSONB NOT NULL,
    "creditTransactionId" TEXT,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tag" (
    "id" TEXT NOT NULL,
    "tag" "public"."TagEnum" NOT NULL,
    "dealId" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Banner" (
    "id" TEXT NOT NULL,
    "bannerImageId" TEXT,

    CONSTRAINT "Banner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "categoryImageId" TEXT,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Comment" (
    "id" TEXT NOT NULL,
    "commentedById" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "commentText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB NOT NULL,
    "parentCommentId" TEXT,
    "dealId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Payment" (
    "id" TEXT NOT NULL,
    "paymentMethod" "public"."PaymentMethodEnum" NOT NULL,
    "paymentDoneAt" TIMESTAMP(3) NOT NULL,
    "paymentRecievedAt" TIMESTAMP(3) NOT NULL,
    "contextType" "public"."PaymentContextEnum" NOT NULL,
    "contextId" TEXT NOT NULL,
    "payerId" TEXT NOT NULL,
    "recieverId" TEXT NOT NULL,
    "creditTransactionId" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CreditRule" (
    "id" TEXT NOT NULL,
    "eventType" "public"."CreditEventTypeEnum" NOT NULL,
    "score" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "creditTransactionId" TEXT NOT NULL,

    CONSTRAINT "CreditRule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."CreditTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "CreditTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Procedure" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metadata" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,

    CONSTRAINT "Procedure_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProcedureStep" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "public"."ProcedureStepStatus" NOT NULL,
    "instructions" JSONB NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL,
    "expectedTime" INTEGER NOT NULL,
    "metadata" JSONB NOT NULL,
    "procedureId" TEXT NOT NULL,

    CONSTRAINT "ProcedureStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" TEXT NOT NULL,
    "streetName" TEXT NOT NULL,
    "cityName" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "zipcode" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Image" (
    "id" TEXT NOT NULL,
    "pathname" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dealId" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Price" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "currency" "public"."CurrencyEnum" NOT NULL,
    "dealId" TEXT,
    "paymentAmountId" TEXT NOT NULL,
    "creditTransactionId" TEXT NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Favourite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postedAt" TIMESTAMP(3) NOT NULL,
    "dealId" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,

    CONSTRAINT "Favourite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Document" (
    "id" TEXT NOT NULL,
    "filepath" TEXT NOT NULL,
    "fileformat" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "dealContractId" TEXT NOT NULL,
    "procedureStepId" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Subscriptions" (
    "id" TEXT NOT NULL,
    "plan" "public"."SubscriptionPlanEnum" NOT NULL,
    "userId" TEXT,
    "description" TEXT NOT NULL,
    "subscribedOn" TIMESTAMP(3) NOT NULL,
    "expiresOn" TIMESTAMP(3) NOT NULL,
    "metadata" JSONB NOT NULL,

    CONSTRAINT "Subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."BankAccounts" (
    "id" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "account" TEXT NOT NULL,
    "ifsc" TEXT NOT NULL,
    "metadata" JSONB NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "BankAccounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_avatarId_key" ON "public"."User"("avatarId");

-- CreateIndex
CREATE UNIQUE INDEX "User_officeAddressId_key" ON "public"."User"("officeAddressId");

-- CreateIndex
CREATE UNIQUE INDEX "User_receiverId_key" ON "public"."User"("receiverId");

-- CreateIndex
CREATE UNIQUE INDEX "Deal_dealLocationId_key" ON "public"."Deal"("dealLocationId");

-- CreateIndex
CREATE UNIQUE INDEX "Deal_creditTransactionId_key" ON "public"."Deal"("creditTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Banner_bannerImageId_key" ON "public"."Banner"("bannerImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_categoryImageId_key" ON "public"."Category"("categoryImageId");

-- CreateIndex
CREATE UNIQUE INDEX "Payment_creditTransactionId_key" ON "public"."Payment"("creditTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "CreditRule_creditTransactionId_key" ON "public"."CreditRule"("creditTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Price_dealId_key" ON "public"."Price"("dealId");

-- CreateIndex
CREATE UNIQUE INDEX "Price_paymentAmountId_key" ON "public"."Price"("paymentAmountId");

-- CreateIndex
CREATE UNIQUE INDEX "Price_creditTransactionId_key" ON "public"."Price"("creditTransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscriptions_userId_key" ON "public"."Subscriptions"("userId");

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_avatarId_fkey" FOREIGN KEY ("avatarId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."User" ADD CONSTRAINT "User_officeAddressId_fkey" FOREIGN KEY ("officeAddressId") REFERENCES "public"."Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Connections" ADD CONSTRAINT "Connections_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Connections" ADD CONSTRAINT "Connections_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Deal" ADD CONSTRAINT "Deal_dealerId_fkey" FOREIGN KEY ("dealerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Deal" ADD CONSTRAINT "Deal_signerId_fkey" FOREIGN KEY ("signerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Deal" ADD CONSTRAINT "Deal_dealLocationId_fkey" FOREIGN KEY ("dealLocationId") REFERENCES "public"."Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Deal" ADD CONSTRAINT "Deal_creditTransactionId_fkey" FOREIGN KEY ("creditTransactionId") REFERENCES "public"."CreditTransaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tag" ADD CONSTRAINT "Tag_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "public"."Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Banner" ADD CONSTRAINT "Banner_bannerImageId_fkey" FOREIGN KEY ("bannerImageId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Category" ADD CONSTRAINT "Category_categoryImageId_fkey" FOREIGN KEY ("categoryImageId") REFERENCES "public"."Image"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_commentedById_fkey" FOREIGN KEY ("commentedById") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_parentCommentId_fkey" FOREIGN KEY ("parentCommentId") REFERENCES "public"."Comment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "public"."Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payment" ADD CONSTRAINT "Payment_creditTransactionId_fkey" FOREIGN KEY ("creditTransactionId") REFERENCES "public"."CreditTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payment" ADD CONSTRAINT "Payment_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Payment" ADD CONSTRAINT "Payment_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CreditRule" ADD CONSTRAINT "CreditRule_creditTransactionId_fkey" FOREIGN KEY ("creditTransactionId") REFERENCES "public"."CreditTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."CreditTransaction" ADD CONSTRAINT "CreditTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Procedure" ADD CONSTRAINT "Procedure_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "public"."Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProcedureStep" ADD CONSTRAINT "ProcedureStep_procedureId_fkey" FOREIGN KEY ("procedureId") REFERENCES "public"."Procedure"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Image" ADD CONSTRAINT "Image_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "public"."Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Price" ADD CONSTRAINT "Price_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "public"."Deal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Price" ADD CONSTRAINT "Price_paymentAmountId_fkey" FOREIGN KEY ("paymentAmountId") REFERENCES "public"."Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Price" ADD CONSTRAINT "Price_creditTransactionId_fkey" FOREIGN KEY ("creditTransactionId") REFERENCES "public"."CreditTransaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favourite" ADD CONSTRAINT "Favourite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favourite" ADD CONSTRAINT "Favourite_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "public"."Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Favourite" ADD CONSTRAINT "Favourite_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "public"."Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Document" ADD CONSTRAINT "Document_dealContractId_fkey" FOREIGN KEY ("dealContractId") REFERENCES "public"."Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Document" ADD CONSTRAINT "Document_procedureStepId_fkey" FOREIGN KEY ("procedureStepId") REFERENCES "public"."ProcedureStep"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Subscriptions" ADD CONSTRAINT "Subscriptions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."BankAccounts" ADD CONSTRAINT "BankAccounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
