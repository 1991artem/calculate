import { Space } from "./components/script/space";
import { ActiveButton } from "./components/script/activeButton";
import { Calc } from "./components/script/calculate";

export let calc = new Calc();
const space = new Space();
space.addCalcSpace();
space.addNumSpace();
const active = new ActiveButton();
active.downButton();
active.upButton();
active.clickButton();

