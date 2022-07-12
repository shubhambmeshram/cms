import React from "react";
import axios from "axios";

function UserData() {
  const [post, setPost] = React.useState([]);
  //   const [image, setImage] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  }, []);

  if (!post) return null;

  return (
    <>
      <div className="container py-5">
        <div className="row">
          {post.map((post) => (
            <>
              <div className="col-md-4">
                <div class="card">
                  <img src={post.url} class="card-img-top" alt="..."  loading="lazy"/>
                  <div class="card-body">
                    <h5 class="card-title">{post.title}</h5>
                    <p class="card-text">{post.id}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
export default UserData;
