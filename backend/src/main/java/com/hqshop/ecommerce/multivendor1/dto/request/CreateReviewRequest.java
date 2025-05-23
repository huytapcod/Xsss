package com.hqshop.ecommerce.multivendor1.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class CreateReviewRequest {
    private String reviewText;
    private Double reviewRating;
    private List<String> productImages;
}
