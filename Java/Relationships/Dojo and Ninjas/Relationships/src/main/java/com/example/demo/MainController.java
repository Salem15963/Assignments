package com.example.demo;



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

import com.example.demo.models.Dojo;
import com.example.demo.models.Ninja;
import com.example.demo.services.DojoService;
import com.example.demo.services.NinjaService;

@Controller
public class MainController {
	@Autowired
	DojoService dojoService;
	@Autowired
	NinjaService ninjaService;
	
	@GetMapping("/dojo")
	public String dojo(@ModelAttribute("dojo") Dojo dojo, Model model) {
		List<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
		return "dojo.jsp";
	}

	@PostMapping("/addDojo")
	public String addDojo(@Valid @ModelAttribute("dojo") Dojo dojo, BindingResult result, Model model) {
		if(result.hasErrors()) {
			List<Dojo> dojos = dojoService.allDojos();
			model.addAttribute("dojos", dojos);
			return "dojo.jsp";
		}else {
			dojoService.createDojo(dojo);
			return "redirect:/dojo";
		}
	}
	
	@GetMapping("/ninja")
	public String ninja(@ModelAttribute("ninja") Ninja ninja, @ModelAttribute("dojo") Dojo dojo,Model model) {
		List<Dojo> dojos = dojoService.allDojos();
		model.addAttribute("dojos", dojos);
		return "ninja.jsp";
	}
	
	@PostMapping("/addNinja")
	public String AddNinja(@Valid @ModelAttribute("ninja") Ninja ninja, BindingResult result, Model model) {
		if(result.hasErrors()) {
			List<Ninja> ninjas = ninjaService.allNinjas();
			model.addAttribute("ninjas", ninjas);
			return "ninja.jsp";
		}else {
			ninjaService.createNinja(ninja);
			return "redirect:/ninja";
		}
			

	}
	
	@GetMapping("/show/{id}")
	public String show(
			Model model,
			@ModelAttribute("dojo") Dojo dojo, 
			@PathVariable("id") Long id
			) {

		model.addAttribute("dojos", dojoService.findDojo(id));
		return "show.jsp";
	}

}
