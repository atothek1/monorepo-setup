import { Theme } from "./types";

const minUnit = 8;

export const darkBlue = "#094074";
export const blue = "#3C6997";
export const lightBlue = "#5ADBFF";
export const lightYellow = "#FFDD4A";
export const orange = "#FE9000";

export const red = "#E2272B";
export const green = "#79A356";

export const black = "#222222";
export const darkGray = "#404040";
export const darkGray1 = "#696969";
export const gray = "#808080";
export const lightGray = "#ADADAD";
export const lightGray1 = "#A6A6A6";
export const white = "#F4F4F4";

export const theme: Theme = {
    colors: {
        colorTextLight: white,
        colorTextDark: black,

        backgroundColorDark: darkGray,
        backgroundColorLight: lightGray,

        borderColorDark: darkGray,
        borderColorLight: darkGray1,
    },
    typo: {
        fontFamily: "Roboto",
        fontSize: "1.6rem",
        fontWeight: "400",
        fontWeightBold: "700",
        lineHeight: "1.5",
    },
    spacing: {
        p1: `${ minUnit / 10 }rem`,
        p2: `${ ( minUnit / 10 ) * 2 }rem`,
        p3: `${ ( minUnit / 10 ) * 3 }rem`,
        p4: `${ ( minUnit / 10 ) * 4 }rem`,
        p5: `${ ( minUnit / 10 ) * 5 }rem`,
        p6: `${ ( minUnit / 10 ) * 6 }rem`,
        p7: `${ ( minUnit / 10 ) * 7 }rem`,
        p8: `${ ( minUnit / 10 ) * 8 }rem`,

        m1: `${ minUnit / 10 }rem`,
        m2: `${ ( minUnit / 10 ) * 2 }rem`,
        m3: `${ ( minUnit / 10 ) * 3 }rem`,
        m4: `${ ( minUnit / 10 ) * 4 }rem`,
        m5: `${ ( minUnit / 10 ) * 5 }rem`,
        m6: `${ ( minUnit / 10 ) * 6 }rem`,
        m7: `${ ( minUnit / 10 ) * 7 }rem`,
        m8: `${ ( minUnit / 10 ) * 8 }rem`,
    },
    size: {
        heightFixedHeader: `${ ( minUnit / 10 ) * 6 }rem`,
        heightFixedFooter: `${ ( minUnit / 10 ) * 6 }rem`,
        minHeightHeader: `${ ( minUnit / 10 ) * 7 }rem`,
        minHeightFooter: `${ ( minUnit / 10 ) * 7 }rem`,
        widthSidebarLeft: `${ ( minUnit / 10 ) * 30 }rem`,
        widthSidebarRight: `${ ( minUnit / 10 ) * 30 }rem`,
    },
};
