import Typography from "typography"
import noriega from "typography-theme-noriega"
noriega.baseFontSize="16px";
noriega.baseLineHeight= 1.5;
const typography = new Typography(noriega)
export const { scale, rhythm, options } = typography
export default typography