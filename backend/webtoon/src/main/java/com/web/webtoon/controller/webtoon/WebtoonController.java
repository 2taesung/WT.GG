package com.web.webtoon.controller.webtoon;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.web.webtoon.model.BoardContent;
import com.web.webtoon.model.Webtoon;
import com.web.webtoon.model.service.WebtoonServiceImpl;

@RestController
@CrossOrigin("*")
@RequestMapping("/webtoon")
public class WebtoonController {
	
	@Autowired
	WebtoonServiceImpl webtoonService;
	
	@GetMapping("/ranking")
	public ResponseEntity<Map<String, Object>> getAllList(@RequestParam Map map) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		
		try {
			List<Webtoon> list = webtoonService.getRankingList();
			
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
	
	@GetMapping("/detail")
	public ResponseEntity<Map<String, Object>> getWebtoonDetail(@RequestParam int id) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		
		try {
			Webtoon webtoon = webtoonService.getWebtoonDetail(id);
			
			resultMap.put("webtoonDetail", webtoon);
			
			if(webtoon == null) {
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
	
	@PostMapping("/test")
	public ResponseEntity<Map<String, Object>> getTestResult(@RequestBody List<Integer> list) {
		String result = "SUCCESS";
		Map<String, Object> resultMap = new HashMap<>();
		HttpStatus status = HttpStatus.ACCEPTED;
		//점수 차이 계산하고 동점 있으면 score를 비교한다.
		HashMap<String, Object> map = new HashMap();
		try {
			map.put("drawing_style", list.get(0));
			map.put("humor", list.get(1));
			map.put("romance_ratio", list.get(2));
			map.put("genre", list.get(3));
			map.put("deployment_speed", list.get(4));
			map.put("material_novelty", list.get(5));
			Webtoon webtoon = webtoonService.getTestResult(map);
			resultMap.put("result_webtoon_id", webtoon.getWebtoon_id());
			resultMap.put("gwebtoon", webtoon);
			
			if(webtoon == null) {
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
