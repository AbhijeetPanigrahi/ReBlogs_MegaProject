// import React, { useEffect, useState } from "react";
// import appwriteService from "../appwrite/config";
// import { Container, PostCard } from "../Components";

// function Home() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     appwriteService.getPosts().then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//       }
//     });
//   }, []);

//   if (posts.length === 0) {
//     return (
//       // <div className="w-full py-8 mt-4 text-center">
//       //   <Container>
//       //     <div className="flex flex-wrap">
//       //       <div className="p-2 w-full">
//       //         <h1 className="text-2xl font-bold hover:text-gray-500">
//       //           Login to read posts
//       //         </h1>
//       //       </div>
//       //     </div>
//       //   </Container>
//       // </div>
//       <div className="w-full py-8 mt-4">
//         <Container>
//           <div className="flex flex-wrap items-center">
//             {/* Left Column - Text Content */}
//             <div className="w-full md:w-1/2 p-6">
//               <h1 className="text-4xl font-bold text-black mb-4">
//                 Write Your Journey, Read the World
//               </h1>
//               <p className="text-lg mb-6">
//                 Express your unique voice, engage with a community of curious
//                 minds, and inspire change with every post you write.
//               </p>
//               <button className="bg-teal-700 text-white text-2xl px-6 py-2 rounded hover:bg-teal-900 transition">
//                 Write
//               </button>
//             </div>

//             {/* Right Column - Image */}
//             <div className="w-full md:w-1/2 p-6">
//               <img
//                 src="https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt="Desk with coffee and notes"
//                 className="rounded-lg shadow-md"
//               />
//             </div>
//           </div>
//         </Container>
//       </div>
//     );
//   }
//   return (
//     <div className="w-full py-8">
//       <Container>
//         <div className="flex flex-wrap">
//           {posts.map((post) => (
//             <div key={post.$id} className="p-2 w-1/4">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../Components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="w-full py-8">
      {/* Landing Page Section */}
      <div className="w-full py-8 mt-4">
        <Container>
          <div className="flex flex-wrap items-center">
            {/* Left Column - Text Content */}
            <div className="w-full md:w-1/2 p-6">
              <h1 className="text-4xl font-bold text-black mb-4">
                Write Your Journey, Read the World
              </h1>
              <p className="text-lg mb-6">
                Express your unique voice, engage with a community of curious
                minds, and inspire change with every post you write.
              </p>
              <button className="bg-teal-700 text-white text-2xl px-6 py-2 rounded hover:bg-teal-900 transition">
                Write
              </button>
            </div>

            {/* Right Column - Image */}
            <div className="w-full md:w-1/2 p-6">
              <img
                src="https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Desk with coffee and notes"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Post Cards Section */}
      {posts.length > 0 && (
        <div className="w-full py-8">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {posts.map((post) => (
                <div key={post.$id}>
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

export default Home;
