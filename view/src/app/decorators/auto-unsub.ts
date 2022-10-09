import { Subscription } from "rxjs";

/**
 * Decoratore che permette di chiamare l'unsubscribe
 * alla distruzione di un oggetto. Attualmente funziona
 * solo se il componente memorizza la Subscription in 
 * una proprietà di primo livello (non vengono fatte 
 * ricerche ricorsive).
 * @returns 
 */
export function AutoUnsub() {
    return function (constructor: any) {
        const orig = (constructor.prototype.ngOnDestroy && constructor.prototype.ngOnDestroy.name === 'ngOnDestroy') ?  constructor.prototype.ngOnDestroy : undefined;
        constructor.prototype.ngOnDestroy = function () {
            const subscriptions = this["subscriptions$"];
            if (subscriptions) {
                subscriptions.forEach((sub: Subscription) => {
                    sub.unsubscribe();
                });
            }
            if (orig) {
                orig.apply()
            }

        }
    }
}