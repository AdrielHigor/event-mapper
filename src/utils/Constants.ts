import env from "react-dotenv";

interface IConstants {
  google_maps_api_key: string,
  event_service_url: string,
}

const constants: IConstants = {
  google_maps_api_key: env.GOOGLE_MAPS_API_KEY || '',
  event_service_url: env.EVENT_SERVICE_URL || 'http://127.0.0.1:3002'
}

export default constants;