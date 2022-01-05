declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module '*.pdf'

declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}