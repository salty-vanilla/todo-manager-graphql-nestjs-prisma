/*
  Warnings:

  - You are about to drop the column `Status` on the `Todo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "Status",
ADD COLUMN     "status" "TodoStatus" NOT NULL DEFAULT 'pending';
