import { IEventPost } from "../utils/interfaces/base";
import { mainAPI } from "./config"

export const getAllEvents = async () => {
  try {
    const events = await mainAPI.get('/event/all');
    return events;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export const postEvent = async (data: IEventPost): Promise<void> => {
  try {
    await mainAPI.post('/event', data);
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export const deleteEvent = async (id: number): Promise<void> => {
  try {
    await mainAPI.delete(`event/${id}`);
  } catch (error) {
    console.error(error);

    throw error;
  }
}