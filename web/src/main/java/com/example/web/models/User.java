package com.example.web.models;
import java.util.HashMap;
import java.util.Map;

public class User {
    private String id;
    private String name;
    private Map<String, Book> bookList;

    public User(String id, String name) {
        this.id = id;
        this.name = name;
        this.bookList = new HashMap<>();
    }

    public void addBook(Book book) {
        if (!bookList.containsKey(book.getId())) {
            bookList.put(book.getId(), book);
        }
    }

    public void startReadingBook(String bookId) {
        if (bookList.containsKey(bookId)) {
            bookList.get(bookId).startReading();
        }
    }

    public void finishReadingBook(String bookId) {
        if (bookList.containsKey(bookId)) {
            bookList.get(bookId).finishReading();
        }
    }

    public BookStatus getBookStatus(String bookId) {
        if (bookList.containsKey(bookId)) {
            return bookList.get(bookId).getStatus();
        }
        return BookStatus.NONE;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Map<String, Book> getBookList() {
        return bookList;
    }

    public void setBookList(Map<String, Book> bookList) {
        this.bookList = bookList;
    }
}
