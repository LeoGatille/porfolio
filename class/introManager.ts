import { IntroAnimation } from './introAnimation';
export class IntroManager {
    constructor(introAnimation: IntroAnimation) {
        this.introAnim = introAnimation;
    }
    introAnim: IntroAnimation;

}