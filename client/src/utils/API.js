import axios from "axios";

export default {
  // Gets all books
  getInfo: function() {
    return axios.get("/api/items");
  },
  // Gets the book with the given id
  getInfoID: function(id) {
    return axios.get("/api/items/show/" + id);
  },
  // Deletes the book with the given id
  deleteInfo: function(id) {
    return axios.delete("/api/items/" + id);
  },
  // Saves a book to the database
  saveInfo: function(item) {
    return axios.post("/api/items/", item);
  }
};