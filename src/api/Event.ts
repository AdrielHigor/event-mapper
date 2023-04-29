import { IEventPost } from "../utils/interfaces/base";
import { mainAPI } from "./config"

export const getAllEvents = async () => {
  const events = await mainAPI.get('/event/all');
  return events;
}

export const postEvent = async (data: IEventPost): Promise<void> => {
  await mainAPI.post('/event', data)
}