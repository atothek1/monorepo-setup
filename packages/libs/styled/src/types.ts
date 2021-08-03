export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around";

export type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";

export enum FlexDirection {
    ROW = "row",
    COL = "column",
}

export interface Colors {
    readonly colorTextLight: string;
    readonly colorTextDark: string;

    readonly backgroundColorLight: string;
    readonly backgroundColorDark: string;

    readonly borderColorLight: string;
    readonly borderColorDark: string;
}

export interface Typo {
    readonly fontFamily: string;
    readonly fontSize: string;
    readonly fontWeight: string;
    readonly fontWeightBold: string;

    readonly lineHeight: string;
}

export interface Spacing {
    readonly p1: string; // 8px
    readonly p2: string; // 16px
    readonly p3: string; // 24px
    readonly p4: string; // 32px
    readonly p5: string; // 40px
    readonly p6: string; // 48px
    readonly p7: string; // 56px
    readonly p8: string; // 64px

    readonly m1: string; // 8px
    readonly m2: string; // 16px
    readonly m3: string; // 24px
    readonly m4: string; // 32px
    readonly m5: string; // 40px
    readonly m6: string; // 48px
    readonly m7: string; // 56px
    readonly m8: string; // 64px

    // readonly s1_5: string; // 12px
}

export interface Size {
    readonly heightFixedHeader: string;
    readonly minHeightHeader: string;

    readonly heightFixedFooter: string;
    readonly minHeightFooter: string;

    readonly widthSidebarLeft: string;
    readonly widthSidebarRight: string;
}

export interface Theme {
    readonly colors: Colors;
    readonly typo: Typo;
    readonly spacing: Spacing;
    readonly size: Size;
}
