export interface UserCourse {
  id: string;
  name: string;
  price?: number;
  category: string;
  plan_id?: string;
  time?: string;
}
export interface UserAddress {
  address: string;
  city: string;
  zip_code: string;
  phone_number: string;
}
export interface UserCard {
  card_number: string;
  owner: string;
  cvv: string;
  expire_y: string;
  expire_m: string;
  threeD: boolean;
}
export interface UserCourseInfos {
  courseInfos: UserCourse;
  addressInfos: UserAddress;
}
