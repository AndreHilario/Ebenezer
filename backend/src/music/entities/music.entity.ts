import { MusicCategory, MusicShift } from "@prisma/client";

export class Music {
    private _member: string;
    private _music_category: MusicCategory;
    private _shift: MusicShift;

    constructor(
        member: string,
        music_category: MusicCategory,
        shift: MusicShift,
    ) {
        this._member = member;
        this._music_category = music_category;
        this._shift = shift;
    }

    get member() {
        return this._member;
    }

    get music_category() {
        return this._music_category;
    }

    get shift() {
        return this._shift;
    }
}
