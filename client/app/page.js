'use client';

import AuthContext from "@/context/AuthContext";
import axios from "../utils/axios";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get('/youtube/videos');
        setVideos(response.data.items);
        console.log(response.data.items);
      } catch (error) {
        console.log('Failed to Fetch Videos: ', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [user]);

  return (
    <>
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-900">Recommended Videos</h1>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div
                key={video.id.videoId}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={video?.snippet?.thumbnails?.high?.url}
                    layout="fill"
                    objectFit="cover"
                    alt={video?.snippet?.title}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{video?.snippet?.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video?.snippet?.description}</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-300"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
