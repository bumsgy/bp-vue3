export const profile = import.meta.env.VITE_ACTIVE_PROFILE;

// let HOST = '//192.168.1.12:8083';
let HOST = import.meta.env.VITE_APP_API_HOST + ':' + import.meta.env.VITE_APP_API_PORT;
console.log(`HOST : ${HOST}`);
export { HOST };
