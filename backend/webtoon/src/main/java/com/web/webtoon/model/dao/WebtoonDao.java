package com.web.webtoon.model.dao;

import java.util.List;

import com.web.webtoon.model.Webtoon;

public interface WebtoonDao {
	public List<Webtoon> getRankingList() throws Exception;
}
