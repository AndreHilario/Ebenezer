-- CreateEnum
CREATE TYPE "MusicCategory" AS ENUM ('GUITAR_ONE', 'GUITAR_TWO', 'GUITAR', 'BASS', 'DRUMS', 'PIANO', 'VOICE_ONE', 'VOICE_TWO', 'VOICE_THREE');

-- CreateEnum
CREATE TYPE "MusicShift" AS ENUM ('EBD', 'CULT');

-- CreateEnum
CREATE TYPE "ScaleType" AS ENUM ('MUSIC');

-- CreateTable
CREATE TABLE "music" (
    "id" SERIAL NOT NULL,
    "member" TEXT NOT NULL,
    "music_category" "MusicCategory" NOT NULL,
    "shift" "MusicShift" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "music_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scales" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "type" "ScaleType" NOT NULL,
    "musicId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scales_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "scales" ADD CONSTRAINT "scales_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "music"("id") ON DELETE SET NULL ON UPDATE CASCADE;
