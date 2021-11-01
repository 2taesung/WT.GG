package com.web.webtoon.model.dao;

import java.util.List;

import com.web.webtoon.model.BoardContent;

public interface BoardDao {
	public List<BoardContent> getAllList() throws Exception;
	
	public BoardContent getBoardContent(int id) throws Exception;
}
