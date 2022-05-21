package com.example.auth.util;

import com.example.auth.exception.InvalidTokenException;
import com.example.common.util.BaseUtil;
import io.jsonwebtoken.*;
import lombok.NoArgsConstructor;

import java.time.Duration;
import java.util.Date;

@NoArgsConstructor
public class JwtUtil extends BaseUtil {
    private static final String SECRET_KEY = "MySeCrEt";
    private static final int VALID_TIME_MINUTE = 60;

    public static String makeJwtTokenByPrimaryKey(long primaryKey) {
        Date now = new Date();
        Date validTime = new Date(now.getTime() + Duration.ofMinutes(VALID_TIME_MINUTE)
                                                          .toMillis());

        return Jwts.builder()
                   .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                   .setIssuer("fresh")
                   .setIssuedAt(now)
                   .setExpiration(validTime)
                   .claim("id", primaryKey)
                   .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                   .compact();
    }

    public static void validateToken(String token) {
        if(token == null || token.length() == 0){
            throw new InvalidTokenException();
        }

        try {
            Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token);
        } catch (JwtException | IllegalArgumentException e) {
            throw new InvalidTokenException();
        }
    }

    public static Long findIdFromToken(String token){
        Claims claims = claims(token);
        return claims.get("id", Long.class);
    }

    private static Claims claims(String token) {
        try {
            return Jwts.parser()
                       .setSigningKey(SECRET_KEY).parseClaimsJws(token)
                       .getBody();
        } catch (JwtException e) {
            throw new InvalidTokenException();
        }
    }
}
