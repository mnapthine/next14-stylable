/* THIS FILE IS AUTO GENERATED DO NOT MODIFY */
declare const namespace = "PageLayout3950016490";

type states = {
    "PageLayout3950016490__main": { "hasTOC"?: boolean; };

};

declare const classes: {
    "root": "PageLayout3950016490__root";
    "grid": "PageLayout3950016490__grid";
    "sideBar": "PageLayout3950016490__sideBar";
    "nav": "PageLayout3950016490__nav";
    "main": "PageLayout3950016490__main";
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
