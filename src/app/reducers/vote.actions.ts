import { Action } from '@ngrx/store';

export const CHANGE_MOVIE  = '[Vote] Change Movie';

export class ChangeMovie implements Action {
    readonly type = CHANGE_MOVIE;
    constructor(public title: string, public img_url: string, public rating: string, public plot: string) {}
}

export type All = ChangeMovie;