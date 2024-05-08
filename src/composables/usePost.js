import { ref, onMounted } from "vue";
import axios from "axios";
import md5 from "md5"; 

export default function usePost() {
  const posts = ref([]);
  const isLoaded = ref(false);

  onMounted(async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    const imageResponse = await axios.get("https://picsum.photos/v2/list?page=2&limit=100");

    posts.value = response.data.map((post, index) => ({
      ...post,
      imageUrl: imageResponse.data[index].download_url,
      likes: Math.floor(Math.random() * 1000), // Genera un número aleatorio de likes entre 0 y 1000
      followers: Math.floor(Math.random() * 10000), // Genera un número aleatorio de seguidores entre 0 y 10000
      nickname: `user_${post.userId}`, // Genera un nickname basado en el userId
      avatar: `https://www.gravatar.com/avatar/${md5(`user_${post.userId}`)}?d=identicon`, // Genera un avatar basado en el userId
    }));

    isLoaded.value = true;
    console.log(posts.value);
  });

  return { posts, isLoaded };
}
