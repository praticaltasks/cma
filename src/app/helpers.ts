export function isJsonValid(data): boolean {
    try {
        JSON.parse(data);
    } catch (e) {
        return false;
    }

    return true;
}
