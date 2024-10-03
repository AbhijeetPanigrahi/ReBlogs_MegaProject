import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../Components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        console.log(posts);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {/* Make sure that post cards stack nicely on smaller screens */}
        <div className="flex flex-wrap justify-center md:justify-start">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
