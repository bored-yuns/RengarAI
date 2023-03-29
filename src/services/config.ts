import { ErrorLogger } from "./logger";
import axios from "@/libs/axios";

const ConfigService = {
  getHealth: async () => {
    try {
      const res = await axios.get("/");
      console.log(res);
    } catch (error) {
      ErrorLogger(error);
    }
  },
};

export default ConfigService;
