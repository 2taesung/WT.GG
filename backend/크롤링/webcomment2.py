import requests
from bs4 import BeautifulSoup

#네이버 웹툰 페이지 파싱을 통해 총 정식 연재 작품 수 구하기
URL='https://comic.naver.com/webtoon/weekday.nhn'
html=requests.get(URL).text
soup=BeautifulSoup(html,'html.parser')

title=soup.find_all('a',{'class': 'title'})
title_list = []; title_num = []

#일주일 2회 이상 연재 작품은 한 번만 데이터 수집
for x in range(len(title)):
    t=title[x].text
    if(t in title_list):
        continue
    else:
        title_list.append(t)
        title_num.append(x)

for i in title_list:
    print(i)