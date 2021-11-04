package com.web.webtoon.model.service;

import java.util.List;

import com.web.webtoon.model.Webtoon;

public interface WebtoonService {
	public List<Webtoon> getRankingList() throws Exception;
	
	public Webtoon getWebtoonDetail(int id) throws Exception;
}
