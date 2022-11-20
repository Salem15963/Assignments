package com.codindojo.login.services;

import java.util.List;
import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestParam;

import com.codindojo.login.models.LoginUser;
import com.codindojo.login.models.User;
import com.codindojo.login.repositories.UserRepository;



@Service
public class UserService {
	
	@Autowired
    private UserRepository userRepo;
	
    public User register(User newUser, BindingResult result) {
       
    	Optional<User> potentialUser = userRepo.findByEmail(newUser.getEmail());
    	
    	// Reject if email is taken (present in database)
    	if(potentialUser.isPresent()) {
    		result.rejectValue("email", "Matches", "An account with that email already exists!");
    	}
    	
        // Reject if password doesn't match confirmation
    	if(!newUser.getPassword().equals(newUser.getConfirm())) {
    		result.rejectValue("confirm", "Matches", "The Confirm Password must match Password!");
    	}
    	
    	// Return null if result has errors
    	if(result.hasErrors()) {
    		return null;
    	}
    
        // Hash and set password, save user to database
    	String hashed = BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt());
    	newUser.setPassword(hashed);
    	return userRepo.save(newUser);
    	
    }
    
    public User login(LoginUser newLogin, BindingResult result) {
    	
    	Optional<User> potentialUser = userRepo.findByEmail(newLogin.getEmail());
        
    	// Find user in the DB by email
        // Reject if NOT present
    	if(!potentialUser.isPresent()) {
    		result.rejectValue("email", "Matches", "User not found!");
    		return null;
    	}
    	
    	// User exists, retrieve user from DB
    	User user = potentialUser.get();
        
        // Reject if BCrypt password match fails
    	if(!BCrypt.checkpw(newLogin.getPassword(), user.getPassword())) {
    	    result.rejectValue("password", "Matches", "Invalid Password!");
    	}
    	
    	// Return null if result has errors
    	if(result.hasErrors()) {
    		return null;
    	}
    	
        // Otherwise, return the user object
        return user;
    }
    
    public User findById(Long id) {
    	Optional<User> potentialUser = userRepo.findById(id);
    	if(potentialUser.isPresent()) {
    		return potentialUser.get();
    	}
    	return null;
    }


    
    // TO-DO: Write register and login methods!
    public User register(User newUser, BindingResult result,
	         @RequestParam(value="email") String email
    		) {
    	// TO-DO - Reject values or register if no errors:
        Optional<User> optionalUserEmail = userRepo.findByEmail(email);
        if(optionalUserEmail.isPresent()) {
            return optionalUserEmail.get();
        } else {
            return null;
        }
        
        // Reject if email is taken (present in database)
        // Reject if password doesn't match confirmation
        
        // Return null if result has errors
    
        // Hash and set password, save user to database

    }
    


    public List<User> allUsers() {
        return userRepo.findAll();
    }
    


    public User createUser(User b) {
        return userRepo.save(b);
    }

    public User findUser(Long id) {
        Optional<User> optionalUser = userRepo.findById(id);
        if(optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            return null;
        }
    }
    
	public User updateUser(Long id, String userName, String email, String password, String confirm) {
		User category = findUser(id);
	     if(category.getId()==id) {
	    	 category.setUserName(userName);
	    	 category.setEmail(email);
	    	 category.setPassword(password);
	    	 category.setConfirm(confirm);
	    	 return createUser(category);
	     }
	     else {
	    	 return null;
	     }
	}
	
	public void deleteUser(Long id) {
		userRepo.deleteById(id);
	}
}