export function versionInterpolate(version) {
    return (input) => { return String(input).replace(/%VERSION%/mg, version); };
} 
