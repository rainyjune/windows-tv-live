import React from "react";
import {
    Link,
    useLoaderData,
  } from "react-router-dom";

export default function() {
  const categories = useLoaderData() as any;

  return (
    <div>
      {
        categories.map((category: any) => {
          console.log(`category:`, JSON.stringify(category.id));
          
          return (
            <div key={category.id}>
              <h2>{category.title}</h2>
              {
                category.channels.map(channel=>{
                  return (
                    <div key={channel.videoURL}>
                      <Link to={`/player?videoURL=${encodeURIComponent(channel.videoURL)}`}>{channel.title}</Link>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }
    </div>
  )
}
