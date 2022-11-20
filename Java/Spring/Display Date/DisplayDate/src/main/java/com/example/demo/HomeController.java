package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class HomeController {
	@RequestMapping("")
	public String index() {
	return "datetime.jsp";
	}
@RequestMapping("/date")
public String date() {
	return "date.jsp";
}
@RequestMapping("/time")
public String time() {
	return "time.jsp";
}
}
