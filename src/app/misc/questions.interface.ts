export interface Question {
  _id: string;
  question: string;
  resources: string[];
  createdAt: string;
}

export interface QuestionsBySubject {
  [subject: string]: Question[];
}
