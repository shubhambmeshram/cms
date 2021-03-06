import React from "react";
import axios from "axios";

function UserData() {
  const [post, setPost] = React.useState([]);
  //   const [image, setImage] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
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
                  <img src="https://dummyimage.com/600x400/000/fff" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{post.name}</h5>
                    <h6 class="card-text">{post.email}</h6>
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
