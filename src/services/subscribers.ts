import { ErrorLogger } from "./logger";
import axios from "@/libs/axios";

const SubscriberService = {
  getSubscriber: async (uid: string | undefined) => {
    try {
      if (!uid) throw new Error("Missing parameter uid");
      const params = { user: uid };
      const res = await axios.get("/api/subscribers", { params });
      console.log(res);
      return res;
    } catch (error) {
      ErrorLogger(error);
    }
  },
};

export default SubscriberService;
