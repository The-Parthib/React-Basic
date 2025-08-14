import { useEffect, useState } from "react";
import { useFirebase } from "../../context/FirebaseContext";
import Bookcard from "../../components/Card";

const HomePage = () => {
  const fbase = useFirebase();

  const [book, setBook] = useState([]);

  useEffect(() => {
    fbase.getBookList().then((book) => setBook(book.docs));
  }, []);

  return (
    <div className="container mt-4">
      {book.map((book) => (
       <Bookcard key={book.data().isbn} {...book.data()}/>
      ))}
    </div>
  );
};

export default HomePage;
