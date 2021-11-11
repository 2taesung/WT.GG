package com.web.webtoon.model.service;

import java.util.Map;

public interface UserService {

	public int insertUser(Map map) throws Exception;
	
	public int changePassword(Map map) throws Exception;
}
