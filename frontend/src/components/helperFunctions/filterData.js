import axios from "axios";

export const getItems = async (progressNumber, setFunction) => {
   try {
      let { data } = await axios.get("http://localhost:3000/items")

      //console.log(data.filter((e) => e.progress === progressNumber))
      setFunction(data.filter((e) => e.progress === progressNumber))
   } catch (e) {
      console.log(e);
   }


}