package com.example.user.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@RequiredArgsConstructor
@Getter
@EqualsAndHashCode
public class UserUrl {

    @Id
    @Column(name = "user_url_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    @JsonBackReference
    private User user;

    @Column(name = "user_url")
    private String userUrl;

    @Column(name = "color_hash")
    private String colorHash;

    @Column(name = "url_name")
    private String urlName;

    @Builder(builderClassName = "BasicBuilder", builderMethodName = "BasicBuilder")
    public UserUrl(User user, String userUrl, String colorHash, String urlName) {
        this.userUrl = userUrl;
        this.colorHash = colorHash;
        this.urlName = urlName;
        if(user != null){
            changeUser(user);
        }
    }

    //연관관계 method
    public void changeUser(User user){
        this.user = user;
        user.getUserUrls().add(this);
    }
}
