export interface StaticType {
  status_code: number;
  message: string;
  data: Datum[];
}

export interface Datum {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  word: Word[];
}

export interface Word {
  id: number;
  key: string;
  word: string;
  created_at: Date;
  updated_at: Date;
  page_id: number;
}
