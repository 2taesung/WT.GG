from bs4 import BeautifulSoup
import requests
import pandas as pd

from bs4 import BeautifulSoup
from urllib.request import urlopen

##############################################################################
############################## 웹툰 제목 크롤링 ###############################
##############################################################################
url = 'http://comic.naver.com/webtoon/weekday.nhn'
html = urlopen(url)
soup = BeautifulSoup(html, 'html.parser')

#이름 list
get_list = soup.find_all('a',{'class':'title'})

list_title = []

for t in get_list:
    title = t.get_text().strip()
    list_title.append(title)

print(list_title)
#웹툰 제목 목록 저장
# s=pd.Series(list_title)
# s.to_csv(r"C:\Users\HOSHIN CHO\Desktop\result_df\미완결웹툰리스트.csv")



##############################################################################
############################## 웹툰 링크 크롤링 ###############################
##############################################################################
#url list
import re 
#url list
get_url = soup.find_all('a', attrs={'href': re.compile("/webtoon/list.nhn\DtitleId\D\d")})
get_url = soup.find_all('a', attrs={'href': re.compile("/webtoon/list")})
# get_url = soup.find_all('a', href=True)

# print("get_url")
# print(get_url)
list_url = []
for k in get_url:
#for k in soup.find_all('a'):
    print("k")
    print(k['href'])
    # url2 = k.get('href')
    # print(ur12)
    # if 'weekday' in url2:
    #     list_url.append(url2)
    # else:
    #     pass

print(list_url)
#중복되는거 없애기
list_url = list(set(list_url))

print(list_url)
# list_url 링크 리스트에서 필요한 값(웹툰 고유번호)만 인덱싱해서 DF에 저장
link_value=pd.DataFrame(columns=("value","weekday"))
x=[]
y=[]

#del list_url[0:210] #707671, 696617, 670143, 114번, 675823, 703851(183), 700858


for i in list_url:
    
    x.append(i[26:32])
    y.append(i[41:])

for i in range(len(list_url)):
    link_value.loc[i]=[x[i],y[i]]


error=[]  #웹툰 중에서 html파일이 다른것들과 달라서 크롤링 안되는 것들 따로 저장
#707671, 696617, 670143, 114번, 675823, 703851(183), 700858


##############################################################################
######################### 제목,별점,별점참여 가져오기 #########################
##############################################################################

for j in range(len(link_value["value"])): #웹툰의 개수만큼 for문 돌리기
    # 생성 및 초기화
    a=b=c=d=0
    titles=ratings=rating_clicks=bigtitle=[]
    result_df=pd.DataFrame(columns=("제목","별점","참여"))
    
    # url돌리기
    url='http://comic.naver.com/webtoon/detail.nhn?titleId=%s&no=%s&weekday=%s'% (link_value["value"][j],9999,link_value["weekday"][j])
    req=requests.get(url)
    html=req.text
    soup=BeautifulSoup(html,"html.parser")
        
    no=soup.select('#comicSequence > span')
    #print(no[0].get('value'))
    
    # 돌려야하는 회차 개수 반환
    try:
        number=1+int(no[0].text)
    except ValueError as e:
        number=1+int(no[1].text)
    except AttributeError as e:
        number=1+int(no[1].text)
    except IndexError as e:
        print(j,url)
        error.append(url)       # html형식이 달라서 오류가 뜨는 웹툰페이지는 웹툰value 고유번호 저장 후 스킵(continue)
        continue
    else:
        print("error occured in number")      
        
    print("--------------------------------------")
    print(number)
    
    print(link_value["value"][j])   # i는 웹툰의 고유번호
    for i in range(1,number):
        url='http://comic.naver.com/webtoon/detail.nhn?titleId=%s&no=%s&weekday=%s'% (link_value["value"][j],i,link_value["weekday"][j])
        print(url)
        req=requests.get(url)
        html=req.text

        
        soup=BeautifulSoup(html,'html.parser')
        
        #CSS selector를 사용하여 가져오기 (단, tag와 값이 같이 반환됨 ex)<h3>1141. 코디<h3>)
        titles=soup.select('div.view > h3')
        ratings=soup.select('div.rating_type4 > span > strong')
        rating_clicks=soup.select('#topTotalStarPoint > span.pointTotalPerson > em')
        bigtitle=soup.select('div.remote_cont > a')
        
        # 댓글수 안 불러와짐


        #확인용 프린트
        print(titles,ratings,rating_clicks,comment)
    
        
        #titles[0].text.split('. ') #회차 제목 구분
        #a=titles[0].text.split('. ')[0] #회차
        
        # 파싱 : 불러온 제목,별점, 별점참여수에서 태그 없애기
        a=titles[0].text
        b=ratings[0].text
        c=rating_clicks[0].text
        d=bigtitle[0].text.replace("?","")                  # 파일저장시 오류가 나기때문에 물음표제거
        d=bigtitle[0].text.replace("/","")
        
        print(a,b,c,d)
        # DF에 row로 추가
        result_df.loc[i]=[a,b,c]    
        #path_or_buf=r"C:\Users\HOSHIN CHO\Desktop\result_df",
    # path=r"C:\Users\HOSHIN CHO\Desktop\result_df\%s.csv"%d
    # result_df.to_csv(path)
    # print(d,"exported")