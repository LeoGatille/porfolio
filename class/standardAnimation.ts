import { Gear } from './gear';
import * as $ from "jquery";

export class StandardAnimation {
    constructor(typedGears: Gear[], jQueryGears: JQuery<HTMLElement>[]) {
        this.typedGears = typedGears;
        this.jQueryGears = jQueryGears;
    }
    typedGears: Gear[];
    jQueryGears: JQuery<HTMLElement>[]
}