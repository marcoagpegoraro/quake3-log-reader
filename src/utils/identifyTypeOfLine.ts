import { TypeOfLine } from "../enum/TypeOfLine";


export default function identifyTypeOfLine(line: string): TypeOfLine {
    switch (true) {
        case line.indexOf("InitGame") != 1:
            return TypeOfLine.INIT_GAME
        case line.indexOf("ShutdownGame") == 1:
            return TypeOfLine.SHUT_DOWN_GAME
        default:
            return TypeOfLine.UNKNOW_LINE
    }
}