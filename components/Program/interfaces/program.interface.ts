export interface Course {
  name: string;
  title: string;
  image: string;
  learn: string[];
  plans: Plan[];
  details: string;
  trainer: Trainer;
}

export interface Trainer {
  image: string;
  first_name: string;
}

export interface Plan {
  price: string;
  time: string;
}
