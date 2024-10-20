/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `data_pembayaran` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `data_pembayaran_id_user_key` ON `data_pembayaran`;

-- CreateIndex
CREATE UNIQUE INDEX `data_pembayaran_id_key` ON `data_pembayaran`(`id`);
