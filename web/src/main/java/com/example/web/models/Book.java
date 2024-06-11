package com.example.web.models;

import com.example.web.models.BookStatus;



public class Book {
    private String id;
    private String title;
    private String author;
    private String image;
    private String description;
    private double price;
    private int rating;
    private String categorie;
    private BookStatus status;

    public Book(String id, String title, String author, String image, String description, double price, int rating, String categorie) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.image = image;
        this.description = description;
        this.price = price;
        this.rating = rating;
        this.categorie = categorie;
        this.status = BookStatus.NONE; // Default status
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public BookStatus getStatus() {
        return status;
    }

    public void setStatus(BookStatus status) {
        this.status = status;
    }
    
    public void startReading() {
        this.status = BookStatus.READING;
    }

    public void finishReading() {
        this.status = BookStatus.FINISHED;
    }
}
