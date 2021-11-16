package com.web.webtoon.model;

public class Webtoon {
	private int id;
	private int author_id;
	private int platform_id;
	private int characteristic;
	private String title;
	private String link;
	private String image_link;
	private String genre;
	private String story;
	private int drawing_style;
	private int humor;
	private int romance_ratio;
	private int genre_score;
	private int deployment_speed;
	private int material_novelty;
	private float score;
	private String artist;
	private int webtoon_id;
	
	public float getTotal() {
		return score;
	}
	public void setTotal(float score) {
		this.score = score;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAuthor_id() {
		return author_id;
	}
	public void setAuthor_id(int author_id) {
		this.author_id = author_id;
	}
	public int getPlatform_id() {
		return platform_id;
	}
	public void setPlatform_id(int platform_id) {
		this.platform_id = platform_id;
	}
	public int getCharacteristic() {
		return characteristic;
	}
	public void setCharacteristic(int characteristic) {
		this.characteristic = characteristic;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	
	public String getStory() {
		return story;
	}
	public void setStory(String story) {
		this.story = story;
	}
	public String getImage_link() {
		return image_link;
	}
	public void setImage_link(String image_link) {
		this.image_link = image_link;
	}
	public String getGenre() {
		return genre;
	}
	public void setGenre(String genre) {
		this.genre = genre;
	}
	public String getArtist() {
		return artist;
	}
	public void setArtist(String artist) {
		this.artist = artist;
	}
	public int getWebtoon_id() {
		return webtoon_id;
	}
	public void setWebtoon_id(int webtoon_id) {
		this.webtoon_id = webtoon_id;
	}
	public int getDrawing_style() {
		return drawing_style;
	}
	public void setDrawing_style(int drawing_style) {
		this.drawing_style = drawing_style;
	}
	public int getHumor() {
		return humor;
	}
	public void setHumor(int humor) {
		this.humor = humor;
	}
	public int getRomance_ratio() {
		return romance_ratio;
	}
	public void setRomance_ratio(int romance_ratio) {
		this.romance_ratio = romance_ratio;
	}
	public int getGenre_score() {
		return genre_score;
	}
	public void setGenre_score(int genre_score) {
		this.genre_score = genre_score;
	}
	public int getDeployment_speed() {
		return deployment_speed;
	}
	public void setDeployment_speed(int deployment_speed) {
		this.deployment_speed = deployment_speed;
	}
	public int getMaterial_novelty() {
		return material_novelty;
	}
	public void setMaterial_novelty(int material_novelty) {
		this.material_novelty = material_novelty;
	}
	
}
