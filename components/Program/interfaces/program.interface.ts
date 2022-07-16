export interface Course {
  name: string;
  title: string;
  image: string;
  learn: string[];
  details: string;
  trainer: Trainer;
}

export interface Trainer {
  image: string;
  first_name: string;
}
