import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { useAuth } from "./useAuth";

const { user } = useAuth();

const addNewUser = async () => {
  console.log(docSnap);
};

export { addNewUser };
