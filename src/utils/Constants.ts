import env from "react-dotenv";

interface IConstants {
  google_maps_api_key: string,
}

const constants: IConstants = {
  google_maps_api_key: env.GOOGLE_MAPS_API_KEY || ''
}

export default constants;