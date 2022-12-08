import { initializeApp } from "firebase/app";

export class CloudService {
  constructor() {
    this.config = {
      apiKey: process.env.API_KEY,
      authDomain: "online-cinema-76641.firebaseapp.com",
      projectId: "online-cinema-76641",
      storageBucket: "online-cinema-76641.appspot.com",
      messagingSenderId: "147834223966",
      appId: process.env.APP_ID,
      measurementId: "G-R9520RLKNH",
    };

    this.app = initializeApp(this.config);
  }
}

export const cloudService = new CloudService();
