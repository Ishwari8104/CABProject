package com.example.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // allow Angular dev server
public class HelloController {

    @GetMapping("/hello")
    public String sayHello(@RequestBody(required = false) String payload) {
        System.out.println("Received from Angular: " + payload);
        return "Hello from Spring Boot!";
    }
}
