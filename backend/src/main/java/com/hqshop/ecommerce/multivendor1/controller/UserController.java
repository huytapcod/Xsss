package com.hqshop.ecommerce.multivendor1.controller;

import com.hqshop.ecommerce.multivendor1.dto.request.ApiResponse;
import com.hqshop.ecommerce.multivendor1.dto.request.UserCreationRequest;
import com.hqshop.ecommerce.multivendor1.dto.request.UserUpdateRequest;
import com.hqshop.ecommerce.multivendor1.dto.response.UserResponse;
import com.hqshop.ecommerce.multivendor1.entity.User;
import com.hqshop.ecommerce.multivendor1.repository.UserRepository;
import com.hqshop.ecommerce.multivendor1.service.UserService;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;
    private UserResponse userResponse;

    @PostMapping
    public ResponseEntity<ApiResponse<User>> createUser(@RequestBody @Valid UserCreationRequest request) {
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return ResponseEntity.badRequest().body(
                ApiResponse.<User>builder()
                    .success(false)
                    .message("Mật khẩu xác nhận không khớp")
                    .build()
            );
        }
        try {
            User createdUser = userService.createUser(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(
                ApiResponse.<User>builder()
                    .success(true)
                    .message("Đăng ký thành công")
                    .result(createdUser)
                    .build()
            );
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                ApiResponse.<User>builder()
                    .success(false)
                    .message(e.getMessage())
                    .build()
            );
        }
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse<String>> login(@RequestBody LoginRequest request) {
        // Implement login logic, return JWT token or session info
        
    }

    @PostMapping("/logout")
    public ResponseEntity<ApiResponse<Void>> logout() {
        // Implement logout logic
    }

    @GetMapping
    public ApiResponse<List<UserResponse>> getUsers() {
        return ApiResponse.<List<UserResponse>>builder()
                .result(userService.getAllUsers())
                .build();
    }

    @GetMapping("/{userId}")
    public ApiResponse<UserResponse> getUser(@PathVariable("userId") String userId) {
        return ApiResponse.<UserResponse>builder()
                .result(userService.getUser(userId))
                .build();
    }

    @GetMapping("/myInfor")
    public ApiResponse<UserResponse> getMyInfor() {
        // Get user info from security context
    }

    @PutMapping("/{userId}")
    public UserResponse updateUser(@PathVariable String userId, @RequestBody UserUpdateRequest request) {
        return userService.updateUser(userId, request);
    }

    @DeleteMapping("/delete-multiple")
    public ResponseEntity<ApiResponse<Void>> deleteMultipleUsers(@RequestBody List<String> userIds) {
        // Implement delete logic
    }
}
