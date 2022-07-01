import axios from "axios";

export const moveStage = (id, currentStage) => {
   let newStage = currentStage + 1;
   axios.put(`http://localhost:3001/items/${id}`, {"progress" : newStage});
}