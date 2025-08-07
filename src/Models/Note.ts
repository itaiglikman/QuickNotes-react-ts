export interface Note {
    id: string;
    title?: string;
    content: string;
    created: Date;
    updated?: Date;
    category?: string; //?enum
    done?: boolean; 
}