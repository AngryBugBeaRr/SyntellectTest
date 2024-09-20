export function debounce (fun: any, ms: number | undefined) {
    let timer: NodeJS.Timeout | undefined = undefined;

    return () => {
        clearTimeout(timer);
        timer = setTimeout(fun, ms);
    }
}
