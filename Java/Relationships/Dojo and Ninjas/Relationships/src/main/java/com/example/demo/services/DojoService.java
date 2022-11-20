package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.models.Dojo;
import com.example.demo.repositories.DojoRepository;
@Service
public class DojoService {
    // adding the book repository as a dependency
	private final DojoRepository dojoRepository;
    
    public DojoService(DojoRepository dojoRepository) {
        this.dojoRepository = dojoRepository;
    }
    // returns all the books
    public List<Dojo> allDojos() {
        return dojoRepository.findAll();
    }
    // creates a book
    public Dojo createDojo(Dojo b) {
        return dojoRepository.save(b);
    }
    // retrieves a book
    public Dojo findDojo(Long id) {
        Optional<Dojo> optionalDojo = dojoRepository.findById(id);
        if(optionalDojo.isPresent()) {
            return optionalDojo.get();
        } else {
            return null;
        }
    }

	public Dojo updateDojo(Long id, String name) {
	     Dojo dojo = findDojo(id);
	     if(dojo.getId()==id) {
	    	 dojo.setName(name);
	   return createDojo(dojo);
	     }
	     else {
	    	 return null;
	     }
	     
		}
	
		public void deleteDojo(Long id) {
			dojoRepository.deleteById(id);
		}

//	    public Dojo getDojoWhereId(Long id) {
//	        return this.dojoRepository.getDojoWhereId(id);
//	    }
//	    public Dojo findNinja(Long id) {
//	        return this.dojoRepository.findById(id).orElse(null);
//	    }
//	    public Dojo updateDojos(Dojo dojo){
//	        return dojoRepository.save(dojo);
//	    }

}
