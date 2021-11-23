interface Debounce {
    ( ...args: any ): any;
    cancel(): void;
}
export function debounce( func: ( ...args: any ) => any, time: number, isDelayed = false ): Debounce {
    let timeoutId: number | undefined, context: any;

    function proxy( ...args: any ): any {
        let result: unknown;
        context = this;
        if ( !isDelayed && !!timeoutId ) {
            result = func.apply( context, args );
        }
        clearTimeout( timeoutId );
        timeoutId = setTimeout( () => {
            timeoutId = undefined;
        }, time );
        return result;
    }

    proxy.cancel = () => {
        clearTimeout( timeoutId );
        timeoutId = undefined;
    };

    return proxy;
}
