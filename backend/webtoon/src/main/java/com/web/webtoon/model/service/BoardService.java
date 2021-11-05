package com.web.webtoon.model.service;

import java.util.List;
import java.util.Map;

import com.web.webtoon.model.BoardContent;

public interface BoardService {
	
	public List<BoardContent> getAllList() throws Exception;
	
	public BoardContent getBoardContent(int id) throws Exception;
	
	public int insertBoardContent(Map map) throws Exception;
	
	public int modifyBoardContent(Map map) throws Exception;
	
	public int deleteBoardContent(int id) throws Exception;
}
