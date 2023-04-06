import { ErrorLogger, ErrorProps } from "./logger";

import axios from "@/libs/axios";

interface IVideo {
  video_id: string;
  title: string;
  summary: string;
  comment_summary: string;
  like_counts: number;
  hits: number;
}

interface IAnalysis {
  hashtag: string;
  generated_title: string;
  generated_summary: string;
  generated_script: string;
}

export interface IVideoDetail {
  video: IVideo;
  analysis: IAnalysis;
}

type VideoDetailProps = {
  user: string | undefined;
  video_id: string | string[] | undefined;
};

const VideoService = {
  getVideoDetail: async ({
    user,
    video_id,
  }: VideoDetailProps): Promise<IVideoDetail | ErrorProps> => {
    try {
      if (!user) throw new Error("Missing parameter uid");
      if (!video_id) throw new Error("Missing parameter video_id");
      const params = { user, video_id };
      const res = await axios.get("/api/videos/detail", { params });
      return res.data;
    } catch (error: ErrorProps) {
      ErrorLogger(error);
      return error;
    }
  },
};

export default VideoService;
