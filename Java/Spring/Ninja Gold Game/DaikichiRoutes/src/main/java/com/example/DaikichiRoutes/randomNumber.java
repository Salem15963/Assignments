package com.example.DaikichiRoutes;

import java.util.Random;

public class randomNumber {
    Random rand = new Random();
    int upperbound = 25;
    int int_random = rand.nextInt(upperbound);
    
    public int randomNumber1() {
        int min = 10;
        int max = 20;
           
        System.out.println("Random value in int from "+min+" to "+max+ ":");
        int random_int = (int)Math.floor(Math.random()*(max-min+1)+min);
        return random_int;
    }
    
    public int randomNumber2() {
        int min = 5;
        int max = 10;
           
        System.out.println("Random value in int from "+min+" to "+max+ ":");
        int random_int = (int)Math.floor(Math.random()*(max-min+1)+min);
        return random_int;
    }
    
    public int randomNumber3() {
        int min = 2;
        int max = 5;
           
        System.out.println("Random value in int from "+min+" to "+max+ ":");
        int random_int = (int)Math.floor(Math.random()*(max-min+1)+min);
        return random_int;
    }
    public int randomNumber4() {
        int min = -50;
        int max = 50;
           
        System.out.println("Random value in int from "+min+" to "+max+ ":");
        int random_int = (int)Math.floor(Math.random()*(max-min+1)+min);
        return random_int;
    }
    
    public int randomNumber5() {
        int min = -5;
        int max = -20;
           
        System.out.println("Random value in int from "+min+" to "+max+ ":");
        int random_int = (int)Math.floor(Math.random()*(max-min+1)+min);
        return random_int;
    }

}