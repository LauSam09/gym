import Set from './set'

export default interface Exercise {
    name: string;
    bestSet?: Set;
    sets: Set[];
}
