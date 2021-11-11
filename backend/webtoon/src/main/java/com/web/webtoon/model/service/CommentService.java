package com.web.webtoon.model.service;

import java.util.List;
import java.util.Map;

import com.web.webtoon.model.Comment;

public interface CommentService {
	public int getCommentNum(int id) throws Exception;
	
	public List<Comment> getPostComments(int id) throws Exception;
	
	public int insertComment(Map map) throws Exception;
	
	public int deleteComment(int id) throws Exception;
}
