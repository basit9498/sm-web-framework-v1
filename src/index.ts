import axios from "axios";
import { Collection } from "./model/Collection";
import { User, UserProps } from "./model/User";
import { UserEdit } from "./views/UserEdit";
import { UserForm } from "./views/UserForm";
import { UserList } from "./views/UserList";

//after adding  Collection View
const users = new Collection(
  "http://localhost:3000/users",
  (json: UserProps) => {
    return User.buildUser(json);
  }
);
users.on("change", () => {
  console.log("as");
  const root = document.getElementById("root");
  if (root) {
    new UserList(root, users).render();
  }
});
users.fetch();

// const user = User.buildUser({ name: "new User model", age: 54 });
// const root = document.getElementById("root");
// // const userForm = new UserForm(document.getElementById("root"), user);
// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit);
// } else {
//   throw new Error("Root is Null!");
// }

// //after adding  userShow and User Edit class
// const user = User.buildUser({ name: "new User model", age: 54 });
// const root = document.getElementById("root");
// // const userForm = new UserForm(document.getElementById("root"), user);
// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   console.log(userEdit);
// } else {
//   throw new Error("Root is Null!");
// }

// //after adding View UserForm
// // const userForm = new UserForm(document.getElementById("root"));
// const user = User.buildUser({ name: "new User model", age: 54 });
// const root = document.getElementById("root");
// // const userForm = new UserForm(document.getElementById("root"), user);
// if (root) {
//   const userForm = new UserForm(root, user);
//   userForm.render();
// } else {
//   throw new Error("Root is Null!");
// }

// //  After Colection Geneeric Model inside in User
// const collection = User.buildUserCollection();
// collection.on("change", () => {
//   console.log("All Data", collection);
// });
// collection.fetch();

// After Colection Geneeric Model
// const collection = new Collection<User, UserProps>(
//   "http://localhost:3000/users",
//   (json: UserProps) => User.buildUser(json)
// );
// collection.on("change", () => {
//   console.log("All Data", collection);
// });
// collection.fetch();

// // After Colection Model
// const collection = new Collection("http://localhost:3000/users");
// collection.on("change", () => {
//   console.log("All Data", collection);
// });
// collection.fetch();

//After Model Class

// const user = User.buildUser({ id: 2 });

// user.on("change", () => {
//   console.log("change some thing", user);
// });
// user.on("save", () => {
//   console.log("save some thing", user);
// });
// user.fetch();

// console.log(user.isAdmin());

// ----------------------------------------------------------------
// const user = new User({ id: 1, name: "Update ", age: 34 });
// //refrence
// // const on=user.on
// // on("change",()=>{})

// //0r
// user.on("save", () => {
//   console.log("change some thing", user);
// });
// // user.trigger("change");
// // console.log(user.get("name"));
// // user.set({ name: "update" });
// user.save();

//need

//

// const user = new User({ name: "ali", age: 222 });
// user.attribute.get("id")
// user.attribute.get("name")
// user.attribute.get("age")

// user.sync.save()

///---------------------update after
// const user = new User({ name: "ali", age: 222 });

// //here is litter bit roboust
// user.events.on("change", () => {
//   console.log("Enventing");
// });
// user.events.trigger("change");

// const user = new User({ id: 1 });
// user.set({ name: "New User" });
// user.set({ age: 12 });
// user.save();
// user.fetch();

// -------------------------------------------------------

// axios.post("http://localhost:3000/users", {
//   name: "abc",
//   age: 12,
// });
// axios.get("http://localhost:3000/users/1");

// -------------------------------------------------------
// import { User } from "./User";

// const user = new User({ name: "Abdul Basit", age: 26 });
// console.log(user.get("name"));
// console.log(user.get("age"));

// // user.set({ name: "Abdul Basit Khan" }); //question need to update one or two not all at once
// // user.set({ name: "Abdul Basit Khan" });
// // console.log(user.get("name"));
// // console.log(user.get("age"));

// user.on("change", () => {
//   console.log("change 1");
// });
// user.on("change", () => {
//   console.log("change 2");
// });
// user.on("click", () => {
//   console.log("change 3");
// });

// user.trigger("click");

// console.log(user);
