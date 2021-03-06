export const authEndpoint = "https://accounts.spotify.com/authorize";

// Replace with your app's client ID, redirect URI and desired scopes
export const clientId = "39f3b81250ef4f239e05a3c75103c466";
export const redirectUri = "https://moodify-sable.vercel.app/redirect";
export const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-modify-playback-state",
  "user-read-recently-played",
  "playlist-read",
  "playlist-read-private",
];
