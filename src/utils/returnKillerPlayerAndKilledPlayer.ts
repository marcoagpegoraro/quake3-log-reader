function getkillerPlayer(line: string){
    const regex = /\: [0-9 ]+[0-9:]+ (.*) killed/gm;
    const regexMatch = regex.exec(line)

    return regexMatch[1]
}

function getkilledPlayer(line){
    const regex = / killed (.*) by MOD_/gm;
    const regexMatch = regex.exec(line)

    return regexMatch[1]
}

export default function returnKillerPlayerAndKilledPlayer(line: string): [string, string] {
    const killerPlater = getkillerPlayer(line)
    const killedPlayer = getkilledPlayer(line)

    return [killerPlater, killedPlayer]
}