import { colors } from "./colors";
import { sizeType } from "./sizes";
import {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from "styled-components";

export type Variant = "primary" | "secondary";

export type ThemedCssType = FlattenInterpolation<ThemeProps<DefaultTheme>>;

export interface StyledPropsWithCss {
  readonly styles?: ThemedCssType;
}

export const theme: DefaultTheme = {
  colors,
  sizeType
};
