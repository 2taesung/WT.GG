package com.web.webtoon.model.service;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.webtoon.model.dao.CommentDao;
@Service
public class CommentServiceImpl implements CommentService{

	@Autowired
	SqlSession sqlSession;
	
	@Override
	public int getCommentNum(int id) throws Exception {
		return sqlSession.getMapper(CommentDao.class).getCommentNum(id);
	}

}
