package com.example.web.services;

import java.util.HashMap;
import java.util.Map;

import com.example.web.models.Book;
import com.example.web.models.BookStatus;
import com.example.web.models.User;

public class UserService {
    private Map<String, User> users;

    public UserService() {
        users = new HashMap<>();
    }

    public User getUser(String userId) {
        return users.get(userId);
    }

    public void addUser(User user) {
        if (!users.containsKey(user.getId())) {
            users.put(user.getId(), user);
        }
    }

    public void addBookToUser(String userId, Book book) {
        User user = getUser(userId);
        if (user != null) {
            user.addBook(book);
        }
    }

    public void startReadingBook(String userId, String bookId) {
        User user = getUser(userId);
        if (user != null) {
            user.startReadingBook(bookId);
        }
    }

    public void finishReadingBook(String userId, String bookId) {
        User user = getUser(userId);
        if (user != null) {
            user.finishReadingBook(bookId);
        }
    }

    public BookStatus getBookStatus(String userId, String bookId) {
        User user = getUser(userId);
        if (user != null) {
            return user.getBookStatus(bookId);
        }
        return BookStatus.NONE;
    }
}
