export interface PoemsType {
  status_code: number;
  message: string;
  data: Poem[];
}

interface CoupletPoem {
  textarea1: string;
}

interface Poem {
  id: number;
  poem_name: string;
  couplets_poem: CoupletPoem[];
  about_poems: string;
  place_poem: string;
  date_poem: string;
  new: number;
  title: string;
  created_at: string;
  updated_at: string;
}
