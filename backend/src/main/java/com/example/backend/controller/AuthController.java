// src/main/java/com/example/backend/controller/AuthController.java
package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // allow Angular dev server
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        return authService.login(loginRequest.getUsername(), loginRequest.getPassword())
                .map(user -> ResponseEntity.ok(Map.of("message", "Login successful! Welcome " + user.getDisplayName())))
                .orElse(ResponseEntity.status(401).body(Map.of("message", "Invalid username or password")));
    }
}
