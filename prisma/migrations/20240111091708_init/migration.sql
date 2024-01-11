-- CreateTable
CREATE TABLE `posicionales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `equipo` VARCHAR(191) NOT NULL,
    `min` INTEGER NOT NULL,
    `max` INTEGER NOT NULL,
    `coste` INTEGER NOT NULL,
    `MA` INTEGER NOT NULL,
    `ST` INTEGER NOT NULL,
    `AG` INTEGER NOT NULL,
    `PA` INTEGER NOT NULL,
    `AV` INTEGER NOT NULL,
    `habilidades` VARCHAR(191) NOT NULL,
    `Pri` VARCHAR(191) NOT NULL,
    `Ass` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;