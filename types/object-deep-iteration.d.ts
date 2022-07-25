declare module 'object-deep-iteration' {
    //function findValue(obj: any, key: string): any;
    export default function iterate(
        obj: any,
        callback: (object: any, path: string) => void
    );
}
