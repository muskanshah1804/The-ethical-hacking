package com.example.project.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DashboardController {

    @GetMapping("/api/dashboard")
    public String getDashboard() {
        return "Welcome to the Dashboard!";
    }
}
