package com.web.webtoon.model.dao;

import java.util.List;
import java.util.Map;

import com.web.webtoon.model.Comment;

public interface CommentDao {
	public int getCommentNum(int id);
	
	public List<Comment> getPostComments(int id);
	
	public int insertComment(Map map);
	
	public int deleteComment(int id);
	
	public String getCommentPassword(int id);
}
