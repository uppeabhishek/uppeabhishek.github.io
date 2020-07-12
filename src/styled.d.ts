import "styled-components/macro";

declare module "styled-components" {
    export interface DefaultTheme {
        primaryBackgroundColor: string;
        primaryColor: string;
        primaryTextColor: string;
    }
}
