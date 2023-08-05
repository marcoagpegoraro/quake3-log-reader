import { MeansOfDeath } from "../enum/MeansOfDeath"

export type GameKillsByMeans = {
    kills_by_means?: Record<MeansOfDeath, number>
}