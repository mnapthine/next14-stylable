/* THIS FILE IS AUTO GENERATED DO NOT MODIFY */
declare const namespace = "codeBlock3383524338";

type states = {
    "codeBlock3383524338__root": { "hasLineNumbers"?: boolean; };

};

declare const classes: {
    "root": "codeBlock3383524338__root";
    "lineNumber": "codeBlock3383524338__lineNumber";
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
