import { ref, onMounted } from "vue";
import axios from "axios";
export default function useUsers() {
  const users = ref([]);
  onMounted(async () => {
    const response = await axios.get("https://randomuser.me/api/?results=20");
    users.value = response.data.results;
  });
  return { users };
}
