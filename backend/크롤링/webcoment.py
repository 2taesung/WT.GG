# 웹툰 URL : 외모지상주의
# https://comic.naver.com/webtoon/detail?titleId=웹툰 아이디&no=회차&weekday=mon # 주 = 요일
# titleId = 웹툰자체 아이디, no = 웹툰 내부 회차

import os
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
# from webdriver_manager.chrome import ChromeDriverManager
import time
import json
# from openpyxl import workbook

base_url = 'https://comic.naver.com/webtoon/weekday.nhn'

# chrome_dirver가 있는 위치
os.chdir('C:/Users/hsa82/Desktop/프로젝트/웹툰/크롤링/chromedriver_win32')# chromedriver_win32 파일위치

#driver 실행
def drive(url):
    driver = webdriver.Chrome('./chromedriver.exe')     # driver 객체 불러옴
    driver.implicitly_wait(3)                       # 3초 후에 작동하도록
    driver.get(url)                                 # url에 접속
    html = driver.page_source                       # 현재 driver에 나타난 창의 page_source(html) 가져오기
    soup = BeautifulSoup(html, 'html.parser')       # html 파싱(parsing)을 위해 BeautifulSoup에 넘겨주기
    return driver, soup


#웹툰 기본 페이지에서 데이터 가져오기
driver, soup = drive(base_url)
driver.close()

#가져온 데이터 파싱, id, 요일, 이름
title = soup.select('.title')
t_IDs = list(map(lambda x: x.get('href').split('titleId=')[1].split('&')[0], title))
t_weekdays = list(map(lambda x: x.get('href').split('weekday=')[1], title))
t_names = list(map(lambda x: x.text, title))

#크롤링이 잘 되었나 확인하기 위함, 총 웹툰 수
print('t_IDs: ', len(t_IDs))
print('t_weekdays: ', len(t_weekdays))
print('t_names: ', len(t_names))
print(t_IDs[0], t_weekdays[0], t_names[0])


#웹툰 이름으로 id와 weekday 반환
def find_id_weekday(name,t_names,t_IDs,t_weekdays,start_idx = 0):
    try:
        idx = t_names.index(name)
    except:
        print('찾는 웹툰이 없습니다.')
        return
    return t_IDs[idx], t_weekdays[idx]


def episode_count(ID, weekday):
    url = base_url.split('weekday')[0]+'list.nhn?titleId={0}&weekday={1}'.format(ID, weekday)
    #print(url)
    driver, soup = drive(url)
    driver.close()
    res = soup.select('.title')[0].select('a')[0].get('href').split('no=')[1].split('&')[0]
    return res

res = episode_count(183559, 'mon') #신의 탑
print(res)


def comment_crawler(name, start_idx=0):
    id_num, weekday = find_id_weekday(name, t_names, t_IDs, t_weekdays, start_idx=start_idx)
    cnt = int(episode_count(id_num, weekday))

    comments = []
    proceed = -1  # 진행 상태 표시 위함, 처음에 0보다 작아야 0%가 표시 됨

    driver, _ = drive(base_url)  # driver만 먼저 열어 놓음. for문 돌면서 url만 바꿔줄 것임
    print('진행중...')
    for i in range(1, 4):
        percentage = int((i / cnt) * 100)
        if percentage % 10 == 0 and percentage > proceed:  # 진행상황 표시
            proceed = percentage
            print(proceed, '% 완료')
        url = 'https://comic.naver.com/comment/comment.nhn?titleId={0}&no={1}#'.format(id_num, str(i))
        # driver.implicitly_wait(3)
        time.sleep(1.5)
        driver.get(url)
        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')

        comments += list(map(lambda x: x.text, soup.select('.u_cbox_contents')))

    driver.close()
    print('crawling finished')
    return comments

os.chdir('C:/Users/hsa82/Desktop/프로젝트/웹툰/크롤링/')

##################################################
#타이틀 전부 불러오기
url2='https://comic.naver.com/webtoon/weekday.nhn'
html2=requests.get(url2).text
soup=BeautifulSoup(html2,'html.parser')

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
    comments = comment_crawler(i)
    file = open(str(i)+'_comments.csv', 'w', encoding='utf-8')
    for cmt in comments:
        # file.write('\n'+'\"comment\"'+' : '+'\"'+cmt+'\",'+'\n')
        file.write(cmt + '\n')
    file.write(json.dumps(comments))
    file.close()

#############################################################################
# 댓글 개수
# print(len(comments))

# 크롤링 파일 저장하기


# for i in comments:
#     dict_comment = { 'comment' : i }

# file = open('전체_comments.txt', 'w', encoding='utf-8')



# for cmt in comments:
#     # file.write('\n'+'\"comment\"'+' : '+'\"'+cmt+'\",'+'\n')
#     file.write(cmt + '\n')
#
# file.write(json.dumps(comments))
#
# file.close()
###############################################################################
