export class DynamicBrowserTitleConfig {
  /**
   * @field Requered
   * @description Determines which element select to retrieve browser title
   */
  selector: string;

  /**
   * @field Optional
   * @default innerText found in <title></title> tag on index.html
   * @description Text that will be added before the text found by the selector
   */
  prefix?: string;

  /**
   * @field Optional
   * @description Text that will be added after the text found by the selector
   */
  sufix?: string;

}
