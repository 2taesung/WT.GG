package com.web.webtoon.model.service;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.web.webtoon.model.Webtoon;
import com.web.webtoon.model.dao.WebtoonDao;
@Service
public class WebtoonServiceImpl implements WebtoonService {

	@Autowired
	SqlSession sqlsession;
	
	@Override
	public List<Webtoon> getRankingList() throws Exception {
		return sqlsession.getMapper(WebtoonDao.class).getRankingList();
	}

}
