package com.web.webtoon.model.dao;

import java.util.List;

import com.web.webtoon.model.Comment;

public interface CommentDao {
	public int getCommentNum(int id);
	
	public List<Comment> getPostComments(int id);
	
}
