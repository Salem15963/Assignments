package com.example.DaikichiRoutes;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class MainController {
	
    @RequestMapping("/")
    public String form(){
    	return "form.jsp";
    }
    
@RequestMapping("/show")
public String show(
	@RequestParam(value="city")String city,		
	@RequestParam(value="person")String person,		
	@RequestParam(value="hobby")String hobby,		
	@RequestParam(value="living")String living,	
	@RequestParam(value="text")String text,
	HttpSession session
	) {
	session.setAttribute("city",city);
	session.setAttribute("person",person);
	session.setAttribute("hobby",hobby);
	session.setAttribute("living",living);
	session.setAttribute("text",text);
	return "show.jsp";
	}
	
}
