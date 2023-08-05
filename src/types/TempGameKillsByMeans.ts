import { MeansOfDeath } from "../enum/MeansOfDeath"

export type TempGameKilledByMeans = {
    kills_by_means?: Map<MeansOfDeath, number>
}