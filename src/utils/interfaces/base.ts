
export interface IEventForm {
  name?: string;
  description?: string;
  startDateTime?: string;
  endDateTime?: string;
}

export interface IEventFormValidation {
  name?: boolean;
  description?: boolean;
  startDateTime?: boolean;
  endDateTime?: boolean;
}

export interface DynamicObject {
  [key: string]: string | boolean | undefined
}