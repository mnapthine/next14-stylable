/* THIS FILE IS AUTO GENERATED DO NOT MODIFY */
declare const namespace = "pageContent1473258749";

type states = {
    "pageContent1473258749__root": { "hasTOC"?: boolean; };

};

declare const classes: {
    "root": "pageContent1473258749__root";
    "grid": "pageContent1473258749__grid";
    "sideBar": "pageContent1473258749__sideBar";
    "toc": "pageContent1473258749__toc";
};

declare const vars: {};

declare const stVars: {};

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
