import { bootstrap } from "framework";
import { rootComponent } from "./components/rootComponent";
import { util } from "framework";

util.delay(1000).then(() => bootstrap(rootComponent));
