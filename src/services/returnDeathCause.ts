
export default function returnDeathCause(line: string): string {
    return line.match(/\b(\w+)$/)[0] //Last word of line
}