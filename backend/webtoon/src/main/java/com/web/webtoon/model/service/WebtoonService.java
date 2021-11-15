package com.web.webtoon.model.service;

import java.util.List;
import java.util.Map;

import com.web.webtoon.model.Webtoon;

public interface WebtoonService {
	public List<Webtoon> getRankingList() throws Exception;
	
	public Webtoon getWebtoonDetail(int id) throws Exception;
	
	public Webtoon getTestResult(Map map) throws Exception;
}
