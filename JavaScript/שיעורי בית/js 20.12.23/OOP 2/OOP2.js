import { TimeUtility } from "./timeUtility.js";
const output = new TimeUtility(`output`);
const clock = new TimeUtility(`clock`);
const watch = new TimeUtility(`watch`);

output.createTimer();
clock.createTimer();
watch.createTimer();