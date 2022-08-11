declare module 'color-harmony' {
    export class Harmonizer {
        constructor();
        shades(_color: string, _count: number): string[];
        tints(_color: string, _count: number): string[];
    }
}
