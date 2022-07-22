export interface Plan {
  price: number;
  time: string;
}
export interface Data {
  plans: Plan[];
  image: string;
  name: string;
}
export interface Course {
  course: Data;
}
