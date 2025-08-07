export interface Note {
    id: string;
    title?: string;
    content: string;
    created: string;
    updated?: string;
    // created: Date;
    // updated?: Date;
    category?: CategoryType;
    done?: boolean;
}

export type CategoryType =
  | 'Work'
  | 'Personal'
  | 'Ideas'
  | 'Urgent'
  | 'Completed'
  | 'Planning'
  | 'Research'
  | 'Low Priority';

export const categoriesColor: Record<CategoryType, string> = {
  Work: '#4C6EF5',
  Personal: '#20C997',
  Ideas: '#FFD43B',
  Urgent: '#FA5252',
  Completed: '#40C057',
  Planning: '#D6336C',
  Research: '#7048E8',
  'Low Priority': '#CED4DA',
};
