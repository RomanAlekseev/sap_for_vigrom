import { bootstrap } from "./framework";
import { rootComponent } from "./components/rootComponent";
import { getUsers } from "./framework";

getUsers.delay(2000).then(() => bootstrap(rootComponent));
