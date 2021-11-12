from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep
import time
import re
import requests
from bs4 import BeautifulSoup

#네이버 웹툰 페이지 파싱을 통해 총 정식 연재 작품 수 구하기
URL='https://comic.naver.com/webtoon/weekday.nhn'
html=requests.get(URL).text
soup=BeautifulSoup(html,'html.parser')

title=soup.find_all('a',{'class': 'title'})
title_list=[] ; title_num=[]
print(title)
#일주일 2회 이상 연재 작품은 한 번만 데이터 수집
for x in range(len(title)):
    t=title[x].text
    if(t in title_list):
        continue
    else:
        title_list.append(t)
        

# print(title_list)
# print(len(title_list))


URL='https://comic.naver.com/webtoon/weekday.nhn'
driver=webdriver.Chrome('chromedriver.exe')
driver.get(URL)

time.sleep(1)

artist_list=[] ; genre_list=[] ; score_list=[] 
star_parti=[] ; img_list=[] ; link_list=[] ; story_list=[]

for i in range(len(title_list)):

    time.sleep(1)
    
    #전체 웹툰 목록 중 월요일 첫 번째 웹툰으로 페이지 이동
    page=driver.find_elements_by_class_name('title')
    page[i].click()
    
    time.sleep(0.5)
    
    #이동한 페이지 주소 읽고, 파싱하기
    html = driver.page_source
    soup = BeautifulSoup(html,'html.parser')
    #작품 썸네일 이미지
    img=soup.select('#content > div.comicinfo > div.thumb > a > img')[0]['src']
    if img in img_list:
      pass

    img_list.append(img)
    print(img_list)
    
    #작가님 닉네임 수집
    artist = soup.find_all('h2')
    artist = artist[1].find('span',{'class':'wrt_nm'}).text[8:]
    artist_list.append(artist)
    print(artist_list)
    

    #작품 링크 
    link=soup.select('#content > div.comicinfo > div.thumb > a')[0]['href']
    link_list.append('https://comic.naver.com'+link)
    print(link_list)

    #줄거리 링크 
    story=soup.select('#content > div.comicinfo > div.detail > p:nth-child(2)')
    story_list.append(story)
    print(story_list)
    
    
    #작품 장르 수집
    genre=soup.find('span',{'class':'genre'}).text
    genre_list.append([genre])
    print(genre_list)

    #최신 별점 평균 점수 수집 (최대 10화 분량)
    score = soup.find_all('strong')
    # print(score)
    
    # print(score)
    scorelist=[] ; ii=9
    while score[ii].text[0].isnumeric()==True:
        scorelist.append(float(score[ii].text))
        ii +=1
        if len(scorelist) == 3:
          break
    score_list.append(sum(scorelist)/len(scorelist))
    
    print(score_list)

    
    time.sleep(0.5)


    print(title_list[i],"end")
    
    
    driver.back()
    
    time.sleep(0.5)
    
    page.clear()
    
    time.sleep(0.5)
  
webtoon_data = []


print("작가 리스트 길이 :", len(artist_list))
print("장르 리스트 길이 :", len(genre_list))
print("평점 리스트 길이 :", len(score_list))
# print("별점참여자 리스트 길이 :", len(star_parti))
print("이미지 리스트 길이 :", len(img_list))
print("링크 리스트 길이 :", len(link_list))
print("스토리 리스트 길이 :", len(story_list))

data = []
# print(len(title_list))
for i in range(len(link_list)):
  # print(title_list[i])
  # print(link_list[i])
  # print(img_list[i])
  # print(genre_list[i][0])
  # print(story_list[i])
  # print(artist_list[i])
  # print(score_list[i])
  data.append([1, title_list[i], link_list[i], img_list[i], genre_list[i][0], '줄거리', artist_list[i], score_list[i]])


print(data)

import pymysql

connect = pymysql.connect(host='54.166.95.144', user='ssafy', password='ssafyssafy(password)', db='webtoon', charset='utf8mb4')
cursor = connect.cursor()

for r in data:
    platform_id = int(r[0])
    title = str(r[1])
    link = str(r[2])
    img_link = str(r[3])
    genre = str(r[4])
    story = str(r[5])
    artist = str(r[6])
    score = float(r[7])
    
    
    sql = """insert into webtoon 
    (platform_id, title, link, image_link, genre, story, artist, score) 
    values (%s, '%s', '%s', '%s', '%s', '%s', '%s', '%s')
    """ % (platform_id, title, link, img_link, genre, '줄거리', artist, score)

    cursor.execute(sql)
    connect.commit()
connect.close()



