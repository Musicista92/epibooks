import { Container, Row, Col } from 'react-bootstrap';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import CommentArea from './components/CommentArea';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container className="mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <Row>
                <Col md={8}>
                  <Welcome />
                  <AllTheBooks
                    searchQuery={searchQuery}
                    onBookSelect={setSelectedBook}
                    selectedBook={selectedBook}
                  />
                </Col>
                <Col md={4}>
                  {selectedBook && <CommentArea book={selectedBook} />}
                </Col>
              </Row>
            }
          />
          <Route path="/details/:asin" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <MyFooter />
    </BrowserRouter>
  );
};

export default App;