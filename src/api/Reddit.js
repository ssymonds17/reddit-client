export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  let response = await fetch(`${API_ROOT}/${subreddit}.json`);
  let json = await response.json();
  // Set relevant state to posts
  return json.data.children.map((post) => post.data);
};
