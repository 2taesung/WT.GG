package com.web.webtoon.model.service;

import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.webtoon.model.dao.UserDao;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	SqlSession sqlsession;
	
	@Override
	public int insertUser(Map map) throws Exception {
		return sqlsession.getMapper(UserDao.class).insertUser(map);
	}

	@Override
	public int changePassword(Map map) throws Exception {
		return sqlsession.getMapper(UserDao.class).changePassword(map);
	}

}
