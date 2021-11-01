package com.web.webtoon.model.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.webtoon.model.BoardContent;
import com.web.webtoon.model.dao.BoardDao;

@Service
public class BoardServiceImpl implements BoardService{

	@Autowired
	SqlSession sqlsession;
	
	@Override
	public List<BoardContent> getAllList() throws Exception {
		return sqlsession.getMapper(BoardDao.class).getAllList();
	}

	@Override
	public BoardContent getBoardContent(int id) throws Exception {
		return sqlsession.getMapper(BoardDao.class).getBoardContent(id);
	}

}
