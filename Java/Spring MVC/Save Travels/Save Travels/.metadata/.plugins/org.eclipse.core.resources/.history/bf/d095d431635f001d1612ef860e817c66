package com.codingdojo.booksapi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.codingdojo.booksapi.models.Book;
import com.codingdojo.booksapi.services.BookService;

@Controller
public class BookController {
	@Autowired
	BookService bookService;

    @GetMapping("/books/{bookId}")
    public String index(Model model,@PathVariable("bookId")Long bookId) {
    	
    	System.out.println(bookId);
    	Book book = bookService.findBook(bookId);
    	System.out.println(book);
    	
    	model.addAttribute("book", book);
        return "show.jsp";
    }
	
        
        @RequestMapping("/books")
        public String index(Model model) {
            List<Book> books = bookService.allBooks();
            model.addAttribute("books", books);
            return "index.jsp";
        }
    }

 




