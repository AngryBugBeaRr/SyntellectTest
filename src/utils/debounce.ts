export function debounce (fun: any, ms: number | undefined) {
    let timer: NodeJS.Timeout | undefined = undefined;

    return (...args: any) => {
        clearTimeout(timer);
        // @ts-ignore
        timer = setTimeout(() => fun.apply(this, args), ms);
    }
}
