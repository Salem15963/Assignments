package com.codingdojo.booksapi.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.codingdojo.booksapi.models.Expense;
import com.codingdojo.booksapi.services.ExpenseService;

@Controller
public class ExpenseController {
	@Autowired
	private ExpenseService expenseService;

    @GetMapping("/expenses/{Id}")
    public String index(Model model,@PathVariable("Id")Long Id) {
    	
    	System.out.println(Id);
    	Expense expense = expenseService.findExpense(Id);
    	System.out.println(expense);
    	
    	model.addAttribute("expense", expense);
        return "show.jsp";
    }
	
        
        @GetMapping("/expenses")
        public String index(Model model) {
            List<Expense> expenses = expenseService.allExpenses();
            model.addAttribute("expenses", expenses);
            return "index.jsp";
        }
        
        @GetMapping("/expenses/add")
        public String add(Model model,@ModelAttribute("expense")Expense expense) {
            List<Expense> expenses = expenseService.allExpenses();
            model.addAttribute("expenses", expenses);
            return "add.jsp";
        }

        @PostMapping("/create")
        public String create(@Valid @ModelAttribute("expense")Expense expense,BindingResult bindingResult ) 
           
        {
        	   if (bindingResult.hasErrors()) {
                   return "add.jsp"; }
        	   
            expenseService.createExpense(expense);
            return "redirect:/expenses";
        }
        
        @GetMapping("/expense/{id}")
        public String showExpense(@PathVariable("id") Long expenseId, Model model) {
        	model.addAttribute("Expense",expenseService.findExpense(expenseId));
			return "show.jsp";
        		
        }
}


