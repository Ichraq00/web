import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../UserService';

const BookDetails = ({ userId }) => {
    const { bookId } = useParams();
    const [book, setBook] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        UserService.getBookStatus(userId, bookId)
            .then(response => setStatus(response.data))
            .catch(error => console.error(error));
    }, [userId, bookId]);

    const handleAddBook = () => {
        UserService.addBookToUser(userId, book)
            .then(() => setStatus('NONE'))
            .catch(error => console.error(error));
    };

    const handleStartReading = () => {
        UserService.startReadingBook(userId, bookId)
            .then(() => setStatus('READING'))
            .catch(error => console.error(error));
    };

    const handleFinishReading = () => {
        UserService.finishReadingBook(userId, bookId)
            .then(() => setStatus('FINISHED'))
            .catch(error => console.error(error));
    };

    return (
        <div>
            {book ? (
                <div>
                    <h1>{book.title}</h1>
                    <p>{book.description}</p>
                    {status === 'NONE' && <button onClick={handleAddBook}>Add to My List</button>}
                    {status === 'READING' && <button onClick={handleFinishReading}>Mark as Finished</button>}
                    {status === 'NONE' && <button onClick={handleStartReading}>Start Reading</button>}
                    {status === 'FINISHED' && <p>You've finished reading this book.</p>}
                </div>
            ) : (
                <p>Loading book details...</p>
            )}
        </div>
    );
};

export default BookDetails;
