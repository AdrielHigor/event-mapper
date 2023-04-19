interface IConstants {
  google_maps_api_key: string,
}

const constants: IConstants = {
  google_maps_api_key: process.env.GOOGLE_MAPS_API_KEY || ''
}

export default constants;