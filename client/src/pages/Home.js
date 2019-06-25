import React, { Component } from 'react';
// import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron"
// import "./style.css";

class Homepage extends Component {
    render() {
        return (
            <Jumbotron >
                <div>
                    <p>Home page in Pages</p>
                </div>
            </Jumbotron>


        )
    }
}
export default Homepage;


// import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
// // import API from "../utils/API";
// // import DeleteBtn from "../components/DeleteBtn";
// import { Col, Row, Container } from "../components/Grid";
// // import { List, ListItem } from "../components/List";
// // import { Input, TextArea, FormBtn } from "../components/Form";

// class Homepage extends Component {
//   state = {
//     furFriends: []
//   };

//   componentDidMount() {
//     this.loadBooks();
//   }

//   loadBooks = () => {
//       console.log("test")
//     // API.getBooks()
//     //   .then(res => this.setState({ books: res.data }))
//     //   .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>What Books Should I Read?</h1>
//             </Jumbotron>
//             {/* <form>
//               <Input name="title" placeholder="Title (required)" />
//               <Input name="author" placeholder="Author (required)" />
//               <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
//               <FormBtn>Submit Book</FormBtn>
//             </form> */}
//           </Col>
//           {/* <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Books On My List</h1>
//             </Jumbotron>
//             {this.state.books.length ? (
//               <List>
//                 {this.state.books.map(book => (
//                   <ListItem key={book._id}>
//                     <a href={"/books/" + book._id}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </a>
//                     <DeleteBtn />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col> */}
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Homepage;
