package com.web.webtoon.model.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.webtoon.model.Comment;
import com.web.webtoon.model.dao.CommentDao;
@Service
public class CommentServiceImpl implements CommentService{

	@Autowired
	SqlSession sqlSession;
	
	@Override
	public int getCommentNum(int id) throws Exception {
		return sqlSession.getMapper(CommentDao.class).getCommentNum(id);
	}

	@Override
	public List<Comment> getPostComments(int id) throws Exception {
		return sqlSession.getMapper(CommentDao.class).getPostComments(id);
	}

	@Override
	public int insertComment(Map map) throws Exception {
		return sqlSession.getMapper(CommentDao.class).insertComment(map);
	}

	@Override
	public int deleteComment(int id) throws Exception {
		return sqlSession.getMapper(CommentDao.class).deleteComment(id);
	}

	@Override
	public String getCommentPassword(int id) throws Exception {
		return sqlSession.getMapper(CommentDao.class).getCommentPassword(id);
	}

}
