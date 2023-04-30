
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

export interface ILocationResponse {
  id: number,
  point: {
    coordinates: number[],
    crs: {
      properties: {
        type: string,
      },
      type: string,
    },
    type: string,
  }
}

export interface IEventResponse {
  id: number,
  name: string,
  description: string,
  location: ILocationResponse,
  startDateTime: string,
  endDateTime: string,
  createdAt: string,
  updatedAt: string,
  deletedAt: string,
}

export interface IEventPost {
  name: string,
  description: string,
  startDateTime?: string,
  endDateTime?: string,
  location: {
    lat: number,
    lng: number,
  }
}

export interface IMockModalContainer {
  children: React.ReactNode;
}