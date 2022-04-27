package com.example.common.util;

import com.example.common.exception.BaseException;

public class BaseUtil {
    private BaseUtil(){
        throw new BaseException("it is Utility class");
    }
}
