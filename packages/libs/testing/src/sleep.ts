export function sleep( ms: number ): Promise<number> {
    return new Promise( ( resolve ) => {
        return setTimeout( resolve, ms );
    } );
}
