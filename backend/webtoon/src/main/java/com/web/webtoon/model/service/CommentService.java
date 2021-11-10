package com.web.webtoon.model.service;

import java.util.List;

import com.web.webtoon.model.Comment;

public interface CommentService {
	public int getCommentNum(int id) throws Exception;
	
	public List<Comment> getPostComments(int id) throws Exception;
}
