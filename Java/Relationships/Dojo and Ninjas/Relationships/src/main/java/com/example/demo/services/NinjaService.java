package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.models.Ninja;
import com.example.demo.repositories.NinjaRepository;
@Service
public class NinjaService {
	private final NinjaRepository ninjaRepository;
    
    public NinjaService(NinjaRepository ninjaRepository) {
        this.ninjaRepository = ninjaRepository;
    }
    public List<Ninja> allNinjas() {
        return ninjaRepository.findAll();
    }
    public Ninja createNinja(Ninja b) {
        return ninjaRepository.save(b);
    }
    public Ninja findNinja(Long id) {
        Optional<Ninja> optionalNinja = ninjaRepository.findById(id);
        if(optionalNinja.isPresent()) {
            return optionalNinja.get();
        } else {
            return null;
        }
    }

	public Ninja updateNinja(Long id, String firstName, String lastName, Integer age) {
	     Ninja ninja = findNinja(id);
	     if(ninja.getId()==id) {
	    	 ninja.setFirstName(firstName);
	    	 ninja.setLastName(lastName);
	    	 ninja.setAge(age);
	    	 return createNinja(ninja);
	     }
	     else {
	    	 return null;
	     }
	}

	public void deleteNinja(Long id) {
		ninjaRepository.deleteById(id);
	}
}
