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