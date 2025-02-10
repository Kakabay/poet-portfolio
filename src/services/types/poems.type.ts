import { CoupletsPoem } from "./pin-poems.type";

export interface PoemsType {
  status_code: number;
  message: string;
  data: Poem[];
}

export interface Poem {
  id: number;
  poem_name: string;
  couplets_poem: CoupletsPoem[];
  about_poems: string;
  place_poem: string;
  date_poem: Date;
  new: number;
  title: string;
  created_at: Date;
  updated_at: Date;
}
