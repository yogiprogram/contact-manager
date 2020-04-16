package com.demo.contact.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.servlet.error.DefaultErrorAttributes;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Map;

@ControllerAdvice
@Slf4j
public class GlobalErrorHandlerAdvice extends DefaultErrorAttributes {

  @ExceptionHandler(value = {IllegalArgumentException.class, Exception.class})
  protected ResponseEntity<Map<String, Object>> handleConflict(
      RuntimeException ex, WebRequest request) {
    Map<String, Object> errorAttributes = super.getErrorAttributes(request, false);
    errorAttributes.put("error", ex.getMessage());
    return new ResponseEntity<>(errorAttributes, new HttpHeaders(), HttpStatus.CONFLICT);
  }
}
