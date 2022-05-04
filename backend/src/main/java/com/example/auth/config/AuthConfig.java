package com.example.auth.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@Configuration
@RequiredArgsConstructor
public class AuthConfig implements WebMvcConfigurer {

    private final AuthInterceptor authInterceptor;
    private final AuthArgumentResolver authArgumentResolver;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(authInterceptor)
                .excludePathPatterns("/auth/login", "/auth/duplicate/**")
                .addPathPatterns("/auth", "/auth/**")
                .addPathPatterns("/donation","/donation/**")
                .addPathPatterns("/withdraw","/withdraw/**")
                .excludePathPatterns("/user/random")
                .addPathPatterns("/user", "/user/**")
                .addPathPatterns("/follow/**")
                .addPathPatterns("/payment/**");

    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("*")
                .allowedOrigins(
                        "http://localhost:3000",
                        "http://k6c101.p.ssafy.io"
                );
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(authArgumentResolver);
    }
}
