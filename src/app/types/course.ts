export interface ICourse {
    [x: string]: any;
    id: number,
    title: string,
    topRated: boolean,
    creationDate: Date,
    duration: number,
    description: string,
}