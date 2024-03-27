/* THIS FILE IS AUTO GENERATED DO NOT MODIFY */
declare const namespace = "ReactLiveBlock1040911510";

type states = {
    "ReactLiveBlock1040911510__root": { "twoColumn"?: boolean; "editable"?: boolean; };

};

declare const classes: {
    "root": "ReactLiveBlock1040911510__root";
    "codeBlock": "ReactLiveBlock1040911510__codeBlock";
    "preview": "ReactLiveBlock1040911510__preview";
    "editableNotice": "ReactLiveBlock1040911510__editableNotice";
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
