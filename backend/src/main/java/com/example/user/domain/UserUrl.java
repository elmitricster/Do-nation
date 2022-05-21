package com.example.user.domain;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
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
        this.user=user;
    }

}
