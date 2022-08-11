declare module 'setval' {
    //function findValue(obj: any, key: string): any;
    export default function setval(
        obj: any,
        path: string,
        value: any,
        separator: string
    ): void;
}
