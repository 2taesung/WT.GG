package com.web.webtoon.controller.board;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.webtoon.model.BoardContent;
import com.web.webtoon.model.Comment;
import com.web.webtoon.model.service.BoardService;
import com.web.webtoon.model.service.BoardServiceImpl;
import com.web.webtoon.model.service.CommentServiceImpl;
import com.web.webtoon.model.service.UserServiceImpl;

@CrossOrigin("*")
@RequestMapping("/board")
@RestController
public class BoardController {

	@Autowired
	BoardServiceImpl boardService;
	
	@Autowired
	UserServiceImpl userService;
	
	@Autowired
	CommentServiceImpl commentService;
	
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
				int length = list.size();
				for(int i = 0; i < length; i++) {
					list.get(i).setComment(commentService.getCommentNum(list.get(i).getId()));
				}
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
	public ResponseEntity<Map<String, Object>> getBoardContent(@RequestParam int id) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		
		try {
			BoardContent content = boardService.getBoardContent(id);
			
			resultMap.put("content", content);
			
			List<Comment> comments = commentService.getPostComments(id);
			
			resultMap.put("comments", comments);
			
			if(content == null || comments == null) {
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
	
	@PostMapping("/write")
	public ResponseEntity<Map<String, Object>> writeBoardContent(@RequestParam Map map) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		
		try {
			int insertRes = userService.insertUser(map);
			if(insertRes == 0) {
				result = "FAIL";
				
			}else {
				result = "SUCCESS";
			}
			int res = boardService.insertBoardContent(map);
			
			if(res == 0) {
				result = "FAIL";
			} else if(res != 0 && insertRes != 0) {
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
	
	@PutMapping("/modify")
	public ResponseEntity<Map<String, Object>> modifyBoardContent(@RequestParam Map map) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		
		try {
			int res = boardService.modifyBoardContent(map);
			
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
	
	@DeleteMapping("/delete")
	public ResponseEntity<Map<String, Object>> deleteBoardContent(@RequestParam int id) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		
		try {
			int res = boardService.deleteBoardContent(id);
			
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
