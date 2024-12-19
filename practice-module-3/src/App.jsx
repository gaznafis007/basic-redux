import { useForm } from "react-hook-form";
import {
  useGetPostsQuery,
  useLazyGetCommentsByPostIdQuery,
  usePutPostMutation,
} from "./redux/api/baseApi";

function App() {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [trigger, { data: comments }] =
    useLazyGetCommentsByPostIdQuery();
  const handleGetComments = (id) => {
    trigger(id);
  };
  const [setPost, {data:res, isPostLoading}] = usePutPostMutation()
  const {register, handleSubmit} = useForm();
  const handlePosts = async (data) =>{
    const response = await setPost(data);
    console.log(response);
    if(response){
      console.log(res)
    }
  }
  if (isLoading) {
    return (
      <h2 className="text-green-600 text-center text-4xl font-semibold">
        Loading...
      </h2>
    );
  }
  return (
    <>
      <h2 className="text-purple-500 text-center text-4xl font-semibold">
        Learn Redux with API fetch
      </h2>
      <h2 className="mt-6 text-3xl text-violet-400 text-center font-bold">
        Total posts: {posts.length}
      </h2>
      <div className="grid grid-cols-4 gap-2 mx-4 my-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-zinc-900 rounded-md p-3">
            <p className="text-purple-600 font-semibold">{post.title}</p>
            <p className="text-white my-2">{post.body}</p>
            {comments ? (
              <p className="my-4 text-white">{comments.length} comments</p>
            ) : (
              <button
                onClick={() => handleGetComments(post.id)}
                className="bg-purple-600 py-2 px-4 rounded-md text-white mt-3 capitalize"
              >
                get comment
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="my-6">
        <h2 className="text-purple-600 text-3xl font-bold text-center">Mutation practice</h2>
        <form className="p-4" onSubmit={handleSubmit(handlePosts)}>
          <div className="my-2">
            <label className="font-semibold text-xl text-purple-600 capitalize">name</label>
            <input type="text" {...register('name')} className="w-full rounded-md border focus:border-2 focus:border-purple-600 border-purple-600 px-2 py-3 mt-1" />
          </div>
          <div className="my-2">
            <label className="font-semibold text-xl text-purple-600 capitalize">email</label>
            <input type="text" {...register('email')} className="w-full rounded-md border focus:border-2 focus:border-purple-600 border-purple-600 px-2 py-3 mt-1" />
          </div>
          <div className="my-2">
            <label className="font-semibold text-xl text-purple-600 capitalize">post</label>
            <textarea type="text" {...register('post')} className="w-full rounded-md border focus:border-2 focus:border-purple-600 border-purple-600 px-2 py-3 mt-1"></textarea>
          </div>
          <div className="my-2">
            <input type="submit" value={ isPostLoading ? 'loading' : 'post'} className="bg-purple-600 px-3 py-2 rounded-md text-white" />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
