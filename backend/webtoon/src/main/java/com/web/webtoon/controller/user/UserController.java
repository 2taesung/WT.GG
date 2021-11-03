package com.web.webtoon.controller.user;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.webtoon.model.BoardContent;
import com.web.webtoon.model.service.UserServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserServiceImpl userService;
	
	@PutMapping("/insert")
	public ResponseEntity<Map<String, Object>> getAllList(@RequestParam Map map) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		
		try {
			int res = userService.insertUser(map);
			
			if(res == 0) {
				result = "FAIL";
			} else {
				result = "SUCCESS";
			}
			
			resultMap.put("message", result);
			status = HttpStatus.ACCEPTED;
			
		} catch(Exception e) {
			e.printStackTrace();
			resultMap.put("message", e.getMessage());
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}
}
