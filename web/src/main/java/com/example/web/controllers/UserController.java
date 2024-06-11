package com.example.web.controllers;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.web.models.Book;
import com.example.web.models.BookStatus;
import com.example.web.services.UserService;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/{userId}/books")
    public void addBookToUser(@PathVariable String userId, @RequestBody Book book) {
        userService.addBookToUser(userId, book);
    }

    @PostMapping("/{userId}/books/{bookId}/start")
    public void startReadingBook(@PathVariable String userId, @PathVariable String bookId) {
        userService.startReadingBook(userId, bookId);
    }

    @PostMapping("/{userId}/books/{bookId}/finish")
    public void finishReadingBook(@PathVariable String userId, @PathVariable String bookId) {
        userService.finishReadingBook(userId, bookId);
    }

    @GetMapping("/{userId}/books/{bookId}/status")
    public BookStatus getBookStatus(@PathVariable String userId, @PathVariable String bookId) {
        return userService.getBookStatus(userId, bookId);
    }

    @GetMapping("/{userId}/books")
    public Map<String, Book> getUserBooks(@PathVariable String userId) {
        User user = (User) userService.getUser(userId);
        return user != null ? ((com.example.web.models.User) user).getBookList() : null;
    }
}
