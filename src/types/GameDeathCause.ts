import { MeansOfDeath } from "../enum/MeansOfDeath"

export type GameDeathCause = {
    kills_by_means?: Map<MeansOfDeath, number>
}