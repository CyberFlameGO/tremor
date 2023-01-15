import React from "react";

import "tippy.js/dist/tippy.css";
import Tooltip from "@tippyjs/react";

import {
  BaseColors,
  Sizes,
  classNames,
  isBaseColor,
  isValidSize,
  parseMarginTop,
} from "lib";
import { Color, IconVariant, MarginTop, Size } from "../../../lib";
import { getIconColors, iconSizes, shape, wrapperProportions } from "./styles";

export const IconVariants: { [key: string]: IconVariant } = {
  Simple: "simple",
  Light: "light",
  Shadow: "shadow",
  Solid: "solid",
  Outlined: "outlined",
};

const isValidIconVariant = (iconVariant: IconVariant): boolean => {
  return Object.values(IconVariants).includes(iconVariant);
};

export interface IconProps {
  icon: React.ElementType;
  variant?: IconVariant;
  tooltip?: string;
  size?: Size;
  color?: Color;
  marginTop?: MarginTop;
}

const Icon = ({
  icon,
  variant = IconVariants.Simple,
  tooltip,
  size = Sizes.SM,
  color = BaseColors.Blue,
  marginTop = "mt-0",
}: IconProps) => {
  const Icon = icon;

  const iconSize = isValidSize(size) ? size : Sizes.SM;
  const iconVariant = isValidIconVariant(variant)
    ? variant
    : IconVariants.Simple;
  const iconColorStyles = isBaseColor(color)
    ? getIconColors(variant, color)
    : getIconColors(variant, BaseColors.Blue);

  return (
    <span className={classNames("tremor-base", parseMarginTop(marginTop))}>
      <Tooltip
        content={tooltip}
        className={classNames(tooltip ? "" : "tr-hidden")}
      >
        <span
          className={classNames(
            "tr-inline-flex tr-flex-shrink-0 tr-items-center",
            iconColorStyles.bgColor,
            iconColorStyles.textColor,
            iconColorStyles.borderColor,
            iconColorStyles.ringColor,
            shape[iconVariant].rounded,
            shape[iconVariant].border,
            shape[iconVariant].shadow,
            shape[iconVariant].ring,
            wrapperProportions[iconSize].paddingLeft,
            wrapperProportions[iconSize].paddingRight,
            wrapperProportions[iconSize].paddingTop,
            wrapperProportions[iconSize].paddingBottom
          )}
        >
          <Icon
            className={classNames(
              iconSizes[iconSize].height,
              iconSizes[iconSize].width
            )}
          />
        </span>
      </Tooltip>
    </span>
  );
};

export default Icon;
