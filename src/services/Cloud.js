import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-be741.firebaseapp.com",
      projectId: "online-cinema-be741",
      storageBucket: "online-cinema-be741.appspot.com",
      messagingSenderId: "90613413024",
      appId: process.env.APP_ID,
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
