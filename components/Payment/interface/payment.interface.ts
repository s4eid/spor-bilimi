export interface Plan {
  price: number;
  time: string;
  plan_id: string;
}
export interface Data {
  plans: Plan[];
  image: string;
  name: string;
  category: string;
  course_id: string;
}
export interface Course {
  course: Data;
}
