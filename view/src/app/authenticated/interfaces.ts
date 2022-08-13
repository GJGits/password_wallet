/* eslint-disable subscribe-extends */

import { Subscription } from "rxjs";
import { AutoUnsub } from "../decorators/auto-unsub";

@AutoUnsub()
export class WithSubscription {
    subscriptions$: Subscription[] = [];
}