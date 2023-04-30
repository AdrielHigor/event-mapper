import { mainAPI } from '../config';
import { getAllEvents, postEvent, deleteEvent } from '../Event';
import { IEventPost } from '../../utils/interfaces/base';

describe('API tests', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should fetch all events successfully', async () => {
    const events = [{ id: 1, name: 'event1' }, { id: 2, name: 'event2' }];
    const resp = { data: events };
    (mainAPI.get as jest.MockedFunction<typeof mainAPI.get>).mockResolvedValue(resp);

    const result = await getAllEvents();

    expect(mainAPI.get).toHaveBeenCalledWith('/event/all');
    expect(result).toEqual({ data: events });
  });

  it('should post an event successfully', async () => {
    const data: IEventPost = {
      name: 'new event',
      location: { lat: 0, lng: 0 },
      description: 'test'
    };

    (mainAPI.post as jest.MockedFunction<typeof mainAPI.post>).mockResolvedValue(data);

    await postEvent(data);

    expect(mainAPI.post).toHaveBeenCalledWith('/event', data);
  });

  it('should delete an event successfully', async () => {
    const id = 1;
    (mainAPI.delete as jest.MockedFunction<typeof mainAPI.delete>).mockResolvedValue(200);

    await deleteEvent(id);

    expect(mainAPI.delete).toHaveBeenCalledWith(`event/${id}`);
  });

  it('should handle fetch all events failure', async () => {
    const error = new Error('Failed to fetch all events');
    (mainAPI.get as jest.MockedFunction<typeof mainAPI.get>).mockRejectedValue(error);

    await expect(getAllEvents()).rejects.toThrow('Failed to fetch all events');
  });

  it('should handle post event failure', async () => {
    const data: IEventPost = {
      name: 'new event',
      location: { lat: 0, lng: 0 },
      description: 'test'
    };
    const error = new Error('Failed to post event');
    (mainAPI.post as jest.MockedFunction<typeof mainAPI.post>).mockRejectedValue(error);

    await expect(postEvent(data)).rejects.toThrow('Failed to post event');
  });

  it('should handle delete event failure', async () => {
    const id = 1;
    const error = new Error('Failed to delete event');
    (mainAPI.delete as jest.MockedFunction<typeof mainAPI.delete>).mockRejectedValue(error);

    await expect(deleteEvent(id)).rejects.toThrow('Failed to delete event');
  });
});
