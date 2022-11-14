import { reactive } from "vue";

const session = reactive({
  user: null as User | null,
});

export function login(name: string, email: string, password: string) {
  session.user = { name, email };
}

export interface User {
  name: string;
  email: string;
}

export default session;
