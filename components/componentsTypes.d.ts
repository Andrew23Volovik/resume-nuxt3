import { Component, ConcreteComponent } from "vue";
export interface ITooltipProps {
  text: string;
  position?: string;
}

export interface ISocialData {
  component: ConcreteComponent;
  href?: string;
  tooltipText: string;
  target: "_self" | "_blank" | "_parent" | "_top";
}

export interface IMotionAnimation {
  animation?: boolean;
}

export interface ICardStyle extends IMotionAnimation {
  width?: string;
  padding?: string;
  border?: string;
  borderHover?: string;
  background?: string;
  hoverBackground?: string;
  hoverBoxShadow?: string;
}

export interface IArrayOfIcons {
  component: Component;
  name: string;
}

export interface IExperienceLayoutProps {
  title: string;
  date: string;
  descr: string;
  responsibility: string;
  technologies: string[];
}

export interface IInputProps {
  label: string;
  errorMsg?: string;
  hintMsg?: string;
  type: string;
  value?: string;
  modelValue: string;
}