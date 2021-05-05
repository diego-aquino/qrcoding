declare module 'save-svg-as-png' {
  export const saveSvgAsPng: (
    svgElement: SVGSVGElement,
    fileName: string,
    scale: any,
  ) => Promise<void>;
}
