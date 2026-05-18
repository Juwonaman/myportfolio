/** Union Pacific roles — kept in sync; primary source is workExp.js positions array. */
import workEx from "./workExp";

const unionEntry = workEx.find((job) => job.company === "Union Pacific Railroad");
export default unionEntry?.positions ?? [];
