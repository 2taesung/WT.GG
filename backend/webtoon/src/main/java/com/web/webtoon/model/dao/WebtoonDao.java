package com.web.webtoon.model.dao;

import java.util.List;
import java.util.Map;

import com.web.webtoon.model.Webtoon;

public interface WebtoonDao {
	public List<Webtoon> getRankingList() throws Exception;
	
	public Webtoon getWebtoonDetail(int id) throws Exception;
	
	public Webtoon getTestResult(Map map) throws Exception;
}
