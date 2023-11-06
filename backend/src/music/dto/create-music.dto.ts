import { MusicCategory, MusicShift } from "@prisma/client";
import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class CreateMusicDto {
    @IsNotEmpty()
    @IsString()
    member: string;

    @IsIn(['GUITAR_ONE', 'GUITAR_TWO', 'GUITAR', 'BASS', 'DRUMS', 'PIANO', 'VOICE_ONE', 'VOICE_TWO', 'VOICE_THREE'])
    music_category: MusicCategory;

    @IsIn(['EBD', 'CULT'])
    shift: MusicShift;
}
