package com.web.webtoon.controller.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.webtoon.model.BoardContent;
import com.web.webtoon.model.service.BoardService;
import com.web.webtoon.model.service.BoardServiceImpl;

@CrossOrigin("*")
@RequestMapping("/board")
@RestController
public class BoardController {

	@Autowired
	BoardServiceImpl boardService;
	
	@GetMapping("/list")
	public ResponseEntity<Map<String, Object>> getAllList(@RequestParam Map map) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		
		try {
			List<BoardContent> list = boardService.getAllList();
			
			resultMap.put("list", list);
			
			if(list == null) {
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
	
	@GetMapping("/content")
	public ResponseEntity<Map<String, Object>> getBoardContent(@RequestParam Map map) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		
		try {
			BoardContent content = boardService.getBoardContent((int) map.get("id"));
			
			resultMap.put("content", content);
			
			if(content == null) {
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
