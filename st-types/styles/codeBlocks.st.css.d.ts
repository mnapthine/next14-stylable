/* THIS FILE IS AUTO GENERATED DO NOT MODIFY */
declare const namespace = "codeBlocks951012306";

type states = {};

declare const classes: {
    "root": "codeBlocks951012306__root";
};

declare const vars: {};

declare const stVars: {
    "borderColor": string;
    "borderRadius": string;
};

declare const keyframes: {};

declare const layers: {};

declare const containers: {};

declare function st<T extends string = keyof states>(
    ctx: T | NullableString,
    s?: T extends keyof states ? states[T] | NullableString : NullableString,
    ...rest: NullableString[]
): string;

declare const style: typeof st;

declare function cssStates<T extends string = keyof states>(
    s: T extends keyof states ? states[T] : never,
    ctx?: T | string
): string;

export { 
    classes,
    vars,
    stVars,
    keyframes,
    layers,
    containers,
    namespace,
    st,
    style,
    cssStates
};

/* HELPERS */
type NullableString = string | undefined | null;
