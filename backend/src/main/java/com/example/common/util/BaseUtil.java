package com.example.common.util;

import com.example.common.exception.BaseException;

public class BaseUtil {
    protected BaseUtil(){
        throw new BaseException("it is Utility class");
    }
}
