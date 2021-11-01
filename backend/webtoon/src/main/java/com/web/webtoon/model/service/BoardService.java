package com.web.webtoon.model.service;

import java.util.List;

import com.web.webtoon.model.BoardContent;

public interface BoardService {
	
	public List<BoardContent> getAllList() throws Exception;
	
	public BoardContent getBoardContent(int id) throws Exception;
}
