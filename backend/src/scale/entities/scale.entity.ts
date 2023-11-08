import { ScaleType } from "@prisma/client";

export class Scale {
    private _date: Date;
    private _type: ScaleType;
    private _musicId?: number;

    constructor(
        date: Date,
        type: ScaleType,
        musicId: number
    ) {
        this._date = date;
        this._type = type;
        this._musicId = musicId;
    }

    get date() {
        return this._date;
    }

    get type() {
        return this._type;
    }

    get musicId() {
        return this._musicId;
    }
}
