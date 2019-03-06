//Problems with @types/node
declare var process: {
  env: {
    API: string;
  };
};

//Set endpoint depending on providede NODE_ENV variable in webpack
let api: string = process.env.API;

//Export API_SETTINGS for consumption in actions
export const API_SETTINGS: {
  API_URL: string;
} = {
  API_URL: api
};
