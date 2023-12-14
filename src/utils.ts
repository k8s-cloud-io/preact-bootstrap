export const classnames = (...args: any): string => {
    const classNames = [];
    if( args.length ) {
        args.forEach( (arg: any) => {
            if( typeof arg === 'string' ) {
                const filtered = arg.split(' ').map( str => str.trim() ).filter( str => str.length );
                filtered.forEach( str => classNames.push(str))
            }
            if( Array.isArray(arg) ) {
                arg.forEach( item => {
                    const filtered = classnames(item).split(' ').map( str => str.trim() ).filter( str => str.length );
                    filtered.forEach( str => classNames.push(str))
                })
            }
        })
    }

    return classNames.join(" ");
}