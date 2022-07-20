export interface Quiz {
  goal: string;
  interest_body: string;
  weak: string[];
  height: number;
  weight: number;
  target_weight: number;
  age: number;
  level: number;
}
export interface Goal {
  goal: string;
}
export interface Interest {
  interest_body: string;
}
export interface BodyType {
  body_type: string;
}

export interface Weak {
  weak: string[];
}

export interface HeightWeight {
  height?: number;
  weight?: number;
  target_weight?: number;
  age?: number;
}
export interface Level {
  level: number;
}
