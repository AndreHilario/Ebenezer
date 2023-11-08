import { ScaleType } from "@prisma/client"
import { IsISO8601, IsIn, IsInt, IsNotEmpty } from "class-validator";

export class CreateScaleDto {
    @IsNotEmpty()
    @IsISO8601()
    date: Date;

    @IsIn(['MUSIC'])
    type: ScaleType;

    @IsInt()
    musicId?: number;
}
