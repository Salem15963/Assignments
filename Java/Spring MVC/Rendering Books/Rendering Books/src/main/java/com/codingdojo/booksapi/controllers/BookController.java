package com.codingdojo.booksapi.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.booksapi.services.BookService;

@Controller
public class BookController {
    private final BookService bookService;
    public BookController(BookService bookService){
        this.bookService = bookService;
    }
    @RequestMapping("/")
    public String index() {
        return "index.jsp";
    }
    
 

}




