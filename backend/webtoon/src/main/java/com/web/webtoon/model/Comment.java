package com.web.webtoon.model;

import java.sql.Timestamp;

public class Comment {
	private int id;
	private int ip_id;
	private int post_id;
	private int platform_id;
	private int webtoon_id;
	private String comment;
	private String writer;
	private Timestamp date;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getIp_id() {
		return ip_id;
	}
	public void setIp_id(int ip_id) {
		this.ip_id = ip_id;
	}
	public int getPost_id() {
		return post_id;
	}
	public void setPost_id(int post_id) {
		this.post_id = post_id;
	}
	public int getPlatform_id() {
		return platform_id;
	}
	public void setPlatform_id(int platform_id) {
		this.platform_id = platform_id;
	}
	public int getWebtoon_id() {
		return webtoon_id;
	}
	public void setWebtoon_id(int webtoon_id) {
		this.webtoon_id = webtoon_id;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public Timestamp getDate() {
		return date;
	}
	public void setDate(Timestamp date) {
		this.date = date;
	}
	
	
}
