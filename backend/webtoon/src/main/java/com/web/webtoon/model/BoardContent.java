package com.web.webtoon.model;

import java.sql.Timestamp;

public class BoardContent {
	private int id;
	private String title;
	private Timestamp regdate;
	private String writer;
	private int image_id;
	private String ip_no;
	private int platform_id;
	private int webtoon_id;
	private String contents;
	private String webtoon_title;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Timestamp getRegdate() {
		return regdate;
	}
	public void setRegdate(Timestamp regdate) {
		this.regdate = regdate;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public int getImage_id() {
		return image_id;
	}
	public void setImage_id(int image_id) {
		this.image_id = image_id;
	}
	public String getIp_no() {
		return ip_no;
	}
	public void setIp_no(String ip_no) {
		this.ip_no = ip_no;
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
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public String getWebtoon_title() {
		return webtoon_title;
	}
	public void setWebtoon_title(String webtoon_title) {
		this.webtoon_title = webtoon_title;
	}
	
	
}
