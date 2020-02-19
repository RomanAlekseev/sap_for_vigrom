import { bootstrap } from "./framework";
import { rootComponent } from "./components/rootComponent";
import { util } from "./framework";

util.delay(2000).then(() => bootstrap(rootComponent));
